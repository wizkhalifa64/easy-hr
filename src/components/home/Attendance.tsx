"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_ATTENDANCE,
  GET_CURRENT_DATE_IN_TIME,
  UPDATE_OUT_TIME,
} from "@/lib/query";
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
  const getQuery = () => {
    if (data.attendance[0]?.in_time && data.attendance[0]?.out_time === null) {
      setClockIn(false);
    }
    if (data.attendance[0]?.out_time) {
      setClockIn(true);
    }
  };
  useEffect(() => {
    !loading && data && getQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  const getAvgHour = (arr: any[]) => {
    const avgMin: any = arr.reduce((acc, c) => acc + c.avg_work_min, 0);
    const avgH = getHM(avgMin);
    return avgH;
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
      <Card className="p-4">
        <CardTitle className="text-sm">Attendance</CardTitle>

        <div className="grid py-2 grid-cols-2 gap-1">
          <div>
            {data?.attendance && (
              <h1 className="text-2xl  font-semibold text-blue-200">
                {getAvgHour(data.attendance).hour
                  ? getAvgHour(data.attendance).hour
                  : 0}
                {"."}
                {getAvgHour(data.attendance).minute}
              </h1>
            )}
            <CardDescription className="font-size-sm">
              AVG HOURS/DAY
            </CardDescription>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-blue-200">60 %</h1>
            <CardDescription className="font-size-sm">
              ONTIME ARRIVAL
            </CardDescription>
          </div>
        </div>
        <div className="flex items-center border-t justify-between">
          <>
            {data?.attendance[0]?.avg_work_min ? (
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
            disabled={clockIn && Boolean(data?.attendance[0]?.out_time)}
          >
            {clockIn ? "Clock-In" : "Clock-Out"}
          </Button>
        </div>
      </Card>
    </>
  );
};

export default Attendance;
