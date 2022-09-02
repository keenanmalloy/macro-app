import React from "react";

export const HigherCalorieDaysForm = ({ step, setStep }) => {
  return (
    <div>
      <form action="">
        <h2 className="font-bold text-3xl p-2">
          What days would you like to be higher calories?
        </h2>
        <p className="p-2 leading-snug">
          Select which days you would like to have higher calories on. i.e
          training days, weekends, etc.
        </p>
        <div className="flex flex-col pt-5 px-3 space-y-2 ">
          <div className="border-solid border-2 border-slate-600 h-20 flex items-center justify-between px-5">
            <label htmlFor="monday">Monday</label>

            <input type="checkbox" name="monday" id="monday" />
          </div>
          <div className="border-solid border-2 border-slate-600 h-20 flex items-center justify-between px-5">
            <label htmlFor="tuesday">Tuesday</label>

            <input type="checkbox" name="tuesday" id="tuesday" />
          </div>
          <div className="border-solid border-2 border-slate-600 h-20 flex items-center justify-between px-5">
            <label htmlFor="wednesday">Wednesday</label>

            <input type="checkbox" name="wednesday" id="wednesday" />
          </div>
          <div className="border-solid border-2 border-slate-600 h-20 flex items-center justify-between px-5">
            <label htmlFor="thursday">Thursday</label>

            <input type="checkbox" name="thursday" id="thursday" />
          </div>
          <div className="border-solid border-2 border-slate-600 h-20 flex items-center justify-between px-5">
            <label htmlFor="friday">Friday</label>
            <input type="checkbox" name="friday" id="friday" />
          </div>
          <div className="border-solid border-2 border-slate-600 h-20 flex items-center justify-between px-5">
            <label htmlFor="saturday">Saturday</label>
            <input type="checkbox" name="saturday" id="saturday" />
          </div>
          <div className="border-solid border-2 border-slate-600 h-20 flex items-center justify-between px-5">
            <label htmlFor="sunday">Sunday</label>
            <input type="checkbox" name="sunday" id="sunday" />
          </div>
        </div>
      </form>
    </div>
  );
};
