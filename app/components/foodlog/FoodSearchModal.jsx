import React, { useState } from "react";
import { AiOutlineClose, AiOutlineFire } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { LogSlider } from "./LogSlider";
import { FoodSearchHeader } from "./FoodSearchHeader";

export const FoodSearchModal = ({ setIsModalVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [y, setY] = useState(6);
  const [height, setHeight] = useState();
  const [selected, setSelected] = useState("Search");

  return (
    <div className="bg-slate-50 h-screen overflow-hidden">
      <FoodSearchHeader
        isVisible={isVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <div className="flex justify-center space-x-5 text-slate-300 fixed right-0 left-0 top-32 ">
        <GiKnifeFork />

        <p>Add one or more items below</p>
      </div>
      <LogSlider
        y={y}
        setY={setY}
        height={height}
        setHeight={setHeight}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};
