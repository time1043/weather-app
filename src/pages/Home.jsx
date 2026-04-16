import { Button } from "@mui/material";
import CurrentWeather from "../features/current/CurrentWeather";
import { useCurrentWeather } from "../hooks/useWeather";

function Home({ getPosition, setIsHome }) {
  const { getCurrentWeather, data, isMutating } = useCurrentWeather({
    getPosition,
  });

  if (data) {
    return (
      <CurrentWeather {...{ data, setIsHome, getCurrentWeather, isMutating }} />
    );
  }

  return (
    <section>
      <h1>Hello! Welcome</h1>
      <Button
        variant="contained"
        size="large"
        onClick={getCurrentWeather}
        disabled={isMutating}
      >
        Refresh Current Weather
      </Button>
    </section>
  );
}

export default Home;
