import useCart from "../../../hooks/useCart";
import CartTable from "./CartTable";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="">
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold">Items: {cart.length}</h2>
        <h2 className="text-4xl font-bold">Total Price: ${totalPrice}</h2>
        <button className="btn bg-yellow-500">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <CartTable
                key={item._id}
                item={item}
                index={index}
                refetch={refetch}
              ></CartTable>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyCart;
