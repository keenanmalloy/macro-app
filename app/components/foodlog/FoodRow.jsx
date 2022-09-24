import { v4 as uuidv4 } from "uuid";

export const FoodRow = ({ item, i, selectedFood, setSelectedFood }) => {
  const handleSelect = () => {
    setSelectedFood([
      {
        id: uuidv4(),
        image: item.photo.thumb,
        name: item.food_name,
        timestamp: new Date().toISOString(),
        alcohol: item.full_nutrients
          ?.filter((item) => item.attr_id === 221)
          .map((item) => Math.round(item.value)),
        caffiene: item.full_nutrients
          ?.filter((item) => item.attr_id === 262)
          .map((item) => Math.round(item.value)),
        water: item.full_nutrients
          ?.filter((item) => item.attr_id === 255)
          .map((item) => Math.round(item.value)),
        calories: item.full_nutrients
          ?.filter((item) => item.attr_id === 208)
          .map((item) => Math.round(item.value)),
        protein: item.full_nutrients
          ?.filter((item) => item.attr_id === 203)
          .map((item) => Math.round(item.value)),
        fats: item.full_nutrients
          ?.filter((item) => item.attr_id === 204)
          .map((item) => Math.round(item.value)),
        carbs: item.full_nutrients
          ?.filter((item) => item.attr_id === 205)
          .map((item) => Math.round(item.value)),
        fiber: item.full_nutrients
          ?.filter((item) => item.attr_id === 291)
          .map((item) => Math.round(item.value)),
        starch: item.full_nutrients
          ?.filter((item) => item.attr_id === 209)
          .map((item) => Math.round(item.value)),
        sugar: item.full_nutrients
          ?.filter((item) => item.attr_id === 269)
          .map((item) => Math.round(item.value)),
        addedsugar: item.full_nutrients
          ?.filter((item) => item.attr_id === 539)
          .map((item) => Math.round(item.value)),
        cystine: item.full_nutrients
          ?.filter((item) => item.attr_id === 507)
          .map((item) => Math.round(item.value)),
        histidine: item.full_nutrients
          ?.filter((item) => item.attr_id === 512)
          .map((item) => Math.round(item.value)),
        isoleucine: item.full_nutrients
          ?.filter((item) => item.attr_id === 503)
          .map((item) => Math.round(item.value)),
        leucine: item.full_nutrients
          ?.filter((item) => item.attr_id === 504)
          .map((item) => Math.round(item.value)),
        lysine: item.full_nutrients
          ?.filter((item) => item.attr_id === 505)
          .map((item) => Math.round(item.value)),
        methionine: item.full_nutrients
          ?.filter((item) => item.attr_id === 506)
          .map((item) => Math.round(item.value)),
        phenylalanine: item.full_nutrients
          ?.filter((item) => item.attr_id === 508)
          .map((item) => Math.round(item.value)),
        threonine: item.full_nutrients
          ?.filter((item) => item.attr_id === 502)
          .map((item) => Math.round(item.value)),
        tryptophan: item.full_nutrients
          ?.filter((item) => item.attr_id === 501)
          .map((item) => Math.round(item.value)),
        tyrosine: item.full_nutrients
          ?.filter((item) => item.attr_id === 509)
          .map((item) => Math.round(item.value)),
        valine: item.full_nutrients
          ?.filter((item) => item.attr_id === 510)
          .map((item) => Math.round(item.value)),
        monofat: item.full_nutrients
          ?.filter((item) => item.attr_id === 645)
          .map((item) => Math.round(item.value)),
        polyfat: item.full_nutrients
          ?.filter((item) => item.attr_id === 646)
          .map((item) => Math.round(item.value)),
        omega3ala: item.full_nutrients
          ?.filter((item) => item.attr_id === 851)
          .map((item) => Math.round(item.value)),
        omega3epa: item.full_nutrients
          ?.filter((item) => item.attr_id === 629)
          .map((item) => Math.round(item.value)),
        omega3dha: item.full_nutrients
          ?.filter((item) => item.attr_id === 621)
          .map((item) => Math.round(item.value)),
        satfat: item.full_nutrients
          ?.filter((item) => item.attr_id === 606)
          .map((item) => Math.round(item.value)),
        transfat: item.full_nutrients
          ?.filter((item) => item.attr_id === 605)
          .map((item) => Math.round(item.value)),
        thiamine: item.full_nutrients
          ?.filter((item) => item.attr_id === 404)
          .map((item) => Math.round(item.value)),
        riboflavin: item.full_nutrients
          ?.filter((item) => item.attr_id === 405)
          .map((item) => Math.round(item.value)),
        niacin: item.full_nutrients
          ?.filter((item) => item.attr_id === 406)
          .map((item) => Math.round(item.value)),
        panto: item.full_nutrients
          ?.filter((item) => item.attr_id === 410)
          .map((item) => Math.round(item.value)),
        pyriodox: item.full_nutrients
          ?.filter((item) => item.attr_id === 415)
          .map((item) => Math.round(item.value)),
        combalamin: item.full_nutrients
          ?.filter((item) => item.attr_id === 418)
          .map((item) => Math.round(item.value)),
        folate: item.full_nutrients
          ?.filter((item) => item.attr_id === 417)
          .map((item) => Math.round(item.value)),
        vita: item.full_nutrients
          ?.filter((item) => item.attr_id === 318)
          .map((item) => Math.round(item.value)),
        vitc: item.full_nutrients
          ?.filter((item) => item.attr_id === 401)
          .map((item) => Math.round(item.value)),
        vitd: item.full_nutrients
          ?.filter((item) => item.attr_id === 328)
          .map((item) => Math.round(item.value)),
        vite: item.full_nutrients
          ?.filter((item) => item.attr_id === 323)
          .map((item) => Math.round(item.value)),
        vitk: item.full_nutrients
          ?.filter((item) => item.attr_id === 430)
          .map((item) => Math.round(item.value)),
        calcium: item.full_nutrients
          ?.filter((item) => item.attr_id === 301)
          .map((item) => Math.round(item.value)),
        copper: item.full_nutrients
          ?.filter((item) => item.attr_id === 312)
          .map((item) => Math.round(item.value)),
        iron: item.full_nutrients
          ?.filter((item) => item.attr_id === 303)
          .map((item) => Math.round(item.value)),
        magnesium: item.full_nutrients
          ?.filter((item) => item.attr_id === 304)
          .map((item) => Math.round(item.value)),
        manganese: item.full_nutrients
          ?.filter((item) => item.attr_id === 315)
          .map((item) => Math.round(item.value)),
        phosphorus: item.full_nutrients
          ?.filter((item) => item.attr_id === 305)
          .map((item) => Math.round(item.value)),
        potassium: item.full_nutrients
          ?.filter((item) => item.attr_id === 306)
          .map((item) => Math.round(item.value)),
        selenium: item.full_nutrients
          ?.filter((item) => item.attr_id === 317)
          .map((item) => Math.round(item.value)),
        sodium: item.full_nutrients
          ?.filter((item) => item.attr_id === 307)
          .map((item) => Math.round(item.value)),
        zinc: item.full_nutrients
          ?.filter((item) => item.attr_id === 309)
          .map((item) => Math.round(item.value)),
        cholesterol: item.full_nutrients
          ?.filter((item) => item.attr_id === 601)
          .map((item) => Math.round(item.value)),
        choline: item.full_nutrients
          ?.filter((item) => item.attr_id === 421)
          .map((item) => Math.round(item.value)),

        servingqty: item.serving_qty,
        servingunit: item.serving_unit,
        servingweightgrams: item.serving_weight_grams,
      },
      ...selectedFood,
    ]);
  };

  const calorietotal = item.full_nutrients
    ?.filter((item) => item.attr_id === 208)
    .map((item, i) => (
      <p key={i} className="px-1">
        {Math.round(item.value)}kcal
      </p>
    ));

  const protein = item.full_nutrients
    ?.filter((item) => item.attr_id === 203)
    .map((item, i) => (
      <p key={i} className="px-1">
        {Math.round(item.value)}P
      </p>
    ));

  const fats = item.full_nutrients
    ?.filter((item) => item.attr_id === 204)
    .map((item, i) => (
      <p key={i} className="px-1">
        {Math.round(item.value)}F
      </p>
    ));

  const carbs = item.full_nutrients
    ?.filter((item) => item.attr_id === 205)
    .map((item, i) => (
      <p key={i} className="px-1">
        {Math.round(item.value)}C
      </p>
    ));

  return (
    <div key={i} className="py-3 pl-5 flex items-center ">
      <button className="flex fixed right-0  pr-2" onClick={handleSelect}>
        <div className="border border-solid border-black rounded-full w-4">
          +
        </div>
      </button>
      <img
        src={item.photo.thumb}
        className="float-left object-cover w-10 h-10 mr-3"
      />
      <div className="flex border-b border-solid border-slate-300 w-full">
        <div>
          <h3 className="px-1 ">
            {item.food_name.replace(/(^\w)|([-\s]\w)/g, (match) =>
              match.toUpperCase()
            )}
          </h3>
          <div className="flex text-xs ">
            {calorietotal}
            {protein}
            {fats}
            {carbs}
            {item.serving_weight_grams && (
              <p className="px-1">{Math.round(item.serving_weight_grams)} g</p>
            )}
            {Math.round(item.serving_qty) <= 0
              ? null
              : Math.round(item.serving_qty)}{" "}
            {Math.round(item.serving_qty) <= 0 ? null : item.serving_unit}
          </div>
        </div>
      </div>
    </div>
  );
};
