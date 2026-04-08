"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Globe, Smartphone } from "lucide-react";
import TextReveal from "@/components/animations/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Aromisa",
    category: "Application Web PWA",
    url: "https://aromisa.fr",
    description: "Aromatherapie personnalisee par IA — 51 huiles essentielles, protocoles guides et journal personnel",
    gradient: "from-emerald-600 to-amber-500",
    icon: Globe,
    tags: ["IA Gemini", "PWA", "Sante"],
  },
  {
    title: "Aromisa App",
    category: "Application Mobile",
    url: "https://aromisa.fr/app",
    description: "App compagnon — analyse IA en 10 secondes, defis quotidiens, badges et partage social",
    gradient: "from-emerald-500 to-teal-400",
    icon: Smartphone,
    tags: ["Mobile-first", "Gamification", "IA"],
  },
  {
    title: "DunsFrance",
    category: "Micro-SaaS",
    url: "https://dunsfrance.fr",
    description: "Recherche automatique de numero D-U-N-S pour entreprises francaises — paiement Stripe, resultat par email",
    gradient: "from-blue-600 to-indigo-500",
    icon: Globe,
    tags: ["Stripe", "Automatisation", "SEO"],
  },
  {
    title: "MK Food Truck",
    category: "Site Vitrine",
    url: "https://mkfoodtruck.fr",
    description: "Food truck a Longuenesse — menu complet, horaires, localisation et contact direct WhatsApp",
    gradient: "from-orange-500 to-red-500",
    icon: Globe,
    tags: ["Menu", "Contact", "Responsive"],
  },
  {
    title: "Le Treize",
    category: "Application Web",
    url: "https://letreize.fr",
    description: "Jeu de cartes Tien Len en ligne — classement ELO, 5 divisions, tournois et salons prives",
    gradient: "from-emerald-500 to-blue-500",
    icon: Globe,
    tags: ["Gaming", "Temps reel", "ELO"],
  },
];

export default function Portfolio() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards) return;

    const items = cards.querySelectorAll(".portfolio-card");

    gsap.fromTo(
      items,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cards,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <TextReveal className="text-center mb-16">
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
        </TextReveal>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card group relative rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 cursor-pointer hover:shadow-[0_0_30px_rgba(108,92,231,0.15)]"
            >
              {/* Gradient background with hover effect */}
              <div
                className={`aspect-[16/10] bg-gradient-to-br ${project.gradient} opacity-15 group-hover:opacity-30 transition-all duration-700`}
              >
                <div className="w-full h-full flex items-center justify-center relative">
                  {/* Mock browser window */}
                  <div className="w-[80%] h-[75%] rounded-lg border border-white/10 bg-white/5 overflow-hidden group-hover:scale-105 transition-transform duration-700">
                    {/* Browser bar */}
                    <div className="h-6 bg-white/5 flex items-center px-2 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400/40" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400/40" />
                      <div className="w-2 h-2 rounded-full bg-green-400/40" />
                      <div className="ml-2 flex-1 h-3 rounded bg-white/5 max-w-[60%]" />
                    </div>
                    {/* Content placeholder */}
                    <div className="p-3 space-y-2">
                      <div className="h-2 bg-white/5 rounded w-3/4" />
                      <div className="h-2 bg-white/5 rounded w-1/2" />
                      <div className="h-8 bg-white/5 rounded mt-3" />
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="h-6 bg-white/5 rounded" />
                        <div className="h-6 bg-white/5 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Floating icon */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                    <project.icon size={18} className="text-white/60" />
                  </div>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
