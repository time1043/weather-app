import { Button, Stack } from "@mui/material";
import Day from "./Day";

function CurrentWeather({ data, setIsHome, getCurrentWeather, isMutating }) {
  return (
    <section>
      <Day {...data} />

      <Stack direction="column" spacing={2}>
        <Button
          variant="contained"
          size="large"
          onClick={() => setIsHome(false)}
        >
          Get Forecast Weather
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={getCurrentWeather}
          disabled={isMutating}
        >
          Refresh Current Weather
        </Button>
      </Stack>
    </section>
  );
}

export default CurrentWeather;
