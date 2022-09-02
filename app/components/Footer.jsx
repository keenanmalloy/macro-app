import React from "react";
import { CgMoreO } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import {AiFillPlusCircle} from "react-icons/ai";
import {IoNutritionOutline, IoJournalOutline} from "react-icons/io5";
export const Footer = () => {
  return (
    <footer className="fixed bottom-5 w-full text-sm">
      <div className="flex justify-evenly pt-3 space-x-5">
        <button className="flex flex-col items-center">
          <MdOutlineDashboard size={20}/>
          Dashboard
        </button>
        <button className="flex flex-col items-center">
          <IoNutritionOutline size={20}/>
          Log
        </button>
        <button className="flex flex-col items-center">
          <AiFillPlusCircle size={40} />
        </button>
        <button className="flex flex-col items-center">
          <IoJournalOutline size={20}/>
          Program
        </button>
        <button className="flex flex-col items-center">
          <CgMoreO size={20}/>
          More
        </button>
      </div>
    </footer>
  );
}
