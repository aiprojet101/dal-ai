"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous recontactons sous 48h.");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Contact
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Parlons de{" "}
            <span className="gradient-text">votre projet</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
            Devis gratuit en 48h. Decrivez-nous votre projet et nous vous
            proposerons la solution ideale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Votre nom"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-5 py-4 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Votre email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-5 py-4 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Telephone (optionnel)"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-5 py-4 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <select
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full px-5 py-4 rounded-xl bg-surface border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none"
              >
                <option value="">Budget estime</option>
                <option value="<1000">Moins de 1 000 EUR</option>
                <option value="1000-2500">1 000 - 2 500 EUR</option>
                <option value="2500-5000">2 500 - 5 000 EUR</option>
                <option value="5000-10000">5 000 - 10 000 EUR</option>
                <option value=">10000">Plus de 10 000 EUR</option>
              </select>
            </div>

            <textarea
              placeholder="Decrivez votre projet..."
              rows={6}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-5 py-4 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold flex items-center justify-center gap-2 glow"
            >
              Envoyer ma demande
              <Send size={18} />
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="font-semibold mb-4">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <div className="text-sm text-muted">Email</div>
                    <div className="text-sm font-medium">
                      contact@dal-ai.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <div className="text-sm text-muted">Telephone</div>
                    <div className="text-sm font-medium">+33 1 23 45 67 89</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <div className="text-sm text-muted">Localisation</div>
                    <div className="text-sm font-medium">France — Remote</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="font-semibold mb-2">Horaires</h3>
              <p className="text-sm text-muted">
                Lun — Ven : 9h00 — 18h00
                <br />
                Reponse garantie sous 48h
              </p>
            </div>

            <div className="p-6 rounded-2xl gradient-border bg-surface">
              <h3 className="font-semibold mb-2">Appel decouverte gratuit</h3>
              <p className="text-sm text-muted mb-4">
                30 minutes pour discuter de votre projet, sans engagement.
              </p>
              <a
                href="#"
                className="inline-block px-5 py-2.5 rounded-lg border border-primary/50 text-primary-light text-sm font-medium hover:bg-primary/10 transition-colors"
              >
                Reserver un creneau
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
