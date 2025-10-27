"use client";
import Head from "next/head";
import Section from "./components/Section/Section";
import { getSection, getCrystalStones } from "./lib/api";
import { getImageUrl } from "./lib/image";
import Navbar from "./components/Navbar/Navbar";
import { auth } from "./lib/firebase";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import BigGrid from "./components/BigGrid/BigGrid";
import { useAuthUser } from "./context/authContext";

export default function Home() {


  const { user, loading } = useAuthUser();

  const [sections, setSections] = useState([]);
  const [crystalStonesData, setCrystalStonesData] = useState([]);

  console.log("user...", user);

  useEffect(() => {
    async function fetchData() {
      const data = await getSection();
      const crystalStonesData = await getCrystalStones();
      setSections(data);
      setCrystalStonesData(crystalStonesData);
    }
    fetchData();
  }, []); // ✅ empty deps → only once

  const firstImageUrl = getImageUrl(sections[0]?.fields?.image);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>Crystal Brothers</title>
        <meta
          name="description"
          content="Discover healing crystals for balance and clarity"
        />
      </Head>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
        }}
      >
        <header className="relative bg-green-50">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-green-100 to-white opacity-60"></div>
          </div>
          <div className="relative z-10 py-20 text-center px-4">
            <h1 className="text-5xl font-serif font-bold text-green-700 mb-4">
              Crystal Brothers
            </h1>
            <p className="text-xl text-gray-700 max-w-xl mx-auto">
              Discover hand-picked crystals to elevate your energy and bring
              clarity to your life.
            </p>

            <a
              href="#shop"
              className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition"
            >
              Explore Crystals
            </a>
          </div>
        </header>
      </motion.div>

      {/* Section using dynamic Contentful image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} // Animate only once when 20% visible
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-10 bg-white rounded-xl shadow"
      >
        <Section
          imgSrc={firstImageUrl || "/images/greenavanturine/gasideblock.jpg"}
          imageSide={sections[0]?.fields?.imageSide}
        />
      </motion.div>

      {/* Products Preview Section */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} // Animate only once when 20% visible
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-10 bg-white rounded-xl shadow"
      >
        <section id="shop" className="py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Crystal Trees
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "Amethyst",
                color: "Purple",
                image: "/images/amethyst/amethyst_tree.png",
              },
              {
                name: "Rose Quartz",
                color: "Pink",
                image: "/images/rosequartz/rq3.webp",
              },
              {
                name: "Clear Quartz",
                color: "White",
                image: "/images/clearquartz/cq2.jpeg",
              },
              {
                name: "Green Aventurine",
                color: "Green",
                image: "/images/greenavanturine/ga4.avif",
              },
            ].map((crystal) => (
              <BigGrid
                key={crystal.name}
                name={crystal.name}
                color={crystal.color}
                image={crystal.image}
              />
            ))}
          </div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} // Animate only once when 20% visible
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-10 bg-white rounded-xl shadow"
      >
        <Section imgSrc="/images/greenavanturine/ga1.jpg" imageSide="right" />
      </motion.div>
    </div>
  );
}
