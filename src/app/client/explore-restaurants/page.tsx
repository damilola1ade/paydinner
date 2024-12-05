import { GoBackButton } from "@/components";
import { RestaurantCard } from "../_components";

export default function Restaurants() {
  return (
    <>
      <GoBackButton text="Book reservation" />
      <div className="mt-10 bg-white w-full p-6 rounded-xl tracking-tight">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}
