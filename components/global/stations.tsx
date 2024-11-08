"use client";

import { Badge } from "@/components/ui/badge";
import { getCloseStations } from "@/lib/actions/get-close-stations";
import {
  convertToDecimal,
  formatDateToShort,
  getDistanceBetweenPoints,
} from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircleIcon, MapPinIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const StationsComponent = () => {
  const [coords, setCoords] = useState<Coordinates>({
    latitude: 0,
    longitude: 0,
  });

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

  const {
    data: stations,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["stations"],
    queryFn: () =>
      getCloseStations({
        latitude: coords.latitude,
        longitude: coords.longitude,
      }),
    enabled: !!coords?.latitude && !!coords?.longitude,
  });

  console.log("stations :>>", stations);

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-1">
        <MapPinIcon className="w-6 h-6" />
        <h1 className="font-bold text-lg">Fuel Stations</h1>
      </div>
      {isLoading && (
        <div className="w-full h-20 flex items-center justify-center animate-spin">
          <LoaderCircleIcon size={40} />
        </div>
      )}
      {isError && <p>Erreur : {error.message}</p>}
      {stations && (
        <div className="space-y-2">
          {stations.map((station) => (
            <a
              className="border rounded-md flex flex-col gap-2 p-2"
              key={station.id}
              href={`https://www.google.com/maps/dir//${convertToDecimal(
                station.latitude
              )},${convertToDecimal(station.longitude)}`}
              target="_blank"
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <h2 className="font-semibold">{station.ville}</h2>
                  <span className="text-sm text-gray-500">
                    {formatDateToShort(station.prix[0]?.maj)}
                  </span>
                </div>
                <span className="text-gray-500">
                  {getDistanceBetweenPoints(
                    coords.latitude,
                    coords.longitude,
                    convertToDecimal(station.latitude),
                    convertToDecimal(station.longitude)
                  ).toFixed(1)}{" "}
                  km
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  {station.prix.map((prix) => (
                    <div key={prix.id} className="flex items-center gap-2">
                      <Badge>{prix.nom}</Badge>
                      <span>{prix.valeur} €</span>
                    </div>
                  ))}
                  {station.rupture?.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">
                        {station.rupture[0].nom}
                      </Badge>
                      <span className="text-destructive">Rupture</span>
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
