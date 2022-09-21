import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineFire,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { LogSlider } from "./LogSlider";
import { FoodSearchHeader } from "./FoodSearchHeader";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export const FoodSearchModal = ({ setIsModalVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [y, setY] = useState(4);
  const [height, setHeight] = useState();
  const [selected, setSelected] = useState("Search");
  const [selectedFood, setSelectedFood] = useState([]);

  const handleRemove = (id) => {
    const newSelectedFood = selectedFood.filter((food) => food.id !== id);
    setSelectedFood(newSelectedFood);
  };

  const reducedCalories = selectedFood.reduce((acc, food) => {
    return acc + food.calories[0];
  }, 0);

  const reducedProtein = selectedFood.reduce((acc, food) => {
    return acc + food.protein[0];
  }, 0);

  const reducedFats = selectedFood.reduce((acc, food) => {
    return acc + food.fats[0];
  }, 0);

  const reducedCarbs = selectedFood.reduce((acc, food) => {
    return acc + food.carbs[0];
  }, 0);

  return (
    <div className="bg-slate-50 h-screen overflow-hidden">
      <FoodSearchHeader
        isVisible={isVisible}
        setIsModalVisible={setIsModalVisible}
        selectedFood={selectedFood}
        setSelectedFood={setSelectedFood}
      />
      <div className="fixed top-32 overflow-auto h-screen scrollbar-hide">
        {selectedFood.length < 1 ? (
          <div className="flex pl-20 space-x-5 text-slate-300">
            <GiKnifeFork /> <p>Add one or more items below</p>
          </div>
        ) : null}
        <div>
          {selectedFood.map((food) => (
            <div key={food.id} className="py-3 pl-5 flex  ">
              <img src={food.image} className="w-10 h-10 mr-3" />
              <div className="flex border-b border-solid border-slate-300 w-full">
                <div className=" text-black">
                  <h3 className="px-1 text-black truncate text-ellipsis w-64">
                    {food.name.replace(/(^\w)|([-\s]\w)/g, (match) =>
                      match.toUpperCase()
                    )}
                  </h3>
                  <div className="flex text-xs ">
                    <p className="pr-2">{food.calories} kcal</p>
                    <p className="pr-2">{food.protein}P</p>
                    <p className="pr-2">{food.fats}F</p>
                    <p className="pr-2">{food.carbs}C</p>
                    <p>{Math.round(food.serving_weight_grams)}g</p>
                  </div>
                  <div className="space-x-5 py-5 text-sm flex items-center">
                    <button className="flex ">
                      <div className="px-2">
                        <AiOutlineInfoCircle />
                      </div>
                      Details
                    </button>
                    <button
                      className="flex"
                      onClick={() => handleRemove(food.id)}
                    >
                      <div className="px-2">
                        <IoIosRemoveCircleOutline color="red" />
                      </div>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="items-center justify-center flex w-full pr-2 relative">
                  <input
                    type="number"
                    value={
                      !food.serving_weight_grams
                        ? food.serving_quantity
                        : food.serving_weight_grams
                    }
                    onChange={(e) =>
                      setSelectedFood(
                        selectedFood.map((item) =>
                          item.id === food.id
                            ? {
                                ...item,
                                serving_weight_grams: e.target.value,
                              }
                            : item
                        )
                      )
                    }
                    className="bg-gray-200 text-center flex text-black h-10 w-16 pb-2 sm"
                  />
                  <p className="absolute bottom-6 text-gray-600 pb-1 text-xs">
                    {!food.serving_weight_grams ? food.serving_unit : "g"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!selectedFood.length < 1 ? (
          <div className="pt-[800px] pb-64">
            <DailyNutritionImpact
              reducedCalories={reducedCalories}
              reducedProtein={reducedProtein}
              reducedFats={reducedFats}
              reducedCarbs={reducedCarbs}
            />
            <GeneralNutritionInfo selectedFood={selectedFood} />
            <CarbBreakdown
              reducedCarbs={reducedCarbs}
              selectedFood={selectedFood}
            />
            <ProteinBreakdown
              reducedProtein={reducedProtein}
              selectedFood={selectedFood}
            />
            <FatBreakdown
              reducedFats={reducedFats}
              selectedFood={selectedFood}
            />
            <Vitamins selectedFood={selectedFood} />
            <Minerals selectedFood={selectedFood} />
            <Other selectedFood={selectedFood} />
          </div>
        ) : null}
      </div>
      <LogSlider
        y={y}
        setY={setY}
        height={height}
        setHeight={setHeight}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        selected={selected}
        setSelected={setSelected}
        selectedFood={selectedFood}
        setSelectedFood={setSelectedFood}
      />
    </div>
  );
};

const CircleProgress = ({ percentage }) => {
  return (
    <svg class="w-20 h-20">
      <circle
        class="text-gray-300"
        stroke-width="4"
        stroke="currentColor"
        fill="transparent"
        r="15"
        cx="40"
        cy="40"
      />
      <circle
        class="text-slate-500"
        stroke-width="5"
        stroke="currentColor"
        stroke-linecap="round"
        fill="transparent"
      />
    </svg>
  );
};

const DailyNutritionImpact = ({
  reducedCalories,
  reducedProtein,
  reducedFats,
  reducedCarbs,
}) => {
  return (
    <div className="w-screen border-b  border-solid border-slate-300 pr-10">
      <h3 className="pl-6 -mb-2 text-xl">Impact on Day</h3>
      <div className="flex w-full justify-around">
        <div className="flex items-center">
          <CircleProgress />
          <div className="-ml-3 space-y-1">
            <h4>Calories</h4>
            <p>{reducedCalories} kcal, 0 remains</p>
          </div>
        </div>
        <div className="flex items-center">
          <CircleProgress />
          <div className="-ml-3 space-y-1">
            <h4>Protein</h4>
            <p>{reducedProtein} g, 0 remains</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around space-x-5">
        <div className="flex items-center">
          <CircleProgress />
          <div className="-ml-3 space-y-1">
            <h4>Fats</h4>
            <p>{reducedFats} g, 0 remains</p>
          </div>
        </div>
        <div className="flex items-center">
          <CircleProgress />
          <div className="-ml-3 space-y-1">
            <h4>Carbs</h4>
            <p>{reducedCarbs} g, 0 remains</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GeneralNutritionInfo = ({ selectedFood }) => {
  const reducedAlcohol = selectedFood.reduce((acc, food) => {
    return acc + food.alcohol ? food.alcohol[0] : 0;
  }, 0);

  const reducedCaffiene = selectedFood.reduce((acc, food) => {
    return acc + food.caffiene ? food.caffiene[0] : 0;
  }, 0);

  const reducedWater = selectedFood.reduce((acc, food) => {
    return acc + food.water ? food.water[0] : 0;
  }, 0);
  return (
    <div>
      <h3 className="p-7 text-xl">Nutrition</h3>
      <h4 className="pl-7 text-lg">General</h4>
      <div className="w-full px-7">
        <div className="flex justify-between pt-4">
          <p>Alcohol</p>
          <p>{!reducedAlcohol ? "-- " : reducedAlcohol} g</p>
        </div>
        <div className="flex justify-between py-3">
          <p>Caffiene</p>
          <p>{!reducedCaffiene ? "-- " : reducedCaffiene} mg</p>
        </div>
        <div className="flex justify-between">
          <p>Water</p>
          <p>{!reducedWater ? "-- " : reducedWater} g</p>
        </div>
      </div>
    </div>
  );
};

const CarbBreakdown = ({ reducedCarbs, selectedFood }) => {
  console.log(selectedFood);

  const reducedFiber = selectedFood.reduce((acc, food) => {
    return acc + food.fiber[0];
  }, 0);

  const reducedSugar = selectedFood.reduce((acc, food) => {
    return acc + food.sugar[0];
  }, 0);

  const reducedStarch = selectedFood.reduce((acc, food) => {
    return acc + food.starch[0];
  }, 0);

  const reducedAddedSugar = selectedFood.reduce((acc, food) => {
    return acc + food.added_sugar[0];
  }, 0);

  console.log(selectedFood);

  return (
    <div>
      <h3 className="pl-7 pt-8 text-lg">Carb Breakdown</h3>
      <div className=" px-7">
        <div className="flex justify-between pt-4">
          <div className="flex-col">
            <p>Total</p>
            <div className="pl-4 pt-2 space-y-2">
              <p>Fiber</p>
              <p>Starch</p>
              <p>Sugars</p>
              <p className="pl-5">Sugars Added</p>
            </div>
            <p className="pt-2">Net (Non-fiber)</p>
          </div>
          <div>
            <p>{!reducedCarbs ? "--" : reducedCarbs}g</p>
            <div className=" pt-2 space-y-2">
              <p>{!reducedFiber ? "--" : reducedFiber}g</p>
              <p>{!reducedStarch ? "-- " : reducedStarch}g</p>
              <p>{!reducedSugar ? "-- " : reducedSugar}g</p>
              <p>{!reducedAddedSugar ? "-- " : reducedAddedSugar}g</p>
            </div>
            <p className="pt-2">
              {!reducedCarbs ? "-- " : reducedCarbs - reducedFiber}g
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProteinBreakdown = ({ reducedProtein, selectedFood }) => {
  const reducedCystine = selectedFood.reduce((acc, food) => {
    return acc + food.cystine ? food.cystine[0] : 0;
  }, 0);

  const reducedHistidine = selectedFood.reduce((acc, food) => {
    return acc + food.histidine ? food.histidine[0] : 0;
  }, 0);

  const reducedIsoleucine = selectedFood.reduce((acc, food) => {
    return acc + food.isoleucine ? food.isoleucine[0] : 0;
  }, 0);

  const reducedLeucine = selectedFood.reduce((acc, food) => {
    return acc + food.leucine ? food.leucine[0] : 0;
  }, 0);

  const reducedLysine = selectedFood.reduce((acc, food) => {
    return acc + food.lysine ? food.lysine[0] : 0;
  }, 0);

  const reducedMethionine = selectedFood.reduce((acc, food) => {
    return acc + food.methionine ? food.methionine[0] : 0;
  }, 0);

  const reducedPhenylalanine = selectedFood.reduce((acc, food) => {
    return acc + food.phenylalanine ? food.phenylalanine[0] : 0;
  }, 0);

  const reducedThreonine = selectedFood.reduce((acc, food) => {
    return acc + food.threonine ? food.threonine[0] : 0;
  }, 0);

  const reducedTryptophan = selectedFood.reduce((acc, food) => {
    return acc + food.tryptophan ? food.tryptophan[0] : 0;
  }, 0);

  const reducedTyrosine = selectedFood.reduce((acc, food) => {
    return acc + food.tyrosine ? food.tyrosine[0] : 0;
  }, 0);

  const reducedValine = selectedFood.reduce((acc, food) => {
    return acc + food.valine ? food.valine[0] : 0;
  }, 0);

  return (
    <div>
      <h3 className="pl-7 pt-8 text-lg">Protein Breakdown</h3>
      <div className=" px-7">
        <div className="flex justify-between pt-4">
          <div className="flex-col">
            <p>Total</p>
            <div className="pl-4 pt-2 space-y-2">
              <p>Cystine</p>
              <p>Histidine</p>
              <p>Isoleucine</p>
              <p>Leucine</p>
              <p>Lysine</p>
              <p>Methionine</p>
              <p>Phenylalanine</p>
              <p>Threonine</p>
              <p>Tryptophan</p>
              <p>Tyrosine</p>
              <p>Valine</p>
            </div>
          </div>
          <div className=" space-y-2">
            <p>{!reducedProtein ? "-- " : reducedProtein} g</p>
            <p>{!reducedCystine ? "-- " : reducedCystine} g</p>
            <p>{!reducedHistidine ? "-- " : reducedHistidine} g</p>
            <p>{!reducedIsoleucine ? "-- " : reducedIsoleucine} g</p>
            <p>{!reducedLeucine ? "-- " : reducedLeucine} g</p>
            <p>{!reducedLysine ? "-- " : reducedLysine} g</p>
            <p>{!reducedMethionine ? "-- " : reducedMethionine} g</p>
            <p>{!reducedPhenylalanine ? "-- " : reducedPhenylalanine} g</p>
            <p>{!reducedThreonine ? "-- " : reducedThreonine} g</p>
            <p>{!reducedTryptophan ? "-- " : reducedTryptophan} g</p>
            <p>{!reducedTyrosine ? "-- " : reducedTyrosine} g</p>
            <p>{!reducedValine ? "-- " : reducedValine} g</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FatBreakdown = ({ reducedFats, selectedFood }) => {
  const reducedMono = selectedFood.reduce((acc, food) => {
    return acc + food.monofat ? food.monofat[0] : 0;
  }, 0);

  const reducedPoly = selectedFood.reduce((acc, food) => {
    return acc + food.polyfat ? food.polyfat[0] : 0;
  }, 0);

  const reducedOmega3ala = selectedFood.reduce((acc, food) => {
    return acc + food.omega3ala ? food.omega3ala[0] : 0;
  }, 0);
  const reducedOmega3epa = selectedFood.reduce((acc, food) => {
    return acc + food.omega3epa ? food.omega3epa[0] : 0;
  }, 0);
  const reducedOmega3dha = selectedFood.reduce((acc, food) => {
    return acc + food.omega3dha ? food.omega3dha[0] : 0;
  }, 0);
  const reducedSatfat = selectedFood.reduce((acc, food) => {
    return acc + food.satfat ? food.satfat[0] : 0;
  }, 0);
  const reducedTransfat = selectedFood.reduce((acc, food) => {
    return acc + food.transfat ? food.transfat[0] : 0;
  }, 0);

  return (
    <div>
      <h3 className="pl-7 pt-8 text-lg">Fat Breakdown</h3>
      <div className=" px-7">
        <div className="flex justify-between pt-4">
          <div className="flex-col">
            <p>Total</p>
            <div className="pl-4 pt-2 space-y-2">
              <p>Monounsaturated Fat</p>
              <p>Polyunsaturated Fat</p>
              <p className="pl-5">Omega-3</p>
              <p className="pl-10">Omega-3 ALA</p>
              <p className="pl-10">Omega-3 EPA</p>
              <p className="pl-10">Omega-3 DHA</p>
              <p className="pl-5">Omega-6</p>
              <p>Saturated Fat</p>
              <p>Trans Fat</p>
            </div>
          </div>
          <div>
            <p>{!reducedFats ? "-- " : reducedFats} g</p>
            <div className=" pt-2 space-y-2">
              <p>{!reducedMono ? "-- " : reducedMono} g</p>
              <p>{!reducedPoly ? "-- " : reducedPoly} g</p>
              <p>
                {!reducedOmega3ala || reducedOmega3epa || !reducedOmega3dha
                  ? "-- "
                  : reducedOmega3ala + reducedOmega3epa + reducedOmega3dha}
                g
              </p>
              <p>{!reducedOmega3ala ? "-- " : reducedOmega3ala} g</p>
              <p>{!reducedOmega3epa ? "-- " : reducedOmega3epa} g</p>
              <p>{!reducedOmega3dha ? "-- " : reducedOmega3dha} g</p>
              <p>-- g</p>
              <p>{!reducedSatfat ? "-- " : reducedSatfat} g</p>
              <p>{!reducedTransfat ? "-- " : reducedTransfat} g</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Vitamins = ({ selectedFood }) => {
  const reducedThiamine = selectedFood.reduce((acc, food) => {
    return acc + food.thiamine ? food.thiamine[0] : 0;
  }, 0);
  const reducedRibo = selectedFood.reduce((acc, food) => {
    return acc + food.riboflavin ? food.riboflavin[0] : 0;
  }, 0);
  const reducedNiacin = selectedFood.reduce((acc, food) => {
    return acc + food.niacin ? food.niacin[0] : 0;
  }, 0);
  const reducedPanto = selectedFood.reduce((acc, food) => {
    return acc + food.panto ? food.panto[0] : 0;
  }, 0);
  const reducedPyridox = selectedFood.reduce((acc, food) => {
    return acc + food.pyridox ? food.pyridox[0] : 0;
  }, 0);
  const reducedComba = selectedFood.reduce((acc, food) => {
    return acc + food.combalamin ? food.combalamin[0] : 0;
  }, 0);
  const reducedFolate = selectedFood.reduce((acc, food) => {
    return acc + food.folate ? food.folate[0] : 0;
  }, 0);
  const reducedVita = selectedFood.reduce((acc, food) => {
    return acc + food.vita ? food.vita[0] : 0;
  }, 0);
  const reducedVitc = selectedFood.reduce((acc, food) => {
    return acc + food.vitc ? food.vitc[0] : 0;
  }, 0);

  const reducedVitd = selectedFood.reduce((acc, food) => {
    return acc + food.vitd ? food.vitd[0] : 0;
  }, 0);
  const reducedVite = selectedFood.reduce((acc, food) => {
    return acc + food.vite ? food.vite[0] : 0;
  }, 0);
  const reducedVitk = selectedFood.reduce((acc, food) => {
    return acc + food.vitk ? food.vitk[0] : 0;
  }, 0);
  return (
    <div>
      <h3 className="pl-7 pt-8 text-lg">Vitamins</h3>
      <div className=" px-7">
        <div className="flex justify-between pt-4">
          <div className="flex-col">
            <div className=" pt-2 space-y-2">
              <p>B1, Thiamine</p>
              <p>B2, Riboflavin</p>
              <p>B3, Niacin</p>
              <p>B5, Pantothenic Acid</p>
              <p>B6, Pyridoxine</p>
              <p>B12, Cobalamin</p>
              <p>Folate</p>
              <p>Vitamin A</p>
              <p>Vitamin C</p>
              <p>Vitamin D</p>
              <p>Vitamin E</p>
              <p>Vitamin K</p>
            </div>
          </div>
          <div className="pt-2 space-y-2 ">
            <p className="pl-1.5">
              {!reducedThiamine ? "-- " : reducedThiamine} mg
            </p>
            <p className="pl-1.5">{!reducedRibo ? "-- " : reducedRibo} mg</p>
            <p className="pl-1.5">
              {!reducedNiacin ? "-- " : reducedNiacin} mg
            </p>
            <p className="pl-1.5">{!reducedPanto ? "-- " : reducedPanto} mg</p>
            <p className="pl-1.5">
              {!reducedPyridox ? "-- " : reducedPyridox} mg
            </p>
            <p>{!reducedComba ? "-- " : reducedComba} mcg</p>
            <p>{!reducedFolate ? "-- " : reducedFolate} mcg</p>
            <p>{!reducedVita ? "-- " : reducedVita} mcg</p>
            <p className="pl-1.5">{!reducedVitc ? "-- " : reducedVitc} mg</p>
            <p>{!reducedVitd ? "-- " : reducedVitd} mcg</p>
            <p className="pl-1.5">{!reducedVite ? "-- " : reducedVite} mg</p>
            <p>{!reducedVitk ? "-- " : reducedVitk} mcg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Minerals = ({ selectedFood }) => {
  const reducedCalcium = selectedFood.reduce((acc, food) => {
    return acc + food.calcium ? food.calcium[0] : 0;
  }, 0);
  const reducedCopper = selectedFood.reduce((acc, food) => {
    return acc + food.copper ? food.copper[0] : 0;
  }, 0);
  const reducedIron = selectedFood.reduce((acc, food) => {
    return acc + food.iron ? food.iron[0] : 0;
  }, 0);
  const reducedMagnesium = selectedFood.reduce((acc, food) => {
    return acc + food.magnesium ? food.magnesium[0] : 0;
  }, 0);
  const reducedManganese = selectedFood.reduce((acc, food) => {
    return acc + food.manganese ? food.manganese[0] : 0;
  }, 0);
  const reducedPhosphorus = selectedFood.reduce((acc, food) => {
    return acc + food.phosphorus ? food.phosphorus[0] : 0;
  }, 0);
  const reducedPotassium = selectedFood.reduce((acc, food) => {
    return acc + food.potassium ? food.potassium[0] : 0;
  }, 0);
  const reducedSelenium = selectedFood.reduce((acc, food) => {
    return acc + food.selenium ? food.selenium[0] : 0;
  }, 0);
  const reducedSodium = selectedFood.reduce((acc, food) => {
    return acc + food.sodium ? food.sodium[0] : 0;
  }, 0);

  const reducedZinc = selectedFood.reduce((acc, food) => {
    return acc + food.zinc ? food.zinc[0] : 0;
  }, 0);

  return (
    <div>
      <h3 className="pl-7 pt-8 text-lg">Minerals</h3>
      <div className=" px-7">
        <div className="flex justify-between pt-4">
          <div className="flex-col">
            <div className=" pt-2 space-y-2">
              <p>Calcium</p>
              <p>Copper</p>
              <p>Iron</p>
              <p>Magnesium</p>
              <p>Manganese</p>
              <p>Phosphorus</p>
              <p>Potassium</p>
              <p>Selenium</p>
              <p>Sodium</p>
              <p>Zinc</p>
            </div>
          </div>
          <div className="pt-2 space-y-2 ">
            <p className="pl-1.5">
              {!reducedCalcium ? "-- " : reducedCalcium} mg
            </p>
            <p className="pl-1.5">
              {!reducedCopper ? "-- " : reducedCopper} mg
            </p>
            <p className="pl-1.5">{!reducedIron ? "-- " : reducedIron} mg</p>
            <p className="pl-1.5">
              {!reducedMagnesium ? "-- " : reducedMagnesium} mg
            </p>
            <p className="pl-1.5">
              {!reducedManganese ? "-- " : reducedManganese} mg
            </p>
            <p className="pl-1.5">
              {!reducedPhosphorus ? "-- " : reducedPhosphorus} mg
            </p>
            <p className="pl-1.5">
              {!reducedPotassium ? "-- " : reducedPotassium} mg
            </p>
            <p>{!reducedSelenium ? "-- " : reducedSelenium} mcg</p>
            <p className="pl-1.5">
              {!reducedSodium ? "-- " : reducedSodium} mg
            </p>
            <p className="pl-1.5">{!reducedZinc ? "-- " : reducedZinc} mg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Other = ({ selectedFood }) => {
  const reducedCholesterol = selectedFood.reduce((acc, food) => {
    return acc + food.cholesterol ? food.cholesterol[0] : 0;
  }, 0);
  const reducedCholine = selectedFood.reduce((acc, food) => {
    return acc + food.choline ? food.choline[0] : 0;
  }, 0);
  return (
    <div>
      <h3 className="pl-7 pt-8 text-lg">Other</h3>
      <div className=" px-7">
        <div className="flex justify-between pt-4">
          <div className="flex-col">
            <div className=" pt-2 space-y-2">
              <p>Cholesterol</p>
              <p>Choline</p>
            </div>
          </div>
          <div className="pt-2 space-y-2 ">
            <p className="pl-1.5">
              {!reducedCholesterol ? "-- " : reducedCholesterol} mg
            </p>
            <p className="pl-1.5">
              {!reducedCholine ? "-- " : reducedCholine} mg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
