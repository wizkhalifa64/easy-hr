import React from "react";
import { Button } from "@/components/ui/button";
const OutToday = () => {
  return (
    <div className="shadow-sm">
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
        >
          Clock-In
        </Button>
      </div>
    </div>
  );
};

export default OutToday;
