/**
 * YouTube Channels to Monitor
 * Polled via YouTube Data API v3 for new uploads
 */

export interface MonitoredChannel {
  channelId: string;
  name: string;
  category: ChannelCategory;
  pollMinutes: number;
  extractClips: boolean;
  trackStances: boolean;
  tags: string[];
}

export type ChannelCategory =
  | "vc-founder"
  | "deep-tech"
  | "industry-analysis"
  | "policy-governance"
  | "korea-asia"
  | "technical-education";

export const YOUTUBE_CHANNELS: MonitoredChannel[] = [
  // ═══════════════════════════════════════
  // VC / FOUNDER PODCASTS
  // ═══════════════════════════════════════
  { channelId: "UCESLZhusAkFfsNsApnjF_Cg", name: "All-In Podcast", category: "vc-founder", pollMinutes: 30, extractClips: true, trackStances: true, tags: ["vc", "macro", "politics", "tech"] },
  { channelId: "UCuy_wMo_e0Ot-FJtpPcj9VA", name: "20VC with Harry Stebbings", category: "vc-founder", pollMinutes: 60, extractClips: true, trackStances: true, tags: ["vc", "fundraising", "startups"] },
  { channelId: "UC0YiWTMPizo-lNnTpENuaGA", name: "No Priors (a16z)", category: "vc-founder", pollMinutes: 60, extractClips: true, trackStances: true, tags: ["a16z", "ai", "enterprise"] },
  { channelId: "UCIALMKvObZNtJ68-Kys84EA", name: "Acquired Podcast", category: "vc-founder", pollMinutes: 120, extractClips: true, trackStances: false, tags: ["business", "history", "strategy"] },
  { channelId: "UCRpRjarXHQDPWusmc8FQC0w", name: "This Week in Startups", category: "vc-founder", pollMinutes: 60, extractClips: true, trackStances: true, tags: ["startups", "vc", "jason-calacanis"] },
  { channelId: "UCcefcZRL2oaA_uBNeo5UOWg", name: "Y Combinator", category: "vc-founder", pollMinutes: 60, extractClips: true, trackStances: false, tags: ["yc", "startups", "advice"] },
  { channelId: "UC4xKdmAXFh4ACyhpiQ_3qBw", name: "Lightcone (a16z)", category: "vc-founder", pollMinutes: 120, extractClips: true, trackStances: true, tags: ["a16z", "crypto", "ai"] },

  // ═══════════════════════════════════════
  // DEEP TECH INTERVIEWS
  // ═══════════════════════════════════════
  { channelId: "UCSHZKJJfhK65kRaRoHmpllg", name: "Lex Fridman", category: "deep-tech", pollMinutes: 60, extractClips: true, trackStances: true, tags: ["interviews", "ai", "philosophy"] },
  { channelId: "UC4RJ72k1huEzuMmHnlMbnDg", name: "Dwarkesh Patel", category: "deep-tech", pollMinutes: 60, extractClips: true, trackStances: true, tags: ["interviews", "scaling", "research"] },
  { channelId: "UCMLtBahI5DMrt0NPvDSoIRQ", name: "Machine Learning Street Talk", category: "deep-tech", pollMinutes: 120, extractClips: true, trackStances: true, tags: ["ml", "research", "debate"] },
  { channelId: "UCZHmQk67mSJgfCCTn7xBfew", name: "Yannic Kilcher", category: "deep-tech", pollMinutes: 120, extractClips: false, trackStances: false, tags: ["papers", "ml", "reviews"] },
  { channelId: "UCbfYPyITQ-7l4upoX8nvctg", name: "Two Minute Papers", category: "deep-tech", pollMinutes: 120, extractClips: false, trackStances: false, tags: ["papers", "visual", "summaries"] },

  // ═══════════════════════════════════════
  // AI INDUSTRY ANALYSIS
  // ═══════════════════════════════════════
  { channelId: "UCLXo7UDZvByw2ixzpQCufnA", name: "Cognitive Revolution", category: "industry-analysis", pollMinutes: 120, extractClips: true, trackStances: true, tags: ["ai", "industry", "applications"] },
  { channelId: "UCJfS6xwYRkFBmpC_KaVGBoQ", name: "Latent Space Podcast", category: "industry-analysis", pollMinutes: 120, extractClips: true, trackStances: true, tags: ["engineering", "ai-tools", "infra"] },
  { channelId: "UCvjgXvBlbQkamLCFo5Lr6jQ", name: "AI Explained", category: "industry-analysis", pollMinutes: 120, extractClips: false, trackStances: false, tags: ["explainers", "models", "benchmarks"] },
  { channelId: "UCwm3PeGlHmXyuNgXCdKqL1g", name: "Matthew Berman", category: "industry-analysis", pollMinutes: 120, extractClips: false, trackStances: false, tags: ["reviews", "models", "tools"] },
  { channelId: "UCWN3xxRkmTPphLkd4muTTiA", name: "NVIDIA AI Podcast", category: "industry-analysis", pollMinutes: 240, extractClips: true, trackStances: false, tags: ["nvidia", "enterprise", "compute"] },

  // ═══════════════════════════════════════
  // POLICY & GOVERNANCE
  // ═══════════════════════════════════════
  { channelId: "UCSP7DgCBnHfgxMEDnQAr7Gw", name: "CSIS", category: "policy-governance", pollMinutes: 240, extractClips: true, trackStances: true, tags: ["policy", "geopolitics", "defense"] },
  { channelId: "UCkrp0FsHCKfmTx2o07kEXCQ", name: "Brookings Institution", category: "policy-governance", pollMinutes: 240, extractClips: true, trackStances: true, tags: ["policy", "governance", "regulation"] },
  { channelId: "UCBa5G_ESCn8Yd4vw5U-gIcg", name: "Stanford HAI", category: "policy-governance", pollMinutes: 240, extractClips: true, trackStances: true, tags: ["academia", "policy", "research"] },

  // ═══════════════════════════════════════
  // KOREA / ASIA
  // ═══════════════════════════════════════
  { channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA", name: "Asian Boss", category: "korea-asia", pollMinutes: 240, extractClips: false, trackStances: false, tags: ["korea", "asia", "culture"] },

  // ═══════════════════════════════════════
  // TECHNICAL EDUCATION
  // ═══════════════════════════════════════
  { channelId: "UCNJ1Ymd5yFuUPtn21xtR19Q", name: "Andrej Karpathy", category: "technical-education", pollMinutes: 120, extractClips: true, trackStances: true, tags: ["education", "openai-alumni", "coding"] },
];

export function getChannelsByCategory(cat: ChannelCategory): MonitoredChannel[] {
  return YOUTUBE_CHANNELS.filter((c) => c.category === cat);
}

export function getStanceTrackingChannels(): MonitoredChannel[] {
  return YOUTUBE_CHANNELS.filter((c) => c.trackStances);
}
