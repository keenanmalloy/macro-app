import React from "react";
import { CgDetailsMore } from "react-icons/cg";
import { IoIosJournal } from "react-icons/io";
export const Footer = () => {
  return (
    <footer className="fixed bottom-5 w-full">
      <div className="flex justify-between px-5 pt-3 space-x-10">
        <button className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </button>
        <button className="flex flex-col items-center">
          <IoIosJournal />
          Log
        </button>
        <button className="flex flex-col items-center">
          <CgDetailsMore />
          More
        </button>
      </div>
    </footer>
  );
}
