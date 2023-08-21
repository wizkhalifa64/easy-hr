import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const OutToday = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-sm flex justify-between font-semibold ">
          Attendance
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-1">
        <div>
          <h1 className="text-3xl  font-semibold text-blue-500">6.8</h1>
          <CardDescription className="text-xs">AVG HOURS/DAY</CardDescription>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-blue-500">60 %</h1>
          <CardDescription className="text-xs">ONTIME ARRIVAL</CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div>
          <strong>1:08 PM</strong>
        </div>
        <Button
          className="text-xs font-semibold text-blue-400"
          variant={"ghost"}
        >
          Clock-In
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OutToday;
