"use client";

import { GoBackButton } from "@/components";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

export default function Notifications() {
  const router = useRouter();

  function handleNavigate() {
    router.push("/client/explore-restaurants");
  }
  return (
    <>
      <GoBackButton text="Notifications" />
      <div className="mt-10 bg-white w-full p-6 flex flex-col gap-6 rounded-xl tracking-tight">
        <div className="container max-w-[720px] flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-medium">Notifications from us </h4>
            <p className="text-sm text-slate-700">
              Receive the latest news, updates, and industry tutorials from us.{" "}
            </p>
            <div className="flex flex-col gap-6">
              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    News and updates
                  </label>
                  <p className="text-sm text-slate-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    News about PayDinner and feature updates.
                  </p>
                </div>
              </div>

              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Exclusive offers
                  </label>
                  <p className="text-sm text-slate-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Tips on getting more out of PayDinner.
                  </p>
                </div>
              </div>

              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    User research
                  </label>
                  <p className="text-sm text-slate-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Data results to help us serve you better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-[720px] flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-medium">Reservations</h4>
            <p className="text-sm text-slate-700">
              These are notifications for comments on your posts and replies to
              your comments
            </p>
            <div className="flex flex-col gap-6">
              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Do not notify me
                  </label>
                </div>
              </div>

              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Reminder
                  </label>
                  <p className="text-sm text-slate-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Send reminder of my reservations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button onClick={handleNavigate}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
