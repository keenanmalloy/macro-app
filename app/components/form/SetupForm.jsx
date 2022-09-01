import React, { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { SexForm } from "./SexForm";
import { AgeForm } from "./AgeForm";
import { HeightForm } from "./HeightForm";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { WeightForm } from "./WeightForm";
import { BodyFatForm } from "./BodyFatForm";
import { ExerciseForm } from "./ExerciseForm";
import { ActivityForm } from "./ActivityForm";
import { CardioForm } from "./CardioForm";
import { LiftingForm } from "./LiftingForm";
import { EstimatedExpenditure } from "./EstimatedExpenditure";

export const steps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const SetupForm = ({ isNotAccurate, setIsNotAccurate }) => {
  const [step, setStep] = useState(0);
  return (
    <div>
      <ProgressBar step={step} setStep={setStep} />
      {step === 0 && <SexForm step={step} setStep={setStep} />}
      {step === 1 && <AgeForm step={step} setStep={setStep} />}
      {step === 2 && <HeightForm step={step} setStep={setStep} />}
      {step === 3 && <WeightForm step={step} setStep={setStep} />}
      {step === 4 && <BodyFatForm step={step} setStep={setStep} />}
      {step === 5 && <ExerciseForm step={step} setStep={setStep} />}
      {step === 6 && <ActivityForm step={step} setStep={setStep} />}
      {step === 7 && <CardioForm step={step} setStep={setStep} />}
      {step === 8 && <LiftingForm step={step} setStep={setStep} />}
      {step === 9 && <EstimatedExpenditure step={step} setStep={setStep} />}

      <div className="fixed bottom-10 right-5 left-5 flex flex-row-reverse justify-between">
        <button
          className="bg-slate-500 text-white w-24 p-3 rounded-full flex justify-evenly"
          type="button"
          onClick={() => setStep(step + 1)}
          disabled={step === steps.length - 1}
        >
          {step === 9 ? "Finish" : "Next"}
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
