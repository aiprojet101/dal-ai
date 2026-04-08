"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import MagneticButton from "@/components/animations/MagneticButton";
import Counter from "@/components/animations/Counter";

export default function Hero({ onAnalyze }: { onAnalyze?: () => void }) {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate gradient orbs floating
    if (orbRef1.current) {
      gsap.to(orbRef1.current, {
        y: 30,
        x: 15,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
    if (orbRef2.current) {
      gsap.to(orbRef2.current, {
        y: -25,
        x: -20,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    // Headline clip-path reveal
    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { clipPath: "inset(100% 0% 0% 0%)", y: 40 },
        { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 1.2, delay: 0.3, ease: "power4.out" }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated gradient orbs */}
      <div ref={orbRef1} className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div ref={orbRef2} className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[128px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 text-sm text-muted mb-8"
          >
            <Sparkles size={14} className="text-accent" />
            Agence web nouvelle generation
          </motion.div>

          {/* Headline with clip-path reveal */}
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            Votre vision.
            <br />
            <span className="gradient-text">Notre expertise.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Nous concevons des sites internet modernes, performants et
            sur-mesure pour{" "}
            <span className="text-foreground font-medium">particuliers</span>,{" "}
            <span className="text-foreground font-medium">PME</span> et{" "}
            <span className="text-foreground font-medium">PMI</span> qui
            convertissent vos visiteurs en clients.
          </motion.p>

          {/* CTAs with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton strength={0.2}>
              <button
                onClick={onAnalyze}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg flex items-center gap-2 glow cursor-pointer"
              >
                <Sparkles size={18} />
                Analyser mon projet gratuitement
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <a
                href="#portfolio"
                className="px-8 py-4 rounded-full border border-border text-foreground font-medium text-lg hover:bg-surface-light transition-colors inline-block"
              >
                Voir nos projets
              </a>
            </MagneticButton>
          </motion.div>

          {/* Stats with animated counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <Counter target={150} suffix="+" className="gradient-text" />
              </div>
              <div className="mt-1 text-sm text-muted">Projets livres</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <Counter target={98} suffix="%" className="gradient-text" />
              </div>
              <div className="mt-1 text-sm text-muted">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <Counter target={5} suffix=" ans" className="gradient-text" />
              </div>
              <div className="mt-1 text-sm text-muted">D&apos;experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <Counter target={48} suffix="h" className="gradient-text" />
              </div>
              <div className="mt-1 text-sm text-muted">Temps de reponse</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
