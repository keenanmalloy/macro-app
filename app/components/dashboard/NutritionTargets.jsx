import React from "react";
import { AiOutlineLine } from "react-icons/ai";

export const NutritionTargets = () => {
  return (
    <div>
      <h3 className="px-5 text-xl">Nutrition & Targets</h3>
      <div className="flex pl-3">
        <button className="text-center focus:border focus:border-solid focus:rounded focus:border-slate-600 pb-2">
          <NutritionColumn day="M" />
        </button>
        <button className="text-center focus:border focus:border-solid focus:rounded focus:border-slate-600 pb-2">
          <NutritionColumn day="T" />
        </button>
        <button className="text-center focus:border focus:border-solid focus:rounded focus:border-slate-600 pb-2">
          <NutritionColumn day="W" />
        </button>
        <button className="text-center focus:border focus:border-solid focus:rounded focus:border-slate-600 pb-2">
          <NutritionColumn day="T" />
        </button>
        <button className="text-center focus:border focus:border-solid focus:rounded focus:border-slate-600 pb-2">
          <NutritionColumn day="F" />
        </button>
        <button className="text-center focus:border focus:border-solid focus:rounded focus:border-slate-600 pb-2">
          <NutritionColumn day="S" />
        </button>
        <button className="text-center focus:border focus:border-solid focus:rounded focus:border-slate-600 pb-2">
          <NutritionColumn day="S" />
        </button>
        <div className="flex flex-col space-y-3 pt-3 pl-1">
          <p>
            3659 kcal <br /> of 3659
          </p>
          <p>
            199 P <br /> of 199
          </p>
          <p>
            81 F <br /> of 81
          </p>
          <p>
            532 C <br /> of 532
          </p>
        </div>
      </div>
      <div className="flex justify-center py-3">
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
    <div className="w-4 bg-gray-200 h-8 dark:bg-gray-700">
      <div className="bg-white mx-auto mt-1 h-0.5 w-2"></div>
      <div
        className="bg-green-400 mx-auto w-1 flex items-center justify-center"
        style={{ height: "0%" }}
      ></div>
    </div>
  );
};

const NutritionColumn = ({ day }) => {
  return (
    <div className="flex-col flex px-2.5 pt-3">
      <div className="flex space-y-3 flex-col">
        <VerticalBar />
        <VerticalBar />
        <VerticalBar />
        <VerticalBar />
        <p>{day}</p>
      </div>
    </div>
  );
};
