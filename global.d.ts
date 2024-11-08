export declare global {
  type Coordinates = {
    latitude: number;
    longitude: number;
  };

  type Fuel = {
    id: number;
    name: string;
    shortName: string;
    picto: string;
  };

  type FuelType = "Gazole" | "SP95" | "SP98" | "E85" | "E10" | "GPLc" | "Elec";

  type Rupture = {
    nom: FuelType;
    id: number;
    debut: string;
    fin: string;
  };

  type Stations = {
    adresse: string;
    cp: string;
    id: number;
    latitude: string | number;
    longitude: string | number;
    pop: "R" | "A";
    prix: {
      id: number;
      maj: string;
      nom: FuelType;
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
    rupture: Rupture[];
    ville: string;
  };
}
