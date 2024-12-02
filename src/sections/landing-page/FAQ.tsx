import React from "react";
import { Tabs } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const forWomenData = [
  {
    header: "How does PayDinner work if I'm not the one paying for the meal.",
    subtitle:
      "That's the beauty of PayDinner! Even if your date picks up the tab, you still earn 25% cash back based on the total spend at our partner restaurants. We value your time and presence, turning every dining experience into a rewarding opportunity for you.",
    value: "item-1",
  },
  {
    header: "How does PayDinner work if I'm not the one paying for the meal.",
    subtitle:
      "That's the beauty of PayDinner! Even if your date picks up the tab, you still earn 25% cash back based on the total spend at our partner restaurants. We value your time and presence, turning every dining experience into a rewarding opportunity for you.",
    value: "item-2",
  },
  {
    header: "How does PayDinner work if I'm not the one paying for the meal.",
    subtitle:
      "That's the beauty of PayDinner! Even if your date picks up the tab, you still earn 25% cash back based on the total spend at our partner restaurants. We value your time and presence, turning every dining experience into a rewarding opportunity for you.",
    value: "item-3",
  },
];

const forRestaurantData = [
  {
    header: "How does PayDinner work if I'm not the one paying for the meal.",
    subtitle:
      "That's the beauty of PayDinner! Even if your date picks up the tab, you still earn 25% cash back based on the total spend at our partner restaurants. We value your time and presence, turning every dining experience into a rewarding opportunity for you.",
    value: "item-1",
  },
  {
    header: "How does PayDinner work if I'm not the one paying for the meal.",
    subtitle:
      "That's the beauty of PayDinner! Even if your date picks up the tab, you still earn 25% cash back based on the total spend at our partner restaurants. We value your time and presence, turning every dining experience into a rewarding opportunity for you.",
    value: "item-2",
  },
  {
    header: "How does PayDinner work if I'm not the one paying for the meal.",
    subtitle:
      "That's the beauty of PayDinner! Even if your date picks up the tab, you still earn 25% cash back based on the total spend at our partner restaurants. We value your time and presence, turning every dining experience into a rewarding opportunity for you.",
    value: "item-3",
  },
];

const tabs = [
  {
    title: "For Women",
    value: "for-women",
    content: (
      <Accordion type="single" collapsible>
        {forWomenData.map(({ header, subtitle, value }) => (
          <AccordionItem value={value} key={value} className="mb-4">
            <AccordionTrigger className="text-left">{header}</AccordionTrigger>
            <AccordionContent>{subtitle}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    ),
  },
  {
    title: "For Restaurant",
    value: "for-restaurant",
    content: (
      <Accordion type="single" collapsible>
        {forRestaurantData.map(({ header, subtitle, value }) => (
          <AccordionItem value={value} key={value} className="mb-4">
            <AccordionTrigger className="text-left">{header}</AccordionTrigger>
            <AccordionContent>{subtitle}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    ),
  },
];

export const FAQ = () => {
  return (
    <section id="faqs" className="bg-white pt-8 pb-20 md:pt-20 md:pb-0">
      <div className="container">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold text-center text-primary tracking-tighter">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="h-[25rem] md:h-[20rem] relative b flex flex-col max-w-5xl mx-auto w-full my-10 lg:my-10">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
};
