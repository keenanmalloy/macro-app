import { Footer } from "../app/components/Footer";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HomeHeader } from "../app/components/HomeHeader";
import { useState } from "react";
import { SearchBar } from "../app/components/SearchBar";

export default function HomePage() {
  const [selected, setSelected] = useState({});

  return (
    <div>
      <header className="flex items-center justify-between pt-2 px-5">
        <button>
          <MdOutlineAccountCircle size={50} />
        </button>
        <h1></h1>
        <button>
          <IoIosNotificationsOutline size={30} />
        </button>
      </header>
      <div>
        <HomeHeader selected={selected} setSelected={setSelected} />
      </div>
      <main>
        <section className="flex items-center justify-center">Macros</section>
        <section className="flex items-center justify-center">Progress</section>
      </main>
      <div className="fixed bottom-16 w-full px-3 pb-2">
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}
