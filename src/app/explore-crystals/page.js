"use client"
import React from "react";
import { useCrystalStones } from "../context/CrystalStonesContext";

const ExploreCrystals = () => {


const {crystalStones,loading} = useCrystalStones();

console.log("crystalStones............",crystalStones);
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
                <input
                  type="text"
                  id="Search"
                  className="mt-0.5 w-full rounded border-gray-300 pe-10 shadow-sm sm:text-sm py-3"
                />
                <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                  <button
                    type="button"
                    aria-label="Submit"
                    className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-green-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </label>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="h-32 rounded bg-gray-300"></div>
        <div className="h-32 rounded bg-gray-300"></div>
        <div className="h-32 rounded bg-gray-300"></div>
      </div>
    </>
  );
};

export default ExploreCrystals;
