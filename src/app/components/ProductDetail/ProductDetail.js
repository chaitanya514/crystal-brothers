"use client";
import React from "react";
import { motion } from "framer-motion";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const ProductDetail = ({ imgSrc, name, properties, description }) => {
 
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          {/* Image with animation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={imgSrc}
              alt={name}
              className="rounded-2xl shadow-lg max-h-[500px] object-contain"
            />
          </motion.div>

          {/* Text section with animation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-lg md:max-w-none space-y-5"
          >
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              {name}
            </h2>

            <div className="bg-green-100/70 inline-block px-3 py-1 rounded-full text-green-800 text-sm font-medium">
              {properties}
            </div>

            {/* Rich text rendering */}
            <div
              className="prose prose-green max-w-none text-gray-700 leading-relaxed"
            //   dangerouslySetInnerHTML={{ __html: description }}
            >
              {documentToReactComponents(description)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
