import Link from "next/link";
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { GoalForm } from "./GoalForm";
import { GoalsProgressBar } from "./GoalsProgressBar";
import { ProgramForm } from "./ProgramForm";
import { RatetGainLossForm } from "./RateGainLossForm";
import { SetupForm } from "./SetupForm";
import { WeightGainLossForm } from "./WeightGainLossForm";

export const goalSteps = [0, 1, 2];

export const GoalsForm = ({ setStep }) => {
  const [goalStep, setGoalStep] = useState(0);

  return (
    <div>
      {goalStep < 0 && <SetupForm />}
      {goalStep <= 2 && (
        <GoalsProgressBar step={goalStep} setStep={setGoalStep} />
      )}
      {goalStep === 0 && <GoalForm step={goalStep} setStep={setGoalStep} />}
      {goalStep === 1 && (
        <WeightGainLossForm step={goalStep} setStep={setGoalStep} />
      )}
      {goalStep === 2 && (
        <RatetGainLossForm step={goalStep} setStep={setGoalStep} />
      )}
      {goalStep <= 2 && (
        <div className="fixed bottom-10 right-5 left-5 flex flex-row-reverse justify-between">
          {goalStep === 2 ? (
            <Link href="/programform">
              <a className="bg-slate-500 text-white p-3 rounded-full flex justify-evenly">
                <GrFormNext />
              </a>
            </Link>
          ) : (
            <button
              className="bg-slate-500 text-white w-24 p-3 rounded-full flex justify-evenly"
              type="button"
              onClick={() => setGoalStep(goalStep + 1)}
            >
              Next
              <GrFormNext />
            </button>
          )}
          {goalStep === 0 ? (
            <Link href="/setupform">
              <a className="bg-slate-500 text-white p-3 rounded-full flex justify-evenly">
                <GrFormPrevious />
              </a>
            </Link>
          ) : (
            <button
              className="bg-slate-500 text-white p-3 rounded-full flex justify-evenly"
              type="button"
              onClick={() => setGoalStep(goalStep - 1)}
            >
              <GrFormPrevious />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
