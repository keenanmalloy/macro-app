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

  const handleRemove = (id) => {
    const newSelectedFood = selectedFood.filter((food) => food.id !== id);
    setSelectedFood(newSelectedFood);
    console.log(selectedFood);
  };

  return (
    <div className="bg-slate-50 h-screen overflow-hidden">
      <FoodSearchHeader
        isVisible={isVisible}
        setIsModalVisible={setIsModalVisible}
        selectedFood={selectedFood}
        setSelectedFood={setSelectedFood}
      />
      <div className="fixed top-32 overflow-auto h-screen scrollbar-hide">
        {selectedFood.length < 1 ? (
          <div className="flex pl-20 space-x-5 text-slate-300">
            <GiKnifeFork /> <p>Add one or more items below</p>
          </div>
        ) : null}
        <div>
          {selectedFood.map((food) => (
            <div key={food.id}  className="py-3 pl-5 flex  ">
              <img src={food.image} className="w-10 h-10 mr-3" />
              <div className="flex border-b border-solid border-slate-300 w-full">
                <div className=" text-black">
                  <h3 className="px-1 text-black truncate text-ellipsis w-64">
                    {food.name.replace(/(^\w)|([-\s]\w)/g, (match) =>
                      match.toUpperCase()
                    )}
                  </h3>
                  <div className="flex text-xs ">
                    <p className="pr-2">{food.calories} kcal</p>
                    <p className="pr-2">{food.protein}P</p>
                    <p className="pr-2">{food.fats}F</p>
                    <p className="pr-2">{food.carbs}C</p>
                    <p>{Math.round(food.serving_weight_grams)}g</p>
                  </div>
                  <div className="space-x-5 py-5 text-sm flex items-center">
                    <button className="flex ">
                      <div className="px-2">
                        <AiOutlineInfoCircle />
                      </div>
                      Details
                    </button>
                    <button className="flex" onClick={() => handleRemove(food.id)}>
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
                    value={
                      !food.serving_weight_grams
                        ? food.serving_quantity
                        : food.serving_weight_grams
                    }
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
                  <p className="absolute bottom-6 text-gray-600 pb-1 text-xs">
                    {!food.serving_weight_grams ? food.serving_unit : "g"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!selectedFood.length < 1 ? (
          <div className="pt-[800px] pb-64">
            <DailyNutritionImpact />
            <GeneralNutritionInfo />
            <CarbBreakdown />
            <ProteinBreakdown />
            <FatBreakdown />
            <Vitamins />
            <Minerals />
            <Other />
          </div>
        ) : null}
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

const CircleProgress = ({ percentage }) => {
  return (
    <svg class="w-20 h-20">
      <circle
        class="text-gray-300"
        stroke-width="4"
        stroke="currentColor"
        fill="transparent"
        r="15"
        cx="40"
        cy="40"
      />
      <circle
        class="text-slate-500"
        stroke-width="5"
        stroke="currentColor"
        stroke-linecap="round"
        fill="transparent"
      />
    </svg>
  );
};

const DailyNutritionImpact = () => {
  return (
    <div className="w-screen border-b  border-solid border-slate-300 pr-10">
      <h3 className="pl-6 -mb-2 text-xl">Impact on Day</h3>
      <div className="flex w-full justify-around">
        <div className="flex items-center">
          <CircleProgress />
          <div className="-ml-3 space-y-1">
            <h4>Calories</h4>
            <p>0 kcal, 0 remains</p>
          </div>
        </div>
        <div className="flex items-center">
          <CircleProgress />
          <div className="-ml-3 space-y-1">
            <h4>Protein</h4>
            <p>0 g, 0 remains</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around space-x-5">
        <div className="flex items-center">
          <CircleProgress />
          <div className="-ml-3 space-y-1">
            <h4>Fats</h4>
            <p>0 g, 0 remains</p>
          </div>
        </div>
        <div className="flex items-center">
          <CircleProgress />
          <div className="-ml-3 space-y-1">
            <h4>Carbs</h4>
            <p>0 g, 0 remains</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GeneralNutritionInfo = () => {
  return (
    <div>
      <h3 className="p-7 text-xl">Nutrition</h3>
      <h4 className="pl-7 text-lg">General</h4>
      <div className="w-full px-7">
        <div className="flex justify-between pt-4">
          <p>Alcohol</p>
          <p>{}g</p>
        </div>
        <div className="flex justify-between py-3">
          <p>Caffiene</p>
          <p>{}mg</p>
        </div>
        <div className="flex justify-between">
          <p>Water</p>
          <p>{}g</p>
        </div>
      </div>
    </div>
  );
};

const CarbBreakdown = () => {
  return (
    <div>
      <h3 className="pl-7 pt-8 text-lg">Carb Breakdown</h3>
      <div className=" px-7">
        <div className="flex justify-between pt-4">
          <div className="flex-col">
            <p>Total</p>
            <div className="pl-4 pt-2 space-y-2">
              <p>Fiber</p>
              <p>Starch</p>
              <p>Sugars</p>
              <p className="pl-5">Sugars Added</p>
            </div>
            <p className="pt-2">Net (Non-fiber)</p>
          </div>
          <div>
            <p>{}g</p>
            <div className=" pt-2 space-y-2">
              <p>{}g</p>
              <p>{}g</p>
              <p>{}g</p>
              <p>{}g</p>
            </div>
            <p className="pt-2">{}g</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProteinBreakdown = () => {
  return (
    <div>
      <h3 className="pl-7 pt-8 text-lg">Protein Breakdown</h3>
      <div className=" px-7">
        <div className="flex justify-between pt-4">
          <div className="flex-col">
            <p>Total</p>
            <div className="pl-4 pt-2 space-y-2">
              <p>Cystine</p>
              <p>Histidine</p>
              <p>Isoleucine</p>
              <p>Leucine</p>
              <p>Lysine</p>
              <p>Methionine</p>
              <p>Phenylalanine</p>
              <p>Threonine</p>
              <p>Tryptophan</p>
              <p>Tyrosine</p>
              <p>Valine</p>
            </div>
          </div>
          <div className=" space-y-2">
            <p>{}g</p>
            <p>{}g</p>
            <p>{}g</p>
            <p>{}g</p>
            <p>{}g</p>
            <p>{}g</p>
            <p>{}g</p>
            <p>{}g</p>
            <p>{}g</p>
            <p>{}g</p>
            <p>{}g</p>
            <p>{}g</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FatBreakdown = () => {
  return (
    <div>
      <h3 className="pl-7 pt-8 text-lg">Fat Breakdown</h3>
      <div className=" px-7">
        <div className="flex justify-between pt-4">
          <div className="flex-col">
            <p>Total</p>
            <div className="pl-4 pt-2 space-y-2">
              <p>Monounsaturated Fat</p>
              <p>Polyunsaturated Fat</p>
              <p className="pl-5">Omega-3</p>
              <p className="pl-10">Omega-3 ALA</p>
              <p className="pl-10">Omega-3 EPA</p>
              <p className="pl-10">Omega-3 DHA</p>
              <p className="pl-5">Omega-6</p>
              <p>Saturated Fat</p>
              <p>Trans Fat</p>
            </div>
          </div>
          <div>
            <p>{}g</p>
            <div className=" pt-2 space-y-2">
              <p>{}g</p>
              <p>{}g</p>
              <p>{}g</p>
              <p>{}g</p>
              <p>{}g</p>
              <p>{}g</p>
              <p>{}g</p>
              <p>{}g</p>
              <p>{}g</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Vitamins = () => {
  return (
    <div>
      <h3 className="pl-7 pt-8 text-lg">Vitamins</h3>
      <div className=" px-7">
        <div className="flex justify-between pt-4">
          <div className="flex-col">
            <div className=" pt-2 space-y-2">
              <p>B1, Thiamine</p>
              <p>B2, Riboflavin</p>
              <p>B3, Niacin</p>
              <p>B5, Pantothenic Acid</p>
              <p>B6, Pyridoxine</p>
              <p>B12, Cobalamin</p>
              <p>Folate</p>
              <p>Vitamin A</p>
              <p>Vitamin C</p>
              <p>Vitamin D</p>
              <p>Vitamin E</p>
              <p>Vitamin K</p>
            </div>
          </div>
          <div className="pt-2 space-y-2 ">
            <p className="pl-1.5">{}mg</p>
            <p className="pl-1.5">{}mg</p>
            <p className="pl-1.5">{}mg</p>
            <p className="pl-1.5">{}mg</p>
            <p className="pl-1.5">{}mg</p>
            <p>{}mcg</p>
            <p>{}mcg</p>
            <p>{}mcg</p>
            <p className="pl-1.5">{}mg</p>
            <p>{}mcg</p>
            <p className="pl-1.5">{}mg</p>
            <p>{}mcg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Minerals = () => {
  return (
    <div>
      <h3 className="pl-7 pt-8 text-lg">Minerals</h3>
      <div className=" px-7">
        <div className="flex justify-between pt-4">
          <div className="flex-col">
            <div className=" pt-2 space-y-2">
              <p>Calcium</p>
              <p>Copper</p>
              <p>Iron</p>
              <p>Magnesium</p>
              <p>Manganese</p>
              <p>Phosphorus</p>
              <p>Potassium</p>
              <p>Selenium</p>
              <p>Sodium</p>
              <p>Zinc</p>
            </div>
          </div>
          <div className="pt-2 space-y-2 ">
            <p className="pl-1.5">{}mg</p>
            <p className="pl-1.5">{}mg</p>
            <p className="pl-1.5">{}mg</p>
            <p className="pl-1.5">{}mg</p>
            <p className="pl-1.5">{}mg</p>
            <p className="pl-1.5">{}mg</p>
            <p className="pl-1.5">{}mg</p>
            <p>{}mcg</p>
            <p className="pl-1.5">{}mg</p>
            <p className="pl-1.5">{}mg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Other = () => {
  return (
    <div>
      <h3 className="pl-7 pt-8 text-lg">Other</h3>
      <div className=" px-7">
        <div className="flex justify-between pt-4">
          <div className="flex-col">
            <div className=" pt-2 space-y-2">
              <p>Cholesterol</p>
              <p>Choline</p>
            </div>
          </div>
          <div className="pt-2 space-y-2 ">
            <p className="pl-1.5">{}mg</p>
            <p className="pl-1.5">{}mg</p>
          </div>
        </div>
      </div>
    </div>
  );
};
