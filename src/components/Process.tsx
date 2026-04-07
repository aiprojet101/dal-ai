"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Decouverte",
    description:
      "Appel ou rendez-vous gratuit pour comprendre votre projet, vos objectifs et votre audience cible.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Conception",
    description:
      "Maquettes et prototypes interactifs valides avec vous. Chaque pixel est pense pour convertir.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Developpement",
    description:
      "Code propre, performant et optimise. Vous suivez l'avancement en temps reel sur un espace dedie.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lancement",
    description:
      "Tests, optimisation, mise en ligne et formation. Votre site est pret a conquerir le web.",
  },
];

export default function Process() {
  return (
    <section id="processus" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Notre processus
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Simple, efficace,{" "}
            <span className="gradient-text">transparent</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
            Un processus rode en 4 etapes pour livrer votre projet dans les
            temps et sans stress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-surface border border-border group hover:border-primary/30 transition-colors"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}

              <span className="text-5xl font-bold text-surface-lighter group-hover:text-primary/20 transition-colors">
                {step.number}
              </span>

              <div className="mt-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <step.icon size={24} className="text-primary-light" />
              </div>

              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted text-[15px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
