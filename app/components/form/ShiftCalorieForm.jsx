import React from "react";

export const ShiftCalorieForm = ({ step, setStep }) => {
  return (
    <div>
      <form action="">
        <h2 className="font-bold text-3xl p-2">
          Would you like to shift calories?
        </h2>
        <p className="p-2">Select your preference for calorie distribution throughout the week.</p>
        <div className="flex flex-col pt-5 px-3 space-y-2">
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10 "
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">Shift Calories</h4>
            <p className="text-left">Distribute calories to increase calorie targets on specific days.</p>
          </button>
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10"
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">Distribute Evenly</h4>
            <p className="text-left">Distribute calories evenly across all days of the week</p>
          </button>
        </div>
      </form>
    </div>
  );
};
