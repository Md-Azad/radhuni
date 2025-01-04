const SingleFoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
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
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodCard;
