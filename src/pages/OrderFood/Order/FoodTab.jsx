import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import SingleFoodCard from "../../../components/SingleFoodCard";
import { useParams } from "react-router-dom";

const FoodTab = () => {
  const foodList = ["salad", "soup", "pizza", "dessert", "drink"];
  const { category } = useParams();
  const initialIndex = foodList.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const desserts = menu.filter((item) => item.category === "dessert");
  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
      className="my-6"
    >
      <TabList>
        <Tab>Salads</Tab>
        <Tab>Soups</Tab>
        <Tab>Pizza</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {salads.map((salad) => (
            <SingleFoodCard key={salad._id} item={salad}></SingleFoodCard>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {soups.map((soup) => (
            <SingleFoodCard key={soup._id} item={soup}></SingleFoodCard>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pizzas.map((pizza) => (
            <SingleFoodCard key={pizza._id} item={pizza}></SingleFoodCard>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {desserts.map((dessert) => (
            <SingleFoodCard key={dessert._id} item={dessert}></SingleFoodCard>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {drinks.map((drink) => (
            <SingleFoodCard key={drink._id} item={drink}></SingleFoodCard>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default FoodTab;
