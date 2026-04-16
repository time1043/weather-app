import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";

function ForecastListItem({ weatherForecast }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <img
            width={48}
            src={weatherForecast.weatherIcon}
            alt="weather-icon"
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={weatherForecast.weather}
        secondary={weatherForecast.datetime}
      />
      <span>
        {Math.floor(weatherForecast.temperature.min)}&deg;/
        {Math.ceil(weatherForecast.temperature.max)} &deg;
      </span>
    </ListItem>
  );
}

export default ForecastListItem;
