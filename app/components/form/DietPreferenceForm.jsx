import React from "react";

export const DietPreferenceForm = ({ step, setStep }) => {
  return (
    <div>
      <form action="">
        <h2 className="font-bold text-3xl p-2">What is your preferred diet?</h2>
        <div className="flex flex-col pt-5 px-3 space-y-2">
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10 "
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">
                Balanced
            </h4>
            <p className="text-left">
                Balanced distrubition of carbs and fats.
            </p>
          </button>
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10"
            type="button"
          >
           <h4 className="text-left pb-3 font-bold">
                Low-fat
            </h4>
            <p className="text-left">
                Lower fat intake to prioritize protein and carbs.
            </p>
          </button>
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10"
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">
                Low Carb
            </h4>
            <p className="text-left">
                Lower carb intake to prioritize protein and fats.
            </p>
          </button>
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10 "
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">
                Keto
            </h4>
            <p className="text-left">
                Carbs will be very restricted to allow for a higher fat intake.
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};
