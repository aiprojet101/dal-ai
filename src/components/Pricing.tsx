"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    target: "Particuliers & Auto-entrepreneurs",
    price: "990",
    description: "Un site vitrine professionnel pour lancer votre presence en ligne.",
    features: [
      "Site vitrine jusqu'a 5 pages",
      "Design responsive mobile-first",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Hebergement 1 an inclus",
      "Certificat SSL (HTTPS)",
      "Livraison en 2 semaines",
    ],
    cta: "Choisir Essentiel",
    popular: false,
  },
  {
    name: "Business",
    target: "PME & Startups",
    price: "2 490",
    description: "Un site complet avec tout ce qu'il faut pour convertir et se developper.",
    features: [
      "Site jusqu'a 15 pages",
      "Design sur-mesure premium",
      "SEO avance + Google Analytics",
      "Blog integre",
      "Animations & micro-interactions",
      "Formulaires avances (devis, RDV)",
      "Maintenance 6 mois offerte",
      "Livraison en 3-4 semaines",
    ],
    cta: "Choisir Business",
    popular: true,
  },
  {
    name: "Enterprise",
    target: "PMI & Grandes entreprises",
    price: "Sur devis",
    description: "Solutions sur-mesure : e-commerce, applications web, systemes complexes.",
    features: [
      "Pages illimitees",
      "E-commerce ou application web",
      "Integrations API (CRM, ERP...)",
      "Espace client / Dashboard",
      "Multi-langue",
      "Formation equipe incluse",
      "Support prioritaire 12 mois",
      "Chef de projet dedie",
    ],
    cta: "Demander un devis",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Tarifs
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Des offres <span className="gradient-text">transparentes</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
            Pas de surprises. Chaque offre inclut le design, le developpement,
            l&apos;hebergement et le support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "bg-surface border-primary/50 glow"
                  : "bg-surface border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold flex items-center gap-1">
                  <Star size={12} fill="currentColor" />
                  Le plus populaire
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted mt-1">{plan.target}</p>
              </div>

              <div className="mb-6">
                {plan.price === "Sur devis" ? (
                  <span className="text-3xl font-bold gradient-text">
                    Sur devis
                  </span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted">EUR</span>
                  </div>
                )}
                <p className="text-sm text-muted mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3 rounded-xl text-center font-medium transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-accent text-white hover:opacity-90"
                    : "border border-border text-foreground hover:bg-surface-light"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
