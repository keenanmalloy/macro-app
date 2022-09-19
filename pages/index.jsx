import { useState } from "react";
import { DashboardHeader } from "../app/components/dashboard/DashboardHeader";
import { DataAndHabits } from "../app/components/dashboard/DataAndHabits";
import { InsightsAndAnalytics } from "../app/components/dashboard/InsightsAndAnalytics";
import { NutritionTargets } from "../app/components/dashboard/NutritionTargets";
import { SliderDot } from "../app/components/dashboard/SliderDot";
import { Footer } from "../app/components/Footer";
import { FoodSearchModal } from "../app/components/foodlog/FoodSearchModal";
import { SearchBar } from "../app/components/SearchBar";


export default function HomePage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  
  return (
    <div >
      {isModalVisible ? (
        <FoodSearchModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      ) : (
        <>
          <DashboardHeader />
          <NutritionTargets />
          <SliderDot />
          <InsightsAndAnalytics />
          <DataAndHabits />
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
