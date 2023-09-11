import Attendance from "@/components/home/Attendance";
import CreatePost from "@/components/home/CreatePost";
import ImageCarousel from "@/components/home/ImageCarousel";
import LeaveDetails from "@/components/home/LeaveDetails";
import OutToday from "@/components/home/OutToday";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { Cog8ToothIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="container h-full">
      <div className="flex gap-4 w-full h-full">
        <div className="w-1/2">
          <h1 className="flex w-full my-3 items-center gap-1">
            Quick Access <Cog8ToothIcon className="h-5" />
          </h1>
          <div className={"grid grid-cols-2 gap-2"}>
            <Attendance />

            <OutToday />

            <LeaveDetails />
          </div>
        </div>
        <div className={"w-1/2"}>
          <div className="flex items-center justify-between">
            <h1 className="flex my-3 items-center gap-1">
              Company Updates <Cog8ToothIcon className="h-5" />
            </h1>
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-blue-950 font-semibold flex gap-1 px-4 py-2 text-sm rounded-lg items-center text-blue-200">
                Create <PlusIcon className="h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Notification</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Event</DropdownMenuItem>
                <DropdownMenuItem>Social</DropdownMenuItem>
                <DropdownMenuItem>Celibration</DropdownMenuItem>
                <DropdownMenuItem>Congradulation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <CreatePost />
          <div className="flex flex-col gap-3">
            <Card>
              <CardHeader>Happy Independance Day</CardHeader>
              <CardContent>
                <ImageCarousel images={["https://picsum.photos/300/200"]} />
              </CardContent>
              <CardFooter>
                <Button variant={"ghost"}>
                  <HandThumbUpIcon className="h-5" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader></CardHeader>
              <CardContent>
                <ImageCarousel images={["https://picsum.photos/300/200"]} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
