const CartTable = ({ item, index }) => {
  const { image, name, price } = item;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt={name} />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default CartTable;
