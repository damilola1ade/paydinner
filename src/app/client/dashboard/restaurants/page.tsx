import { GoBackButton } from "@/components";
import { RestaurantCard } from "../../_components";

export default function Restaurants() {
  return (
    <>
      <GoBackButton text="Book reservation" />
      <div className="mt-10 bg-white w-full p-6 rounded-xl tracking-tight">
        <RestaurantCard />
      </div>
    </>
  );
}
