import Attendance from "@/components/home/Attendance";
import LeaveDetails from "@/components/home/LeaveDetails";
import OutToday from "@/components/home/OutToday";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-2">
          <h1 className="flex my-3 col-span-2 items-center gap-1">
            Quick Access <Cog8ToothIcon className="h-5" />
          </h1>
          <Attendance />
          <OutToday />
          <LeaveDetails />
        </div>
        <div>
          <h1 className="flex my-3 items-center gap-1">
            Company Updates <Cog8ToothIcon className="h-5" />
          </h1>
        </div>
      </div>
    </div>
  );
}
