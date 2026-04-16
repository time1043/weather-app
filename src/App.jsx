import { Activity, useState } from "react";
import { useGeolocation } from "./hooks/useGeolocation.js";
import Forecast from "./pages/Forecast.jsx";
import Home from "./pages/Home.jsx";
import Container from "./ui/Container.jsx";

function App() {
  // Initialize one instance when useGeolocation is called
  const { position, getPosition } = useGeolocation();
  const [isHome, setIsHome] = useState(true);

  return (
    <Container {...{ isHome, setIsHome }}>
      {/* {isHome && <Home {...{ getPosition, setIsHome }} />}
      {!isHome && <Forecast {...{ position, getPosition }} />} */}
      <Activity mode={isHome ? "visible" : "hidden"}>
        <Home {...{ getPosition, setIsHome }} />
      </Activity>
      <Activity mode={!isHome ? "visible" : "hidden"}>
        <Forecast {...{ position }} />
      </Activity>
    </Container>
  );
}

export default App;
