"use client";

import { getCloseStations } from "@/lib/actions/get-close-stations";
import { Station } from "@/lib/types";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LoaderCircleIcon } from "lucide-react";
import { Button } from "../ui/button";

export const Maps = () => {
  const [geolocationAccess, setGeolocationAccess] = useState<boolean | null>(
    null
  );
  const [coords, setCoords] = useState<
    { latitude: string; longitude: string } | undefined
  >(undefined);
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    undefined
  );

  // Ask for geolocation access
  useEffect(() => {
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          setGeolocationAccess(permissionStatus.state === "granted");
        });
    } else {
      console.error(
        "La permission de géolocalisation n'est pas supportée par ce navigateur."
      );
    }
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude.toString();
          const longitude = position.coords.longitude.toString();
          setCoords({ latitude, longitude });
        },
        (error) => {
          console.error(
            "Erreur lors de la récupération de la localisation",
            error
          );
          setLoading(false); // Stop loading even if there's an error
        }
      );
    } else {
      console.error(
        "La géolocalisation n'est pas supportée par ce navigateur."
      );
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (coords) {
      const fetchStations = async () => {
        const data = await getCloseStations(coords.latitude, coords.longitude);
        if (data) {
          setStations(data);
        }
        setLoading(false);
      };

      fetchStations();
    }
  }, [coords]);

  return (
    <div className="p-3">
      <h1 className="font-bold">Stations proches</h1>

      <div className="flex items-center gap-2">
        <Select
          disabled={loading}
          onValueChange={(value) => setSelectedCountry(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue
              placeholder={
                loading ? (
                  <div className="flex items-center gap-2">
                    <span>Loading...</span>
                    <LoaderCircleIcon className="animate-spin size-4" />
                  </div>
                ) : (
                  "Select a station"
                )
              }
            />
          </SelectTrigger>
          <SelectContent>
            {stations
              .map((station: Station) => station.ville)
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((ville, index) => (
                <SelectItem key={index} value={ville}>
                  {ville}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        {selectedCountry && (
          <Button onClick={() => setSelectedCountry(undefined)}>Reset</Button>
        )}
      </div>

      <div className="flex flex-col space-y-4">
        {stations
          .filter((station: Station) => station.ville === selectedCountry)
          .map((station: Station, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <span key={index}>{station.ville}</span>
              {station.prix.map((prix) => (
                <div key={prix.id} className="space-x-2">
                  <span>{prix.nom}</span>
                  <span>{prix.valeur}</span>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
