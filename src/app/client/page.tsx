import { BsBookmarkCheck } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import Link from "next/link";
import { Overview } from "./_components";

const items = [
  {
    id: 1,
    label: "Reservation",
    color: "blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-600",
    icon: <BsBookmarkCheck size={20} color="blue" />,
    href: "/client/book-reservation",
  },
  {
    id: 2,
    label: "Invite friends",
    color: "primary",
    bgColor: "bg-orange-200",
    borderColor: "border-primary",
    icon: <CiShare2 size={20} color="#ff5b07" />,
    href: "/client/book-reservation",
  },
  {
    id: 3,
    label: "Payment",
    color: "#008000",
    bgColor: "bg-green-100",
    borderColor: "border-green-600",
    icon: <FaLightbulb size={20} color="green" />,
    href: "/client/book-reservation",
  },
];

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col gap-4 tracking-tight">
      <div className="bg-peach w-full p-6 rounded-xl">
        <h1 className="text-primary text-xl font-bold">Welcome back, Dami!</h1>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={`bg-white min-w-48 p-6 flex flex-col gap-6 items-center border-[1.5px] ${item.borderColor} rounded-xl hover:bg-zinc-100 cursor-pointer`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center ${item.bgColor} rounded-full`}
              >
                {item.icon}
              </div>
              <p className={`font-bold text-${item.color}`}>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>

      <Overview />
    </div>
  );
}
