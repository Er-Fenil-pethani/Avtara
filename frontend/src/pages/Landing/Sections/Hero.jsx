// src/pages/Landing/sections/Hero.jsx

import { motion } from "framer-motion";
import AuroraBackground from "./AuroraBackground";
import FloatingParticles from "./FloatingParticles";


function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Background */}

      <AuroraBackground />
        <FloatingParticles />


      {/* Navbar */}

      <header className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-16 py-10">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-black tracking-[0.4em]"
        >
          AVTARA
        </motion.h1>

        <nav className="flex gap-12 text-sm uppercase tracking-[0.25em] text-slate-300">

          <a href="#">Products</a>

          <a href="#">Reels</a>

          <a href="#">AI</a>

          <a href="#">Brands</a>

        </nav>

      </header>

      {/* Hero */}

      <div className="relative z-20 mx-auto flex w-[90%] max-w-[1600px] items-center justify-between">

        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mb-8 text-sm uppercase tracking-[0.8em] text-violet-400"
          >
            Fashion. In Motion.
          </motion.p>

          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="leading-none"
          >
            <span className="block font-serif text-[120px]">
              Wear
            </span>

            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text font-serif text-[150px] text-transparent">
              Tomorrow.
            </span>

          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .9 }}
            className="mt-10 max-w-xl text-xl leading-10 text-slate-400"
          >
            AI styling.
            Fashion reels.
            Enterprise management.
            Shopping.
            One intelligent ecosystem.
          </motion.p>

          <div className="mt-16 flex gap-6">

            <button className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-10 py-5 text-lg font-semibold transition hover:scale-105">
              Explore
            </button>

            <button className="rounded-full border border-white/20 px-10 py-5 text-lg backdrop-blur-xl transition hover:bg-white/10">
              Watch Demo
            </button>

          </div>

        </div>

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="relative"
        >

          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80"
            alt="Fashion"
            className="h-[850px] rounded-[40px] object-cover shadow-[0_0_120px_rgba(124,58,237,.35)]"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;