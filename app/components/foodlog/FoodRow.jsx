import { v4 as uuidv4 } from "uuid";

export const FoodRow = ({ item, i, selectedFood, setSelectedFood }) => {
  const handleSelect = () => {
    setSelectedFood([
      {
        id: uuidv4(),
        image: item.photo.thumb,
        name: item.food_name,
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
        serving_quantity: item.serving_qty,
        serving_unit: item.serving_unit,
        serving_weight_grams: item.serving_weight_grams,
        ...item,
      },
      ...selectedFood,
    ]);
  };

  const calories = item.full_nutrients
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
            {calories}
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
