"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Loader2,
  CheckCircle2,
  Lightbulb,
  Star,
  Send,
} from "lucide-react";

interface AnalysisResult {
  recommendedPlan: string;
  matchScore: number;
  summary: string;
  suggestedFeatures: string[];
  estimatedPrice: string;
  tip: string;
}

const steps = [
  {
    key: "projectType",
    question: "Quel type de projet avez-vous en tete ?",
    options: [
      { value: "site-vitrine", label: "Site vitrine", emoji: "🌐" },
      { value: "e-commerce", label: "Boutique en ligne", emoji: "🛒" },
      { value: "application-web", label: "Application web", emoji: "📱" },
      { value: "refonte", label: "Refonte de site existant", emoji: "🔄" },
      { value: "landing-page", label: "Landing page", emoji: "🎯" },
    ],
  },
  {
    key: "sector",
    question: "Dans quel secteur exercez-vous ?",
    options: [
      { value: "restaurant-food", label: "Restaurant / Food", emoji: "🍽️" },
      { value: "commerce-retail", label: "Commerce / Retail", emoji: "🏪" },
      { value: "sante-medical", label: "Sante / Medical", emoji: "🏥" },
      { value: "conseil-services", label: "Conseil / Services", emoji: "💼" },
      { value: "artisan-btp", label: "Artisan / BTP", emoji: "🔨" },
      { value: "tech-startup", label: "Tech / Startup", emoji: "🚀" },
      { value: "immobilier", label: "Immobilier", emoji: "🏠" },
      { value: "autre", label: "Autre", emoji: "📋" },
    ],
  },
  {
    key: "objective",
    question: "Quel est votre objectif principal ?",
    options: [
      { value: "visibilite", label: "Etre visible sur Google", emoji: "🔍" },
      { value: "vendre-en-ligne", label: "Vendre en ligne", emoji: "💰" },
      { value: "rdv-reservations", label: "Prendre des RDV / Reservations", emoji: "📅" },
      { value: "generer-leads", label: "Generer des contacts / leads", emoji: "📧" },
      { value: "credibilite", label: "Renforcer ma credibilite", emoji: "⭐" },
    ],
  },
  {
    key: "budget",
    question: "Quel est votre budget approximatif ?",
    options: [
      { value: "moins-1000", label: "Moins de 1 000 EUR", emoji: "💡" },
      { value: "1000-2500", label: "1 000 - 2 500 EUR", emoji: "📊" },
      { value: "2500-5000", label: "2 500 - 5 000 EUR", emoji: "🎯" },
      { value: "5000-10000", label: "5 000 - 10 000 EUR", emoji: "🚀" },
      { value: "plus-10000", label: "Plus de 10 000 EUR", emoji: "🏆" },
    ],
  },
  {
    key: "timeline",
    question: "Dans quel delai souhaitez-vous votre site ?",
    options: [
      { value: "urgent-2sem", label: "Urgent — 2 semaines", emoji: "⚡" },
      { value: "1-mois", label: "1 mois", emoji: "📆" },
      { value: "2-3-mois", label: "2-3 mois", emoji: "🗓️" },
      { value: "pas-presse", label: "Pas presse", emoji: "🧘" },
    ],
  },
];

export default function ProjectAnalyzer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState(false);

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setAnalyzing(false);
    setResult(null);
    setError(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const selectOption = async (value: string) => {
    const step = steps[currentStep];
    const newAnswers = { ...answers, [step.key]: value };
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // All questions answered — analyze
      setAnalyzing(true);
      try {
        const res = await fetch("/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newAnswers),
        });
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        setResult(data);
      } catch {
        setError(true);
      } finally {
        setAnalyzing(false);
      }
    }
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const progress = ((currentStep + (result ? 1 : 0)) / steps.length) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl bg-surface border border-border overflow-hidden"
          >
            {/* Progress bar */}
            <div className="h-1 bg-surface-lighter">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Analyseur de projet IA</h3>
                  <p className="text-xs text-muted">
                    {result
                      ? "Analyse terminee"
                      : analyzing
                      ? "Analyse en cours..."
                      : `Question ${currentStep + 1}/${steps.length}`}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted hover:text-foreground hover:bg-surface-light transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 min-h-[350px] flex flex-col">
              <AnimatePresence mode="wait">
                {/* Questions */}
                {!analyzing && !result && !error && (
                  <motion.div
                    key={`step-${currentStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1"
                  >
                    <h2 className="text-xl font-bold mb-6">
                      {steps[currentStep].question}
                    </h2>

                    <div className="grid gap-3">
                      {steps[currentStep].options.map((option) => (
                        <motion.button
                          key={option.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => selectOption(option.value)}
                          className={`w-full text-left px-4 py-3.5 rounded-xl border transition-all flex items-center gap-3 ${
                            answers[steps[currentStep].key] === option.value
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/40 hover:bg-surface-light"
                          }`}
                        >
                          <span className="text-lg">{option.emoji}</span>
                          <span className="font-medium text-sm">
                            {option.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>

                    {currentStep > 0 && (
                      <button
                        onClick={goBack}
                        className="mt-4 flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
                      >
                        <ArrowLeft size={14} />
                        Retour
                      </button>
                    )}
                  </motion.div>
                )}

                {/* Analyzing animation */}
                {analyzing && (
                  <motion.div
                    key="analyzing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 glow"
                    >
                      <Loader2 size={28} className="text-white" />
                    </motion.div>
                    <h2 className="text-xl font-bold mb-2">
                      Analyse en cours...
                    </h2>
                    <p className="text-muted text-sm">
                      Notre IA etudie votre projet pour vous proposer la
                      solution ideale
                    </p>
                    <div className="mt-6 flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full bg-primary"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Results */}
                {result && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-1"
                  >
                    {/* Match score */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <CheckCircle2 size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-lg">
                            {result.recommendedPlan}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                            {result.matchScore}% match
                          </span>
                        </div>
                        <p className="text-xs text-muted">
                          Offre recommandee pour votre projet
                        </p>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-foreground/80 leading-relaxed mb-4 p-3 rounded-xl bg-surface-light">
                      {result.summary}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <Star size={16} className="text-accent" />
                      <span className="text-sm font-medium">
                        Estimation : {result.estimatedPrice}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <p className="text-xs text-muted mb-2 uppercase tracking-wider">
                        Fonctionnalites suggerees
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {result.suggestedFeatures.map((f, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary-light"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tip */}
                    <div className="p-3 rounded-xl border border-accent/20 bg-accent/5 flex gap-2 mb-5">
                      <Lightbulb
                        size={16}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <p className="text-xs text-foreground/70">
                        {result.tip}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3">
                      <a
                        href="#contact"
                        onClick={handleClose}
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold text-center flex items-center justify-center gap-2 glow"
                      >
                        Recevoir mon devis
                        <Send size={14} />
                      </a>
                      <button
                        onClick={reset}
                        className="px-4 py-3 rounded-xl border border-border text-sm text-muted hover:bg-surface-light transition-colors"
                      >
                        Refaire
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Error */}
                {error && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex-1 flex flex-col items-center justify-center text-center"
                  >
                    <p className="text-muted mb-4">
                      Une erreur est survenue. Veuillez reessayer.
                    </p>
                    <button
                      onClick={reset}
                      className="px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-medium"
                    >
                      Recommencer
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
