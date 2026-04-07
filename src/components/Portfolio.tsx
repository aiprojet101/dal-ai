"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Maison Duval",
    category: "Site Vitrine",
    description: "Restaurant gastronomique — identite visuelle et reservation en ligne",
    gradient: "from-purple-600 to-blue-500",
  },
  {
    title: "TechFlow",
    category: "Application Web",
    description: "SaaS de gestion de projet pour equipes tech — dashboard complet",
    gradient: "from-cyan-500 to-emerald-500",
  },
  {
    title: "Boutique Elise",
    category: "E-Commerce",
    description: "Marque de mode ethique — e-shop avec 500+ references",
    gradient: "from-pink-500 to-orange-400",
  },
  {
    title: "CabinetConseil+",
    category: "Site Vitrine",
    description: "Cabinet de conseil en transformation digitale — lead generation",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "GreenBuild",
    category: "Application Web",
    description: "PMI construction durable — portail client et suivi de chantier",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Dr. Martin",
    category: "Site Vitrine",
    description: "Cabinet medical — prise de RDV en ligne et fiches patients",
    gradient: "from-blue-500 to-cyan-400",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Nos <span className="gradient-text">realisations</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
            Chaque projet est unique. Voici quelques-unes de nos collaborations
            recentes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors cursor-pointer"
            >
              <div
                className={`aspect-[16/10] bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-lg border border-white/10 bg-white/5" />
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-surface via-surface/80 to-transparent">
                <span className="text-xs text-accent font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="mt-1 text-lg font-semibold flex items-center gap-2">
                  {project.title}
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-muted"
                  />
                </h3>
                <p className="mt-1 text-sm text-muted">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
