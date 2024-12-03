"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export const GoBackButton = ({ text }: { text: string }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className="fixed z-[100] p-2 w-full bg-white left-0 lg:left-64 top-[56px]">
      <p
        className="font-bold flex items-center gap-2 cursor-pointer tracking-tight"
        onClick={goBack}
      >
        <IoIosArrowBack />
        {text}
      </p>
    </div>
  );
};
