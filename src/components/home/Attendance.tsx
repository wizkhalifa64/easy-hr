"use client";
import React from "react";
import { Button } from "../ui/button";
import { useMutation } from "@apollo/client";
import { ADD_ATTENDANCE } from "@/lib/query";
const Attendance = () => {
  const [addAttendance, { loading }] = useMutation(ADD_ATTENDANCE);
  const updateUserProfile = async () => {
    try {
      await addAttendance({
        variables: {
          userId: "Susanta123",
          name: "Susanta Das",
          date: "2023-08-26",
          intime: "09:45",
          outtime: "19:10",
        },
      });
      // toast.success('Updated successfully', { id: 'updateProfile' })
    } catch (error) {
      // toast.error('Unable to update profile', { id: 'updateProfile' })
    }
  };
  return (
    <div className="p-3">
      <h1 className="text-sm flex justify-between font-semibold ">
        Attendance
      </h1>
      <div className="grid grid-cols-2 gap-1">
        <div>
          <h1 className="text-3xl  font-semibold text-blue-500">6.8</h1>
          <small>AVG HOURS/DAY</small>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-blue-500">60 %</h1>
          <small>ONTIME ARRIVAL</small>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <strong>1:08 PM</strong>
        </div>
        <Button
          className="text-xs font-semibold text-blue-400"
          variant={"ghost"}
          onClick={updateUserProfile}
        >
          Clock-In
        </Button>
      </div>
    </div>
  );
};

export default Attendance;
