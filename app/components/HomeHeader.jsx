import React, { useState } from "react";
import dynamic from "next/dynamic";
import { generateCalendarState } from "../date-scroll/generateCalendarState";

const ScrollDatePicker = dynamic(
  // @ts-ignore
  import("../date-scroll/ScrollDatePicker").then((mod) => mod.ScrollDatePicker),
  { ssr: false }
);

export const HomeHeader = ({ selected, setSelected }) => {
  // state used to generate the array of calendar dates (+1 / -1 months)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [items, setItems] = useState(generateCalendarState(selectedDate));


  return (
    <nav className="text-red-500">
      <ScrollDatePicker
        // @ts-ignore
        items={items}
        setItems={setItems}
        selected={selected}
        setSelected={setSelected}
        // data={data}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </nav>
  );
};
