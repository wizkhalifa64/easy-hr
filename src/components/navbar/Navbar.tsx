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
import {
  useSignOut,
  useUserAvatarUrl,
  useUserDisplayName,
} from "@nhost/nextjs";

const Navbar = () => {
  const user = useUserDisplayName();
  const avatar = useUserAvatarUrl();
  const { signOut } = useSignOut();
  return (
    <nav className="bg-slate-900 fixed top-0 border-b left-0 w-full z-50 px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <h6 className="mr-4 cursor-pointer py-1.5 font-bold">Hr-Manual</h6>
        <div className="flex items-center gap-2">
          <h3>{user}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex w-8 h-8 items-center justify-center rounded-full">
                {avatar && (
                  <Image alt="profile" width={30} height={30} src={avatar} />
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
