import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertToDecimal = (value: string | number) => {
  return parseFloat(value.toString()) / 100000;
};

export const getDistanceBetweenPoints = (
  latitude1: number,
  longitude1: number,
  latitude2: number,
  longitude2: number,
  unit: "miles" | "kilometers" = "kilometers"
): number => {
  const theta = longitude1 - longitude2;
  const distance =
    Math.sin(degToRad(latitude1)) * Math.sin(degToRad(latitude2)) +
    Math.cos(degToRad(latitude1)) *
      Math.cos(degToRad(latitude2)) *
      Math.cos(degToRad(theta));

  let distanceInMiles = radToDeg(Math.acos(distance)) * 60 * 1.1515;

  // Convert to kilometers if needed
  if (unit === "kilometers") {
    distanceInMiles *= 1.609344;
  }

  return parseFloat(distanceInMiles.toFixed(2));
};

const degToRad = (degrees: number): number => {
  return degrees * (Math.PI / 180);
};

const radToDeg = (radians: number): number => {
  return radians * (180 / Math.PI);
};

export const formatDateToShort = (dateString: string): string => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  };

  return date.toLocaleDateString("en-GB", options);
};
