import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineFire, AiOutlineSearch } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import {
  MdEditCalendar,
  MdExpandLess,
  MdExpandMore,
  MdOutlineSettingsSuggest,
  MdPlaylistAdd,
} from "react-icons/md";
import { SliderDot } from "/app/components/dashboard/SliderDot";
import { BsDot } from "react-icons/bs";
import { BiBarcodeReader, BiBook } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";
import { RiFridgeLine } from "react-icons/ri";
import axios from "axios";
// import { Text, View, StyleSheet, Button } from "react-native";
// import { BarCodeScanner } from "expo-barcode-scanner";

export const FoodSearchModal = ({ setIsModalVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [y, setY] = useState(50);
  const [height, setHeight] = useState();
  const [selected, setSelected] = useState("Search");

  const options = {
    weekday: "long",
  };
  const today = new Date();
  const hours = ((today.getHours() + 11) % 12) + 1;

  return (
    <>
      <div className="bg-slate-50 h-[915px] max-h-full overflow-hidden">
        {isVisible ? (
          <div className="flex justify-between items-center p-2">
            <button onClick={() => setIsModalVisible(false)}>
              <AiOutlineClose size={25} />
            </button>
            <div className="flex">
              {today.toLocaleDateString("en-US", options)} <BsDot /> {hours}
            </div>
            <button>
              <MdOutlineSettingsSuggest size={25} />
            </button>
          </div>
        ) : null}

        <div className="flex justify-evenly pt-2">
          <div className="w-full px-2">
            <div className="flex space-x-1">
              <AiOutlineFire />
              <p>0/1987</p>
            </div>
            <div className="w-full h-1 bg-slate-300"></div>
          </div>
          <div className="w-full px-2">
            P 0/206<div className="w-full h-1 bg-slate-300"></div>
          </div>
          <div className="w-full px-2">
            F 0/66<div className="w-full h-1 bg-slate-300"></div>
          </div>
          <div className="w-full px-2">
            C 0/140<div className="w-full h-1 bg-slate-300"></div>
          </div>
        </div>

        {isVisible ? (
          <div className="border-b border-solid border-slate-300">
            <SliderDot />
          </div>
        ) : null}
        <div className="flex justify-center space-x-5 text-slate-300 fixed right-0 left-0 top-40 ">
          <GiKnifeFork />

          <p>Add one or more items below</p>
        </div>
        <div>
          <LogSlider
            y={y}
            setY={setY}
            height={height}
            setHeight={setHeight}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
    </>
  );
};

const LogSlider = ({
  y,
  setY,
  setIsVisible,
  height,
  selected,
  setSelected,
}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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
        setY(750);
      }
    if (isUpSwipe) {
      setY(50);
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
    const desiredYBottom = 750;
    const desiredYTop = 49;
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
        className="bg-white h-[835px]"
        style={{
          transform: `translateY(${y}px)`,
          height: `${y - height}px`,
        }}
      >
        <div className="space-x-3 pt-1 absolute right-0 -top-12 ">
          <button className="rounded-full bg-slate-300 p-2">
            <MdEditCalendar />
          </button>
          <button className="rounded-2xl bg-black text-white px-3 py-1">
            Log Items
          </button>
        </div>
        <div>
          <div className="flex justify-center">
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
        {selected === "Search" && <Search />}
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
      <div className="bg-white flex items-center justify-between space-x-3 overflow-auto scrollbar-hide text-sm">
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
      <div className="bg-slate-300 h-1 w-full absolute top-[52px]"></div>
    </>
  );
};

const SliderTab = ({ name, icon, selected, setSelected }) => {
  const isSelected = selected === name;
  return (
    <div className="flex flex-col">
      <button className="flex items-center" onClick={() => setSelected(name)}>
        {icon} <p className="w-20">{name}</p>
      </button>
      <div
        className={
          isSelected ? "w-full bg-black h-1 my-2 z-10" : "w-full h-1 my-2"
        }
      ></div>
    </div>
  );
};

const Search = () => {
  const [foodSwipe, setFoodSwipe] = useState(0);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isMore, setIsMore] = useState(false);
  const commonFoodSize = 3;
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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
        console.log("swipe", isDownSwipe ? "down" : "up");
        setFoodSwipe(0);
      }
    if (isUpSwipe) {
      console.log("swipe up");
    }
  };

  const handleSwiping = (e) => {
    setFoodSwipe(e.touches[0].clientY - 118);
    setTouchEnd(e.touches[0].clientY);
  };

  const handleCommonMore = () => {
    setIsMore(!isMore);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);

    axios
      .get("/api/get")
      .then((res) => {
        setData(res.data.response);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div
        className="absolute top-16 left-0 right-0 overflow-scroll scrollbar-hide"
        onTouchMove={handleSwiping}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        // style={{
        //   transform: `translateY(${foodSwipe}px)`,
        // }}
      >
        <div className="flex justify-between">
          <h3>Common</h3>
          <div className="flex">
            <p>{isMore ? "-17" : "+17"}</p>
            <button onClick={handleCommonMore}>
              {isMore ? <MdExpandLess /> : <MdExpandMore />}
            </button>
          </div>
        </div>
        {!isMore
          ? data?.common &&
            data?.common
              .slice(0, commonFoodSize)
              .map((item, i) => <FoodRow item={item} key={i} />)
          : data?.common &&
            data?.common.map((item, i) => <FoodRow item={item} key={i} />)}
        <h3>Branded</h3>
        {data?.branded &&
          data?.branded.map((item, i) => <FoodRow item={item} key={i} />)}
      </div>
      <div className="fixed bottom-0 w-full p-3 bg-white ">
        <form onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
};

const FoodRow = ({ item, i }) => {
  return (
    <div key={i} className="py-3 pl-5 flex items-center ">
      <img
        src={item.photo.thumb}
        className="float-left object-cover w-10 h-10 mr-3"
      />
      <div className="flex border-b border-solid border-slate-300 w-full">
        <div>
          <h3 className="px-1">{item.food_name}</h3>
          <div className="flex text-xs">
            {item.full_nutrients
              ?.filter((item) => item.attr_id === 208)
              .map((item, i) => (
                <p key={i} className="px-1">
                  {Math.round(item.value)}kcal
                </p>
              ))}
            {item.full_nutrients
              ?.filter((item) => item.attr_id === 203)
              .map((item, i) => (
                <p key={i} className="px-1">
                  {Math.round(item.value)}P
                </p>
              ))}
            {item.full_nutrients
              ?.filter((item) => item.attr_id === 204)
              .map((item, i) => (
                <p key={i} className="px-1">
                  {Math.round(item.value)}F
                </p>
              ))}
            {item.full_nutrients
              ?.filter((item) => item.attr_id === 205)
              .map((item, i) => (
                <p key={i} className="px-1">
                  {Math.round(item.value)}C
                </p>
              ))}
            {item.serving_weight_grams && (
              <p className="px-1">{item.serving_weight_grams} g</p>
            )}
            {item.serving_qty} {item.serving_unit}
          </div>
        </div>

        <button className="flex fixed right-7">
          <div className="border border-solid border-black rounded-full w-4">
            +
          </div>
        </button>
      </div>
    </div>
  );
};

const Barcode = () => {
  // const [hasPermission, setHasPermission] = useState(null);
  // const [scanned, setScanned] = useState(false);

  // useEffect(() => {
  //   const getBarCodeScannerPermissions = async () => {
  //     const { status } = await BarCodeScanner.requestPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   };

  //   getBarCodeScannerPermissions();
  // }, []);

  // const handleBarCodeScanned = ({ type, data }) => {
  //   setScanned(true);
  //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  // };

  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }
  return (
    <div>
      {/* <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View> */}
    </div>
  );
};
