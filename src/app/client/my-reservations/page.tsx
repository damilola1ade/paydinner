import { TbCalendarCheck } from "react-icons/tb";
import { TbCalendarClock } from "react-icons/tb";
import Link from "next/link";

const items = [
  {
    id: 1,
    label: "Upcoming reservations",
    color: "text-primary",
    bgColor: "bg-orange-200",
    borderColor: "border-primary",
    icon: <TbCalendarClock size={20} color="#ff5b07" />,
    href: "/client/my-reservations/upcoming-reservations",
  },
  {
    id: 2,
    label: "Past reservations",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-600",
    icon: <TbCalendarCheck size={20} color="blue" />,
    href: "/client/my-reservations/past-reservations",
  },
];

export default function MyReservation() {
  return (
    <div className="h-full w-full flex gap-4 tracking-tight">
      <div className="bg-white w-full p-6 rounded-xl">
        <div className="mt-8 flex gap-4">
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={`w-full p-6 flex gap-6 items-center border-[1.5px] ${item.borderColor} rounded-xl hover:bg-zinc-100 cursor-pointer`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center ${item.bgColor} rounded-full`}
              >
                {item.icon}
              </div>
              <p className={`font-bold ${item.color}`}>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
