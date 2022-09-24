import React, { useEffect, useState } from "react";
import { LogHeader } from "../app/components/foodlog/LogHeader";
import { LogTime } from "../app/components/foodlog/LogTime";
import { Footer } from "../app/components/Footer";
import { SearchBar } from "../app/components/SearchBar";
import { FoodSearchModal } from "../app/components/foodlog/FoodSearchModal";
import axios from "axios";
import { LogContent } from "../app/components/foodlog/LogContent";

export default function LogPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [nutritionData, setNutritionData] = useState(null);



  useEffect(() => {
    async function getNutrition() {
      const response = await axios
        .get("/api/getfoods")
        .then((res) => {
          setNutritionData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getNutrition();
  }, []);

  return (
    <div className="scrollbar-hide">
      {isModalVisible ? (
        <FoodSearchModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      ) : (
        <>
          <LogHeader nutritionData={nutritionData}/>
          <LogContent nutritionData={nutritionData}/>
          {/* <LogTime /> */}
          <SearchBar
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            isHidden={true}
          />
          <Footer />
        </>
      )}
    </div>
  );
}
