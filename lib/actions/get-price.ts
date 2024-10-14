"use server";

export const getAllFuels = async () => {
  try {
    const response = await fetch("https://api.prix-carburants.2aaz.fr/fuels");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
