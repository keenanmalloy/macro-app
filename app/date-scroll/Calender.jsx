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
          onClick={handleScheduling}
        >
          Select
        </button>
      </Modal>
    </>
  );
};
