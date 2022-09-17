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
}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isMore, setIsMore] = useState(false);
  const [isSearching, setIsSearching] = useState(false);


  const minSwipeDistance = 0;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;
    if (isDownSwipe || isUpSwipe)
      if (isDownSwipe) {
        // console.log("swipe", isDownSwipe ? "down" : "up");
        setY(isSearching ? 650 : 600);
      }
    if (isUpSwipe) {
      setY(0);
    }
  };

  useEffect(() => {
    if (y > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [y]);

  const handleSwiping = (e) => {
    const desiredYBottom = isSearching ? 650 : 600;
    const desiredYTop = 0;
    const swipeY = e.touches[0].clientY - 118;
    setTouchEnd(e.touches[0].clientY);

    setY(
      swipeY < desiredYTop
        ? desiredYTop
        : desiredYBottom < swipeY
        ? desiredYBottom
        : swipeY
    );
  };

  return (
    <>
      <div
        className="relative bg-white"
        style={{
          transform: `translateY(${y}px)`,
          height: `${y - height}px`,
        }}
      >
        <header className="sticky top-0 z-10">
          <div className="space-x-3 pt-1 flex justify-end bg-slate-50 ">
            <button className="rounded-full bg-slate-300 p-2">
              <MdEditCalendar />
            </button>
            <button className="rounded-2xl bg-black text-white px-3 py-1">
              Log Items
            </button>
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

            <div className="pt-2  ">
              <SliderIcons selected={selected} setSelected={setSelected} />
            </div>
          </div>
        </header>
        {selected === "Search" && (
          <Search isSearching={isSearching} setIsSearching={setIsSearching} isMore={isMore} setIsMore={setIsMore} />
        )}
        {selected === "Barcode" && <Barcode />}
        {/* {}
          {}
          {}
          {} */}
      </div>
    </>
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
