import React, { useState } from "react";
import { Calendar } from "react-calendar";
import { GrFormNext } from "react-icons/gr";
import { SliderDot } from "./SliderDot";

export const DataAndHabits = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="bg-slate-100">
      <h3 className="px-5 text-xl">Data & Habits</h3>
      <div className="flex justify-center pt-3 ">
        <div className="bg-white rounded-xl w-[90%] p-3">
          <h3 className="text-left">Nutrition Habits</h3>
          <h4 className="text-left text-sm">Aug 27 - Now</h4>
          <div className="py-3">
            <Calendar
              onChange={onChange}
              value={value}
              showNavigation={false}
              selectRange={true}
              tileClassName="p-4 rounded-full border border-solid border-slate-200"
            />
          </div>
          <div className="border-t border-solid border-slate-500 flex justify-between pt-2">
            <p>
              0/7 <span className="text-xs">this week</span>{" "}
            </p>
            <p className="pr-20 ">
              0 <span className="text-xs">all time</span>{" "}
            </p>
            <div>
              <GrFormNext />
            </div>
          </div>
        </div>
      </div>
      <div >
        <SliderDot />
      </div>
      <div className="bg-slate-100 pb-20">
      <div className="flex justify-evenly pt-5 px-3 space-x-3">
        <button className="bg-white rounded-xl w-full p-3">
          <h3 className="text-left">Scale Weight</h3>
          <h4 className="text-left text-sm pb-10">Aug 27 - Now</h4>
          <p className="border-t border-solid border-slate-500 flex justify-between pt-2">
            --- lbs <GrFormNext />
          </p>
        </button>
        <button className="bg-white rounded-xl w-full p-3">
          <h3 className="text-left">Nutrition</h3>
          <h4 className="text-left text-sm pb-10">Aug 27 - Now</h4>
          <p className="border-t border-solid border-slate-500 flex justify-between pt-2">
            ---- kcal <GrFormNext />
          </p>
        </button>
      </div>
    </div>
    </div>
  );
};
