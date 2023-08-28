import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
const OutToday = () => {
  return (
    <div className="p-4">
      <h3 className="text-sm font-semibold">Out Today</h3>

      <div className="py-2 flex items-center gap-2">
        <Image
          alt="name"
          height={60}
          width={60}
          className="rounded-full"
          src={"https://picsum.photos/200"}
        />
        <Image
          alt="name"
          height={60}
          width={60}
          className="rounded-full"
          src={"https://picsum.photos/200"}
        />
      </div>
      <div className="border-t"></div>
    </div>
  );
};

export default OutToday;
