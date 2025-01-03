import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../sharedPages/Cover/Cover";
import FoodTab from "./FoodTab";
const Order = () => {
  return (
    <div>
      <Cover
        coverImg={orderCoverImg}
        hight={600}
        title="Our Foods"
        subTitle="Would You Like to Try A dish?"
      ></Cover>
      <FoodTab></FoodTab>
    </div>
  );
};

export default Order;
