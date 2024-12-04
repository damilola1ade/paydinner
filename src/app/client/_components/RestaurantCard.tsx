"use client";

import Image from "next/image";
import React from "react";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoIosStar } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { useRouter } from "next/navigation";

export const RestaurantCard = () => {
  const id = 1;

  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/client/dashboard/restaurants/id`);
  };

  return (
    <div className="lg:w-96 rounded-lg cursor-pointer" onClick={handleNavigate}>
      <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <Image
          src="/restaurant.png"
          alt="restaurant"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-lg">Saffron Oasis</h4>
            <IoMdHeartEmpty className="cursor-pointer" size={24} />
          </div>
          <div className="text-xs lg:text-sm flex justify-between lg:w-96 items-center">
            <div className="flex gap-1 items-center">
              <TbToolsKitchen2 color="gray" /> From $50
              <div className="h-[15px] w-[1px] bg-slate-400" />
              <p>20-25 minutes from your location</p>
            </div>
            <div className="flex gap-1 items-center">
              <IoIosStar color="gold" /> 4.8 (53)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
