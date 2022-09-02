import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { ProgramProgressBar } from "./ProgramProgressBar";

import { DietPreferenceForm } from "./DietPreferenceForm";
import { GoalsForm } from "./GoalsForm";
import { CalorieFloorForm } from "./CalorieFloorForm";
import { TrainingForm } from "./TrainingForm";
import { ShiftCalorieForm } from "./ShiftCalorieForm";
import { ProteinLevelForm } from "./ProteinLevelForm";
import Link from "next/link";
import { HigherCalorieDaysForm } from "./HigherCalorieDaysForm";

export const programSteps = [0, 1, 2, 3, 4, 5,6];

export const ProgramForm = () => {
  const [programStep, setProgramStep] = useState(0);

  return (
    <div>
      {/* {programStep < 0 && <SetupForm setStep={9} />} */}
      {programStep < 0 && <GoalsForm />}
      {programStep >= 0 && (
        <ProgramProgressBar step={programStep} setStep={setProgramStep} />
      )}
      {programStep === 0 && (
        <DietPreferenceForm step={programStep} setStep={setProgramStep} />
      )}
      {programStep === 1 && (
        <CalorieFloorForm step={programStep} setStep={setProgramStep} />
      )}
      {programStep === 2 && (
        <TrainingForm step={programStep} setStep={setProgramStep} />
      )}
      {programStep === 3 && (
        <ShiftCalorieForm step={programStep} setStep={setProgramStep} />
      )}
      {programStep === 4 && (
        <HigherCalorieDaysForm step={programStep} setStep={setProgramStep} />
      )}
      {programStep === 5 && (
        <ProteinLevelForm step={programStep} setStep={setProgramStep} />
      )}

      {/* {programStep === 1 && (
        <WeightGainLossForm step={programStep} setStep={setProgramStep} />
      )} */}
      {/* {programStep === 2 && (
        <RatetGainLossForm step={programStep} setStep={setProgramStep} />
      )} */}

      <div className="fixed bottom-10 right-5 left-5 flex flex-row-reverse justify-between">
        {programStep === 5 ? (
          <Link href='/'>
            <a className="bg-slate-500 text-white w-24 p-3 rounded-full flex justify-evenly">
            Finish
            <GrFormNext />
            </a>
          </Link>
        ) : (
          <button
            className="bg-slate-500 text-white w-24 p-3 rounded-full flex justify-evenly"
            type="button"
            onClick={() => setProgramStep(programStep + 1)}
          >
            {programStep === 5 ? "Finish" : "Next"}
            <GrFormNext />
          </button>
        )}
        {programStep === 0 ? (
          <Link href="/goalsform">
            <a className="bg-slate-500 text-white p-3 rounded-full flex justify-evenly">
            <GrFormPrevious />
            </a>
          </Link>
        ) : (
          <button
            className="bg-slate-500 text-white p-3 rounded-full flex justify-evenly"
            type="button"
            onClick={() => setProgramStep(programStep - 1)}
          >
            <GrFormPrevious />
          </button>
        )}
      </div>
    </div>
  );
};
