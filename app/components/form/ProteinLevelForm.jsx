import React from "react";

export const ProteinLevelForm = ({ step, setStep }) => {
  return (
    <div>
      <form action="">
        <h2 className="font-bold text-3xl p-2">What is your preferred protein level?</h2>
        <div className="flex flex-col pt-5 px-3 space-y-2">
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10 "
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">
                Low
            </h4>
            <p className="text-left">
                On the low end of the optimal range.
            </p>
          </button>
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10"
            type="button"
          >
           <h4 className="text-left pb-3 font-bold">
                Moderate
            </h4>
            <p className="text-left">
                In the middle of the optimal range.
            </p>
          </button>
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10"
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">
                High
            </h4>
            <p className="text-left">
              On the high end of the optimal range.
            </p>
          </button>
          <button
            className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10 "
            type="button"
          >
            <h4 className="text-left pb-3 font-bold">
                Extra High
            </h4>
            <p className="text-left">
                Highest recommended intake
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};
