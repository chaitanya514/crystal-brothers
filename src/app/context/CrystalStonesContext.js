
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getCrystalStones } from "../lib/api";

const CrystalStonesContext = createContext();

export const CrystalStonesProvider = ({ children }) => {
  const [crystalStones, setCrystalStones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCrystals() {
      try {
        const data = await getCrystalStones();
        setCrystalStones(data);
      } catch (error) {
        console.error("Error fetching crystals:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCrystals();
  }, []);

  return (
    <CrystalStonesContext.Provider value={{ crystalStones, loading }}>
      {children}
    </CrystalStonesContext.Provider>
  );
};

export const useCrystalStones = () => useContext(CrystalStonesContext);
