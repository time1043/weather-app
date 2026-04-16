function Day({ temperature = { min: 0, max: 0 }, iconCode = "10n" }) {
  const weatherIconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  const ymd = new Date().toISOString().split("T")[0];
  const weekday = new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date());
  const date = `${weekday} ${ymd}`;

  const { min, max } = temperature;

  return (
    <li className="day">
      <img src={weatherIconUrl} alt="weather-icon" />
      <p>{date}</p>
      <p>
        {Math.floor(min)}&deg; &mdash; {Math.ceil(max)} &deg;
      </p>
    </li>
  );
}

export default Day;
