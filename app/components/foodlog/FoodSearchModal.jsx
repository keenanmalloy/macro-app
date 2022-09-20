import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineFire,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { LogSlider } from "./LogSlider";
import { FoodSearchHeader } from "./FoodSearchHeader";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export const FoodSearchModal = ({ setIsModalVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [y, setY] = useState(4);
  const [height, setHeight] = useState();
  const [selected, setSelected] = useState("Search");
  const [selectedFood, setSelectedFood] = useState([]);

  return (
    <div className="bg-slate-50 h-screen overflow-hidden">
      <FoodSearchHeader
        isVisible={isVisible}
        setIsModalVisible={setIsModalVisible}
        selectedFood={selectedFood}
        setSelectedFood={setSelectedFood}
      />
      <div className="flex justify-center space-x-5 text-slate-300 fixed right-0 left-0 top-32 ">
        {selectedFood.length < 1 ? (
          <div className="flex space-x-5">
            <GiKnifeFork /> <p>Add one or more items below</p>
          </div>
        ) : null}
        <div>
          {selectedFood.map((food, i) => (
            <div key={i} className="py-3 pl-5 flex  ">
              <img src={food.image} className="w-10 h-10 mr-3" />
              <div className="flex border-b border-solid border-slate-300 w-full">
                <div className=" text-black">
                  <h3 className="px-1 text-black truncate text-ellipsis w-64">
                    {food.name}
                  </h3>
                  <div className="flex text-xs space-x-4">
                    <p>{food.calories} kcal</p>
                    <p>{food.protein}P</p>
                    <p>{food.fats}F</p>
                    <p>{food.carbs}C</p>
                    <p>{food.quantity}</p>
                    <p>{food.serving_weight_grams}g</p>
                  </div>
                  <div className="space-x-5 py-5 text-sm flex items-center">
                    <button className="flex ">
                      <div className="px-2">
                        <AiOutlineInfoCircle />
                      </div>
                      Details
                    </button>
                    <button className="flex">
                      <div className="px-2">
                        <IoIosRemoveCircleOutline color="red" />
                      </div>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="items-center justify-center flex w-full pr-2 relative">
                  <input
                    type="number"
                    defaultvalue={food.serving_weight_grams}
                    value={food.serving_weight_grams}
                    onChange={(e) =>
                      setSelectedFood(
                        selectedFood.map((item) =>
                          item.id === food.id
                            ? {
                                ...item,
                                serving_weight_grams: e.target.value,
                              }
                            : item
                        )
                      )
                    }
                    className="bg-gray-200 text-center flex text-black h-10 w-16 pb-2 sm"
                  />
                  <p className="absolute bottom-0 text-gray-600 pb-1 text-xs">
                    g
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
        selectedFood={selectedFood}
        setSelectedFood={setSelectedFood}
      />
    </div>
  );
};
