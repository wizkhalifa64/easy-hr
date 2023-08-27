import React from "react";
import {
  UserCircleIcon,
  HomeIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  CheckCircleIcon,
  ClipboardIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Sidebar = () => {
  const menuItems = [
    { id: "1", href: "/", title: "Home", icon: <HomeIcon className="h-5" /> },
    {
      id: "2",
      href: "/about",
      title: "Me",
      icon: <UserCircleIcon className="h-5" />,
    },
    {
      id: "3",
      href: "/contact",
      title: "My Team",
      icon: <UserGroupIcon className="h-5" />,
    },
    {
      id: "4",
      href: "/contact",
      title: "Org",
      icon: <BuildingLibraryIcon className="h-5" />,
    },
    {
      id: "5",
      href: "/contact",
      title: "Attendance",
      icon: <ClipboardIcon className="h-5" />,
    },
    {
      id: "6",
      href: "/contact",
      title: "Leave",
      icon: <CheckCircleIcon className="h-5" />,
    },
    {
      id: "7",
      href: "/contact",
      title: "Payroll",
      icon: <CurrencyRupeeIcon className="h-5" />,
    },
  ];
  return (
    <nav className="h-full  pt-16 pb-4">
      <ul className="flex flex-col items-center justify-between h-full">
        {menuItems.map(({ id, href, title, icon }) => (
          <li key={id}>
            <Link
              href={href}
              className={`flex font-size-sm hover:bg-slate-700 font-semibold items-center flex-col gap-1`}
            >
              {icon}
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    // <div className="h-full flex flex-col w-full p-4 ">
    //   <div className="mb-2 p-4">
    //     <h5 color="blue-gray">Sidebar</h5>
    //   </div>
    //   <ul className="flex h-full flex-col gap-6">
    //     <li>
    //       <Link href={"/"} className="flex items-center gap-4">
    //         <PresentationChartBarIcon className="h-5 w-5" />
    //         Dashboard
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href={"/"} className="flex items-center gap-4">
    //         <ShoppingBagIcon className="h-5 w-5" />
    //         E-Commerce
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href={"/"} className="flex items-center gap-4">
    //         <InboxIcon className="h-5 w-5" />
    //         Inbox
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href={"/"} className="flex items-center gap-4">
    //         <UserCircleIcon className="h-5 w-5" />
    //         Profile
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href={"/"} className="flex items-center gap-4">
    //         <Cog6ToothIcon className="h-5 w-5" />
    //         Settings
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href={"/"} className="flex items-center gap-4">
    //         <PowerIcon className="h-5 w-5" />
    //         Log Out
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Sidebar;
