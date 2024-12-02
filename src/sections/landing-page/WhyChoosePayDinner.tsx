"use client";

import Image from "next/image";

import { Tabs } from "@/components/ui/tabs";
import { ClientCTAButton, RestaurantCTAButton } from "@/components";

const Content = ({
  image,
  alt,
  header,
  subtitle,
}: {
  image: any;
  alt: string;
  header: string;
  subtitle: string;
}) => {
  return (
    <>
      <div className="max-w-64 flex flex-col gap-2 text-center items-center">
        <Image src={image} alt={alt} width={50} height={50} className="" />
        <p className="text-lg text-black">{header}</p>
        <p className="text-sm font-normal text-gray">{subtitle}</p>
      </div>
    </>
  );
};

const forWomenData = [
  {
    header: "Earn Cash Back Every Time You Dine",
    subtitle: "Receive 25% cash back on your restaurant visits.",
    image: "/coin.webp",
    alt: "coin-image",
  },
  {
    header: "Value Your Time",
    subtitle:
      "No more dates that don't appreciate you. Make every outing worth your while.",
    image: "/diamond.webp",
    alt: "diamond-image",
  },
  {
    header: "Luxurious Experiences",
    subtitle: "Access exclusive offers at top-tier restaurants.",
    image: "/luxury.webp",
    alt: "luxury-image",
  },
];

const forRestaurantData = [
  {
    header: "Attract High-Spending Patrons",
    subtitle: "Welcome guests who appreciate fine dining.",
    image: "/coin-2.webp",
    alt: "star",
  },
  {
    header: "Boost Revenue",
    subtitle: "Increase bookings and showcase special menus.",
    image: "/chart.webp",
    alt: "star",
  },
  {
    header: "Gain Visibility",
    subtitle: "Feature your establishment to our exclusive community.",
    image: "/mic.webp",
    alt: "star",
  },
];

const tabs = [
  {
    title: "For Women",
    value: "for women",
    content: (
      <>
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-transparent">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {forWomenData.map(({ header, subtitle, image, alt }) => (
              <Content
                key={header}
                image={image}
                alt={alt}
                header={header}
                subtitle={subtitle}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center items-center">
            <ClientCTAButton text="Start earning now" />
          </div>
        </div>
      </>
    ),
  },
  {
    title: "For Restaurant",
    value: "for restaurant",
    content: (
      <>
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-transparent">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {forRestaurantData.map(({ header, subtitle, image, alt }) => (
              <Content
                key={header}
                image={image}
                alt={alt}
                header={header}
                subtitle={subtitle}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center items-center">
            <RestaurantCTAButton text="Partner with us" />
          </div>
        </div>
      </>
    ),
  },
];

export const WhyChoosePayDinner = () => {
  return (
    <section className="bg-white pt-8 pb-20 md:pt-20 md:pb-0">
      <div className="container">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold text-primary tracking-tighter">
            Why Choose Pay Dinner?
          </h2>
        </div>

        <div className="h-[50rem] md:h-[28rem] lg:h-[25rem] relative b flex flex-col max-w-5xl mx-auto w-full my-10 lg:my-10">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
};
