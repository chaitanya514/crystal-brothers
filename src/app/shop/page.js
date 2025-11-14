"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";


const products = [
  {
    id: 1,
    name: "Amethyst Crystal",
    price: "$25.00",
    image:
      "https://images.unsplash.com/photo-1616627457232-3b8f3de0e0ce?auto=format&fit=crop&w=500&q=80",
    slug: "amethyst-crystal",
  },
  {
    id: 2,
    name: "Rose Quartz",
    price: "$20.00",
    image:
      "https://images.unsplash.com/photo-1616627565457-734fdde9c76b?auto=format&fit=crop&w=500&q=80",
    slug: "rose-quartz",
  },
  {
    id: 3,
    name: "Citrine Stone",
    price: "$22.00",
    image:
      "https://images.unsplash.com/photo-1622396480820-3a2954c1e0b3?auto=format&fit=crop&w=500&q=80",
    slug: "citrine-stone",
  },
  {
    id: 4,
    name: "Clear Quartz",
    price: "$18.00",
    image:
      "https://images.unsplash.com/photo-1616627296823-3bbf92d516cc?auto=format&fit=crop&w=500&q=80",
    slug: "clear-quartz",
  },
];


 const Shop = () => {
  return (
    <main className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Shop Crystals
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden bg-gray-50"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h2>
                <p className="text-gray-500 mt-1">{product.price}</p>
                <Link
                  href={`/shop/${product.slug}`}
                  className="inline-block mt-3 px-4 py-2 bg-teal-600 text-white text-sm rounded-xl hover:bg-teal-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Shop;



