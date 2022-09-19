import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { FoodRow } from "./FoodRow";

export const FoodSearchContent = ({ isSearching, data }) => {
  const [isMore, setIsMore] = useState(false);

  const handleCommonMore = () => {
    setIsMore(!isMore);
  };

  const commonFoodSize = 3;

  return (
    <div>
      {!isSearching ? null : (
        <div className="flex justify-between">
          <h3>Common</h3>
          <div className="flex">
            <p>{isMore ? "-17" : "+17"}</p>
            <button onClick={handleCommonMore}>
              {isMore ? <MdExpandLess /> : <MdExpandMore />}
            </button>
          </div>
        </div>
      )}
      {!isMore
        ? data?.common &&
          data?.common
            .slice(0, commonFoodSize)
            .map((item, i) => <FoodRow item={item} key={i} />)
        : data?.common &&
          data?.common.map((item, i) => <FoodRow item={item} key={i} />)}
      {!isSearching ? null : <h3>Branded</h3>}
      {data?.branded &&
        data?.branded.map((item, i) => <FoodRow item={item} key={i} />)}
    </div>
  );
};
