import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const SingleFoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        userEmail: user.email,
        name,
        image,
        price,
      };
      axios.post("http://localhost:3000/carts", cartItem).then((res) => {
        console.log(res.data);
      });
    } else {
      Swal.fire({
        title: "You Are Not Logged In",
        text: "Please Log In to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl relative">
      <figure>
        <img src={image} alt="food" />
      </figure>
      <div className="card-body">
        <p className="bg-black text-white w-1/5 text-center rounded-lg absolute top-7 right-5">
          ${price}
        </p>
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodCard;
