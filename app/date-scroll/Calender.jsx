import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { generateCalendarState } from './generateCalendarState';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import Modal from '../modal/Modal';



export const CalendarComponent = ({
  displayDate,
  setSelectedDate,
  setSelected,
  items,
  scrollToItem,
  setItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleScheduling = () => {
    const filteredItem = items.filter(
      (item) =>
        item.month === value.getMonth() + 1 &&
        item.year === value.getFullYear() &&
        item.day === value.getDate()
    )[0];

    if (!filteredItem?.id) {
      setSelectedDate(value);
      setSelected(filteredItem);
      scrollToItem(filteredItem.id);
      setIsOpen(false);
      return;
    }

    setSelected(filteredItem);
    scrollToItem(filteredItem.id);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="text-white flex items-center rounded-sm px-2 py-1
        hover:text-slate-200 hover:ring-1 hover:ring-slate-700
        focus:text-slate-200 focus:ring-1 focus:ring-slate-700
        active:text-slate-200 
        transition"
        onClick={() => setIsOpen(true)}
      >
        <div>{displayDate}</div>
        {isOpen ? <BiChevronUp /> : <BiChevronDown />}
      </button>
      <Modal
        title="Change day"
        description="View a summary of the day"
        closeModal={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        <Calendar
          onChange={(d) => {
            const filteredItem = items.filter(
              (item) =>
                item.month === d.getMonth() + 1 &&
                item.year === d.getFullYear() &&
                item.day === d.getDate()
            );
            if (!filteredItem.length) {
              setItems(generateCalendarState(d));
            }

            onChange(d);
          }}
          value={value}
          maxDetail="month"
          minDetail="month"
          next2Label=""
          prev2Label=""
          nextLabel={<span className="px-7 py-4 rounded-md ">&gt;</span>}
          prevLabel={<span className="px-7 py-4 rounded-md">&lt;</span>}
          tileClassName={({ activeStartDate, date, view }) => {
            return null;
          }}
        />

        <button
          className="bg-slate-900 py-4 mt-2 w-full z-50 rounded-md focus:ring-2 focus:ring-green-400  text-white"
          onClick={handleScheduling}
        >
          Select
        </button>
      </Modal>
    </>
  );
};
