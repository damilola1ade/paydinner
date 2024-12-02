import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const RestaurantCTAButton = ({
  text,
  className,
  variant,
}: {
  text: string;
  className?: string;
  variant?: "secondary";
}) => {
  return (
    <Link href="/sign-up/restaurant-sign-up">
      <Button
        className={`min-w-80 p-6 rounded-full ${className}`}
        variant={variant}
      >
        {text}
      </Button>
    </Link>
  );
};
