import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Shirt,
} from "lucide-react";

import { loginUser } from "../../services/auth.service";
import useAuthStore from "../../store/authStore";

function LoginPage() {
  const navigate = useNavigate();

  const setAuth = useAuthStore((state) => state.setAuth);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await loginUser(form);

      const { user, accessToken } = response.data;

      setAuth({
        user,
        token: accessToken,
      });

      navigate("/dashboard");
    } catch (error) {
      alert(
        error?.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-[#05070d]">

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-700/30 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-[120px]"
        />
      </div>

      <div className="relative z-10 flex w-full">

        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="hidden lg:flex w-1/2 flex-col justify-center px-24"
        >

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-violet-300">

            <Sparkles size={18} />

            AI Fashion Platform

          </div>

          <h1 className="mt-8 text-7xl font-black leading-none text-white">

            Fashion

            <br />

            Reimagined.

          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-400">

            Avtara combines AI styling,
            fashion reels,
            ERP,
            and e-commerce into
            one premium ecosystem.

          </p>

          <div className="mt-16 flex gap-8">

            <div>

              <h2 className="text-5xl font-bold text-white">
                10K+
              </h2>

              <p className="mt-2 text-slate-400">
                Fashion Products
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-white">
                250+
              </h2>

              <p className="mt-2 text-slate-400">
                Brands
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-white">
                AI
              </h2>

              <p className="mt-2 text-slate-400">
                Outfit Stylist
              </p>

            </div>

          </div>

        </motion.div>

        <div className="flex flex-1 items-center justify-center px-6 py-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .8,
            }}
            className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl"
          >

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600">

                <Shirt
                  className="text-white"
                  size={28}
                />

              </div>

              <div>

                <h2 className="text-3xl font-bold text-white">
                  Welcome Back
                </h2>

                <p className="text-slate-400">
                  Continue your fashion journey
                </p>

              </div>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

                            <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>

                <div className="group flex h-14 items-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 focus-within:border-violet-500 focus-within:bg-white/10">

                  <Mail
                    size={20}
                    className="ml-5 text-slate-400 transition group-focus-within:text-violet-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="h-full flex-1 bg-transparent px-4 text-white outline-none placeholder:text-slate-500"
                    required
                  />

                </div>

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </label>

                <div className="group flex h-14 items-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 focus-within:border-violet-500 focus-within:bg-white/10">

                  <Lock
                    size={20}
                    className="ml-5 text-slate-400 transition group-focus-within:text-violet-400"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="h-full flex-1 bg-transparent px-4 text-white outline-none placeholder:text-slate-500"
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="mr-5 text-slate-400 hover:text-violet-400"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>

                </div>

              </div>

              <div className="flex items-center justify-between">

                <label className="flex items-center gap-3 text-sm text-slate-400">

                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-violet-600"
                  />

                  Remember me

                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
                >
                  Forgot Password?
                </button>

              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: .98,
                }}
                disabled={loading}
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,.45)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(124,58,237,.75)]"
              >

                {loading ? (
                  <>
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                    />

                    Signing In...

                  </>
                ) : (
                  <>
                    Enter Avtara

                    <ArrowRight size={20} />
                  </>
                )}

              </motion.button>

              <div className="pt-3 text-center text-slate-400">

                New here?

                <Link
                  to="/register"
                  className="ml-2 font-semibold text-violet-400 transition hover:text-violet-300"
                >
                  Create Account
                </Link>

              </div>

                          </form>

            <div className="mt-10 border-t border-white/10 pt-8">

              <div className="mb-6 flex items-center gap-4">

                <div className="h-px flex-1 bg-white/10" />

                <span className="text-sm uppercase tracking-[0.35em] text-slate-500">
                  Explore
                </span>

                <div className="h-px flex-1 bg-white/10" />

              </div>

              <div className="grid grid-cols-3 gap-4">

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <div className="mb-3 text-3xl">
                    🤖
                  </div>

                  <h3 className="text-white font-semibold">
                    AI Stylist
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Personalized outfit recommendations
                    in seconds.
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <div className="mb-3 text-3xl">
                    🎥
                  </div>

                  <h3 className="text-white font-semibold">
                    Fashion Reels
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Discover trending styles from creators
                    around the world.
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <div className="mb-3 text-3xl">
                    🛍️
                  </div>

                  <h3 className="text-white font-semibold">
                    Marketplace
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Buy directly from premium fashion
                    brands.
                  </p>

                </motion.div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-20 top-20 h-72 w-72 rounded-full border border-violet-500/10"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-20 h-96 w-96 rounded-full border border-cyan-500/10"
      />

      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-40 top-40 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_40px_#22d3ee]"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-40 left-32 h-4 w-4 rounded-full bg-violet-500 shadow-[0_0_30px_#7c3aed]"
      />

          </div>
  );
}

export default LoginPage;