export const GoalForm = () => {
  return (

  <form action="">
    <h2 className="font-bold text-3xl p-2">What is your goal?</h2>
    <p className="px-3">Select your current goal.</p>
    <div className="flex flex-col pt-5 px-3 space-y-2">
      <button
        className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10 "
        type="button"
      >
        <h4 className="text-left pb-3 font-bold">Lose Weight</h4>
        <p className="text-left">Goal of losing weight.</p>
      </button>
      <button
        className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10"
        type="button"
      >
        <h4 className="text-left pb-3 font-bold">Maintain Weight</h4>
        <p className="text-left">Goal of maintaining weight.</p>
      </button>
      <button
        className="w-full border-2 border-solid border-slate-600 rounded h-28 px-10"
        type="button"
      >
        <h4 className="text-left pb-3 font-bold">Gaining Weight</h4>
        <p className="text-left">Goal of gaining weight.</p>
      </button>
    </div>
  </form>
  );
};
