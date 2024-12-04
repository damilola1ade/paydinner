import React from "react";
import Image from "next/image";

export const GuestReviews = () => {
  return (
    <div className="bg-white mt-8 w-full p-6 rounded-xl">
      <div className="flex flex-col gap-6">
        <h1 className="text-md lg:text-lg font-bold">Guest reviews</h1>
        <div className="bg-peach p-3 flex flex-col md:flex-row gap-4 justify-between items-center rounded-xl">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">John D.</h3>
            <p className="text-xs md:text-sm max-w-[540px]">
              An unforgettable experience filled with delightful cuisine that
              tantalizes the taste buds and leaves a lasting impression! Each
              dish was a masterpiece, showcasing vibrant flavors and exquisite
              presentation, making every bite a true celebration of culinary
              artistry..
            </p>
          </div>
          <Image src="/review.webp" width={240} height={240} alt="review" className="w-[300px] h-[80px]" />
        </div>
      </div>
    </div>
  );
};
