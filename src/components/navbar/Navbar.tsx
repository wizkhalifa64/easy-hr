import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_USER } from "@/lib/query";
import { useSignOut, useUserId } from "@nhost/nextjs";

const Navbar = () => {
  const id = useUserId();
  const { data } = useQuery(GET_SINGLE_USER, { variables: { userId: id } });
  const { signOut } = useSignOut();
  return (
    <nav className="bg-slate-900 fixed top-0 border-b left-0 w-full z-50 px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <h6 className="mr-4 cursor-pointer py-1.5 font-bold">Hr-Manual</h6>
        <div className="flex items-center gap-2">
          <h3>
            {data?.user.metadata.firstName + " " + data?.user.metadata.lastName}
          </h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex w-8 h-8 items-center justify-center rounded-full">
                {data?.user && (
                  <Image
                    alt="profile"
                    width={30}
                    height={30}
                    src={data?.user.avatarUrl}
                  />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Profile</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>
                Log Out
                <Button onClick={signOut} variant={"ghost"}>
                  <ArrowRightOnRectangleIcon height={15} />
                </Button>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="flex items-center gap-2">
                Theme <MoonIcon height={15} />
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
