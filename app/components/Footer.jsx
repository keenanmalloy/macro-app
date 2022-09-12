import React from "react";
import { CgMoreO } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoNutritionOutline, IoJournalOutline } from "react-icons/io5";
import Link from "next/link";
export const Footer = () => {
  return (
    <div>
      <footer className="fixed bottom-0 border-t border-solid border-slate-400  w-full text-sm bg-white">
        <div className="flex justify-evenly py-3 space-x-5">
          <Link href="/">
            <button className="flex flex-col items-center">
              <MdOutlineDashboard size={20} />
              Dashboard
            </button>
          </Link>
          <Link href="/log">
            <button className="flex flex-col items-center">
              <IoNutritionOutline size={20} />
              Log
            </button>
          </Link>
          <button className="flex flex-col items-center">
            <AiFillPlusCircle size={40} />
          </button>
          <Link href="/program">
            <button className="flex flex-col items-center">
              <IoJournalOutline size={20} />
              Program
            </button>
          </Link>

          <Link href="/more">
            <button className="flex flex-col items-center">
              <CgMoreO size={20} />
              More
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
};
