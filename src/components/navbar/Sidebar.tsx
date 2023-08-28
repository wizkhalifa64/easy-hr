"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserCircleIcon,
  HomeIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  CheckCircleIcon,
  ClipboardIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/outline";
const Sidebar = () => {
  const pathName = usePathname();
  const menuItems = [
    { id: "1", href: "/", title: "Home", icon: <HomeIcon className="h-5" /> },
    {
      id: "2",
      href: "/profile",
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
    <nav className="h-full  pt-5 overflow-y-auto ">
      <ul className="h-full p-0">
        {menuItems.map(({ id, href, title, icon }) => (
          <li
            className={`m-0 py-4 ${
              pathName === href ? "bg-blue-800" : ""
            } hover:bg-slate-700`}
            key={id}
          >
            <Link
              href={href}
              className={`flex font-size-sm font-semibold items-center flex-col gap-1`}
            >
              {icon}
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
