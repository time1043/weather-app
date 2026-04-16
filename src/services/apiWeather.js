import { API_KEY, API_URL } from "../constants/api";

export const searchParams = ({ latitude, longitude }) =>
  new URLSearchParams({
    lat: latitude,
    lon: longitude,
    appid: API_KEY,
    units: "metric",
  });

// export async function getCurrentWeatherApi({ latitude, longitude }) {
//   const params = searchParams({ latitude, longitude });
//   const url = `${API_URL}/weather?${params.toString()}`;

//   const response = await fetch(url);
//   const data = await response.json();
//   return {
//     temperature: { max: data.main.temp_max, min: data.main.temp_min },
//     iconCode: data.weather[0].icon,
//   };
// }

export async function getForecastWeatherApi({ latitude, longitude }) {
  const params = searchParams({ latitude, longitude });
  const url = `${API_URL}/forecast?${params.toString()}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.list.map((item) => {
    return {
      id: item.dt,
      temperature: { max: item.main.temp_max, min: item.main.temp_min },
      weather: item.weather[0].main,
      weatherIcon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      date: new Date(item.dt * 1000).toISOString(), // .split("T")[0],
    };
  });
}
