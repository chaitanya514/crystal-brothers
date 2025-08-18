// pages/index.js
import Head from "next/head";
import Section from "./components/Section/Section";
import { getSection } from "./lib/api";
import { getImageUrl } from "./lib/image";

export default async function Home() {
  // ✅ fetch data server-side before rendering
  const sectionComponentData = await getSection();
  const firstImageUrl = getImageUrl(sectionComponentData[0]?.fields?.image);

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

      {/* Section using dynamic Contentful image */}
      <Section
        imgSrc={firstImageUrl || "/images/greenavanturine/gasideblock.jpg"}
        imageSide={sectionComponentData[0]?.fields?.imageSide}
      />

      {/* Products Preview Section */}
      <section id="shop" className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Crystal Trees</h2>
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
            <div
              key={crystal.name}
              className="text-center shadow rounded-2xl p-5 hover:shadow-lg transition"
            >
              <img
                src={crystal.image}
                alt={crystal.name}
                className="mx-auto h-80"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {crystal.name}
              </h3>
              <p className="text-sm text-gray-500">{crystal.color} Energy</p>
            </div>
          ))}
        </div>
      </section>

      <Section imgSrc="/images/greenavanturine/ga1.jpg" imageSide="right" />

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Crystal Brother. All rights reserved.
      </footer>
    </div>
  );
}
