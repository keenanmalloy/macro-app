import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { NotAccurateForm } from "./NotAccurateForm";

export const EstimatedExpenditure = ({ step, setStep }) => {
  const [isNotAccurate, setIsNotAccurate] = useState(false);

  return (
    <div>
      {isNotAccurate ? (
        <NotAccurateForm step={step} setStep={setStep} />
      ) : (
        <form action="">
          <h2 className="font-bold text-3xl p-2">
            Your estimated caloric expenditure.
          </h2>
          <h2 className="font-bold text-3xl p-2 fixed top-60">0 kcal</h2>
          <h3 className="font-bold text-3xl p-2 pt-20 fixed top-60">
            Does this look accurate?
          </h3>
          <p className="p-2 fixed top-64 pt-28 leading-snug">
            Expenditure is the number of calories you need to maintain your
            current bodyweight.
          </p>
          <button
            className="bg-slate-500 text-white w-16 p-3 rounded-full flex fixed bottom-20 right-5 mb-1 justify-evenly"
            type="button"
            onClick={() => setIsNotAccurate(true)}
          >
            No
            <GrFormNext />
          </button>
        </form>
      )}
    </div>
  );
};
