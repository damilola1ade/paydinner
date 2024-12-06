"use client";

import { GoBackButton } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const router = useRouter();

  function handleNavigate() {
    router.push("/client/explore-restaurants");
  }
  return (
    <>
      <GoBackButton text="Edit profile information" />
      <div className="mt-10 bg-white w-full p-6 rounded-xl tracking-tight">
        <div className="container max-w-[720px] flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input placeholder="Dami Adegbemile" />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              Email
            </Label>
            <Input placeholder="damiiyi@gmail.com" />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="phone" className="text-left">
              Phone number
            </Label>
            <Input placeholder="+44 655 837251" />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              Preferred dining locations
            </Label>
            <Input placeholder="Dubai" />
          </div>
          <Button className="mt-4" onClick={handleNavigate}>
            Proceed
          </Button>
        </div>
      </div>
    </>
  );
}
