export const getCloseStations = async (latitude: number, longitude: number) => {
  try {
    const response = await fetch(
      `https://api.prix-carburants.2aaz.fr/stations/around/${latitude},${longitude}?opendata=v1`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
