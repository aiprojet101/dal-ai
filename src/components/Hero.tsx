"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Counter from "@/components/animations/Counter";
import MagneticButton from "@/components/animations/MagneticButton";

export default function Hero({ onAnalyze }: { onAnalyze?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[128px] animate-pulse" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 text-sm text-muted mb-8"
          >
            <Sparkles size={14} className="text-accent" />
            Agence web nouvelle generation
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            Votre vision.
            <br />
            <span className="gradient-text">Notre expertise.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Nous concevons des sites internet modernes, performants et
            sur-mesure pour{" "}
            <span className="text-foreground font-medium">particuliers</span>,{" "}
            <span className="text-foreground font-medium">PME</span> et{" "}
            <span className="text-foreground font-medium">PMI</span> qui
            convertissent vos visiteurs en clients.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <Counter target={150} suffix="+" />
              </div>
              <div className="mt-1 text-sm text-muted">Projets livres</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <Counter target={98} suffix="%" />
              </div>
              <div className="mt-1 text-sm text-muted">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <Counter target={5} suffix=" ans" />
              </div>
              <div className="mt-1 text-sm text-muted">D&apos;experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <Counter target={48} suffix="h" />
              </div>
              <div className="mt-1 text-sm text-muted">Temps de reponse</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
