"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IoIosArrowBack } from "react-icons/io";

interface FormData {
  totalSpend: string;
  details?: string;
}

export const ClaimCashback = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormData>();

  const [step, setStep] = useState(1);

  const nextStep = async () => {
    const isValid = await trigger();

    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };
  return (
    <Dialog
      onOpenChange={() => {
        setStep(1);
      }}
    >
      <DialogTrigger asChild>
        <Button>Claim</Button>
      </DialogTrigger>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex items-center relative -top-2">
            {step != 1 ||
              (3 && (
                <IoIosArrowBack onClick={prevStep} className="cursor-pointer" />
              ))}
            <DialogTitle className="text-md text-center w-full">
              Claim cashback
            </DialogTitle>
          </div>
          <div className="absolute top-[48px] h-[0.5px] w-full bg-ash" />
          <div className="">
            {step === 1 && <Step1 control={control} nextStep={nextStep} />}
            {step === 2 && <Step2 control={control} nextStep={nextStep} />}
            {step === 3 && <SuccessModal />}
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export const Step1 = ({
  control,
  nextStep,
}: {
  control: any;
  nextStep: any;
}) => {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex flex-col gap-4">
        <Label htmlFor="text" className="text-left">
          What was your total spend?
        </Label>
        <Controller
          name="totalSpend"
          control={control}
          rules={{ required: "This is required" }}
          render={({ field: { value, onChange } }) => (
            <Input value={value} onChange={onChange} />
          )}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="name" className="text-left">
          Details (optional)
        </Label>
        <Controller
          name="details"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Textarea
              value={value}
              onChange={onChange}
              placeholder="Enter details"
            />
          )}
        />
      </div>
      <Button onClick={nextStep} className="w-full">
        Proceed
      </Button>
    </div>
  );
};

export const Step2 = ({
  control,
  nextStep,
}: {
  control: any;
  nextStep: any;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 bg-gradient-to-r from-[#020e29] via-[#1544a9] to-[#1544a9] flex justify-between items-center rounded-2xl border-2 border-purple-500">
        <div className="flex flex-col gap-1 text-white">
          <h6 className="text-md md:text-md font-semibold">Total spend</h6>
          <h4 className="text-lg md:text-xl font-bold">$125</h4>
          <div className="py-1 px-4 bg-peach rounded-2xl">
            <p className="text-primary text-xs md:text-sm">
              Cashback you'll receive
            </p>
          </div>
        </div>
        <Image src="/cashback.webp" width={80} height={80} alt="cashback" />
      </div>
      <div className="flex flex-col gap-4">
        <Controller
          name="review"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Textarea
              value={value}
              onChange={onChange}
              placeholder="Drop a review"
            />
          )}
        />
      </div>
      <Button onClick={nextStep} className="w-full">
        Submit
      </Button>
    </div>
  );
};

export const SuccessModal = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src="/cashback.webp" width={80} height={80} alt="cashback" />
      <h2 className="font-semibold text-center text-md lg:text-xl">
        Your cashback is on its way to your wallet
      </h2>
      <DialogClose className="w-full">
        <Button className="w-full">Okay</Button>
      </DialogClose>
    </div>
  );
};
