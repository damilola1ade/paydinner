"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar6 from "@/assets/avatar-6.png";

import Image from "next/image";

import { motion } from "framer-motion";
import { Fragment } from "react";

import { ClientCTAButton } from "@/components";

const testimonials = [
  {
    text: "With PayDinner, I turned my social life into a rewarding journey. Now, every dinner is an opportunity!",
    imageSrc: avatar1.src,
    name: "Jasmine L.",
  },
  {
    text: "No more wasted evenings. PayDinner ensures my time is valued and wallet is happy!",
    imageSrc: '/martha.webp',
    name: "Morgan R.",
  },
  {
    text: "Thanks to PayDinner, I’ve discovered amazing restaurants and met incredible people along the way. Highly recommend it!",
    imageSrc: '/sophia.webp',
    name: "Emily M.",
  },
  {
    text: "Lovely concept, lovely application. Thank you PayDinner!",
    imageSrc: '/jasmine.webp',
    name: "Taylor B.",
    username: "@taylorbrooks",
  },
  {
    text: "No more wasted evenings. PayDinner ensures my time is valued and wallet is happy!",
    imageSrc: '/martha.webp',
    name: "Morgan R.",
  },
  {
    text: "PayDinner makes every dinner feel like a special occasion!",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith",
  },
  {
    text: "Lovely concept, lovely application. Thank you PayDinner!",
    imageSrc: '/jasmine.webp',
    name: "Taylor B.",
  },
  {
    text: "Thanks to PayDinner, I’ve discovered amazing restaurants and met incredible people along the way. Highly recommend it!",
    imageSrc: '/sophia.webp',
    name: "Emily M.",
  },
  {
    text: "With PayDinner, I turned my social life into a rewarding journey. Now, every dinner is an opportunity!",
    imageSrc: avatar1.src,
    name: "Jasmine L.",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialCard = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card" key={username}>
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  width={40}
                  height={40}
                  alt={name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-bold text-lg tracking-tight leading-5">
                    {name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section id="success-stories" className="bg-white pb-20">
      <div className="container">
        <div className="flex justify-center">
          <h2 className="section-title mt-20 text-center">
            Customer Success Stories
          </h2>
        </div>

        <div className="flex justify-center gap-6 mt-5 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialCard testimonials={firstColumn} duration={20} />
          <TestimonialCard
            testimonials={secondColumn}
            className="hidden md:block"
            duration={24}
          />
          <TestimonialCard
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={22}
          />
        </div>
      </div>

      <div className="mt-8 md:mt-16 flex justify-center items-center">
        <ClientCTAButton
          text="Start earning now"
          className="bg-black text-white"
        />
      </div>
    </section>
  );
};
