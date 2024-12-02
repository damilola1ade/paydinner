import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RestaurantLogin = () => {
  return (
    <section className="min-h-screen container flex justify-center items-center">
      <div className="flex justify-between items-center gap-12">
        <div className="">
          <div className="mt-8 flex justify-center items-center">
            <Image
              src="/logo.webp"
              alt="logo"
              height={500}
              width={500}
              className="w-10 h-10"
            />
          </div>
          <p className="text-3xl font-bold text-center tracking-tighter mt-3">
            Login and expand your reach
          </p>
          <p className="text-gray text-center tracking-tight mt-6">
            Login and make the most of every customer visit! We value your
            dedication to fine dining.
          </p>

          <div className="flex flex-col gap-4 py-6">
            <div className="flex flex-col gap-4">
              <Label htmlFor="email" className="text-left">
                Email address
              </Label>
              <Input placeholder="damiiyi@gmail.com" />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="name" className="text-left">
                Password
              </Label>
              <Input isPasswordField placeholder="Enter your password" />
            </div>
            <Button className="mt-4">Sign in</Button>
            <p className="text-sm text-center">
              Not a partner?
              <Link href="/sign-up" className="text-primary ml-1">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="h-[620px] relative hidden md:block p-12 w-full bg-[url('/restaurant.png')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-50 before:rounded-[40px] rounded-[40px]">
          <div className="h-full flex flex-col gap-6 text-white z-20 relative drop-shadow-lg">
            <h1 className="text-4xl font-bold tracking-tighter">
              Expand your reach to valued patrons!
            </h1>
            <h2 className="text-xl font-normal tracking-tight">
              Partner with PayDinner to welcome guests who appreciate fine
              dining and ensure your tables are always filled.
            </h2>
            <div className="my-auto flex gap-3 items-center">
              <Image
                src="/logo.webp"
                alt="logo"
                height={500}
                width={500}
                className="w-10 h-10"
              />
              <p className="text-xl font-bold tracking-tight">PayDinner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantLogin;
