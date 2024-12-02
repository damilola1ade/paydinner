'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export const DemoButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Contact us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Reach out to us</DialogTitle>
          <DialogDescription>
            Reach out to Marico Brown to get more information.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input placeholder="Marico Brown" />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              Email
            </Label>
            <Input placeholder="damiiyi@gmail.com" />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              Message
            </Label>
            <Textarea placeholder="Hi! Love the work you guys are doing! Let's discuss!" />
          </div>
        </div>
        <DialogFooter>
          <Button>Send email</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
