"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Search,
  Palette,
  Zap,
} from "lucide-react";
import TextReveal from "@/components/animations/TextReveal";

const services = [
  {
    icon: Globe,
    title: "Site Vitrine",
    description:
      "Un site elegant qui presente votre activite et attire de nouveaux clients. Design moderne, rapide et optimise SEO.",
    tags: ["Responsive", "SEO", "Analytics"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Votre boutique en ligne cle en main. Paiement securise, gestion des stocks et experience d'achat fluide.",
    tags: ["Paiement", "Stock", "Multi-devises"],
  },
  {
    icon: Smartphone,
    title: "Application Web",
    description:
      "Des applications web sur-mesure pour digitaliser vos processus : reservation, tableau de bord, CRM interne.",
    tags: ["Sur-mesure", "Dashboard", "API"],
  },
  {
    icon: Search,
    title: "SEO & Referencement",
    description:
      "Positionnez-vous en premiere page de Google. Audit technique, optimisation on-page et strategie de contenu.",
    tags: ["Google", "Audit", "Contenu"],
  },
  {
    icon: Palette,
    title: "Identite Visuelle",
    description:
      "Logo, charte graphique et direction artistique pour une marque forte et coherente sur tous les supports.",
    tags: ["Logo", "Charte", "Branding"],
  },
  {
    icon: Zap,
    title: "Maintenance & Support",
    description:
      "Mises a jour, securite, performance et support technique reactif pour que votre site reste au top.",
    tags: ["24/7", "Securite", "Performance"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <TextReveal className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Nos services
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Tout ce qu&apos;il faut pour{" "}
            <span className="gradient-text">reussir en ligne</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
            De la conception au deploiement, nous gerons chaque etape pour vous
            livrer un site qui performe.
          </p>
        </TextReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-2xl bg-surface border border-border hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary-light" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed text-[15px]">
                {service.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-surface-light text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
