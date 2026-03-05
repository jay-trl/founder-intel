/**
 * X/Twitter Accounts to Monitor
 * Polled via X API v2 for tweets, threads, and engagement
 */

export interface MonitoredAccount {
  handle: string;
  name: string;
  category: AccountCategory;
  priority: "critical" | "high" | "medium";
  trackStance: boolean;
  topics: string[];
}

export type AccountCategory =
  | "founder-ceo"
  | "vc-investor"
  | "researcher"
  | "policy-journalist"
  | "builder-engineer";

export const TWITTER_ACCOUNTS: MonitoredAccount[] = [
  // ═══ FOUNDERS & CEOs ═══
  { handle: "sama", name: "Sam Altman", category: "founder-ceo", priority: "critical", trackStance: true, topics: ["openai", "agi", "product", "regulation"] },
  { handle: "DarioAmodei", name: "Dario Amodei", category: "founder-ceo", priority: "critical", trackStance: true, topics: ["anthropic", "safety", "scaling", "enterprise"] },
  { handle: "demaborsa", name: "Demis Hassabis", category: "founder-ceo", priority: "critical", trackStance: true, topics: ["deepmind", "research", "gemini"] },
  { handle: "elonmusk", name: "Elon Musk", category: "founder-ceo", priority: "critical", trackStance: true, topics: ["xai", "grok", "compute", "regulation"] },
  { handle: "ArthuRMenworsch", name: "Arthur Mensch", category: "founder-ceo", priority: "high", trackStance: true, topics: ["mistral", "europe", "open-source"] },
  { handle: "aidangomez", name: "Aidan Gomez", category: "founder-ceo", priority: "high", trackStance: true, topics: ["cohere", "enterprise", "rag"] },
  { handle: "kaboropathe", name: "Andrej Karpathy", category: "founder-ceo", priority: "critical", trackStance: true, topics: ["education", "scaling", "open-source", "research"] },
  { handle: "drjimfan", name: "Jim Fan", category: "founder-ceo", priority: "high", trackStance: true, topics: ["nvidia", "agents", "robotics", "research"] },

  // ═══ VCs & INVESTORS ═══
  { handle: "EladGil", name: "Elad Gil", category: "vc-investor", priority: "critical", trackStance: true, topics: ["market-structure", "startups", "ai-investment"] },
  { handle: "naval", name: "Naval Ravikant", category: "vc-investor", priority: "critical", trackStance: true, topics: ["philosophy", "startups", "economics", "ai"] },
  { handle: "VinodKhosla", name: "Vinod Khosla", category: "vc-investor", priority: "high", trackStance: true, topics: ["ai-impact", "industries", "bold-bets"] },
  { handle: "saranormous", name: "Sarah Guo", category: "vc-investor", priority: "high", trackStance: true, topics: ["conviction", "ai-native", "applications"] },
  { handle: "natfriedman", name: "Nat Friedman", category: "vc-investor", priority: "high", trackStance: true, topics: ["ai-grant", "technical", "open-source"] },
  { handle: "danielgross", name: "Daniel Gross", category: "vc-investor", priority: "high", trackStance: true, topics: ["ai-grant", "products", "design"] },
  { handle: "benedictevans", name: "Benedict Evans", category: "vc-investor", priority: "high", trackStance: true, topics: ["market-analysis", "adoption", "trends"] },
  { handle: "saborhasib", name: "Anjney Midha", category: "vc-investor", priority: "high", trackStance: true, topics: ["a16z", "ai-investment", "infrastructure"] },
  { handle: "SonyaHuangVC", name: "Sonya Huang", category: "vc-investor", priority: "high", trackStance: true, topics: ["sequoia", "ai-investment", "gtm"] },
  { handle: "patgrady", name: "Pat Grady", category: "vc-investor", priority: "high", trackStance: true, topics: ["sequoia", "enterprise", "saas"] },
  { handle: "saborhasib", name: "Nabeel Hyatt", category: "vc-investor", priority: "medium", trackStance: true, topics: ["spark", "ai-applications", "consumer"] },

  // ═══ RESEARCHERS ═══
  { handle: "ylecun", name: "Yann LeCun", category: "researcher", priority: "critical", trackStance: true, topics: ["open-source", "agi-debate", "meta", "research"] },
  { handle: "JeffDean", name: "Jeff Dean", category: "researcher", priority: "high", trackStance: true, topics: ["google", "systems", "scaling"] },
  { handle: "andrewng", name: "Andrew Ng", category: "researcher", priority: "high", trackStance: true, topics: ["education", "enterprise", "applications"] },
  { handle: "ilonadem", name: "Ilona Dem", category: "researcher", priority: "medium", trackStance: false, topics: ["alignment", "safety", "research"] },
  { handle: "percyliang", name: "Percy Liang", category: "researcher", priority: "medium", trackStance: true, topics: ["helm", "benchmarks", "stanford"] },
  { handle: "tri_dao", name: "Tri Dao", category: "researcher", priority: "high", trackStance: true, topics: ["flash-attention", "efficiency", "architecture"] },

  // ═══ POLICY & JOURNALISTS ═══
  { handle: "jackclark", name: "Jack Clark", category: "policy-journalist", priority: "critical", trackStance: true, topics: ["policy", "import-ai", "regulation", "safety"] },
  { handle: "GaryMarcus", name: "Gary Marcus", category: "policy-journalist", priority: "high", trackStance: true, topics: ["criticism", "safety", "agi-skepticism"] },
  { handle: "karaoswill", name: "Kara Swisher", category: "policy-journalist", priority: "medium", trackStance: false, topics: ["tech-journalism", "interviews"] },
  { handle: "emilymbender", name: "Emily Bender", category: "policy-journalist", priority: "medium", trackStance: true, topics: ["ethics", "linguistics", "criticism"] },
  { handle: "Zoe_Schiffer", name: "Zoë Schiffer", category: "policy-journalist", priority: "medium", trackStance: false, topics: ["tech-journalism", "scoops"] },

  // ═══ BUILDERS & ENGINEERS ═══
  { handle: "simonw", name: "Simon Willison", category: "builder-engineer", priority: "high", trackStance: true, topics: ["tools", "llm-applications", "open-source"] },
  { handle: "jeremyphoward", name: "Jeremy Howard", category: "builder-engineer", priority: "high", trackStance: true, topics: ["fast-ai", "education", "practical-ai"] },
  { handle: "swaborninst", name: "Swyx", category: "builder-engineer", priority: "high", trackStance: true, topics: ["latent-space", "ai-engineering", "tools"] },
  { handle: "jxnlco", name: "Jason Liu", category: "builder-engineer", priority: "medium", trackStance: false, topics: ["instructor", "structured-output", "tools"] },
];

export function getAccountsByCategory(cat: AccountCategory): MonitoredAccount[] {
  return TWITTER_ACCOUNTS.filter((a) => a.category === cat);
}

export function getCriticalAccounts(): MonitoredAccount[] {
  return TWITTER_ACCOUNTS.filter((a) => a.priority === "critical");
}

export function getStanceTrackingAccounts(): MonitoredAccount[] {
  return TWITTER_ACCOUNTS.filter((a) => a.trackStance);
}
