import React from "react";

export const CardioForm = ({ step, setStep }) => {
  return (
    <div>
      <form action="">
        <h2 className="font-bold text-3xl p-2">What is your cardio experience?</h2>
        <div className="flex flex-col pt-5 px-3 space-y-2">
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10 "
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">
                None
            </h4>
            <p className="text-left">
                Currently not doing cardio.
            </p>
          </button>
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10"
            type="button"
          >
           <h4 className="text-left pb-3 font-bold">
                Beginner
            </h4>
            <p className="text-left">
                Doing cardio for the past year or less.
            </p>
          </button>
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10"
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">
                Intermediate
            </h4>
            <p className="text-left">
                Doing cardio for more than the past year, but less than 4 years.
            </p>
          </button>
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10 "
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">
                Advanced
            </h4>
            <p className="text-left">
                Doing caridio for the past 4 years or more.
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};
