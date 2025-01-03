const SingleFoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodCard;
