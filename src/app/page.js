"use client";

import { useState } from "react";
import Image from "next/image";

import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Image
          src="/heroimg.png"
          alt="Picture of the author"
          width={500}
          height={500}
        ></Image>
      </div>
    </div>
  );
}
