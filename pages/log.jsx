import React, { useState } from "react";
import { LogHeader } from "../app/components/foodlog/LogHeader";
import { LogTime } from "../app/components/foodlog/LogTime";
import { Footer } from "../app/components/Footer";
import { SearchBar } from "../app/components/SearchBar";
import { FoodSearchModal } from "../app/components/foodlog/FoodSearchModal";

export default function LogPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
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
