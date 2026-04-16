import ForecastWeather from "@/features/forecast/ForecastWeather";

function Forecast({ position }) {
  return <ForecastWeather {...{ position }} />;
}

export default Forecast;
