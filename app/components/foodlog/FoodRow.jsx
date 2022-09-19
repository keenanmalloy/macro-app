export const FoodRow = ({ item, i }) => {
  return (
    <div key={i} className="py-3 pl-5 flex items-center ">
      <img
        src={item.photo.thumb}
        className="float-left object-cover w-10 h-10 mr-3"
      />
      <div className="flex border-b border-solid border-slate-300 w-full">
        <div>
          <h3 className="px-1">{item.food_name}</h3>
          <div className="flex text-xs truncate">
            {item.full_nutrients
              ?.filter((item) => item.attr_id === 208)
              .map((item, i) => (
                <p key={i} className="px-1">
                  {Math.round(item.value)}kcal
                </p>
              ))}
            {item.full_nutrients
              ?.filter((item) => item.attr_id === 203)
              .map((item, i) => (
                <p key={i} className="px-1">
                  {Math.round(item.value)}P
                </p>
              ))}
            {item.full_nutrients
              ?.filter((item) => item.attr_id === 204)
              .map((item, i) => (
                <p key={i} className="px-1">
                  {Math.round(item.value)}F
                </p>
              ))}
            {item.full_nutrients
              ?.filter((item) => item.attr_id === 205)
              .map((item, i) => (
                <p key={i} className="px-1">
                  {Math.round(item.value)}C
                </p>
              ))}
            {item.serving_weight_grams && (
              <p className="px-1">{item.serving_weight_grams} g</p>
            )}
            {item.serving_qty} {item.serving_unit}
          </div>
        </div>

        <button className="flex fixed right-7">
          <div className="border border-solid border-black rounded-full w-4">
            +
          </div>
        </button>
      </div>
    </div>
  );
};
