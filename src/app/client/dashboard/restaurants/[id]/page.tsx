import Image from "next/image";
import React from "react";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoBackButton } from "@/components";
import { Button } from "@/components/ui/button";
import { ExclusiveOffer } from "@/app/client/_components";

export default function ViewRestaurantById() {
  return (
    <>
      <GoBackButton text="Saffron Oasis" />
      <div className="relative mt-10 w-full z-2">
        {/*top*/}
        <div className="relative w-full h-60 overflow-hidden z-1">
          <Image
            src="/restaurant.png"
            alt="restaurant"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="bg-white justify-between items-center">
          <div className="pt-4 px-1 flex flex-col lg:flex-row w-full justify-between lg:items-center gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row-reverse md:flex-row gap-2 justify-between md:justify-normal">
                <div className="bg-[#d9d9d9] flex h-10 w-10 rounded-full justify-center items-center">
                  <IoMdHeartEmpty className="cursor-pointer" size={18} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg">Saffron Oasis</h4>
                  <div className="text-xs lg:text-sm flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                      <div className="flex gap-1 items-center">
                        <IoIosStar color="gold" /> 4.8 (53)
                      </div>
                      <div className="h-[15px] w-[1px] bg-slate-400" />
                      <p>20-25 minutes from your location</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col">
                <h6 className="text-sm font-semibold">Opening hours</h6>
                <h6 className="text-sm">9:00am - 6:00pm</h6>
              </div>

              <div className="flex flex-col">
                <h6 className="text-sm font-semibold">Saturdays and Sundays</h6>
                <h6 className="text-sm">9:00pm - 10:00pm</h6>
              </div>
            </div>

            <Button className="lg:w-64">Book reservation</Button>
          </div>

          <div className="mt-4 w-full h-[1px] bg-ash" />

          <div className="mt-4 p-2 flex flex-col lg:flex-row gap-8 lg:gap-24">
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex gap-1 items-center font-semibold">
                <TbToolsKitchen2 color="gray" /> Cuisine type
              </div>
              <p>Italian Fine Dining</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <div className="flex gap-1 items-center font-semibold">
                <IoLocation color="red" /> Address
              </div>
              <p>123 Flavor Street, Tasty Town, CA 90210.</p>
              <p className="text-blue-400 cursor-pointer">[View on Map]</p>
            </div>
          </div>
        </div>

        {/*Exclusive offer*/}
        <div className="bg-white mt-8 w-full p-6 rounded-xl">
          <h1 className="text-primary text-md lg:text-lg font-bold">Exclusive offer</h1>
          <h3 className="mt-2 font-normal mb-4">
            Special 3-Course Menu for PayDinner Members!
          </h3>
          <ExclusiveOffer />
        </div>
      </div>
    </>
  );
}
