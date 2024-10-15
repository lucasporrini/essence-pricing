"use client";
import { Maps } from "@/components/global/maps";
import { useMaps } from "@/components/providers/maps-provider";
import { useEffect } from "react";

const Home = () => {
  const { coords, setCoords } = useMaps();

  useEffect(() => {
    if (navigator.geolocation) {
      console.log("Géolocalisation supportée par ce navigateur.");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCoords({ latitude, longitude });
        },
        (error) => {
          console.error(
            "Erreur lors de la récupération de la localisation",
            error
          );
        }
      );
    } else {
      console.error(
        "La géolocalisation n'est pas supportée par ce navigateur."
      );
    }
  }, [setCoords]);

  if (!coords) {
    return <p>Chargement de la carte...</p>;
  }

  return (
    <div className="w-full h-screen">
      <Maps latitude={coords.latitude} longitude={coords.longitude} />
    </div>
  );
};

export default Home;
