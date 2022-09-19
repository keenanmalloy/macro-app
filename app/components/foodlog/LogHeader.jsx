import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { AiOutlineFire } from "react-icons/ai";
import { SliderDot } from "/app/components/dashboard/SliderDot";

export const LogHeader = () => {
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    weekday: "short",
  };
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    <div className="w-full fixed z-50 bg-white">
      <div className="flex justify-between items-center p-3">
        <button>
          <GiHamburgerMenu size={20} />
        </button>
        <div className="flex items-center">
          <button className="px-5">
            <GrFormPrevious />
          </button>
          <div>{today.toLocaleDateString("en-US", options)}</div>
          <button className="px-5">
            <GrFormNext />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button>
            <MdExpandLess />
          </button>
          <button>
            <MdExpandMore />
          </button>
        </div>
      </div>
      <div className="flex justify-evenly pb-2">
        <div className="w-full px-2">
          <div className="flex space-x-1">
            <AiOutlineFire />
            <p>0/1987</p>
          </div>
          <div className="w-full h-1 bg-slate-300"></div>
        </div>
        <div className="w-full px-2">
          P 0/206<div className="w-full h-1 bg-slate-300"></div>
        </div>
        <div className="w-full px-2">
          F 0/66<div className="w-full h-1 bg-slate-300"></div>
        </div>
        <div className="w-full px-2">
          C 0/140<div className="w-full h-1 bg-slate-300"></div>
        </div>
      </div>
      <div className="border-b border-solid border-slate-300">
        <SliderDot />
      </div>
    </div>
  );
};
