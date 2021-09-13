import { Tabs, Tab } from "@tarragon/swipeable-tabs/dist";
import { useEffect, useState } from "react";
import useFetch from "../utils/usefetch";
import Card from "./card";
import LoadingCard from "./loadingcard";
import "./tabs.css";

const FoodTabs = () => {
  const [dishCategories, setDishCategories] = useState(null);
  const [selectedTab, setSelectedTab] = useState("Tab 1");
  const { error, isLoading, data } = useFetch(
    "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099"
  );

  useEffect(() => {
    console.log("Data is", data?.[0]?.table_menu_list);
    setDishCategories(data?.[0]?.table_menu_list);
    return () => {
      console.log("Cleanup");
    };
  }, [data]);

  useEffect(() => {
    console.log("Dish Category is", dishCategories);
    dishCategories && setSelectedTab(dishCategories[0]?.menu_category);
  }, [dishCategories]);

  const changeTab = (updatedTab) => {
    console.log("updatedTab is", updatedTab);
    setSelectedTab(updatedTab?.label);
  };

  const tabStyles = {
    barColor: "white",
    fontFamily: "inherit",
    headerTextColor: "#ababba",
    selectedHeaderTextColor: "#f42f42",
    inkBarColor: "#ebebf0",
    activeInkBarColor: "#ebebf0",
  };

  const tabBarStyles = `
  font-weight: 700;
  border-bottom-width: 2px;
  overflow-x : scroll;
  `;

  const tabItemCSS = `
  width:auto;
  flex-shrink:0;
  padding:0px 10px;
  `;

  return (
    <div>
      {dishCategories?.length && !isLoading && (
        <Tabs
          value={selectedTab}
          onChange={changeTab}
          styleProps={tabStyles}
          tabBarCSS={tabBarStyles}
          tabItemCSS={tabItemCSS}
        >
          {dishCategories?.map((item, i) => (
            <Tab label={`${item.menu_category}`} key={i}>
              <div className="card-list">
                {item?.category_dishes?.map((dish, i) => (
                  <Card key={i} dish={dish} />
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      )}
      {isLoading && [1, 2, 3, 4].map((item, i) => <LoadingCard key={i} />)}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default FoodTabs;
