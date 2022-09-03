import { DashboardHeader } from "../app/components/dashboard/DashboardHeader";
import { InsightsAndAnalytics } from "../app/components/dashboard/InsightsAndAnalytics";
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
      <InsightsAndAnalytics/>
      <SearchBar />
      <Footer />
    </div>
  );
}
