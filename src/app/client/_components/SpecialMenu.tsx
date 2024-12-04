import Image from "next/image";
import React from "react";
import { FaDollarSign } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { BsDownload } from "react-icons/bs";

export const SpecialMenu = () => {
  return (
    <div className="bg-white mt-8 w-full p-6 rounded-xl">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <h1 className="text-md lg:text-lg font-bold">Special menu</h1>
          <Button variant='outline'><BsDownload />Download</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
          {data.map(({ id, foodName, foodDescription, price }) => (
            <SpecialMenuCard
              key={id}
              foodName={foodName}
              foodDescription={foodDescription}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const SpecialMenuCard = ({
  foodName,
  foodDescription,
  price,
}: {
  foodName: string;
  foodDescription: string;
  price: string;
}) => {
  //   const router = useRouter();
  //   const handleNavigate = () => {
  //     router.push(`/client/dashboard/restaurants/id`);
  //   };

  return (
    <div className="max-h-68 max-w-full md:max-w-72 p-3 bg-zinc-100 rounded-lg cursor-pointer flex flex-col">
      <div className="relative w-full h-32 rounded-lg overflow-hidden">
        <Image
          src="/truffle.png"
          alt="restaurant"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className=" flex flex-col flex-grow mt-4">
        <h5 className="font-semibold text-sm">{foodName}</h5>
        <p className="text-xs md:text-sm text-gray">{foodDescription}</p>
        <p className="mt-auto text-primary flex text-sm items-center">
          <FaDollarSign color="black" /> {price}
        </p>
      </div>
    </div>
  );
};

export default SpecialMenuCard;

const data = [
  {
    id: 1,
    foodName: "Truffle Risotto",
    foodDescription: "Creamy risotto with freshly shaved truffles",
    price: "11.99",
  },
  {
    id: 2,
    foodName: "Margherita Pizza",
    foodDescription:
      "Classic pizza topped with fresh mozzarella, basil, and tomato sauce",
    price: "9.99",
  },
  {
    id: 3,
    foodName: "Caesar Salad",
    foodDescription:
      "Crisp romaine lettuce, croutons, parmesan, and Caesar dressing",
    price: "7.49",
  },
  {
    id: 4,
    foodName: "Spaghetti Carbonara",
    foodDescription:
      "Traditional Italian pasta with pancetta, eggs, and pecorino cheese",
    price: "12.99",
  },
  {
    id: 5,
    foodName: "Garlic Bread",
    foodDescription: "Freshly baked bread with garlic butter and parsley",
    price: "4.99",
  },
  {
    id: 6,
    foodName: "Grilled Salmon",
    foodDescription: "Perfectly grilled salmon with lemon and dill",
    price: "15.99",
  },
  {
    id: 7,
    foodName: "Chicken Alfredo",
    foodDescription:
      "Fettuccine pasta with creamy Alfredo sauce and grilled chicken",
    price: "13.49",
  },
  {
    id: 8,
    foodName: "Caprese Salad",
    foodDescription:
      "Fresh mozzarella, ripe tomatoes, and basil drizzled with balsamic glaze",
    price: "8.99",
  },
  {
    id: 9,
    foodName: "Eggplant Parmesan",
    foodDescription:
      "Baked eggplant with marinara sauce, mozzarella, and parmesan",
    price: "10.99",
  },
  {
    id: 10,
    foodName: "Lobster Bisque",
    foodDescription: "Rich and creamy soup made with fresh lobster and spices",
    price: "14.99",
  },
  {
    id: 11,
    foodName: "Tiramisu",
    foodDescription:
      "Layered Italian dessert with mascarpone, espresso, and cocoa",
    price: "6.49",
  },
  {
    id: 12,
    foodName: "Minestrone Soup",
    foodDescription:
      "Hearty vegetable soup with beans and pasta in a tomato broth",
    price: "7.99",
  },
];
