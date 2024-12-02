/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import ProductImage from "@/assets/product-image.png";
import Image from "next/image";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Secure and Efficient</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to manage identity
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Protect your organization's data and streamline identity lifecycles
            with seamless, scalable identity management solutions.
          </p>
        </div>

        <div className="relative">
          <Image src={ProductImage} alt="product-image" className="mt-10" />
          <motion.img
            src={PyramidImage.src}
            height={262}
            width={262}
            alt="pyramid-image"
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY }}
          />
          <motion.img
            src={TubeImage.src}
            height={248}
            width={248}
            alt="tube-image"
            className="hidden md:block absolute -left-36 -bottom-24"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};
