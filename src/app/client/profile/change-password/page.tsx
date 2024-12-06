"use client";

import { GoBackButton } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { useRouter } from "next/navigation";

export default function ChangePassword() {
  const router = useRouter();

  function handleNavigate() {
    router.push("/client/explore-restaurants");
  }
  return (
    <>
      <GoBackButton text="Change password" />
      <div className="mt-10 bg-white w-full p-6 rounded-xl tracking-tight">
        <div className="container max-w-[720px] flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              Currrent password
            </Label>
            <PasswordInput  />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              New password
            </Label>
            <PasswordInput  />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="phone" className="text-left">
              Confirm password
            </Label>
            <PasswordInput  />
          </div>
          <Button className="mt-4" onClick={handleNavigate}>
            Change password
          </Button>
        </div>
      </div>
    </>
  );
}
