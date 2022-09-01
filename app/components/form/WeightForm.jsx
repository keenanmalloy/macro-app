import React from "react";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";

export const WeightForm = ({ step, setStep }) => {
  return (
    <div>
      <form action="">
        <h2 className="font-bold text-3xl p-2">What is your weight?</h2>
        <p className="p-2 leading-snug">
          Measure your bodyweight at the same time of day, preferably in the
          morning, and before eating or drinking anything for best accuracy.
        </p>
        <div className="pt-5">
          <div className="-mb-4">
            <label htmlFor="weight" className="pl-5">
              Current bodyweight
            </label>
          </div>
          <div className="flex p-5">
            <input
              className="border-2 border-solid border-slate-600 h-14 w-3/4 px-5"
              type="number"
              name="weight"
              id="weight"
              placeholder="Enter your weight"
            />
            <select className="ml-3 w-1/4 pl-3 border-2 border-solid border-slate-600 ">
              <option value="lbs">lbs</option>
              <option value="kg">kg</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
