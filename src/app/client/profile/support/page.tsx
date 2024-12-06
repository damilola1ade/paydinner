"use client";

import { GoBackButton } from "@/components";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export default function Support() {
  const router = useRouter();

  function handleNavigate() {
    router.push("/client/explore-restaurants");
  }
  return (
    <>
      <GoBackButton text="Help & Support" />
      <div className="mt-10 bg-white w-full p-6 rounded-xl tracking-tight">
        <div className="container max-w-[720px] flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              What issue do you have?
            </Label>
            <Select>
              <SelectTrigger className="w-full mt-1 p-6 text-md">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="60 seconds">General issue</SelectItem>
                <SelectItem value="30 seconds">Cashback</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              Details of issue
            </Label>
            <Textarea placeholder="Enter details" />
          </div>
          <Button onClick={handleNavigate}>Send</Button>
        </div>
      </div>
    </>
  );
}
