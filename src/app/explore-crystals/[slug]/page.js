"use client";
import { use } from "react";
import { useParams } from "next/navigation";
import Section from "@/app/components/Section/Section";
import { useCrystalStones } from "@/app/context/CrystalStonesContext";
import { ProductDetail } from "@/app/components/ProductDetail/ProductDetail";

export default function CrystalStoneDetailPage({ params }) {
  const { slug } = use(params);
  const { crystalStones, loading } = useCrystalStones();

  if (loading) return <p>Loading...</p>;

  const crystal = crystalStones.find((stone) => stone.fields.slug === slug);
  const imgPath = crystal?.fields?.image?.fields?.file?.url
  const name=crystal?.fields?.name
  const properties = crystal?.fields?.properties
  const description  = crystal?.fields?.description

  
  

console.log("description........",description)
  if (!crystal) return <p>Crystal not found.</p>;
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
    <ProductDetail imgSrc={imgPath} name={name} properties={properties} description={description}/>
    </div>
  );
}


