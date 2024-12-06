"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Separator } from "@radix-ui/react-select";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "./ui/sheet";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "FAQs", href: "#faqs" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <header className="bg-black border-b border-white sticky top-0 backdrop-blur-sm z-40">
      <div className="container p-3 flex items-center justify-between lg:justify-around">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map(({ label, href }) => (
            <div key={href}>
              <Link
                href={href}
                className={`text-sm text-white hover:text-slate-300 ${
                  currentPath === href && "font-bold"
                }`}
              >
                {label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex gap-2">
          <Link href="/sign-up">
            <Button>Sign up</Button>
          </Link>
          <Link href="/log-in">
            <Button variant="outline">Log in</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <IoMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="p-4">
                <SheetTitle>
                  <Link href="/">
                    <div className="my-auto flex gap-3 items-center">
                      <Image
                        src="/logo.webp"
                        alt="logo"
                        width={40}
                        height={40}
                        className="w-10 h-10"
                      />
                      <p className="text-xl font-bold tracking-tight">
                        PayDinner
                      </p>
                    </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4">
                {navItems.map(({ label, href }) => (
                  <Button
                    key={href}
                    onClick={() => setMobileMenuOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-lg"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
                <div className="mt-5 grid gap-3">
                  <Link href="/sign-up">
                    <Button className="w-full">Sign up</Button>
                  </Link>
                  <Link href="/log-in">
                    <Button variant="outline" className="w-full">
                      Log in
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <SheetFooter className="p-4">
              <Separator className="mb-2" />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      )}
    </header>
  );
};
