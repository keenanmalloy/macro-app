import React from "react";
import { BiBarcodeReader } from "react-icons/bi";

export const SearchBar = () => {
  return (
    <div className="fixed bottom-16 w-full px-3 pb-2">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 ">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <button type="button" className="relative left-80 text-gray-500 dark:text-gray-400" onClick={() => console.log('clicked')}>
            <BiBarcodeReader size={20}/>
            </button>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm rounded-3xl bg-gray-300"
            placeholder="Search for a food"
            required=""
          />
        </div>
      </form>
    </div>
  );
};
