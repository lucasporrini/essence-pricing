"use server";

export const getCloseStations = async ({
  latitude,
  longitude,
}: Coordinates) => {
  try {
    const response = await fetch(
      `https://api.prix-carburants.2aaz.fr/stations/around/${latitude},${longitude}?opendata=v1`
    );

    if (!response.ok) {
      return null;
    }

    return response.json() as Promise<Stations[]>;
  } catch (err) {
    console.error(err);
  }
};
