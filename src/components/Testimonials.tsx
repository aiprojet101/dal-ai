"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";


const testimonials = [
  {
    name: "Sophie Laurent",
    role: "Fondatrice, Boutique Elise",
    text: "Dal-AI a transforme notre boutique en ligne. Le design est magnifique, les ventes ont augmente de 40% des le premier mois. Une equipe a l'ecoute et tres reactive.",
    stars: 5,
  },
  {
    name: "Marc Dupont",
    role: "Directeur, CabinetConseil+",
    text: "Professionnalisme et qualite au rendez-vous. Notre site genere maintenant 3x plus de leads qu'avant. Le processus etait clair et sans stress du debut a la fin.",
    stars: 5,
  },
  {
    name: "Dr. Isabelle Martin",
    role: "Medecin generaliste",
    text: "Je cherchais un site simple mais professionnel pour mon cabinet. Le resultat depasse mes attentes. Mes patients peuvent maintenant prendre RDV en ligne facilement.",
    stars: 5,
  },
  {
    name: "Thomas Roux",
    role: "CEO, TechFlow",
    text: "L'application web developpee par Dal-AI est exactement ce dont notre equipe avait besoin. Performante, intuitive et livree dans les temps.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Temoignages
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Ce que disent{" "}
            <span className="gradient-text">nos clients</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-surface border border-border"
            >
              <Quote size={24} className="text-primary/30 mb-4" />

              <p className="text-foreground/90 leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-accent"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
