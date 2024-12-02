import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";

export const PasswordInput = () => {
  return (
    <div className="relative">
      <Input
        type="password"
        id="password"
        placeholder="********"
        className="pr-10"
      />
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
      >
        <EyeIcon className="h-4 w-4" />
        <span className="sr-only">Toggle password visibility</span>
      </Button>
    </div>
  );
};
