import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";
import AnimatedLogoMobile from "./AnimatedLogoMobile";

export function Hero() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white font-sans text-black p-8 sm:p-16 overflow-hidden">
      <main className="flex flex-col items-center w-full max-w-7xl mx-auto layout-shift mt-[15vh] md:mt-14 scale-110 md:scale-125 origin-center">
        {/* Logo Section */}
        <div className="w-full hidden md:block">
          <AnimatedLogo />
        </div>
        <div className="w-full max-w-md block md:hidden">
          <AnimatedLogoMobile />
        </div>

        {/* Tagline Section */}
        <div className="mt-8 tagline-appear text-center">
          <p className="text-sm sm:text-2xl tracking-[0.5em] uppercase font-light italic text-gray-400">
            from concept to cornerstone
          </p>
        </div>

        {/* Services Section */}
        <div className="mt-6 services-appear text-center">
          <p className="text-[10px] sm:text-base tracking-[0.4em] uppercase font-light text-gray-400">
            Architecture &nbsp;|&nbsp; Interior &nbsp;|&nbsp; Urban Design &nbsp;|&nbsp; Landscape
          </p>
        </div>

        {/* Buttons Section - Fades in slowly after transition ends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 10, duration: 1.5, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-6 md:gap-10 pointer-events-auto"
        >
          <motion.a
            href="#projects"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-center gap-4 text-[10px] md:text-[13px] uppercase tracking-[0.25em] md:tracking-[0.3em] font-black cursor-pointer bg-[#28977b] text-white px-8 md:px-12 py-4 md:py-5 rounded-full shadow-[0_20px_50px_rgba(40,151,123,0.2)] border border-[#28977b]/20"
          >
            Explore Projects
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-center gap-4 text-[10px] md:text-[13px] uppercase tracking-[0.25em] md:tracking-[0.3em] font-black cursor-pointer bg-black text-white px-8 md:px-12 py-4 md:py-5 rounded-full shadow-2xl border border-white/10"
          >
            Start A Project
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform text-[#28977b]" />
          </motion.a>
        </motion.div>
      </main>
    </div>
  );
}
