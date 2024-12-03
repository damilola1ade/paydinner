'use client'

import { GoBackButton } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function BookReservation() {
  const router = useRouter();

  function handleNavigate() {
    router.push("/client/dashboard/restaurants");
  }
  return (
    <>
      <GoBackButton text="Book reservation" />
      <div className="mt-10 bg-white w-full p-6 rounded-xl tracking-tight">
        <div className="container max-w-[720px] flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-4">
            <Label htmlFor="email" className="text-left">
              Enter restaurant name
            </Label>
            <Input placeholder="Restaurant name" />
          </div>
          <div className="h-[320px] relative hidden md:block p-12 w-full bg-[url('/map.jpg')] bg-cover bg-no-repeat rounded-xl" />
          <Button className="mt-4" onClick={handleNavigate}>Proceed</Button>
        </div>
      </div>
    </>
  );
}
