import { searchParams } from "./apiWeather";

// const fetcher = (...args) => fetch(...args).then(res => res.json())
export async function fetcher(...args) {
  const response = await fetch(...args);
  const data = await response.json();
  return data;
}

export async function argFetcher(url, { arg }) {
  const { path, query } = arg;

  const response = await fetch(`${url}/${path}?${query}`);
  const data = await response.json();
  return data;
}

export async function getCurrentWeatherApi(url, { arg }) {
  const { path, latitude, longitude } = arg;
  const params = searchParams({ latitude, longitude });

  const data = await argFetcher(url, {
    arg: { path, query: params.toString() },
  });
  return {
    temperature: { max: data.main.temp_max, min: data.main.temp_min },
    iconCode: data.weather[0].icon,
  };
}
