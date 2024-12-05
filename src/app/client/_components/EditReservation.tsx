"use client";

import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TimeInput } from "@/components/ui/time-picker";

interface FormData {
  numberOfGuests: string;
  specialRequests: string;
  date: any;
}

export const EditReservation = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit</Button>
      </DialogTrigger>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-md">Edit reservation</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-4">
              <Label htmlFor="time" className="text-left">
                Date and time
              </Label>
              <Controller
                name="date"
                control={control}
                rules={{ required: "Date is required" }}
                render={({ field: { value, onChange } }) => (
                  <TimeInput value={value} onChange={onChange} />
                )}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="number" className="text-left">
                Number of guests
              </Label>
              <Controller
                name="numberOfGuests"
                control={control}
                rules={{ required: "Number of guests is required" }}
                render={({ field: { value, onChange } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    min="0"
                    placeholder="0"
                    type="number"
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="name" className="text-left">
                Special requests or dietary restrictions
              </Label>
              <Controller
                name="specialRequests"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Textarea
                    value={value}
                    onChange={onChange}
                    placeholder="Hi! Love the work you guys are doing! Let's discuss!"
                  />
                )}
              />
            </div>
          </div>
          <DialogFooter className="w-full">
            <Button
              disabled={!isValid}
              onClick={handleSubmit(onSubmit)}
              className="w-full"
            >
              Confirm reservation
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
