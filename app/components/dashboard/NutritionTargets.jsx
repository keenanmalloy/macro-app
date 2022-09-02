import React from "react";
import { AiOutlineLine } from "react-icons/ai";

export const NutritionTargets = () => {
  return (
    <div>
      <h3 className="px-5 text-xl">Nutrition & Targets</h3>
      <div className="border-b border-solid border-slate-200 pb-2">
        <NutritionRow nutrient={"kcal"} />
      </div>
      <div className="border-b border-solid border-slate-200 pb-2">
        <NutritionRow nutrient={"P"} />
      </div>
      <div className="border-b border-solid border-slate-200 pb-2">
        <NutritionRow nutrient={"F"} />
      </div>
      <div className="flex flex-col">
        <NutritionRow nutrient={"C"} />
        <div className="flex space-x-7 pl-6 pt-2">
          <p>M</p>
          <p>T</p>
          <p>W</p>
          <p>T</p>
          <p>F</p>
          <p>S</p>
          <p>S</p>
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <button className="px-3 h-9 bg-slate-600 text-white rounded-3xl focus:h-9">
          Consumed
        </button>
        <button className="px-3 h-9 focus:bg-slate-600 focus:text-white focus:rounded-3xl focus:h-9">
          Remaining
        </button>
      </div>
    </div>
  );
};

const VerticalBar = () => {
  return (
    <div className="w-5 bg-gray-200 h-8 dark:bg-gray-700">
      <div className="bg-white mx-auto mt-1 h-0.5 w-2"></div>
      <div
        className="bg-green-400 mx-auto w-1 flex items-center justify-center"
        style={{ height: "0%" }}
      ></div>
    </div>
  );
};

const NutritionRow = ({ nutrient }) => {
  return (
    <div className="flex space-x-5 px-5 pt-3">
      <div className="flex space-x-5">
        <VerticalBar />
        <VerticalBar />
        <VerticalBar />
        <VerticalBar />
        <VerticalBar />
        <VerticalBar />
        <VerticalBar />
      </div>

      <div>
        <h3>0 {nutrient}</h3>
        <p>of 0 {nutrient}</p>
      </div>
    </div>
  );
};
