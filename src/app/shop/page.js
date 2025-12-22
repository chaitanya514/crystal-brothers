"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { getProductData } from "../lib/api";


const Shop = () => {
  const { addItem, cart } = useCart(); // ✅ using global cart
  const [quantities, setQuantities] = useState({});
  const [products, SetProducts] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const data = await getProductData();
      SetProducts(data);
    }
    fetchData();
  }, []); // ✅ empty deps → only once

  // increase quantity
  const increase = (id) => {
    setQuantities({ ...quantities, [id]: (quantities[id] || 1) + 1 });
  };

  // decrease quantity
  const decrease = (id) => {
    if ((quantities[id] || 1) > 1) {
      setQuantities({ ...quantities, [id]: quantities[id] - 1 });
    }
  };

  // add to cart
  const addToCart = (product) => {
    console.log("product while click on add to cart",product)
    const qty = quantities[product?.id] || 1;
    addItem({ ...product, quantity: qty }); // ✅ Use Context addItem
  };

  return (
    <main className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Shop Crystals
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product?.fields?.id}
              className="cursor-pointer group relative rounded-2xl bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <Image
                  src={`https:${product?.fields?.image?.fields?.file?.url}`} 
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition">
                  {product?.fields?.name}
                </h2>

                <p className="text-gray-500 mt-1 text-sm">${product?.fields?.price}</p>

                {/* Counter */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <button
                    onClick={() => decrease(product?.fields?.id)}
                    className="cursor-pointer w-9 h-9 text-xl border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                  >
                    −
                  </button>

                  <span className="text-lg font-semibold">
                    {quantities[product?.fields?.id] || 1}
                  </span>

                  <button
                    onClick={() => increase(product?.fields?.id)}
                    className="cursor-pointer w-9 h-9 text-xl border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(product)}
                  className="cursor-pointer mt-5 w-full py-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl shadow hover:shadow-md hover:opacity-90 transition-all"
                >
                  Add to Cart
                </button>

                {/* View Details */}
                <Link
                  href={`/shop/${product.slug}`}
                  className=" cursor-pointer block mt-3 px-4 py-2 border border-teal-600 text-teal-600 rounded-xl hover:bg-teal-50 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
