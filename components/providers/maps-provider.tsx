"use client";
import { Coords } from "@/lib/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type MapsContextType = {
  coords: Coords | undefined;
  setCoords: Dispatch<SetStateAction<Coords | undefined>>;
};

const MapsContext = createContext<MapsContextType | undefined>(undefined);

export const useMaps = () => {
  const context = useContext(MapsContext);

  if (!context) {
    throw new Error("useMaps must be used within a MapsProvider");
  }

  return context;
};

type MapsProviderProps = {
  children: React.ReactNode;
};

export const MapsProvider = ({ children }: MapsProviderProps) => {
  const [coords, setCoords] = useState<Coords | undefined>(undefined);

  return (
    <MapsContext.Provider value={{ coords, setCoords }}>
      {children}
    </MapsContext.Provider>
  );
};
