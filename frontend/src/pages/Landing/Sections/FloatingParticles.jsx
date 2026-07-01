// src/pages/Landing/sections/FloatingParticles.jsx

import { motion } from "framer-motion";

const particles = Array.from({ length: 40 });

function FloatingParticles() {
  return (
    <>
      {particles.map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -80, 0],
            opacity: [.2, 1, .2],
            scale: [.7, 1.3, .7],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute rounded-full bg-white/40"
          style={{
            width: 2 + Math.random() * 5,
            height: 2 + Math.random() * 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </>
  );
}

export default FloatingParticles;