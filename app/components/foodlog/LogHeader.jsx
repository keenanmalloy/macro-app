import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { AiOutlineFire } from "react-icons/ai";
import { SliderDot } from "/app/components/dashboard/SliderDot";
import { FoodSearchHeader } from "/app/components/foodlog/FoodSearchHeader";
import { BsDot } from "react-icons/bs";

export const LogHeader = ({
  nutritionData,
  setIsModalVisible,
  scrollPosition,
  setScrollPosition,
}) => {
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    weekday: "short",
  };
  const today = new Date();

  const reducedProtein = !nutritionData
    ? null
    : nutritionData.reduce((acc, pro) => {
        return acc + pro.protein;
      }, 0);

  const reducedCarbs = !nutritionData
    ? null
    : nutritionData.reduce((acc, carbs) => {
        return acc + carbs.carbs;
      }, 0);

  const reducedFats = !nutritionData
    ? null
    : nutritionData.reduce((acc, fats) => {
        return acc + fats.fats;
      }, 0);

  const reducedCalories = !nutritionData
    ? null
    : nutritionData.reduce((acc, calories) => {
        return acc + calories.calories;
      }, 0);

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    <div className="w-full fixed z-50 bg-white">
      <div className="flex justify-between items-center p-3">
        <button>
          <GiHamburgerMenu size={20} />
        </button>
        <div className="flex items-center">
          <button className="px-5">
            <GrFormPrevious />
          </button>
          <div>{today.toLocaleDateString("en-US", options)}</div>
          <button className="px-5">
            <GrFormNext />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button>
            <MdExpandLess />
          </button>
          <button>
            <MdExpandMore />
          </button>
        </div>
      </div>
      <div>
        <FoodSearchHeader
          reducedCalories={reducedCalories}
          reducedProtein={reducedProtein}
          reducedFats={reducedFats}
          reducedCarbs={reducedCarbs}
          setIsModalVisible={setIsModalVisible}
          scrollPosition={scrollPosition}
          setScrollPosition={setScrollPosition}
        />

        <div className="border-b border-solid border-slate-300 w-full">
          <div className="flex justify-center -space-x-11">
            <BsDot
              size={30}
              color={scrollPosition > 200 ? "black" : "lightgray"}
            />
            <BsDot
              size={30}
              color={scrollPosition > 200 ? "lightgray" : "black"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
