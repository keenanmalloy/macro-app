import { DashboardHeader } from "../app/components/dashboard/DashboardHeader";
import { NutritionTargets } from "../app/components/dashboard/NutritionTargets";
import { SliderDot } from "../app/components/dashboard/SliderDot";
import { Footer } from "../app/components/Footer";

import { SearchBar } from "../app/components/SearchBar";

export default function HomePage() {
  return (
    <div>
      <DashboardHeader/>
      <NutritionTargets/>
      <SliderDot/>
      <SearchBar />
      <Footer />
    </div>
  );
}
