import React from "react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const Sidebar = () => {
  const menuItems = [
    {
      href: "/",
      title: "Homepage",
      icon: <HomeIcon className="h-4" />,
    },
    {
      href: "/about",
      title: "About",
      icon: <HomeIcon className="h-4" />,
    },
    {
      href: "/contact",
      title: "Contact",
      icon: <HomeIcon className="h-4" />,
    },
  ];
  return (
    <nav>
      <ul>
        {menuItems.map(({ href, title, icon }) => (
          <li className="m-2" key={title}>
            <Link href={href} className={`flex p-3 items-center gap-4`}>
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
