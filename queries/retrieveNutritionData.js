const generateDateFilter = (query) => {
  if (query === "today") {
    const today = new Date();
    const todayDate = new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(today);
    return `AND Date(workout_dt) = '${todayDate}'`;
  }

  if (query === "yesterday") {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayDate = new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(yesterday);
    return `AND Date(workout_dt) = '${yesterdayDate}'`;
  }

  if (query === "tomorrow") {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tmrwDate = new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(tomorrow);

    return `AND Date(workout_dt) = '${tmrwDate}'`;
  }

  if (query === "future") {
    const today = new Date();
    const todayDate = new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(today);
    return `AND Date(workout_dt) >= '${todayDate}'`;
  }

  if (!!query) {
    if (isValidDate(query)) {
      return `AND Date(workout_dt) = '${query}'`;
    }

    console.log(
      'ERROR: invalid date passed to /workouts?d="invalid-date-passed". Returning all workouts instead. '
    );
    return ``;
  }

  return ``;
};
