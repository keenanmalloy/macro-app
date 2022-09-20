import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiBarcodeReader, BiBook } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";
import { MdEditCalendar, MdPlaylistAdd } from "react-icons/md";
import { RiFridgeLine } from "react-icons/ri";
import { Barcode } from "./Barcode";
import { Search } from "./Search";

export const LogSlider = ({
  y,
  setY,
  setIsVisible,
  height,
  selected,
  setSelected,
  selectedFood,
  setSelectedFood,
}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const minSwipeDistance = 110;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < minSwipeDistance;
    if (isDownSwipe || isUpSwipe)
      if (isDownSwipe) {
        console.log("down");
        setY(87);
      }
    if (isUpSwipe) {
      console.log("up");
      setY(4);
    }
  };

  useEffect(() => {
    if (y > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [y]);

  console.log(y);

  const handleSwiping = (e) => {
    const desiredYBottom = 87;
    const desiredYTop = 4;
    const swipeY = e.touches[0].clientY / 10;
    setTouchEnd(swipeY);

    setY(
      swipeY < desiredYTop
        ? desiredYTop
        : desiredYBottom < swipeY
        ? desiredYBottom
        : swipeY
    );
  };

  const scrollable = y <= 7 ? "overflow-y-auto" : "overflow-y-hidden";

  return (
    <div
      className={`${scrollable} bg-white overflow-x-hidden h-full scrollbar-hide `}
      style={{
        transform: `translateY(${y}%)`,
      }}
    >
      <header className="sticky -top-5 z-10 overflow-hidden scrollbar-hide bg-slate-50 pt-5">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex pl-2 pb-2 space-x-5 w-[800px] ">
            {selectedFood.map((food, i) => (
              <button key={i} className="border-2 p-1 rounded-full ">
                <img
                  className="rounded-full w-8 h-8 object-cover"
                  src={food.image}
                />
              </button>
            ))}
            <div className="space-x-2  overflow-hidden absolute left-[240px] flex items-center w-full pl-4  h-12 ">
              <button className="rounded-full bg-slate-300 p-2">
                <MdEditCalendar />
              </button>
              <button className="rounded-2xl bg-black text-white px-3 py-2">
                Log Items
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex justify-center bg-white">
            <button
              onTouchMove={handleSwiping}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              className="flex justify-center items-center bg-white pt-2 px-10"
            >
              <SliderBar />
            </button>
          </div>

          <div className="pt-2 overflow-hidden ">
            <SliderIcons selected={selected} setSelected={setSelected} />
          </div>
        </div>
      </header>
      {selected === "Search" && (
        <Search
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          selectedFood={selectedFood}
          setSelectedFood={setSelectedFood}
        />
      )}
      {selected === "Barcode" && <Barcode />}
      {/* <div>
        <Search isSearching={isSearching} setIsSearching={setIsSearching} />
      </div> */}
    </div>
  );
};

const SliderBar = () => {
  return <div className="rounded w-8 bg-slate-300 h-2 "></div>;
};

const SliderIcons = ({ selected, setSelected }) => {
  return (
    <>
      <div className="bg-white flex items-center justify-between  overflow-auto scrollbar-hide text-sm ">
        <SliderTab
          selected={selected}
          setSelected={setSelected}
          icon={<BiBarcodeReader />}
          name="Barcode"
        />
        <SliderTab
          selected={selected}
          setSelected={setSelected}
          icon={<AiOutlineSearch />}
          name="Search"
        />
        <SliderTab
          selected={selected}
          setSelected={setSelected}
          icon={<MdPlaylistAdd />}
          name="Quick Add"
        />
        <SliderTab
          selected={selected}
          setSelected={setSelected}
          icon={<FaRobot />}
          name="AI Describe"
        />
        <SliderTab
          selected={selected}
          setSelected={setSelected}
          icon={<RiFridgeLine />}
          name="Custom"
        />
        <SliderTab
          selected={selected}
          setSelected={setSelected}
          icon={<BiBook />}
          name="Recipe"
        />
      </div>
    </>
  );
};

const SliderTab = ({ name, icon, selected, setSelected }) => {
  const isSelected = selected === name;
  return (
    <div className="flex flex-col relative">
      <button
        className="flex items-center py-2"
        onClick={() => setSelected(name)}
      >
        {icon} <p className="w-20">{name}</p>
      </button>
      <div
        className={
          isSelected
            ? "w-full bg-black h-1  absolute bottom-0 "
            : "w-full bg-slate-300 h-1 absolute bottom-0"
        }
      ></div>
    </div>
  );
};
