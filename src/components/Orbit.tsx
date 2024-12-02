import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Orbit = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "size-[200px] border border-black rounded-full",
        props.className
      )}
    ></div>
  );
};
