const FoodCard = ({ food }) => {
  const { name, image, recipe, price } = food;
  return (
    <div className="border-2 rounded-md p-2 md:p-0">
      <div className="flex gap-6 items-center justify-center">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-24 "
          src={image}
          alt=""
        />
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p>{recipe}</p>
        </div>
        <p className="text-yellow-600">${price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
