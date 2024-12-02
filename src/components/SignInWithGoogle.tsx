"use client";

import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";

export default function SignInWithGoogle() {
  const handleOAuth = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.location.href = "http://localhost:8000/auth/google";
  };

  return (
    <Button className="w-full bg-black" onClick={handleOAuth}>
      <FcGoogle />
      Continue with Google
    </Button>
  );
}
