export type Coords = {
  latitude: number;
  longitude: number;
};

export type Fuel = {
  id: number;
  name: string;
  shortName: string;
  picto: string;
};

export type Station = {
  adresse: string;
  cp: string;
  id: number;
  latitude: string;
  longitude: string;
  pop: "R";
  prix: {
    id: number;
    maj: string;
    nom: "Gazole" | "SP95" | "SP98" | "E85" | "E10" | "GPLc" | "Elec";
    valeur: string;
  }[];
  horaire: {
    "automate-24-24": boolean;
    jour: {
      id: number;
      nom: string;
      ferme: string;
      horaire: {
        fermerture: string;
        ouverture: string;
      }[];
    }[];
  };
  services: string[];
  ville: string;
};
