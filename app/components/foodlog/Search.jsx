import axios from "axios";
import { useEffect, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { FoodRow } from "./FoodRow";

export const Search = ({ isMore, setIsMore }) => {
  const [foodSwipe, setFoodSwipe] = useState(0);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const commonFoodSize = 3;
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // useEffect(() => {
  //   if (search.length > 0) {
  //     axios
  //       .get("/api/get")
  //       .then((res) => {
  //         setData(res.data.response);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  //   setIsSearching(true);
  // }, [search]);

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
    <div className="">
      <div
        onTouchMove={handleSwiping}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        // style={{
        //   transform: `translateY(${foodSwipe}px)`,
        // }}
      >
        {!isSearching ? null : (
          <div className="flex justify-between">
            <h3>Common</h3>
            <div className="flex">
              <p>{isMore ? "-17" : "+17"}</p>
              <button onClick={handleCommonMore}>
                {isMore ? <MdExpandLess /> : <MdExpandMore />}
              </button>
            </div>
          </div>
        )}
        {!isMore
          ? data?.common &&
            data?.common
              .slice(0, commonFoodSize)
              .map((item, i) => <FoodRow item={item} key={i} />)
          : data?.common &&
            data?.common.map((item, i) => <FoodRow item={item} key={i} />)}
        {!isSearching ? null : <h3>Branded</h3>}
        {data?.branded &&
          data?.branded.map((item, i) => <FoodRow item={item} key={i} />)}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="pt-40">
            <div className="absolute w-full bottom-20">
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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
