"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import ArrowIcon from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";

import { DemoButton, LearnMore } from "@/components";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Reach out today</h2>
          <p className="section-description mt-5">
            Securely manage and streamline your digital identities with our
            comprehensive solutions designed to enhance security and efficiency.
          </p>
          <motion.img
            src={StarImage.src}
            alt="star-image"
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{ translateY }}
          />
          <motion.img
            src={SpringImage.src}
            alt="spring-image"
            width={360}
            height={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{ translateY }}
          />
        </div>

        <div className="flex gap-2 mt-10 justify-center">
          <DemoButton />
          <LearnMore />
        </div>
      </div>
    </section>
  );
};
