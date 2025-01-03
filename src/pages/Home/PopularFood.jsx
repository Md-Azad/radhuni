import { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";

const PopularFood = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-8">
      <SectionTitle
        heading="From Our Menu"
        subHeading="check it out"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-4  mx-2 md:mx-0">
        {popular.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className="flex items-center justify-center my-4">
        <button className="btn btn-outline px-12 text-xl border-0 border-b-4 ">
          View All Menu
        </button>
      </div>
    </section>
  );
};

export default PopularFood;
