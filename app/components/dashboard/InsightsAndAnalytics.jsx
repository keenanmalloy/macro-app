import React from "react";
import { GrFormNext } from "react-icons/gr";

export const InsightsAndAnalytics = () => {
  return (
    <div className="bg-slate-100">
      <h3 className="px-5 text-xl pt-3">Insights & Analytics</h3>
      <div className="flex justify-evenly pt-5 px-3 space-x-3">
        <button className="bg-white rounded-xl w-full p-3">
          <h3 className="text-left">Expenditure</h3>
          <h4 className="text-left text-sm pb-10">Aug 27 - Now</h4>
          <p className="border-t border-solid border-slate-500 flex justify-between pt-2">
            3445 kcal <GrFormNext />
          </p>
        </button>
        <button className="bg-white rounded-xl w-full p-3">
          <h3 className="text-left">Weight Trend</h3>
          <h4 className="text-left text-sm pb-10">Aug 27 - Now</h4>
          <p className="border-t border-solid border-slate-500 flex justify-between pt-2">
            194.4 lbs <GrFormNext />
          </p>
        </button>
      </div>
      <div className="flex justify-center py-3">
        <button className="bg-white rounded-xl w-[90%] p-3">
          <h3 className="text-left">Goal Progress</h3>
          <h4 className="text-left text-sm">Aug 27 - Now</h4>
          <div className="h-4 w-full my-5 bg-slate-100">
            <div className="h-4 w-[1%] bg-green-600"></div>
          </div>
          <p className="border-t border-solid border-slate-500 flex justify-between pt-2">
            1 day in <GrFormNext />
          </p>
        </button>
      </div>
    </div>
  );
};
