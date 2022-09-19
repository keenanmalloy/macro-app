import { useState } from "react";
import { FoodSearchBar } from "./FoodSearchBar";
import { FoodSearchContent } from "./FoodSearchContent";

export const Search = ({
  setIsSearching,
  isSearching,
  selectedFood,
  setSelectedFood,
}) => {
  const [data, setData] = useState([]);
  return (
    <div>
      <FoodSearchContent
        data={data}
        setData={setData}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        selectedFood={selectedFood}
        setSelectedFood={setSelectedFood}
      />
      <FoodSearchBar
        data={data}
        setData={setData}
        setIsSearching={setIsSearching}
      />
    </div>
  );
};
