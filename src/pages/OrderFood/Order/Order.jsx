import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../sharedPages/Cover/Cover";
const Order = () => {
  return (
    <div>
      <Cover
        coverImg={orderCoverImg}
        hight={600}
        title="Our Foods"
        subTitle="Would You Like to Try A dish?"
      ></Cover>
    </div>
  );
};

export default Order;
