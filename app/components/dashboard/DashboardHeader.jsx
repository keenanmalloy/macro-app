import React from "react";

export const DashboardHeader = () => {
const options = {weekday: 'long', month: 'long', day: 'numeric'};
const today = new Date();


  return (
    <div className="p-5">
      <h3>{(today.toLocaleDateString("en-US", options))}</h3>
      <h2 className="text-3xl font-bold">Dashboard</h2>
    </div>
  );
};
