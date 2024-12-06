"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import { FaTags } from "react-icons/fa";
import {
  IoCompassOutline,
  IoChatboxOutline,
  IoCloseSharp,
  IoMenu,
} from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";

const mobileNavbarLinks = [
  {
    id: 1,
    name: "Dashboard",
    path: "/client/dashboard",
    icon: LuLayoutDashboard,
  },
  {
    id: 2,
    name: "Explore restaurants",
    path: "/dashboard/generate-video",
    icon: IoCompassOutline,
  },
  {
    id: 3,
    name: "My reservations",
    path: "/dashboard/upgrade-account",
    icon: FaTags,
  },
  {
    id: 4,
    name: "My earnings",
    path: "/dashboard/upgrade-account",
    icon: BsCurrencyDollar,
  },
  {
    id: 5,
    name: "Invite friends",
    path: "/dashboard/upgrade-account",
    icon: CiShare2,
  },
  {
    id: 6,
    name: "Messages",
    path: "/dashboard/upgrade-account",
    icon: IoChatboxOutline,
  },
];

export const ClientNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed py-2 px-2 px:8 w-full flex justify-between items-center z-[1000] bg-white border-b border-ash">
      <div className="lg:hidden">
        {mobileMenuOpen ? (
          <IoCloseSharp
            size={30}
            className="lg:hidden cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <IoMenu
            size={30}
            className="lg:hidden cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
      <div className="my-auto flex gap-3 items-center">
        <Image
          src="/logo.webp"
          alt="logo"
          height={500}
          width={500}
          className="w-10 h-10"
        />
        <p className="hidden lg:flex text-xl font-bold tracking-tight">
          PayDinner
        </p>
      </div>
      <Link href="/client/profile">
        <Avatar>
          <AvatarImage src="/photo.jpg" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
};
