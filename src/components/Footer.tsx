import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Divider } from "./Divider";
import Link from "next/link";

const socialMediaIcons = [
  {
    src: "/youtube.webp",
    href: "/",
  },
  {
    src: "/facebook.webp",
    href: "/",
  },
  {
    src: "/twitter.webp",
    href: "/",
  },
  {
    src: "/instagram.webp",
    href: "/",
  },
  {
    src: "/linkedin.webp",
    href: "/",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="logo"
              height={500}
              width={500}
              className="w-10 h-10"
            />
          </Link>
          <div className="flex gap-2">
            <Input
              placeholder="✉️	Join our mailing list for exclusive offers and updates."
              className="w-60 md:w-96 text-sm md:text-md text-black"
              required
            />
            <Button className="h-10">Subscribe</Button>
          </div>
        </div>

        <Divider className="bg-gray mt-6" />

        <div className="flex justify-between items-center">
          <nav className="flex flex-col items-start gap-6 mt-6">
            <h3 className="text-primary text-xl font-bold w-[120px]">
              Quick Links:
            </h3>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">FAQs</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </nav>

          <div>
            <div className="flex flex-col lg:flex-row gap-3 justify-end items-end">
              <Link href="/">
              <Image src='/app-store.webp' width={120} height={120} alt="apple-appstore" />
              </Link>
              <Link href="/">
              <Image src='/google-play.webp' width={120} height={120} alt="apple-appstore" />
              </Link>
            </div>
            <p className="mt-4 flex justify-end">Join us</p>
            <div className="flex justify-center gap-4 mt-6">
              {socialMediaIcons.map(({ src, href }) => (
                <Link href={href} key={href}>
                  <Image src={src} width={25} height={25} alt="social media" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Divider className="bg-gray mt-6" />
        <div className="mt-6 flex justify-between text-xs md:text-md">
          <p>PayDinner &copy; 2024. All rights reserved.</p>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
