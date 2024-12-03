import React from "react";
import Image from "next/image";
import { FaDollarSign } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export const ExclusiveOffer = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="relative w-full lg:w-96 h-[140px] overflow-hidden">
          <Image
            src="/restaurant.png"
            alt="restaurant"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex justify-between items-center bg-[#f5f5f5] pl-4">
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-sm mt-2 lg:mt-0">
              Saffron Oasis Special
            </h4>
            <p className="text-xs lg:text-sm text-slate-700">
              A delightful three-course meal featuring a succulent steak cooked
              to perfection, accompanied by creamy mashed potatoes infused with
              garlic and herbs. The meal begins with a fresh garden salad topped
              with a zesty vinaigrette, followed by the main course of tender
              steak served with a rich red wine reduction. To finish, enjoy a
              decadent chocolate mousse that melts in your mouth.
            </p>
            <p className="text-primary flex items-center mt-2">
              <FaDollarSign color="black" /> 11.99
            </p>
          </div>
        </div>
      </div>
      <Button className="w-full">Book Now and Earn Cash Back</Button>
    </div>
  );
};
