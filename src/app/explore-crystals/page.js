"use client";
import React, { useState } from "react";
import { useCrystalStones } from "../context/CrystalStonesContext";
import { useRouter } from "next/navigation";

const ExploreCrystals = () => {
  const { crystalStones, loading } = useCrystalStones();
  const router = useRouter();

  const [query, setQuery] = useState("");

  // Filter list
  const filteredStones = crystalStones?.filter((item) =>
    item?.fields?.name?.toLowerCase().includes(query.toLowerCase())
  );
  

  return (
    <>
      <header className="relative bg-green-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-100 to-white opacity-60"></div>
        </div>

        <div className="relative z-10 py-20 text-center px-4">
          <h1 className="text-5xl font-serif font-bold text-green-700 mb-4">
            Explore Crystals
          </h1>
          <p className="text-xl text-gray-700 max-w-xl mx-auto">
            Discover The Energy And Meaning Behind Each Beautiful Stone.
          </p>

          <div className="max-w-xl mx-auto">
            <label htmlFor="Search">
              <div className="relative ml-5 py-5">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search crystals..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-10 text-base shadow-sm outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    🔍
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 relative">
        {filteredStones?.length > 0 ? (
          filteredStones.map((crystalStone, i) => {
            const imgUrl = crystalStone?.fields?.image?.fields?.file?.url;

            return (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
                onClick={() =>
                  router.push("explore-crystals/" + crystalStone?.fields?.slug)
                }
              >
                <img
                  src={imgUrl}
                  alt={crystalStone?.fields?.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition"></div>
                <h4 className="absolute bottom-3 left-0 right-0 text-center text-white font-semibold drop-shadow-lg">
                  {crystalStone?.fields?.name}
                </h4>
              </div>
            );
          })
        ) : (
          <p className="text-center w-full py-10 text-gray-500">No crystals found</p>
        )}
      </div>
    </>
  );
};

export default ExploreCrystals;
