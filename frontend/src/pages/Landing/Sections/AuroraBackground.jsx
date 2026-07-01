// src/pages/Landing/sections/AuroraBackground.jsx

import { motion } from "framer-motion";

const blobs = [
  {
    size: 700,
    color: "bg-violet-600/25",
    top: "-15%",
    left: "-10%",
    duration: 18,
  },
  {
    size: 650,
    color: "bg-cyan-500/20",
    top: "5%",
    right: "-10%",
    duration: 24,
  },
  {
    size: 600,
    color: "bg-fuchsia-500/20",
    bottom: "-10%",
    left: "35%",
    duration: 20,
  },
];

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.15, .9, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full blur-[180px] ${blob.color}`}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05070D_85%)]" />

    </div>
  );
}

export default AuroraBackground;