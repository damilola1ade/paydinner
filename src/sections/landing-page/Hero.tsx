/* eslint-disable react/no-unescaped-entities */
import { ClientCTAButton, RestaurantCTAButton } from "@/components";
import Image from "next/image";
import slackLogo from "@/assets/slack-logo.png";
import dockerLogo from "@/assets/docker-logo.png";
import figmaLogo from "@/assets/figma-logo.png";
import githubLogo from "@/assets/github-logo.png";
import vsCodeLogo from "@/assets/vs-code-logo.png";
import notionLogo from "@/assets/notion-logo.png";

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-8 pb-20 md:pt-32 bg-[url('/hero-bg.png')] bg-cover bg-right bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container z-20 relative drop-shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl md:text-7xl text-white text-center font-bold tracking-tighter mt-6">
              Dine, Delight, and Earn Cash Back!
            </h1>
            <p className="text-lg lg:text-2xl text-white text-center tracking-tight mt-6">
              Turn every date night into an opportunity to earn.
            </p>
            <p className="text-lg lg:text-2xl text-white text-center tracking-tight mt-6">
              Get rewarded for your time and taste.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-[30px]">
              <ClientCTAButton text="For Women: Start earning now" />
              <RestaurantCTAButton
                text="For Restaurant: Partner with us"
                variant="secondary"
              />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center mt-20">
              <p className="text-white text-xl">Restaurant partners</p>
              <div className="mt-10 w-full flex flex-row justify-between">
                {logos.map(({ src, alt }) => (
                  <Image
                    key={alt}
                    src={src}
                    alt={alt}
                    width={500}
                    height={500}
                    className="w-10 h-10"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
