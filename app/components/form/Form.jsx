import React, { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { SexForm } from "./SexForm";
import { AgeForm } from "./AgeForm";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const steps = [0, 1, 2, 3, 4, 5];

export const Form = () => {
  const [step, setStep] = useState(0);
  return (
    <div>
      <ProgressBar step={step} setStep={setStep} />
      {step === 0 && <SexForm step={step} setStep={setStep} />}
      {step === 1 && <AgeForm step={step} setStep={setStep} />}

      <div className="fixed bottom-10 right-5 left-5 flex flex-row-reverse justify-between">
        <button
          className="bg-slate-500 text-white w-20 p-3 rounded-full flex justify-evenly"
          type="button"
          onClick={() => setStep(step + 1)}
          disabled={step === steps.length - 1}
        >
          Next
          <GrFormNext />
        </button>
        <button
          className="bg-slate-500 text-white p-3 rounded-full flex justify-evenly"
          type="button"
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
        >
          <GrFormPrevious />
        </button>
      </div>
    </div>
  );
};
