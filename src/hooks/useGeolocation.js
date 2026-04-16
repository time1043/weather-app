import { useState } from "react";

export function useGeolocation() {
  const [position, setPosition] = useState(null);

  async function getPosition() {
    return new Promise((resolve, reject) => {
      const { geolocation } = navigator;
      if (!geolocation)
        return reject("Geolocation is not supported by your browser");

      geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition({ latitude, longitude });

          console.log("=== get current position success ===");
          console.log({ latitude, longitude });

          resolve({ latitude, longitude });
        },
        (error) => {
          alert(error.message);
          console.log("=== get current position error ===");
          console.error(error);

          reject(error);
        },
      );
    });
  }

  // useEffect(() => {
  //   getPosition();
  // }, []);

  return { position, getPosition };
}
