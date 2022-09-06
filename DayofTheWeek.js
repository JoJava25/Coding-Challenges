const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function dayOfTheWeek(date) {
  const [d, m, y] = date.split('/').map(x => parseInt(x));
  const dt = new Date(y, m - 1, d);
  return weekdays[dt.getDay()];
}