import { API_URL } from "@/constants/api";
import { searchParams } from "@/services/apiWeather";
import { fetcher, getCurrentWeatherApi } from "@/services/fetcher";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export function useCurrentWeather({ getPosition }) {
  const { trigger, data, isMutating, error } = useSWRMutation(
    API_URL,
    getCurrentWeatherApi,
  );

  async function getCurrentWeather() {
    const position = await getPosition();
    await trigger({ path: "weather", ...position });
  }

  return { getCurrentWeather, data, isMutating };
}

// Weather forecast
// https://openweathermap.org/forecast5?collection=current_forecast
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API-key}

export function useForecastWeather({ position }) {
  const params = searchParams({ ...position });
  const url = `${API_URL}/forecast?${params.toString()}`;

  const { data } = useSWR(url, fetcher, {
    // onSuccess: (data) => console.log(data),
  });

  const weatherForecasts = data?.list
    .map((item) => {
      const weekday = new Intl.DateTimeFormat("en", {
        weekday: "short",
      }).format(new Date(item.dt * 1000));
      const datetime = `${weekday} ${item.dt_txt}`;

      return {
        id: item.dt,
        temperature: { max: item.main.temp_max, min: item.main.temp_min },
        weather: item.weather[0].main,
        weatherIcon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        datetime,
      };
    })
    .filter((item) => item.datetime.includes("12"));

  return { weatherForecasts };
}
