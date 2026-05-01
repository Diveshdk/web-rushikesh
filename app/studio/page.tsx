"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

export type GalleryImage = {
    src?: string;
    label: string;
    sublabel?: string;
    aspect: "tall" | "wide" | "square";
};

/* ─────────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────────── */

const CULTURE_PILLARS = [
    {
        num: "01",
        title: "Strong Collaboration",
        body: "Our team works closely across all stages — from concept development to execution — ensuring attention to detail and clarity in every project.",
    },
    {
        num: "02",
        title: "Dynamic Environment",
        body: "The studio fosters an open and dynamic work environment where creativity, technical expertise, and practical problem-solving come together seamlessly.",
    },
    {
        num: "03",
        title: "Holistic Approach",
        body: "Architecture, interiors, landscape, and planning integrated under one roof. We balance design innovation with practical execution.",
    }
];

const STUDIO_FACTS = [
    { value: "301", label: "Oracle Business Park", sub: "Thane West, Maharashtra" },
    { value: "8+", label: "Years Experience", sub: "Architecture & Design" },
    { value: "4", label: "Core Services", sub: "Arch · Interiors · Landscape · Planning" },
];

const ENVIRONMENT_QUALITIES = [
    "Simple",
    "Functional",
    "Thoughtfully Curated",
    "Context-driven",
];

// Default gallery layout if no images are passed
const DEFAULT_GALLERY: GalleryImage[] = [
    { label: "Design Studio", sublabel: "Work in Progress", aspect: "tall" },
    { label: "Collaboration Zone", sublabel: "Open Plan", aspect: "square" },
    { label: "Meeting Room", sublabel: "Review Space", aspect: "square" },
    { label: "Client Lounge", sublabel: "Reception & Waiting", aspect: "wide" },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */

function SectionLabel({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-16 bg-brand-border" />
            <span className="text-brand-green text-[10px] uppercase tracking-[0.3em] font-bold">
                {text}
            </span>
            <div className="h-[1px] flex-1 bg-brand-border/30" />
        </div>
    );
}

function MagneticCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springX = useSpring(cursorX, { damping: 25, stiffness: 200 });
    const springY = useSpring(cursorY, { damping: 25, stiffness: 200 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            cursorX.set(e.clientX - 8);
            cursorY.set(e.clientY - 8);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full border border-brand-green pointer-events-none z-[9999] mix-blend-difference"
            style={{ x: springX, y: springY }}
        />
    );
}

/* ─────────────────────────────────────────────
   SECTION 1 — HERO
───────────────────────────────────────────── */
function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <div ref={ref} className="relative min-h-[90vh] flex flex-col justify-end pb-24 mb-0 overflow-hidden">
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            >
                <span
                    className="text-[18vw] font-display font-medium tracking-tighter text-brand-border/10 leading-none whitespace-nowrap"
                    aria-hidden
                >
                    RS & ASSOC.
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
            >
                <div className="h-16 w-[1px] bg-brand-border/40 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-brand-green"
                        animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
                <span className="text-brand-text/20 text-[9px] uppercase tracking-[0.3em] rotate-90 origin-center translate-y-4">
                    Scroll
                </span>
            </motion.div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-8 md:w-16 bg-brand-border" />
                        <span className="text-brand-green text-[10px] uppercase tracking-[0.3em] font-bold">
                            Rushikesh Sutar & Associates
                        </span>
                    </div>

                    <h1 className="text-[11vw] sm:text-[9vw] md:text-[7vw] font-display font-medium tracking-tighter leading-[0.88]">
                        DESIGNING
                        <br />
                        <span className="text-brand-green italic serif">THOUGHTFUL</span> SPACES
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
                >
                    <p className="text-brand-text/50 text-sm md:text-base font-light leading-relaxed max-w-md">
                        A collaborative environment where ideas are explored, designs are refined, and projects come to life.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {ENVIRONMENT_QUALITIES.map((q, i) => (
                            <motion.span
                                key={q}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + i * 0.07, duration: 0.5 }}
                                className="text-[10px] text-brand-text/40 border border-brand-border/30 rounded-full px-4 py-1.5 uppercase tracking-[0.15em] font-medium hover:border-brand-green/40 hover:text-brand-green/70 transition-colors duration-500 cursor-default"
                            >
                                {q}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   SECTION 2 — GALLERY (DYNAMIC MASONRY/BENTO)
───────────────────────────────────────────── */
function GallerySection({ images = DEFAULT_GALLERY }: { images?: GalleryImage[] }) {

    // Helper to map aspect ratio strings to Tailwind grid spans
    const getGridSpan = (aspect: string) => {
        switch (aspect) {
            case "tall":
                return "col-span-1 row-span-2";
            case "wide":
                return "col-span-1 md:col-span-2 row-span-1";
            case "square":
            default:
                return "col-span-1 row-span-1";
        }
    };

    return (
        <section className="max-w-7xl mx-auto mb-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-80px" }}
                className="mb-10"
            >
                <SectionLabel text="The Studio" />
                <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter leading-[1.05]">
                    Where design <span className="text-brand-green italic">happens</span>.
                </h2>
            </motion.div>

            {/* Added grid-flow-dense so odd-shaped images pack neatly without gaps */}
            <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[280px] grid-flow-dense gap-4">
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={cn(
                            "group relative rounded-2xl overflow-hidden border border-brand-border/30 hover:border-brand-green/40 transition-colors duration-700",
                            getGridSpan(img.aspect)
                        )}
                    >
                        {img.src ? (
                            <img
                                src={img.src}
                                alt={img.label}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                            />
                        ) : (
                            <StudioPlaceholder label={img.sublabel || img.label} />
                        )}
                        <GalleryOverlay
                            label={img.label}
                            index={String(i + 1).padStart(2, "0")}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function StudioPlaceholder({ label }: { label: string }) {
    return (
        <div className="w-full h-full bg-brand-border/5 flex items-center justify-center group-hover:bg-brand-green/5 transition-colors duration-700">
            <span className="text-brand-text/10 text-[10px] uppercase tracking-[0.3em] font-medium z-10 text-center px-4">
                {label}
            </span>
        </div>
    );
}

function GalleryOverlay({ label, index }: { label: string; index: string }) {
    return (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex items-end justify-between w-full">
                <span className="text-white/90 text-sm font-display font-medium">{label}</span>
                <span className="text-brand-green/70 text-[10px] font-bold">{index}</span>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   SECTION 3 — MARQUEE
───────────────────────────────────────────── */
function MarqueeSection() {
    const text = ["Architecture", "Interiors", "Landscape", "Planning"];

    return (
        <section className="mb-32 border-y border-brand-border/20 py-6 overflow-hidden relative">
            <motion.div
                animate={{ x: [0, "-50%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="flex gap-12 whitespace-nowrap w-max"
            >
                {[...text, ...text, ...text, ...text].map((word, i) => (
                    <span key={i} className="flex items-center gap-12">
                        <span className={cn("text-2xl md:text-3xl font-display font-medium tracking-tighter", i % 2 === 0 ? "text-brand-green italic" : "text-brand-text/20")}>
                            {word}
                        </span>
                        <span className="text-brand-border/40 text-lg">◆</span>
                    </span>
                ))}
            </motion.div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   SECTION 4 — PHILOSOPHY
───────────────────────────────────────────── */
function PhilosophySection() {
    return (
        <section className="max-w-7xl mx-auto mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="flex flex-col justify-between">
                    <div>
                        <SectionLabel text="Our Philosophy" />
                        <div className="border-l-2 border-brand-green pl-8 mt-8">
                            <blockquote className="text-3xl md:text-4xl font-display font-medium tracking-tighter leading-[1.15] text-brand-text/80">
                                "Our studio is a reflection of our design philosophy—<span className="text-brand-green italic">simple</span>, <span className="text-brand-green italic">functional</span>, and thoughtfully curated."
                            </blockquote>
                        </div>
                    </div>

                    <motion.div className="mt-12 border border-brand-border/30 rounded-2xl p-6 group">
                        <span className="text-brand-green text-[10px] uppercase tracking-[0.3em] font-bold block mb-3">Find Us</span>
                        <p className="text-brand-text/60 text-sm leading-relaxed font-light">
                            Oracle Business Park, 301<br />Plot No A-179, Road No. 16/Z<br />Wagle Industrial Estate, Thane West<br />Maharashtra – 400604
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
                    <SectionLabel text="The Workspace" />
                    <div className="space-y-5 text-brand-text/50 text-sm md:text-base leading-relaxed font-light mb-12">
                        <p>It is not just a workspace, but a collaborative environment where ideas are explored, designs are refined, and projects come to life. Every zone is purposefully designed for the work it hosts.</p>
                        <p>We believe the studio should be as much a source of inspiration as it is a place of production. The environment shapes the thinking. The thinking shapes the work.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {STUDIO_FACTS.map((fact, i) => (
                            <motion.div key={fact.label} className="border border-brand-border/20 rounded-xl p-5 group hover:border-brand-green/30 hover:bg-brand-green/5 transition-all duration-500">
                                <span className="text-3xl font-display font-medium tracking-tighter text-brand-text group-hover:text-brand-green block mb-1">{fact.value}</span>
                                <span className="text-brand-text/60 text-xs font-medium block mb-1">{fact.label}</span>
                                <span className="text-brand-text/25 text-[10px] font-light block">{fact.sub}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   SECTION 5 — CULTURE & PROCESS
───────────────────────────────────────────── */
function CultureSection() {
    return (
        <section className="max-w-7xl mx-auto mb-32">
            <SectionLabel text="Work Culture" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border/20 border border-brand-border/20 rounded-2xl overflow-hidden mt-8">
                {CULTURE_PILLARS.map((pillar, i) => (
                    <motion.div key={pillar.num} className="bg-brand-background p-8 group hover:bg-brand-green/5 transition-colors duration-500">
                        <span className="text-brand-green/20 font-display text-4xl font-medium tracking-tighter group-hover:text-brand-green/50 block mb-4">{pillar.num}</span>
                        <h3 className="text-brand-text font-display font-medium text-xl mb-3">{pillar.title}</h3>
                        <p className="text-brand-text/40 text-sm font-light">{pillar.body}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   SECTION 6 — CONTACT & CTA
───────────────────────────────────────────── */
function ContactAndCTA() {
    return (
        <section className="max-w-7xl mx-auto mb-16 space-y-16">
            <div className="border border-brand-border/30 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-border/20">
                    <a href="tel:02269309273" className="bg-brand-background p-8 group hover:bg-brand-green/5 transition-colors duration-500">
                        <span className="text-brand-text/30 text-[10px] uppercase tracking-[0.2em] font-medium block mb-2">Phone</span>
                        <span className="text-brand-text/70 text-sm font-light group-hover:text-brand-green">022-69309273</span>
                    </a>
                    <a href="mailto:rushikesh@rsandassociates.co.in" className="bg-brand-background p-8 group hover:bg-brand-green/5 transition-colors duration-500">
                        <span className="text-brand-text/30 text-[10px] uppercase tracking-[0.2em] font-medium block mb-2">Email</span>
                        <span className="text-brand-text/70 text-sm font-light group-hover:text-brand-green">rushikesh@rsandassociates.co.in</span>
                    </a>
                </div>
            </div>

            <div className="border border-brand-border/40 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <SectionLabel text="Work With Us" />
                    <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter leading-[1.0] mb-6">
                        Start your <span className="text-brand-green italic">project</span> with us.
                    </h2>
                    <p className="text-brand-text/30 text-sm font-light max-w-sm mx-auto mb-10">
                        Our team responds within 24–48 hours. Share your brief and let's explore what we can create together.
                    </p>
                    <a href="/enquiry" className="inline-flex items-center gap-3 bg-brand-green text-brand-background text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full hover:bg-brand-green/80 transition-all duration-500">
                        Submit Enquiry →
                    </a>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   PAGE ROOT
───────────────────────────────────────────── */
const images: GalleryImage[] = [
    {
        src: "/design-studio.png",
        label: "Design Studio",
        sublabel: "Work in Progress",
        aspect: "tall",
    },
    {
        src: "/meeting-room.png",
        label: "Meeting Room",
        sublabel: "Discussion Space",
        aspect: "square",
    },
    {
        src: "/review-space.png",
        label: "Review Space",
        sublabel: "Design Reviews",
        aspect: "square",
    },
    {
        src: "/client-lounge.png",
        label: "Client Lounge",
        sublabel: "Reception Area",
        aspect: "wide",
    },
];

export default function StudioPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-24 relative bg-brand-background">
            <GridPattern
                squares={[[4, 4], [5, 1], [8, 2], [10, 10], [12, 15], [15, 10]]}
                className={cn("[mask-image:linear-gradient(to_bottom,white_80%,transparent)]", "fixed inset-0 z-0 w-screen h-screen opacity-50 pointer-events-none")}
            />
            <MagneticCursor />

            <div className="relative z-10">
                <HeroSection />
                <GallerySection images={images} />
                <MarqueeSection />
                <PhilosophySection />
                <CultureSection />
                <ContactAndCTA />
            </div>
        </div>
    );
}