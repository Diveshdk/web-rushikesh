import { motion } from 'motion/react';
import Image from 'next/image';
export const Stats = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-24 border-y border-brand-border bg-white/5 backdrop-blur-[2px] z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
        <div className="flex flex-col items-center text-center">
          <span className="text-brand-green font-display text-6xl md:text-8xl font-light tracking-tighter mb-4 italic">08+</span>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Years of Experience</span>
        </div>
        <div className="flex flex-col items-center text-center md:border-x md:border-brand-border">
          <span className="text-brand-text font-display text-6xl md:text-8xl font-light tracking-tighter mb-4 italic">01M+</span>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Total Built-up Area</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-brand-sage font-display text-6xl md:text-8xl font-light tracking-tighter mb-4 italic">100+</span>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Total Number of Clients</span>
        </div>
      </div>
    </section>
  );
};

export const Clients = () => {
  const clients = [
    {
      id: 1,
      logo: "/clients/TMC.png",
      name: "TMC"
    },
    {
      id: 2,
      logo: "/clients/MGL.jpg",
      name: "MGL"
    },
    {
      id: 3,
      logo: "/clients/Shrusti.png",
      name: "Shrusti Nx"
    },
    {
      id: 4,
      name: "Realtors"
    },
    {
      id: 5,
      name: "Shree Ram"
    },
    {
      id: 6,
      name: "Vijaya Construction company"
    },
    {
      id: 7,
      logo: "/clients/Solitaire.jpg",
      name: "Solitaire developer"
    },
    {
      id: 8,
      logo: "/clients/MIDC.png",
      name: "MIDC"
    },
    {
      id: 9,
      name: "SHREE VARDHAMAN STHANAKVASI JAIN SHRAVAK SANGHA SADRI RAJASTHAN"
    }
  ];


  return (
    <section className="py-20 border-b border-brand-border bg-white overflow-hidden">
      <div className="flex overflow-hidden opacity-30 hover:opacity-100 transition-opacity duration-1000">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-32 whitespace-nowrap py-4"
        >
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="flex items-center gap-4">
              {client.logo ? <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={100}
                className="object-contain"
              /> : <span></span>}
              <span className="text-2xl font-display font-medium tracking-tight uppercase">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
