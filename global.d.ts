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

  type ServicesIconType =
    | "DAB (Distributeur automatique de billets)"
    | "Piste poids lourds"
    | "Vente de pétrole lampant"
    | "Station de gonflage"
    | "Lavage automatique"
    | "Vente de gaz domestique (Butane | Propane)"
    | "Automate CB 24/24"
    | "Laverie"
    | "Toilettes publiques"
    | "Boutique alimentaire"
    | "Boutique non alimentaire"
    | "Wifi"
    | "Carburant additivé"
    | "Vente d'additifs carburants"
    | "Restauration à emporter"
    | "Bornes électriques"
    | "Douches"
    | "Vente de fioul domestique"
    | "Lavage manuel"
    | "Relais colis"
    | "Location de véhicule";

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
    services: ServicesIconType[];
    rupture: Rupture[];
    ville: string;
  };
}
