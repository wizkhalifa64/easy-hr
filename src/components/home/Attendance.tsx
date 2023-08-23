"use client";
import React from "react";
import { Button } from "../ui/button";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_ATTENDANCE, MY_QUERY_QUERY } from "@/lib/query";
import { useUserId } from "@nhost/nextjs";

const Attendance = () => {
  const id = useUserId();

  const { loading, error, data } = useQuery(MY_QUERY_QUERY, {
    variables: { id },
    skip: !id,
  });
  const updateUserProfile = async () => {
    try {
      console.log(data);
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
