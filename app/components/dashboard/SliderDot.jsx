import React from "react";
import { BsDot } from "react-icons/bs";

export const SliderDot = () => {
  return (
    <div className="flex justify-center -space-x-11 pt-2 bg-slate-100">
      <BsDot size={30} />
      <BsDot size={30} color='red'/>
    </div>
  );
};
