import Image from "next/image";
import AnimatedLogo from "./AnimatedLogo";
import AnimatedLogoMobile from "./AnimatedLogoMobile";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white font-sans text-black p-8 sm:p-16 overflow-hidden">
      <main className="flex flex-col items-center w-full max-w-5xl mx-auto layout-shift">
        {/* Logo Section */}
        <div className="w-full hidden md:block">
          <AnimatedLogo />
        </div>
        <div className="w-full max-w-sm block md:hidden">
          <AnimatedLogoMobile />
        </div>

        {/* Tagline Section */}
        <div className="mt-8 tagline-appear text-center">
          <p className="text-xl sm:text-3xl tracking-[0.4em] uppercase font-light italic text-gray-400">
            from concept to cornerstone
          </p>
        </div>

        {/* Services Section */}
        <div className="mt-8 services-appear text-center">
          <p className="text-sm sm:text-lg tracking-[0.4em] uppercase font-light text-gray-400">
            Architecture &nbsp;|&nbsp; Interior &nbsp;|&nbsp; Urban Design &nbsp;|&nbsp; Landscape
          </p>
        </div>
      </main>
    </div>
  );
}
