import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
export default function About() {
  return (
    <>
  
      <HeroBanner />
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        About Crystal Brothers
      </h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Crystal Brothers was founded with a deep love for energy-rich natural
        stones. Our mission is to bring meaningful crystals that support
        spiritual healing, mental clarity, and mindful living into everyday
        life.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Each crystal in our collection is carefully chosen for its beauty,
        vibration, and authenticity. Whether you are new to crystals or a
        long-time collector, we aim to provide knowledge, trust, and pure stones
        that you can truly connect with.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Thank you for exploring this journey with us — energy chooses who it
        belongs to.
      </p>
    </main>
    </>
  );
}
