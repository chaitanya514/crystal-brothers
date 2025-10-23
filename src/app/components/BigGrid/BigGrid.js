import React from "react";
import { motion } from "motion/react";


const BigGrid = ({name,color,image}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
    >
      <div
        key={name}
        className="text-center shadow rounded-2xl p-5 hover:shadow-lg transition cursor-pointer"
      >
        <img src={image} alt={name} className="mx-auto h-80" />
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{color} Energy</p>
      </div>
    </motion.button>
  );
};

export default BigGrid;
