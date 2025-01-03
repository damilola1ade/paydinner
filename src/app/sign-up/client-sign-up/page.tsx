import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import SignInWithGoogle from "@/components/SignInWithGoogle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Divider } from "@/components";

const ClientSignUp = () => {
  return (
    <section className="min-h-screen container flex justify-center items-center">
      <div className="flex justify-between gap-12">
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
            Create your account for free and start dining
          </p>
          <p className="text-gray text-center tracking-tight mt-6">
            Your time is precious. Turn every date into a rewarding experience
            with cash back on your dining.
          </p>
          <div className="mt-4">
            <SignInWithGoogle />
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Divider className="bg-ash" />
            <p>or</p>
            <Divider className="bg-ash" />
          </div>

          <div className="flex flex-col gap-4 py-2">
            <div className="flex flex-col gap-4">
              <Label htmlFor="first name" className="text-left">
                First name
              </Label>
              <Input placeholder="Aisha" />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="last name" className="text-left">
                Last name
              </Label>
              <Input placeholder="Yashidi" />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="email" className="text-left">
                Email address
              </Label>
              <Input placeholder="damiiyi@gmail.com" />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="phone" className="text-left">
                Phone number
              </Label>
              <Input placeholder="+44 762 7366 173" />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="name" className="text-left">
                Password
              </Label>
              <Input isPasswordField placeholder="Enter your password" />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="name" className="text-left">
                Confirm password
              </Label>
              <Input isPasswordField placeholder="Confirm your password" />
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to our Terms of Service and Privacy Policy.
                </label>
              </div>
            </div>
            <Button className="mt-4">Join PayDinner</Button>
            <p className="text-sm text-center">
              Already a member?{" "}
              <Link href="/log-in" className="text-primary">
                Log in
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-5 h-[620px] relative hidden md:block p-12 w-full bg-[url('/client.png')] bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-50 before:rounded-[40px] rounded-[40px]">
          <div className="h-full flex flex-col gap-6 text-white z-20 relative drop-shadow-lg">
            <h1 className="text-4xl font-bold tracking-tighter">
              Get paid to Dine at the finest restaurants!
            </h1>
            <h2 className="text-xl font-normal tracking-tight">
              Your time is precious. Turn every date into a rewarding experience
              with cash back on your dining.
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

export default ClientSignUp;
