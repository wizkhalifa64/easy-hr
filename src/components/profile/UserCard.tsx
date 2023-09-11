"use client";
import { GET_SINGLE_USER } from "@/utils/query";
import { useQuery } from "@apollo/client";
import { useUserDisplayName, useUserId } from "@nhost/nextjs";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import Image from "next/image";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

const UserCard = () => {
  const displayName = useUserDisplayName();
  return (
    <Card className="flex p-3 items-center gap-2">
      <Image
        src={"https://picsum.photos/200"}
        alt="profile"
        height={150}
        width={150}
        className="rounded-lg"
      />
      <div className={"h-full w-full"}>
        <CardHeader>
          <h1 className={"text-xl font-semibold"}>{displayName}</h1>
          <div
            className={
              "text-sm text-muted-foreground pt-1 flex gap-3 items-center"
            }
          >
            <span className="flex gap-3 w-1/3">
              <MapPinIcon className="h-4" />
              Kolkata, West Bengal
            </span>
            <span className="flex gap-3 w-1/3">
              <EnvelopeIcon className="h-4" />
              ujjwal@gmail.com
            </span>
            <span className="flex gap-3 w-1/3">
              <DevicePhoneMobileIcon className="h-4" />
              9647012776
            </span>
          </div>
        </CardHeader>
        <div className="px-6">
          <hr />
        </div>
        <CardContent className="flex items-center justify-between pt-3 w-full">
          <div className="flex">
            <div className="text-gray-300 w-56">
              <small className="font-size-sm tracking-wider">DESIGNATION</small>
              <h6 className="text-sm">Junior Software Engineer</h6>
            </div>
            <div className="text-gray-300 w-56">
              <small className="font-size-sm tracking-wider">DEPERTMENT</small>
              <h6 className="text-sm">Development</h6>
            </div>
            <div className="text-gray-300 w-56">
              <small className="font-size-sm tracking-wider">
                REPORTING TO
              </small>
              <h6 className="text-sm">Chandan Saha</h6>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={
                "bg-blue-900 px-4 hover:bg-blue-700 py-2 text-sm font-bold rounded-md text-blue-300 flex gap-1 items-center"
              }
            >
              Quick Actions <ChevronDoubleDownIcon className="h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
      </div>
    </Card>
  );
};

export default UserCard;
