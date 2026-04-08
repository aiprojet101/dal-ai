"use client";

import { ExternalLink, Globe, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Aromisa",
    category: "Application Web PWA",
    url: "https://aromisa.fr",
    image: "https://image.thum.io/get/width/600/crop/900/https://aromisa.fr",
    description: "Aromatherapie personnalisee par IA — 51 huiles essentielles, protocoles guides et journal personnel",
    gradient: "from-emerald-600 to-amber-500",
    icon: Globe,
    tags: ["IA Gemini", "PWA", "Sante"],
  },
  {
    title: "Aromisa App",
    category: "Application Mobile",
    url: "https://aromisa.fr/app",
    image: "https://image.thum.io/get/width/600/crop/900/https://aromisa.fr/app",
    description: "App compagnon — analyse IA en 10 secondes, defis quotidiens, badges et partage social",
    gradient: "from-emerald-500 to-teal-400",
    icon: Smartphone,
    tags: ["Mobile-first", "Gamification", "IA"],
  },
  {
    title: "DunsFrance",
    category: "Micro-SaaS",
    url: "https://dunsfrance.fr",
    image: "https://image.thum.io/get/width/600/crop/900/https://dunsfrance.fr",
    description: "Recherche automatique de numero D-U-N-S pour entreprises francaises — paiement Stripe, resultat par email",
    gradient: "from-blue-600 to-indigo-500",
    icon: Globe,
    tags: ["Stripe", "Automatisation", "SEO"],
  },
  {
    title: "MK Food Truck",
    category: "Site Vitrine",
    url: "https://mkfoodtruck.fr",
    image: "https://image.thum.io/get/width/600/crop/900/https://mkfoodtruck.fr",
    description: "Food truck a Longuenesse — menu complet, horaires, localisation et contact direct WhatsApp",
    gradient: "from-orange-500 to-red-500",
    icon: Globe,
    tags: ["Menu", "Contact", "Responsive"],
  },
  {
    title: "Le Treize",
    category: "Application Web",
    url: "https://letreize.fr",
    image: "https://image.thum.io/get/width/600/crop/900/https://letreize.fr",
    description: "Jeu de cartes Tien Len en ligne — classement ELO, 5 divisions, tournois et salons prives",
    gradient: "from-emerald-500 to-blue-500",
    icon: Globe,
    tags: ["Gaming", "Temps reel", "ELO"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Nos <span className="gradient-text">realisations</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
            Des projets reels, des resultats concrets. Decouvrez ce que nous
            avons construit pour nos clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 cursor-pointer hover:shadow-[0_0_30px_rgba(108,92,231,0.15)]"
            >
              {/* Real screenshot */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot de ${project.title}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-5 transition-opacity duration-500`} />
                {/* Floating icon */}
                <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-black/30 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                  <project.icon size={18} className="text-white/80" />
                </div>
              </div>

              {/* Info overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-surface via-surface/90 to-transparent">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary-light uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-accent font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="mt-1 text-lg font-semibold flex items-center gap-2">
                  {project.title}
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-muted"
                  />
                </h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
