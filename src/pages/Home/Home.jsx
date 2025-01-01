import { Helmet } from "react-helmet-async";
import Announcement from "./Announcement";
import Banner from "./Banner";
import FoodCategory from "./FoodCategory";
import PhoneNum from "./PhoneNum";
import PopularFood from "./PopularFood";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Radhuni | Home</title>
      </Helmet>
      <Banner></Banner>
      <FoodCategory></FoodCategory>
      <Announcement></Announcement>
      <PopularFood></PopularFood>
      <PhoneNum></PhoneNum>
    </div>
  );
};

export default Home;
