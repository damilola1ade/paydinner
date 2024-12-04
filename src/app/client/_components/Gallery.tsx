"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const images = [
  { id: 1, src: "/gallery-1.webp" },
  { id: 2, src: "/gallery-2.webp" },
  { id: 3, src: "/gallery-3.webp" },
  { id: 4, src: "/gallery-4.webp" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState<any>(null);

  const openImage = (index: any) => {
    setSelectedImage(images[index].src);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const showPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex].src);
    setCurrentIndex(newIndex);
  };

  const showNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex].src);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-white mt-8 w-full p-6 rounded-xl">
      <h1 className="text-md lg:text-lg font-bold">Gallery</h1>
      {/* Gallery Grid */}
      <div className="mt-5 grid grid-cols-3 md:grid-cols-4 gap-4">
        {images.map(({ id, src }, index) => (
          <Image
            key={id}
            src={src}
            width={600}
            height={600}
            alt="gallery-images"
            className="rounded-lg cursor-pointer w-24 h-20 md:w-60 md:h-32 lg:w-72 lg:h-44"
            onClick={() => openImage(index)}
          />
        ))}
      </div>

      {/* Enlarged Image Modal */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full w- h-full bg-black bg-opacity-80 flex items-center justify-center z-[2000]"
          onClick={closeImage}
        >
          <div className="relative">
            {/* Enlarged Image */}
            <Image
              src={selectedImage}
              width={800}
              height={800}
              alt="enlarged"
              className="rounded-xl w-[400px] h-[350px] lg:w-[720px] lg:h-[540px]"
            />
            {/* Close Button */}
            <IoCloseSharp
              size={30}
              className="absolute top-4 right-6 bg-white text-black rounded-full cursor-pointer hover:bg-slate-200"
              onClick={closeImage}
            />
            {/* Previous Button */}
            <IoIosArrowBack
              size={60}
              className="p-1 absolute top-[325px] lg:top-1/2 left-28 lg:-left-8 bg-white text-black rounded-full cursor-pointer hover:bg-slate-200"
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
            />
            {/* Next Button */}
            <IoIosArrowForward
              size={60}
              className="p-1 absolute top-[325px] lg:top-1/2 right-28 lg:-right-8 bg-white text-black rounded-full cursor-pointer hover:bg-slate-200"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
