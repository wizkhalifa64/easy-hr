import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "../ui/card";
import SelectLeaveDateDialog from "./SelectLeaveDateDialog";

const LeaveDetails = () => {
  return (
    <>
      <SelectLeaveDateDialog />
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Leave Balance</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-2 gap-1">
          <div>
            <h1 className="text-3xl  font-semibold text-blue-500">6.8</h1>
            <CardDescription className="font-size-sm">
              PAID LEAVES
            </CardDescription>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-blue-500">60 %</h1>
            <CardDescription className="font-size-sm">
              SICK LEAVES
            </CardDescription>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div>
            <strong>1:08 PM</strong>
          </div>
          <Button
            className="text-xs font-semibold bg-purple-100 text-purple-800"
            variant={"ghost"}
            // onClick={updateUserProfile}
          >
            Apply Leave
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LeaveDetails;
