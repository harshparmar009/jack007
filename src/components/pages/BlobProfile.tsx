// components/BlobProfile.tsx

"use client";

import { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import introModel from "/public/images/introModel.png"


const BlobProfile: React.FC = () => {
  const blobVariants: string[] = [
    "M47.5,-53.2C60.9,-46.4,69.8,-30.8,70.4,-15.7C71.1,-0.7,63.6,13.7,55.3,27.4C46.9,41,37.7,53.8,24.5,60.4C11.2,67.1,-6,67.5,-22.3,62.6C-38.7,57.7,-54.1,47.6,-59.9,33.8C-65.6,19.9,-61.8,2.3,-60.5,-15.6C-59.2,-33.5,-60.3,-51.7,-51.7,-59.2C-43.2,-66.6,-25,-63.3,-8.3,-59.9C8.3,-56.5,16.6,-53.1,47.5,-53.2Z",
    "M45.1,-54.3C57.5,-45.2,64.6,-28.5,66.1,-11.7C67.7,5.1,63.8,22.1,54.5,36.7C45.3,51.3,30.7,63.5,14.5,65.2C-1.8,66.9,-18,58.1,-33.4,47.7C-48.8,37.3,-63.4,25.3,-66.7,10.2C-70,-4.8,-62,-22.8,-51.4,-33C-40.7,-43.1,-27.3,-45.4,-13.8,-53.7C-0.4,-62.1,13.3,-76.5,26.6,-75.8C40,-75.2,52.9,-59.3,45.1,-54.3Z",
    "M48.3,-59.7C60.6,-48.6,64.2,-27.4,65.7,-6.8C67.3,13.8,66.7,34.8,55.8,48.6C44.9,62.4,23.4,69,3.1,68C-17.2,67,-34.5,58.3,-47.2,45.7C-59.9,33,-68,16.5,-69.8,-0.4C-71.6,-17.4,-67.2,-34.8,-55.9,-45.6C-44.5,-56.4,-26.1,-60.5,-8.2,-57.8C9.8,-55.1,19.5,-45.9,48.3,-59.7Z",
];

  const [currentBlob, cycleBlob] = useCycle(...blobVariants);

  useEffect(() => {
    const interval = setInterval(() => {
      cycleBlob();
    }, 1000); // Change blob every 4 seconds

    return () => clearInterval(interval);
  }, [cycleBlob]);

  return (
    <motion.div
      className="relative flex justify-center items-center rounded-full w-[18em] h-[18em] md:w-[20em] md:h-[20em]  lg:w-[28em] lg:h-[28em] overflow-hidden"
      
    >
      {/* Animated Blob */}
      <motion.svg
        viewBox="-100 -100 200 200"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#FF7E5F" />
    <stop offset="50%" stopColor="#FEB47B" />
    <stop offset="100%" stopColor="#FF7E5F" />
  </linearGradient>
        </defs>
        <motion.path
          fill="url(#gradient)"
          d={currentBlob}
          animate={{ d: currentBlob }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      {/* Profile Image */}
      <div className="relative w-[18em] h-[18em] md:w-[20em] md:h-[20em]  lg:w-[28em] lg:h-[28em] rounded-full overflow-hidden  z-10">
      <Image className="animate-fade-up w-full h-full object-cover " src={introModel} alt="Model"/>

      </div>
    </motion.div>
  );
};

export default BlobProfile;
