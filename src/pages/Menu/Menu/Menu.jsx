import { Helmet } from "react-helmet-async";
import Cover from "../../sharedPages/Cover/Cover";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Radhuni | Menu</title>
      </Helmet>
      <Cover></Cover>
      <h1>Menu will be here.</h1>
    </div>
  );
};

export default Menu;
