import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { FoodRow } from "./FoodRow";

export const FoodSearchContent = ({ isSearching, data }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [foodSwipe, setFoodSwipe] = useState(770);
  const [isMore, setIsMore] = useState(false);

  const commonFoodSize = 3;

  const handleSwiping = (e) => {
    setFoodSwipe(e.touches[0].clientY);
    setTouchEnd(e.touches[0].clientY);
  };

  const handleCommonMore = () => {
    setIsMore(!isMore);
    !isMore ? setFoodSwipe(1850) : setFoodSwipe(770);
  };

  console.log(foodSwipe);

  const minSwipeDistance = 0;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;
    if (isDownSwipe || isUpSwipe)
      if (isDownSwipe && !isMore) {
        setFoodSwipe(800);
      } else if (isDownSwipe && isMore) {
        setFoodSwipe(1850);
      }
    if (isUpSwipe) {
      setFoodSwipe(10);
    }
  };
  return (
    <div
      onTouchMove={handleSwiping}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        transform: `translateY(${foodSwipe}px)`,
      }}
    >
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
