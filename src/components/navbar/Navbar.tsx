import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-100 fixed top-0 left-0 w-full z-50 px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <h6 className="mr-4 cursor-pointer py-1.5 font-bold">Hr-Manual</h6>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center justify-between gap-3">
              <EnvelopeIcon className="h-4" /> Sign In / Up
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Sign In</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Sign Up</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
