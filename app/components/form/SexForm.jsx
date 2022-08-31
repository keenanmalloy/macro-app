import React from "react";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";

export const SexForm = ({step, setStep}) => {
  return (
    <div>
      <form action="">
        <h2 className="font-bold text-3xl p-2">What is your sex?</h2>
        <p className="p-2 leading-snug">
          This selection will be used to help visually guide you in determining
          your body fat percentage.
        </p>
        <div className="px-3 py-1">
          <button
            className="flex p-7 w-full border-slate-500 border-2 border-solid rounded-lg focus:border-slate-200"
            type="button"
          >
            <span>
              <BiMaleSign />
            </span>
            Male
          </button>
        </div>
        <div className="px-3 py-1">
          <button
            className="flex p-7 w-full border-slate-500 border-2 border-solid rounded-lg focus:border-slate-200"
            type="button"
          >
            <span>
              <BiFemaleSign />
            </span>
            Female
          </button>
        </div>
        
      </form>
    </div>
  );
};
