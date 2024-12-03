import { BsCurrencyDollar, BsQuestionCircle } from "react-icons/bs";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";

const items = [
  {
    id: 1,
    label: "$2,182.56",
    subtitle: "Cashback earned",
    color: "blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-600",
    icon: <BsCurrencyDollar size={20} color="blue" />,
  },
  {
    id: 2,
    label: "$1,456.65",
    subtitle: "Pending rewards",
    color: "primary",
    bgColor: "bg-orange-200",
    borderColor: "border-primary",
    icon: <FaRegHourglassHalf size={20} color="#ff5b07" />,
  },
  {
    id: 3,
    label: "5",
    subtitle: "Upcoming reservations",
    color: "#008000",
    bgColor: "bg-green-100",
    borderColor: "border-green-600",
    icon: <FaRegHourglassHalf size={20} color="green" />,
  },
];

export const Overview = () => {
  return (
    <div className="bg-white w-full p-6 rounded-xl">
      <h1 className="text-black text-xl font-bold">Overview</h1>

      <div className="mt-8 flex flex-col md:flex-row gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={`relative bg-white min-w-48 p-6 flex flex-col gap-2 items-center border-[1.5px] ${item.borderColor} rounded-xl`}
          >
            <div className="absolute top-3 left-3">
              <BsQuestionCircle size={14} />
            </div>
            <div
              className={`w-10 h-10 flex items-center justify-center ${item.bgColor} rounded-full`}
            >
              {item.icon}
            </div>
            <p className={`font-bold text-xl`}>{item.label}</p>
            <p className={`text-sm font-normal text-gray`}>{item.subtitle}</p>
            <p className="text-green-700 text-xs flex items-center">
              <IoMdArrowDropup /> 12.32%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
