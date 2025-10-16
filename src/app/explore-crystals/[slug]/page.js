"use client";
import { use } from "react";
import { useParams } from "next/navigation";
import Section from "@/app/components/Section/Section";
import { useCrystalStones } from "@/app/context/CrystalStonesContext";

export default function CrystalStoneDetailPage({ params }) {
  const { slug } = use(params);
  const { crystalStones, loading } = useCrystalStones();

  if (loading) return <p>Loading...</p>;

  const crystal = crystalStones.find((stone) => stone.fields.slug === slug);

console.log("crystal",crystal)
  if (!crystal) return <p>Crystal not found.</p>;
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <p>{slug}</p>
      {/* <img
        src={image?.fields?.file?.url}
        alt={name}
        className="w-full h-96 object-cover rounded-lg shadow"
      /> */}
      {/* <h1 className="text-4xl font-bold text-green-700 mt-6 mb-2">{name}</h1>
      <p className="text-gray-700">{description}</p> */}
    </div>
  );
}


