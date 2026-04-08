import { NextRequest, NextResponse } from "next/server";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

export async function POST(req: NextRequest) {
  if (!ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  try {
    const { projectType, sector, objective, budget, timeline, description } =
      await req.json();

    const prompt = `Tu es un expert consultant en creation de sites web chez Dal-AI, une agence web francaise premium.

Un prospect vient de remplir un questionnaire sur son projet. Analyse ses reponses et donne une recommandation personnalisee.

REPONSES DU PROSPECT :
- Type de projet : ${projectType}
- Secteur d'activite : ${sector}
- Objectif principal : ${objective}
- Budget approximatif : ${budget}
- Delai souhaite : ${timeline}
${description ? `- Description libre du projet : ${description}` : ""}

OFFRES DAL-AI :
1. Essentiel (1 290 EUR) : Site vitrine 5 pages, responsive, SEO de base, livraison 2 semaines
2. Business (3 490 EUR) : Site 15 pages, design sur-mesure, SEO avance, blog, animations, livraison 3-4 semaines
3. Enterprise (a partir de 6 900 EUR) : Pages illimitees, e-commerce/app web, integrations API, multi-langue, chef de projet dedie

INSTRUCTIONS :
Reponds en JSON strict avec cette structure exacte (pas de markdown, juste le JSON) :
{
  "recommendedPlan": "Essentiel" ou "Business" ou "Enterprise",
  "matchScore": nombre entre 75 et 98,
  "summary": "2-3 phrases personnalisees expliquant pourquoi cette offre est ideale pour leur projet",
  "suggestedFeatures": ["feature1", "feature2", "feature3", "feature4"],
  "estimatedPrice": "fourchette de prix adaptee",
  "tip": "Un conseil strategique personnalise pour leur secteur"
}`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 512,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Anthropic API error:", err);
      return NextResponse.json(
        { error: "AI analysis failed" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const text =
      data.content?.[0]?.text || "{}";

    // Parse the JSON from Claude's response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const analysis = jsonMatch ? JSON.parse(jsonMatch[0]) : null;

    if (!analysis) {
      return NextResponse.json(
        { error: "Could not parse analysis" },
        { status: 500 }
      );
    }

    return NextResponse.json(analysis);
  } catch (error) {
    console.error("Analysis error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
