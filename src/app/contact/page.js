import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";

export default function Contact() {
  return (
    <>
    <HeroBanner />
    <main className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Contact Us</h1>

      <p className="text-gray-700 mb-6">
        Have a question, collaboration idea or custom request? Reach out to us
        anytime.
      </p>

      <div className="space-y-4 text-lg">
        <p>
          📩 <span className="text-gray-800">Email:</span>{" "}
          <a
            href="mailto:yourmail@gmail.com"
            className="text-green-700 underline"
          >
            yourmail@gmail.com
          </a>
        </p>

        <p>
          📷 <span className="text-gray-800">Instagram:</span>{" "}
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            className="text-green-700 underline"
          >
            @yourpage
          </a>
        </p>
      </div>
    </main>
    </>
  );
}
