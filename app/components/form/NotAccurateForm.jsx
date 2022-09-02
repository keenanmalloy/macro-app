import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const NotAccurateForm = ({ step, setStep }) => {
  return (
    <div>
      <form action="">
        <h2 className="font-bold text-3xl p-2">
          What is your current expenditure ?
        </h2>
        <p className="p-2 leading-snug">
          This estimate will help determine a starting point for your caloric
          expenditure.
        </p>
        <div className="flex flex-col p-2">
          <label htmlFor="expenditure">Initial Expenditure</label>
          <div>
            <input
              type="text"
              id="expenditure"
              name="expenditure"
              className="border-solid border-2 border-slate-600 rounded p-2 absolute w-full"
            />
            <h4 className="relative flex justify-end top-3">kcal</h4>
          </div>
          <p className="py-6">Our initial estimate was 0 kcal</p>
        </div>
      </form>
    </div>
  );
};
