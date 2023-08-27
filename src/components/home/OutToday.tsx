import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
const OutToday = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Attendance</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-1">
        <div>
          <h1 className="text-3xl  font-semibold text-blue-500">6.8</h1>
          <small>AVG HOURS/DAY</small>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-blue-500">60 %</h1>
          <small>ONTIME ARRIVAL</small>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div>
          <strong>1:08 PM</strong>
        </div>
        <Button
          className="text-xs font-semibold text-blue-400"
          variant={"ghost"}
          // onClick={updateUserProfile}
        >
          Clock-In
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OutToday;
