"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_ATTENDANCE,
  GET_CURRENT_DATE_IN_TIME,
  UPDATE_OUT_TIME,
} from "@/utils/query";
import { useUserId } from "@nhost/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { AlertModal } from "../Alert";
import { getHM, getMinutesDiff, getMonday } from "@/utils";
import { produce } from "immer";
import AttendanceTimer from "../extra/AttendanceTimer";
const Attendance = () => {
  const id = useUserId();
  const d = new Date();
  const { loading, data, error, refetch } = useQuery(GET_CURRENT_DATE_IN_TIME, {
    variables: {
      date1: `${getMonday(d).toLocaleDateString("en-CA")}`,
      date2: `${d.toLocaleDateString("en-CA")}`,
      userId: id,
    },
  });
  const [clockIn, setClockIn] = useState(true);
  const [open, setOpen] = useState(false);
  const [
    addAttendance,
    { loading: addAttLoading, data: addAttData, error: addAttErr },
  ] = useMutation(ADD_ATTENDANCE);
  const [
    updateAttendence,
    { loading: upAttLoading, data: upAttData, error: upAttErr },
  ] = useMutation(UPDATE_OUT_TIME);
  const updateOut_time = async () => {
    try {
      const outTime = d.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      });
      const inTime = data.attendance[0]?.in_time;
      if (!inTime) {
        throw "No Clock-In";
      }
      const minDiff = getMinutesDiff(`${inTime}`, `${outTime}`);
      await updateAttendence({
        variables: {
          date: `${d.toLocaleDateString("en-CA")}`,
          outTime: `${outTime}`,
          userId: id,
          avgWorkTime: minDiff,
        },
      });
      setClockIn(true);
      refetch();
    } catch (error) {}
  };
  const updateUserProfile = async () => {
    if (clockIn) {
      try {
        await addAttendance({
          variables: {
            date: `${d.toLocaleDateString("en-CA")}`,
            inTime: `${d.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            })}`,
            userId: id,
          },
        });
        setClockIn(false);
        refetch();
        // toast.success('Updated successfully', { id: 'updateProfile' })
      } catch (error) {
        // toast.error('Unable to update profile', { id: 'updateProfile' })
      }
    } else {
      setOpen(true);
    }
  };
  const previousDay = data?.attendance[0]?.date
    ? new Date(`${data.attendance[0]?.date}`)
    : 0;
  const getQuery = () => {
    // if (data.attendance[0]?.in_time && data.attendance[0]?.out_time === null) {
    //   setClockIn(false);
    // }
    // if (data.attendance[0]?.out_time || (data.attendance[0]?.out_time && data.attendance[0]?.in_time )) {
    //   setClockIn(true);
    // }
    switch (true) {
      case data.attendance[0]?.in_time === null:
        setClockIn(true);
        break;
      case data.attendance[0]?.out_time:
        setClockIn(true);
      case data.attendance[0]?.in_time && data.attendance[0]?.out_time === null:
        setClockIn(false);
        break;
      case d > previousDay:
        setClockIn(true);
        break;
      default:
        setClockIn(true);
        break;
    }
  };
  useEffect(() => {
    !loading && data && getQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  const getAvgHour = (arr: any[]) => {
    const avgMin: any = arr.reduce((acc, c) => acc + c.avg_work_min, 0);
    const length = arr.length === 0 ? 1 : arr.length;
    const avgH = (avgMin / (60 * length)).toFixed();
    return avgH;
  };
  const calculateOnTime = (arr: any[]) => {
    const data: any = arr.reduce((acc, c) => {
      if (new Date(`01/01/2010 10:00`) > new Date(`01/01/2010 ${c.in_time}`)) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    const length = arr.length === 0 ? 1 : arr.length;
    const percent = (100 / length) * data;
    return percent;
  };
  const GetWorkingHours = ({ time }: { time: number }) => {
    const diff = getHM(time);
    return (
      <>
        <h3 className={"font-semibold text-blue-400"}>
          {diff.hour}
          <span className={"text-xs"}>HH </span>
          {diff.minute}
          <span className={"text-xs"}>MM</span>
        </h3>
      </>
    );
  };
  return (
    <>
      <AlertModal
        open={open}
        setOpen={setOpen}
        action={updateOut_time}
        header="Are you sure?"
        desc="This action cannot be undone. Click continue to clock out."
      />
      <div className="p-4 home-card-bg rounded-lg border">
        <h3 className="text-sm font-bold">Attendance</h3>

        <div className="grid py-2 grid-cols-2 gap-1">
          <div>
            {data?.attendance && (
              <h1 className="text-2xl  font-semibold text-blue-200">
                {getAvgHour(data.attendance)}
              </h1>
            )}
            <CardDescription className="font-size-sm">
              AVG HOURS/DAY
            </CardDescription>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-blue-200">
              {data?.attendance ? calculateOnTime(data.attendance) : "00"}%
            </h1>
            <CardDescription className="font-size-sm">
              ONTIME ARRIVAL
            </CardDescription>
          </div>
        </div>
        <div className="flex items-center border-t justify-between">
          <>
            {d > previousDay ? (
              <h3>00H 00M</h3>
            ) : data?.attendance[0]?.avg_work_min ? (
              <GetWorkingHours time={data?.attendance[0]?.avg_work_min} />
            ) : (
              <>
                {data?.attendance[0]?.in_time ? (
                  <AttendanceTimer inTime={data?.attendance[0]?.in_time} />
                ) : (
                  <h3>00H 00M</h3>
                )}
              </>
            )}
          </>

          <Button
            className="text-xs"
            onClick={updateUserProfile}
            variant={"ghost"}
            disabled={
              d > previousDay
                ? false
                : clockIn && Boolean(data?.attendance[0]?.out_time)
            }
          >
            {clockIn ? "Clock-In" : "Clock-Out"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Attendance;
