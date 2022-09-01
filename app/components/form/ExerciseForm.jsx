import React from "react";

export const ExerciseForm = ({ step, setStep }) => {
  return (
    <div>
      <form action="">
        <h2 className="font-bold text-3xl p-2">How often do you exercise?</h2>
        <p className="p-2 leading-snug">
          Choose the option that best describes your exercise habits. i.e how
          many cardio, sports, strength training sessions etc do you perform per
          week.
        </p>
        <div className="flex flex-col pt-5 px-3 space-y-2">
          <button className="w-full border-2 border-solid border-slate-600 rounded h-20" type="button">0 sessisons / week</button>
          <button className="w-full border-2 border-solid border-slate-600 rounded h-20" type="button">1-3 sessions / week</button>
          <button className="w-full border-2 border-solid border-slate-600 rounded h-20" type="button">4-6 sessions / week</button>
          <button className="w-full border-2 border-solid border-slate-600 rounded h-20" type="button">7+ sessions / week</button>
        </div>
      </form>
    </div>
  );
};
