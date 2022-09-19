import React from "react";
import axios from "axios";
import { useState } from "react";

export const FoodSearchBar = ({ setIsSearching, setData }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setIsSearching(true);
    axios
      .get("/api/get")
      .then((res) => {
        setData(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className=" p-3 bg-white">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-black "
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
        </div>
        <button className="w-full" type="button">
          <input
            type="search"
            id="default-search"
            onChange={handleSearch}
            value={search}
            className="block p-3 pl-10 w-full text-sm rounded-3xl bg-gray-200 focus:border-2 focus:border-solid focus:border-black focus:outline-none"
            placeholder="Search for a food"
            required=""
            autoFocus
          />
        </button>
      </div>
    </form>
  );
};
