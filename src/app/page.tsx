import Image from "next/image";
import BannerImg from "../../public/data-collection.png";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import Attendance from "@/components/home/Attendance";
import OutToday from "@/components/home/OutToday";
export default function Home() {
  return (
    <div className="container pt-20">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-1">
          <h1 className="flex my-3 col-span-2 items-center gap-1">
            Quick Access <Cog8ToothIcon className="h-5" />
          </h1>
          <Attendance />
          <OutToday />
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
