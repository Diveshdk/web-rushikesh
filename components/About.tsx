import { motion } from 'motion/react';


export const About = () => {
  return (
    <section id="about" className="relative py-16 md:py-20 px-6 md:px-24 border-b border-brand-border/20 z-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-brand-green text-[12px] md:text-[14px] uppercase tracking-[0.5em] font-bold">About Us</span>
            <div className="h-[1px] w-20 bg-brand-border" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 leading-[0.9] tracking-tighter">
            CRAFTING <br/>
            <span className="text-brand-green italic serif uppercase">MEANINGFUL SPACES</span>.
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="block lg:hidden mb-12"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl grayscale">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Studio" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-8 text-base md:text-xl font-light text-brand-text/50 leading-relaxed max-w-xl">
            <p>
              Rushikesh Sutar & Associates is an architecture and design firm committed to creating functional, aesthetic, and context-driven spaces.
            </p>
            <p>
              With over 8 years of experience, we specialize in architecture, interiors, landscape, planning and liaisoning services, delivering projects that balance design innovation with practical execution.
            </p>
          </div>
          

        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block order-2 lg:order-1"
        >
          <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 rounded-3xl">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Studio" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
