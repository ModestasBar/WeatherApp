const objectFilter = (data, background) => {
  const filterDays = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
  const weekDays = filterDays(data.list, 8);
  const next15hours = data.list.slice(0, 5);

  const backgroundURL = background.results[0].urls.small;

  return {
    weekDays,
    next15hours,
    backgroundURL,
  };
};

const dateFilter = (date) => {
  const days = date.split(' ')[0].slice(-5);
  const hours = date.split(' ')[1].slice(0, 5);

  return {
    days,
    hours,
  };
};


export { objectFilter, dateFilter };
