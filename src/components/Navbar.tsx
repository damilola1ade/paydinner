"use client";

import { useEffect, useState } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  // { label: "For Women", href: "#for-women" },
  // { label: "For Restaurants", href: "#for-restaurants" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "FAQs", href: "#faqs" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const path = usePathname();

  return (
    <header className="bg-black border-white border-b-[1px] sticky top-0 backdrop-blur-[5px] z-40">
      {/* <div className="flex justify-center items-center py-2 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div> */}

      <div>
        <div className="container p-1">
          <div className="flex items-center justify-between lg:justify-around">
            <Link href="/">
              <Image
                src='/logo.webp'
                alt="logo"
                height={500}
                width={500}
                className="w-10 h-10"
              />
            </Link>
            {mobileMenuOpen ? (
              <IoCloseSharp
                size={30}
                color="white"
                className="lg:hidden cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              />
            ) : (
              <IoMenu
                size={30}
                color="white"
                className="lg:hidden cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
              />
            )}

            <nav className="hidden lg:flex gap-6 items-center tracking-tight">
              {navItems.map((item) => (
                <div key={item.href}>
                  <a
                    href={item.href}
                    className={`text-[15px] text-white hover:text-slate-300 ${
                      path === item.href && "font-extrabold"
                    }`}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </nav>
            <div className="hidden lg:flex gap-2">
              <Link href="/sign-up">
                <Button>Sign up</Button>
              </Link>
              <Link href="/log-in">
                <Button variant="outline">Log in</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed h-[100vh] w-full bg-white z-60 flex flex-col ">
          <nav className="flex flex-col gap-4 items-center mt-6">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="text-black text-sm hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div className="flex flex-col gap-4 mt-6">
              <Link href="/sign-up">
                <Button
                  className="min-w-32"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Button>
              </Link>
              <Link href="/log-in">
                <Button
                  className="min-w-32"
                  variant="outline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
