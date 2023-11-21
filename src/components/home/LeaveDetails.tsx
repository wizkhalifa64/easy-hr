"use client";
import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);
  return (
    <>
      <SelectLeaveDateDialog open={open} setOpen={setOpen} />
      <div className="p-4 home-card-bg">
        <h3 className="text-sm font-bold border-l-4 border-indigo-500 pl-1">
          Leave Balance
        </h3>

        <div className="grid py-2 grid-cols-2 gap-1">
          <div>
            <h1 className="text-2xl  font-semibold text-blue-200">6.8</h1>
            <CardDescription className="font-size-sm">
              PAID LEAVES
            </CardDescription>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-blue-200">60%</h1>
            <CardDescription className="font-size-sm">
              SICK LEAVES
            </CardDescription>
          </div>
        </div>
        <div className="flex items-center border-t justify-end">
          <Button
            className="text-xs text-purple-100"
            variant={"ghost"}
            onClick={() => setOpen(true)}
          >
            Apply Leave
          </Button>
        </div>
      </div>
    </>
  );
};

export default LeaveDetails;
