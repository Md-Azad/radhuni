import { Helmet } from "react-helmet-async";
import Cover from "../../sharedPages/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

import soupImg from "../../../assets/menu/soup-bg.jpg";
import sessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");

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
      <SectionTitle
        heading="today's Offer"
        subHeading="Don't Miss"
      ></SectionTitle>
      <MenuCategory items={offered} category={"salad"}></MenuCategory>
      <Cover
        coverImg={sessertImg}
        hight={600}
        title="dessert"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <MenuCategory items={dessert} category="dessert"></MenuCategory>
      <Cover
        coverImg={pizzImg}
        hight={600}
        title="Pizza"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <MenuCategory items={pizza} category="pizza"></MenuCategory>
      <Cover
        coverImg={saladImg}
        hight={600}
        title="Salad"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <MenuCategory items={salad} category="salad"></MenuCategory>
      <Cover
        coverImg={soupImg}
        hight={600}
        title="soup"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <MenuCategory items={soup} category="soup"></MenuCategory>
    </div>
  );
};

export default Menu;
