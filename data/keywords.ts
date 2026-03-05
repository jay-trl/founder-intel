/**
 * AI Industry Classification Keywords
 * Replaces World Monitor's military/conflict severity tiers
 *
 * Used by the hybrid classification pipeline:
 * 1. Keyword classifier (instant) — matches against these patterns
 * 2. LLM classifier (async via Groq) — refines with higher confidence
 */

export interface KeywordRule {
  pattern: RegExp;
  pillar: string;
  severity: "critical" | "high" | "medium" | "low" | "info";
  category: string;
}

export const CLASSIFICATION_KEYWORDS: KeywordRule[] = [
  // ═══════════════════════════════════════
  // CRITICAL (imp 90-100) — Immediate strategic impact
  // ═══════════════════════════════════════

  // Competitive — major model launches
  { pattern: /\b(GPT-5|GPT-6|Claude\s*[4-9]|Gemini\s*(2|3|Ultra)|Llama\s*[4-9])\b/i, pillar: "competitive", severity: "critical", category: "model-launch" },
  { pattern: /\bnew\s+(foundation|frontier)\s+model\b/i, pillar: "competitive", severity: "critical", category: "model-launch" },
  { pattern: /\b(acquir|acquisition|merger)\w*\b.*\b(openai|anthropic|google|meta|mistral|cohere)\b/i, pillar: "competitive", severity: "critical", category: "ma-activity" },

  // Regulatory — major policy actions
  { pattern: /\b(executive\s+order|EO\s+\d+).*\bAI\b/i, pillar: "regulatory", severity: "critical", category: "exec-order" },
  { pattern: /\bAI\s+Act\b.*\b(enforce|fine|penalty|compliance)\b/i, pillar: "regulatory", severity: "critical", category: "enforcement" },
  { pattern: /\b(ban|prohibit|moratorium)\w*\b.*\b(AI|model|training)\b/i, pillar: "regulatory", severity: "critical", category: "restriction" },

  // Funding — mega rounds
  { pattern: /\$\d+\s*B\b.*\b(raise|fund|series|round|valuation)\b/i, pillar: "funding", severity: "critical", category: "mega-round" },
  { pattern: /\b(IPO|goes?\s+public|public\s+offering)\b.*\b(AI|model)\b/i, pillar: "funding", severity: "critical", category: "ipo" },

  // Compute — supply shocks
  { pattern: /\b(export\s+control|chip\s+ban|sanctions)\b.*\b(GPU|NVIDIA|semiconductor|AI)\b/i, pillar: "geopolitics", severity: "critical", category: "export-control" },

  // ═══════════════════════════════════════
  // HIGH (imp 75-89) — Significant developments
  // ═══════════════════════════════════════

  // Competitive
  { pattern: /\b(benchmark|leaderboard|state.of.the.art|SOTA)\b.*\b(record|top|first|best)\b/i, pillar: "competitive", severity: "high", category: "benchmark" },
  { pattern: /\b(API|pricing)\b.*\b(cut|slash|reduce|lower|cheaper)\b/i, pillar: "competitive", severity: "high", category: "pricing" },
  { pattern: /\b(partnership|partner|deal)\b.*\b(openai|anthropic|google|meta|microsoft|amazon|apple)\b/i, pillar: "competitive", severity: "high", category: "partnership" },
  { pattern: /\b(open.source|open.weight)\b.*\b(release|launch|model)\b/i, pillar: "competitive", severity: "high", category: "open-source" },
  { pattern: /\b(agent|agentic)\b.*\b(launch|release|framework|platform)\b/i, pillar: "competitive", severity: "high", category: "agents" },

  // Funding
  { pattern: /\$\d{2,3}\s*M\b.*\b(raise|fund|series|round)\b/i, pillar: "funding", severity: "high", category: "large-round" },
  { pattern: /\bseries\s+[A-E]\b/i, pillar: "funding", severity: "high", category: "funding-round" },
  { pattern: /\bvaluation\b.*\$\d+\s*[BM]\b/i, pillar: "funding", severity: "high", category: "valuation" },

  // Compute
  { pattern: /\b(H100|H200|B100|B200|B300|GB200|MI300|MI350)\b/i, pillar: "compute", severity: "high", category: "gpu-hardware" },
  { pattern: /\b(NVIDIA|AMD|Intel)\b.*\b(earn|revenue|quarter|guidance)\b/i, pillar: "compute", severity: "high", category: "earnings" },
  { pattern: /\b(Groq|Cerebras|Trainium|Inferentia|TPU)\b.*\b(launch|release|benchmark|available)\b/i, pillar: "compute", severity: "high", category: "custom-silicon" },

  // Research
  { pattern: /\bscaling\s+law/i, pillar: "research", severity: "high", category: "scaling" },
  { pattern: /\b(mixture.of.experts|MoE)\b/i, pillar: "research", severity: "high", category: "architecture" },
  { pattern: /\b(RLHF|DPO|constitutional\s+AI|RLAIF)\b/i, pillar: "research", severity: "high", category: "alignment" },
  { pattern: /\b(long.context|million.token|infinite.context)\b/i, pillar: "research", severity: "high", category: "context-length" },

  // Talent
  { pattern: /\b(hire|hired|recruit|join|joined|depart|departed|left|leaves|leaving)\b.*\b(openai|anthropic|google|meta|deepmind|mistral)\b/i, pillar: "talent", severity: "high", category: "talent-move" },
  { pattern: /\b(new\s+lab|research\s+lab|founded)\b.*\b(AI|model)\b/i, pillar: "talent", severity: "high", category: "lab-formation" },

  // Regulatory
  { pattern: /\bAI\s+(regulation|bill|law|legislation|act)\b/i, pillar: "regulatory", severity: "high", category: "legislation" },
  { pattern: /\b(NIST|AI\s+Safety\s+Institute)\b/i, pillar: "regulatory", severity: "high", category: "standards" },

  // Geopolitics
  { pattern: /\bsovereign\s+AI\b/i, pillar: "geopolitics", severity: "high", category: "sovereign-ai" },
  { pattern: /\b(UAE|Saudi|France|India|Japan|Korea)\b.*\b(AI\s+fund|AI\s+invest|compute\s+fund|national\s+AI)\b/i, pillar: "geopolitics", severity: "high", category: "national-ai" },

  // ═══════════════════════════════════════
  // MEDIUM (imp 50-74)
  // ═══════════════════════════════════════
  { pattern: /\b(fine.tun|finetun|distill|quantiz|prun)\w*\b/i, pillar: "research", severity: "medium", category: "optimization" },
  { pattern: /\b(inference|latency|throughput|tokens?.per.second)\b/i, pillar: "compute", severity: "medium", category: "inference" },
  { pattern: /\b(enterprise|business|corporate)\b.*\b(AI|adopt|deploy)\b/i, pillar: "gtm", severity: "medium", category: "enterprise" },
  { pattern: /\b(developer|SDK|API|playground)\b.*\b(launch|update|release)\b/i, pillar: "gtm", severity: "medium", category: "developer-tools" },
  { pattern: /\barXiv\b/i, pillar: "research", severity: "medium", category: "paper" },
  { pattern: /\b(KAIST|SNU|ETRI|NAVER|Kakao|Samsung\s+AI)\b/i, pillar: "korea", severity: "medium", category: "korea-ai" },

  // ═══════════════════════════════════════
  // LOW (imp 30-49)
  // ═══════════════════════════════════════
  { pattern: /\b(tutorial|course|certification|workshop)\b.*\b(AI|ML|LLM)\b/i, pillar: "research", severity: "low", category: "education" },
  { pattern: /\b(conference|NeurIPS|ICML|ICLR|ACL|AAAI)\b/i, pillar: "research", severity: "low", category: "conference" },

  // ═══════════════════════════════════════
  // INFO (imp 0-29) — Background context
  // ═══════════════════════════════════════
  { pattern: /\b(opinion|editorial|perspective|column)\b.*\bAI\b/i, pillar: "competitive", severity: "info", category: "opinion" },
];

/**
 * Classify a headline using keyword matching
 * Returns the highest-severity match
 */
export function classifyByKeywords(headline: string): {
  pillar: string;
  severity: string;
  category: string;
  confidence: number;
} | null {
  let bestMatch: (typeof CLASSIFICATION_KEYWORDS)[number] | null = null;
  const severityOrder = { critical: 5, high: 4, medium: 3, low: 2, info: 1 };

  for (const rule of CLASSIFICATION_KEYWORDS) {
    if (rule.pattern.test(headline)) {
      if (
        !bestMatch ||
        severityOrder[rule.severity] > severityOrder[bestMatch.severity]
      ) {
        bestMatch = rule;
      }
    }
  }

  if (!bestMatch) return null;

  const confidence =
    bestMatch.severity === "critical" ? 0.9
    : bestMatch.severity === "high" ? 0.75
    : bestMatch.severity === "medium" ? 0.6
    : bestMatch.severity === "low" ? 0.45
    : 0.3;

  return {
    pillar: bestMatch.pillar,
    severity: bestMatch.severity,
    category: bestMatch.category,
    confidence,
  };
}

/**
 * Convert severity to importance score (0-100)
 */
export function severityToImportance(severity: string): number {
  switch (severity) {
    case "critical": return 90 + Math.floor(Math.random() * 10);
    case "high": return 75 + Math.floor(Math.random() * 15);
    case "medium": return 50 + Math.floor(Math.random() * 25);
    case "low": return 30 + Math.floor(Math.random() * 20);
    case "info": return Math.floor(Math.random() * 30);
    default: return 50;
  }
}
