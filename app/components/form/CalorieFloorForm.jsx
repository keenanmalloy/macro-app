import React from "react";

export const CalorieFloorForm = ({ step, setStep }) => {
  return (
    <div>
      <form action="">
        <h2 className="font-bold text-3xl p-2">
          What calorie floor do you prefer?
        </h2>
        <div className="flex flex-col pt-5 px-3 space-y-2">
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10 "
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">Standard Floor</h4>
            <p className="text-left">Your recommendations will never go below ~0 Calories even if your TDEE adjusts over time.</p>
          </button>
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10"
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">Low Floor</h4>
            <p className="text-left">Your recommendations will never go below ~0 Calories. Proceed with caution.</p>
          </button>
        </div>
      </form>
    </div>
  );
};
