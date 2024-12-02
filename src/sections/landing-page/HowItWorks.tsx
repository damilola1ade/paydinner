/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { ClientCTAButton } from "@/components";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="pt-8 pb-20 md:pt-20 md:pb-20">
      <div className="container">
        <div className="flex justify-center">
          <h2 className="section-title">How It Works</h2>
        </div>

        <div className="flex flex-col md:gap-12">
          {/*1*/}
          <div className="md:flex justify-between items-center">
            <div className="lg:w-[508px] flex flex-col justify-center items-center lg:items-start">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-ash mt-6">
                1
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mt-3">
                Sign up
              </h1>
              <p className="text:md lg:text-xl text-gray tracking-tight mt-3">
                Join our community of savvy women.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                src="/step-1.webp"
                width={300}
                height={300}
                alt="star"
                className="border-2 border-[red] rounded-xl"
              />
            </div>
          </div>

          {/*2*/}
          <div className="flex flex-col md:flex-row-reverse justify-between items-center">
            <div className="lg:w-[508px] flex flex-col justify-end items-center lg:items-end text-center lg:text-end">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-ash mt-6">
                2
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mt-3">
                Browse & Book
              </h1>
              <p className="text:md lg:text-xl text-gray tracking-tight mt-3">
                Choose from premium restaurants and make reservations.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                src="/step-2.webp"
                width={300}
                height={300}
                alt="star"
                className="border-2 border-[red] rounded-xl"
              />
            </div>
          </div>

          {/*3*/}
          <div className="md:flex justify-between items-center">
            <div className="lg:w-[508px] flex flex-col justify-center items-center lg:items-start">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-ash mt-6">
                3
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mt-3">
                Dine & Enjoy
              </h1>
              <p className="text:md lg:text-xl text-gray tracking-tight mt-3">
                Have a memorable day with your date.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                src="/step-3.webp"
                width={300}
                height={300}
                alt="star"
                className="border-2 border-[red] rounded-xl"
              />
            </div>
          </div>

          {/*4*/}
          <div className="flex flex-col md:flex-row-reverse justify-between items-center">
            <div className="lg:w-[370px] flex flex-col justify-end items-center lg:items-end text-center lg:text-end">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-ash mt-6">
                4
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mt-3">
                Report & Earn
              </h1>
              <p className="text:md lg:text-xl text-gray tracking-tight mt-3">
                Let us know your total spend and get 25% cash back.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                src="/step-4.webp"
                width={300}
                height={300}
                alt="star"
                className="border-2 border-[red] rounded-xl"
              />
            </div>
          </div>

          {/*5*/}
          <div className="md:flex justify-between items-center">
            <div className="lg:w-[500px] flex flex-col justify-between items-center lg:items-start">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-ash mt-6">
                5
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mt-3">
                Repeat & Earn More
              </h1>
              <p className="text:md lg:text-xl text-gray tracking-tight mt-3">
                The more you dine, the more you earn.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                src="/step-5.webp"
                width={300}
                height={300}
                alt="star"
                className="border-2 border-[red] rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center items-center">
          <ClientCTAButton text="Join PayDinner" />
        </div>
      </div>
    </section>
  );
};
