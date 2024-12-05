"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { CiShare2 } from "react-icons/ci";
import { IoChatboxOutline } from "react-icons/io5";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { IoCompassOutline } from "react-icons/io5";
import { FaTags } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";

export default function Sidebar() {
  const siderBarLinks = [
    {
      id: 1,
      name: "Dashboard",
      path: "/client",
      icon: LuLayoutDashboard,
    },
    {
      id: 2,
      name: "Explore restaurants",
      path: "/client/explore-restaurants",
      icon: IoCompassOutline,
    },
    {
      id: 3,
      name: "My reservations",
      path: "/client/my-reservations",
      icon: FaTags,
    },
    {
      id: 4,
      name: "My earnings",
      path: "/client/my-earnings",
      icon: BsCurrencyDollar,
    },
    {
      id: 5,
      name: "Invite friends",
      path: "/client/invite-friends",
      icon: CiShare2,
    },
    {
      id: 6,
      name: "Messages",
      path: "/client/messages",
      icon: IoChatboxOutline,
    },
  ];

  const path = usePathname();

  const router = useRouter();

  function handleLogout() {
    router.replace("/");
  }

  return (
    <div className="w-64 h-screen border-[0.2px] border-r-ash p-5">
      <div>
        {siderBarLinks.map((item) => (
          <div className="mb-6" key={item.id}>
            <Link
              href={item.path}
              className={`flex flex-row gap-3 items-center p-1 rounded-md hover:bg-slate-200 hover:text-black ${
                path === item.path && "text-primary font-bold"
              }`}
            >
              <item.icon size={20} />
              <h2
                className={`text-sm tracking-tight ${
                  path === item.path && "text-primary font-bold"
                }`}
              >
                {item.name}
              </h2>
            </Link>
          </div>
        ))}
      </div>

      <div
        className="my-48 pl-4 flex gap-2 items-center text-sm cursor-pointer text-[red]"
        onClick={handleLogout}
      >
        <LuLogOut />
        <p>Log out</p>
      </div>
    </div>
  );
}
