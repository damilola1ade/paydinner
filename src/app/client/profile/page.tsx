import { FaIdCard } from "react-icons/fa";
import {
  FiBell,
  FiLock,
  FiCreditCard,
  FiHelpCircle,
  FiMail,
  FiShield,
} from "react-icons/fi";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Fragment } from "react";

const items = [
  {
    id: 1,
    label: "Edit profile information",
    icon: <FaIdCard />,
    href: "/client/profile/edit-profile",
  },
  {
    id: 4,
    label: "Notifications",
    icon: <FiBell size={20} />,
    href: "/client/profile/notifications",
  },
  {
    id: 5,
    label: "Security",
    icon: <FiLock size={20} />,
    href: "/client/profile/change-password",
  },
  {
    id: 6,
    label: "Payment method",
    icon: <FiCreditCard size={20} />,
    href: "/client/payment-method",
  },
  {
    id: 7,
    label: "Help & Support",
    icon: <FiHelpCircle size={20} />,
    href: "/client/profile/support",
  },
  {
    id: 8,
    label: "Contact Us",
    icon: <FiMail size={20} />,
    href: "/client/contact-us",
  },
  {
    id: 9,
    label: "Privacy Policy",
    icon: <FiShield size={20} />,
    href: "/client/privacy-policy",
  },
];

export default function ClientProfile() {
  return (
    <div className="h-full w-full flex flex-col gap-4 tracking-tight">
      <div className="h-32 relative -top-24 lg:-top-6 bg-peach w-full p-6 rounded-xl" />
      <div className="relative -top-36 lg:-top-28 flex flex-col justify-center items-center z-[100]">
        <Avatar>
          <AvatarImage
            src="/photo.jpg"
            alt="@shadcn"
            width={300}
            height={300}
            className="rounded-full w-28 lg:w-48"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-black text-md lg:text-2xl font-medium tracking-tight">
          Dami Adegbemile
        </h1>
        <h1 className="text-black text-sm lg:text-lg">damiiyi@gmail.com</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[500px] relative -top-28 bg-white p-6 px-8 rounded-xl">
          <div className="grid grid-cols-1 gap-6 text-gray">
            {items.map((item) => (
              <Fragment key={item.id}>
                <Link
                  href={item.href}
                  className="w-44 flex gap-2 items-center hover:text-primary hover:font-bold"
                >
                  <div>{item.icon}</div>
                  <p className="text-sm">{item.label}</p>
                </Link>
                {item.label === "Payment method" && (
                  <div className="border-t border-slate-300 my-2" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
