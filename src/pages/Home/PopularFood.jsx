import { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const PopularFood = () => {
  const [popularFood, setPopularFood] = useState([]);
  useEffect(() => {
    fetch("./menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((item) => item.category === "popular");
        setPopularFood(popular);
      });
  }, []);
  return (
    <section className="my-8">
      <SectionTitle
        heading="From Our Menu"
        subHeading="check it out"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-4">
        {popularFood.map((food) => (
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
