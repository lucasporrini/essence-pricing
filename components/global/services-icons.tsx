"use client";

import {
  BanknoteIcon,
  CarIcon,
  CreditCardIcon,
  FlameIcon,
  FuelIcon,
  Package2Icon,
  PlugIcon,
  SaladIcon,
  SandwichIcon,
  ShoppingBasketIcon,
  ShowerHeadIcon,
  TruckIcon,
  WashingMachineIcon,
  WifiIcon,
  WindIcon,
} from "lucide-react";

type ServicesIconsComponentType = {
  icon: ServicesIconType;
  size?: number;
};

export const ServicesIconsComponent = ({
  icon,
  size = 24,
}: ServicesIconsComponentType) => {
  console.log("icon :>>", icon);
  switch (icon) {
    case "DAB (Distributeur automatique de billets)":
      return <BanknoteIcon size={size} />;
    case "Automate CB 24/24":
      return <CreditCardIcon size={size} />;
    case "Bornes électriques":
      return <PlugIcon size={size} />;
    case "Boutique alimentaire":
      return <SaladIcon size={size} />;
    case "Boutique non alimentaire":
      return <ShoppingBasketIcon size={size} />;
    case "Carburant additivé":
    case "Vente d'additifs carburants":
      return <FlameIcon size={size} />;
    case "Lavage automatique":
      // TODO: Add icon
      return null;
    case "Lavage manuel":
      // TODO: Add icon
      return null;
    case "Laverie":
      return <WashingMachineIcon size={size} />;
    case "Piste poids lourds":
      return <TruckIcon size={size} />;
    case "Location de véhicule":
      return <CarIcon size={size} />;
    case "Relais colis":
      return <Package2Icon size={size} />;
    case "Restauration à emporter":
      return <SandwichIcon size={size} />;
    case "Station de gonflage":
      return <WindIcon size={size} />;
    case "Toilettes publiques":
      // TODO: Add icon
      return null;
    case "Vente de fioul domestique":
    case "Vente de gaz domestique (Butane | Propane)":
    case "Vente de pétrole lampant":
      return <FuelIcon size={size} />;
    case "Wifi":
      return <WifiIcon size={size} />;
    case "Douches":
      return <ShowerHeadIcon size={size} />;
    default:
      return null;
  }
};
