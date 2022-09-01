import React from "react";

export const ActivityForm = ({ step, setStep }) => {
  return (
    <div>
      <form action="">
        <h2 className="font-bold text-3xl p-2">How active are you?</h2>
        <p className="p-2 leading-snug">
          Select the option that best describes your lifestyle. i.e how many
          steps do you take per day.
        </p>
        <div className="flex flex-col pt-5 px-3 space-y-2">
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10 "
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">
                Mostly Sedentary
            </h4>
            <p className="text-left">
                In most cases, this would be less than 5,000 steps per day.
            </p>
          </button>
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10"
            type="button"
          >
           <h4 className="text-left pb-3 font-bold">
                Moderately Active
            </h4>
            <p className="text-left">
                In most cases, this would be 5,000 - 15,000 steps per day.
            </p>
          </button>
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10"
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">
                Very Active
            </h4>
            <p className="text-left">
                In most cases, this would be more than 15,000 steps per day.
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};
