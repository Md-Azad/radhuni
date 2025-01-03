import { Helmet } from "react-helmet-async";
import Cover from "../../sharedPages/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import PopularFood from "../../Home/PopularFood";
// import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Radhuni | Menu</title>
      </Helmet>
      <Cover
        coverImg={coverImg}
        hight={600}
        title="Our Menu"
        subTitle="Would You Like To Try A Dish?"
      ></Cover>
      <PopularFood></PopularFood>
      <Cover
        coverImg={coverImg}
        hight={600}
        title="Our Menu"
        subTitle="Would You Like To Try A Dish?"
      ></Cover>
      <PopularFood></PopularFood>
    </div>
  );
};

export default Menu;
