const whatIsTheWeekday = ({ lang = "en-us", date = new Date() } = {}) => {
  const weekdays = {
    "en-us": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    "pt-br": [
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
      "Domingo",
    ],
  };

  const [year, month, day] = date
    .toJSON()
    .split("T")[0]
    .split("-")
    .slice(0, 3)
    .map((n) => parseInt(n, 10));

  const K = year % 100;
  const J = parseInt(year / 100, 10);

  const weekday =
    (day +
      parseInt((13 * (month + 1)) / 5, 10) +
      K +
      parseInt(K / 4, 10) +
      parseInt(J / 4, 10) +
      5 * J) %
    7;

  return weekdays[lang][parseInt(weekday)];
};

module.exports = whatIsTheWeekday;
module.exports.whatIsTheWeekday = whatIsTheWeekday;
