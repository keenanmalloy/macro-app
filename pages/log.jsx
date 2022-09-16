import React, { useState } from "react";
import { LogHeader } from "../app/components/foodlog/LogHeader";
import { LogTime } from "../app/components/foodlog/LogTime";
import { Footer } from "../app/components/Footer";
import { SearchBar } from "../app/components/SearchBar";
import { FoodSearchModal } from "../app/components/foodlog/FoodSearchModal";
import Head from "next/head";

export default function LogPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  window.addEventListener("load", function () {
    setTimeout(function () {
      // Hide the address bar:
      window.scrollTo(0, 1);
    }, 0);
  });

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isModalVisible ? (
        <FoodSearchModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      ) : (
        <>
          <LogHeader />
          <LogTime />
          <SearchBar
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
          <Footer />
        </>
      )}
    </div>
  );
}
