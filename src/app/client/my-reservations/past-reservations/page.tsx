import Image from "next/image";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { format } from "date-fns";
import { FcCalendar } from "react-icons/fc";
import { ClaimCashback, EditReservation } from "../../_components";
import { Button } from "@/components/ui/button";

export default function PastReservations() {
  return (
    <div className="bg-white w-full p-2 lg:p-6 rounded-xl">
      <div className="grid grid-cols-1 gap-6 lg:gap-4">
        {data.map(({ id, restaurantName, dateTime }, index) => (
          <React.Fragment key={id}>
            <ReservationCard
              restaurantName={restaurantName}
              dateTime={dateTime}
            />
            {/* Add a divider unless it's the last item */}
            {index < data.length - 1 && (
              <hr className="border-t border-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

const ReservationCard = ({
  restaurantName,
  dateTime,
}: {
  restaurantName: string;
  dateTime: Date;
}) => {
  return (
    <div className="max-w-full flex flex-col md:flex-row justify-between lg:items-center gap-6 lg:gap-0">
      <div className="flex gap-2">
        <div className="relative w-24 h-16 rounded-lg overflow-hidden">
          <Image
            src="/restaurant.png"
            alt="restaurant"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col mt-2 gap-2">
          <h5 className="font-semibold text-sm flex items-center gap-1">
            <IoLocation color="red" /> {restaurantName}
          </h5>
          <p className="text-sm text-gray flex items-center gap-1">
            <FcCalendar /> {format(dateTime, "PPp")}
          </p>
        </div>
      </div>
      <div className="flex">
        <ClaimCashback />
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    restaurantName: "The Gourmet Kitchen",
    dateTime: new Date(2024, 1, 14, 18, 30),
  },
  {
    id: 2,
    restaurantName: "Pasta Paradise",
    dateTime: new Date(2024, 1, 15, 12, 0),
  },
  {
    id: 3,
    restaurantName: "Sushi World",
    dateTime: new Date(2024, 1, 16, 19, 45),
  },
  {
    id: 4,
    restaurantName: "BBQ Haven",
    dateTime: new Date(2024, 1, 17, 20, 15),
  },
];
