import { Link } from "react-router-dom";
import FoodCard from "../../../components/FoodCard/FoodCard";

const MenuCategory = ({ items, category }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-4  mx-2 md:mx-0 my-8">
        {items.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className="flex items-center justify-center my-4">
        <Link to={`/order/${category}`}>
          <button className="btn btn-outline px-12 text-xl border-0 border-b-4 ">
            Order Your Favourite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
