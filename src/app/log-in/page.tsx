"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { FcBusinesswoman } from "react-icons/fc";

import { FcShop } from "react-icons/fc";

const BoxInput = ({
  icon,
  header,
  text,
  isSelected,
  onClick,
}: {
  icon: any;
  header: string;
  text: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer ${
        isSelected ? "border-orange-500 bg-orange-100" : "border-gray-300"
      }`}
      onClick={onClick}
    >
      <i
        className={`material-icons ${
          isSelected ? "text-orange-500" : "text-black"
        }`}
      >
        {icon}
      </i>
      <div className="flex flex-col gap-1">
        <span className="font-bold text-lg">{header}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

const Login = () => {
  const boxInputValues = [
    {
      header: "Client",
      text: "Login as a client",
      icon: <FcBusinesswoman size={40} />,
      route: "/log-in/client-log-in",
    },
    {
      header: "Restaurant",
      text: "Login as a restaurant",
      icon: <FcShop size={40} />,
      route: "/log-in/restaurant-log-in",
    },
  ];

  const [selectedRoute, setSelectedRoute] = useState("");

  const router = useRouter();

  const handleChange = (route: string) => {
    setSelectedRoute(route);
  };

  const handleContinue = () => {
    router.push(selectedRoute);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md tracking-tight">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold">Login</h1>
          <p className="text-gray-600 mt-2">Select your role to proceed</p>
        </div>

        <div className="space-y-4">
          {boxInputValues.map((box) => (
            <BoxInput
              key={box.route}
              icon={box.icon}
              header={box.header}
              text={box.text}
              isSelected={selectedRoute === box.route}
              onClick={() => handleChange(box.route)}
            />
          ))}
        </div>

        <Button
          onClick={handleContinue}
          className="mt-10 p-6 w-full"
          disabled={!selectedRoute}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Login;
