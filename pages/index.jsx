import { Footer } from '../app/components/Footer';
// import { Food } from "../Food";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosNotificationsOutline, IoIosJournal } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";
// import { SearchModal } from "../SearchModal";

export default function Home() {
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
