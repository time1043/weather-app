import { useForecastWeather } from "@/hooks/useWeather";
import { List } from "@mui/material";
import ForecastListItem from "./ForecastListItem";
// import { weatherForecasts } from "../../mock/weather"

function ForecastWeather({ position }) {
  const { weatherForecasts } = useForecastWeather({ position });

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {weatherForecasts?.map((weatherForecast) => (
        <ForecastListItem {...{ weatherForecast }} key={weatherForecast.id} />
      ))}
    </List>
  );
}

export default ForecastWeather;
