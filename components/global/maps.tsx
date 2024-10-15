"use client";
import tt from "@tomtom-international/web-sdk-maps";
import { useEffect } from "react";

type Station = {
  latitude: number;
  longitude: number;
  name: string;
};

export const Maps = ({
  userLatitude,
  userLongitude,
  stations,
}: {
  userLatitude: number;
  userLongitude: number;
  stations: Station[];
}) => {
  useEffect(() => {
    if (typeof window === "undefined" || !userLatitude || !userLongitude)
      return;

    // Initialiser la carte centrée sur la position de l'utilisateur
    const map = tt.map({
      key: process.env.NEXT_PUBLIC_TOMTOM_API_KEY!,
      container: "map",
      center: [userLongitude, userLatitude],
      zoom: 12,
    });

    // Ajouter un marqueur pour la position de l'utilisateur
    new tt.Marker().setLngLat([userLongitude, userLatitude]).addTo(map);

    // Ajouter un marqueur pour chaque station essence
    stations.forEach((station) => {
      const marker = new tt.Marker()
        .setLngLat([station.longitude, station.latitude])
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [userLatitude, userLongitude, stations]);

  return <div id="map" className="w-full h-full" />;
};
