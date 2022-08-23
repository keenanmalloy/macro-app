import { Footer } from "../app/components/Footer";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HomeHeader } from "../app/components/HomeHeader";
import { useState } from "react";

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
      <HomeHeader selected={selected} setSelected={setSelected}/>
      <main className="h-screen">
        <section className="h-1/2 flex items-center justify-center">
          Macros
        </section>
        <section className="h-1/2 flex  justify-center">Progress</section>
      </main>
      <Footer />
    </div>
  );
}
