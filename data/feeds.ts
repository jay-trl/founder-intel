/**
 * AI Industry RSS Feed Directory
 * Replaces World Monitor's geopolitical feeds
 * Organized by intelligence pillar
 */

export interface FeedSource {
  url: string;
  name: string;
  pillar: Pillar;
  tier: 1 | 2 | 3 | 4; // 1=wire/official, 2=major outlet, 3=specialized, 4=aggregator/blog
  refreshMinutes: number;
  tags: string[];
}

export type Pillar =
  | "competitive"
  | "regulatory"
  | "funding"
  | "compute"
  | "research"
  | "talent"
  | "gtm"
  | "geopolitics"
  | "korea";

export const FEEDS: FeedSource[] = [
  // ═══════════════════════════════════════
  // COMPANY BLOGS (Tier 1 — primary sources)
  // ═══════════════════════════════════════
  { url: "https://openai.com/blog/rss.xml", name: "OpenAI Blog", pillar: "competitive", tier: 1, refreshMinutes: 15, tags: ["openai", "gpt", "models"] },
  { url: "https://www.anthropic.com/research/rss.xml", name: "Anthropic Research", pillar: "competitive", tier: 1, refreshMinutes: 15, tags: ["anthropic", "claude", "safety"] },
  { url: "https://blog.google/technology/ai/rss/", name: "Google AI Blog", pillar: "competitive", tier: 1, refreshMinutes: 15, tags: ["google", "deepmind", "gemini"] },
  { url: "https://ai.meta.com/blog/rss/", name: "Meta AI Blog", pillar: "competitive", tier: 1, refreshMinutes: 30, tags: ["meta", "llama", "open-source"] },
  { url: "https://mistral.ai/feed.xml", name: "Mistral Blog", pillar: "competitive", tier: 1, refreshMinutes: 30, tags: ["mistral", "european-ai"] },
  { url: "https://cohere.com/blog/rss.xml", name: "Cohere Blog", pillar: "competitive", tier: 1, refreshMinutes: 30, tags: ["cohere", "enterprise", "rag"] },
  { url: "https://huggingface.co/blog/feed.xml", name: "Hugging Face Blog", pillar: "competitive", tier: 1, refreshMinutes: 30, tags: ["huggingface", "open-source", "models"] },
  { url: "https://blog.x.ai/rss.xml", name: "xAI Blog", pillar: "competitive", tier: 1, refreshMinutes: 60, tags: ["xai", "grok", "musk"] },
  { url: "https://ai21.com/blog/rss.xml", name: "AI21 Labs Blog", pillar: "competitive", tier: 2, refreshMinutes: 60, tags: ["ai21", "jamba"] },
  { url: "https://www.nvidia.com/en-us/ai/blog/rss/", name: "NVIDIA AI Blog", pillar: "compute", tier: 1, refreshMinutes: 30, tags: ["nvidia", "gpu", "cuda"] },
  { url: "https://aws.amazon.com/blogs/machine-learning/feed/", name: "AWS ML Blog", pillar: "compute", tier: 1, refreshMinutes: 60, tags: ["aws", "bedrock", "trainium"] },
  { url: "https://cloud.google.com/blog/products/ai-machine-learning/rss/", name: "Google Cloud AI Blog", pillar: "compute", tier: 1, refreshMinutes: 60, tags: ["gcp", "tpu", "vertex"] },

  // ═══════════════════════════════════════
  // TECH PRESS (Tier 2)
  // ═══════════════════════════════════════
  { url: "https://techcrunch.com/category/artificial-intelligence/feed/", name: "TechCrunch AI", pillar: "competitive", tier: 2, refreshMinutes: 10, tags: ["news", "startups", "funding"] },
  { url: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml", name: "The Verge AI", pillar: "competitive", tier: 2, refreshMinutes: 15, tags: ["news", "product"] },
  { url: "https://venturebeat.com/category/ai/feed/", name: "VentureBeat AI", pillar: "competitive", tier: 2, refreshMinutes: 15, tags: ["news", "enterprise"] },
  { url: "https://arstechnica.com/tag/artificial-intelligence/feed/", name: "Ars Technica AI", pillar: "competitive", tier: 2, refreshMinutes: 30, tags: ["news", "analysis"] },
  { url: "https://www.wired.com/feed/tag/ai/latest/rss", name: "Wired AI", pillar: "competitive", tier: 2, refreshMinutes: 30, tags: ["news", "culture"] },
  { url: "https://www.semafor.com/vertical/tech/rss", name: "Semafor Tech", pillar: "competitive", tier: 2, refreshMinutes: 15, tags: ["news", "scoops"] },
  { url: "https://www.technologyreview.com/topic/artificial-intelligence/feed/", name: "MIT Tech Review AI", pillar: "research", tier: 2, refreshMinutes: 30, tags: ["news", "research"] },

  // ═══════════════════════════════════════
  // RESEARCH (Tier 2-3)
  // ═══════════════════════════════════════
  { url: "https://rss.arxiv.org/rss/cs.CL", name: "arXiv cs.CL", pillar: "research", tier: 2, refreshMinutes: 60, tags: ["papers", "nlp", "language-models"] },
  { url: "https://rss.arxiv.org/rss/cs.AI", name: "arXiv cs.AI", pillar: "research", tier: 2, refreshMinutes: 60, tags: ["papers", "ai-general"] },
  { url: "https://rss.arxiv.org/rss/cs.LG", name: "arXiv cs.LG", pillar: "research", tier: 2, refreshMinutes: 60, tags: ["papers", "machine-learning"] },
  { url: "https://paperswithcode.com/latest/feed", name: "Papers With Code", pillar: "research", tier: 3, refreshMinutes: 120, tags: ["papers", "benchmarks", "code"] },
  { url: "https://research.google/blog/rss/", name: "Google Research Blog", pillar: "research", tier: 1, refreshMinutes: 60, tags: ["google", "research"] },
  { url: "https://www.microsoft.com/en-us/research/feed/", name: "Microsoft Research", pillar: "research", tier: 1, refreshMinutes: 60, tags: ["microsoft", "research"] },

  // ═══════════════════════════════════════
  // POLICY & THINK TANKS (Tier 2-3)
  // ═══════════════════════════════════════
  { url: "https://www.brookings.edu/topic/artificial-intelligence/feed/", name: "Brookings AI", pillar: "regulatory", tier: 2, refreshMinutes: 120, tags: ["policy", "governance"] },
  { url: "https://cset.georgetown.edu/feed/", name: "CSET Georgetown", pillar: "regulatory", tier: 2, refreshMinutes: 120, tags: ["policy", "security", "china"] },
  { url: "https://www.rand.org/topics/artificial-intelligence.xml", name: "RAND AI", pillar: "regulatory", tier: 2, refreshMinutes: 120, tags: ["policy", "defense"] },
  { url: "https://ainowinstitute.org/feed", name: "AI Now Institute", pillar: "regulatory", tier: 3, refreshMinutes: 120, tags: ["policy", "ethics", "labor"] },
  { url: "https://partnershiponai.org/feed/", name: "Partnership on AI", pillar: "regulatory", tier: 3, refreshMinutes: 240, tags: ["governance", "safety"] },
  { url: "https://hai.stanford.edu/news/rss.xml", name: "Stanford HAI", pillar: "regulatory", tier: 2, refreshMinutes: 120, tags: ["policy", "research", "academia"] },

  // ═══════════════════════════════════════
  // NEWSLETTERS & ANALYSIS (Tier 3)
  // ═══════════════════════════════════════
  { url: "https://jack-clark.net/feed/", name: "Import AI (Jack Clark)", pillar: "competitive", tier: 3, refreshMinutes: 240, tags: ["newsletter", "analysis", "policy"] },
  { url: "https://www.deeplearning.ai/the-batch/feed/", name: "The Batch (Andrew Ng)", pillar: "research", tier: 3, refreshMinutes: 240, tags: ["newsletter", "education"] },
  { url: "https://www.interconnects.ai/feed", name: "Interconnects (Nathan Lambert)", pillar: "research", tier: 3, refreshMinutes: 240, tags: ["newsletter", "rlhf", "alignment"] },
  { url: "https://thegradient.pub/rss/", name: "The Gradient", pillar: "research", tier: 3, refreshMinutes: 240, tags: ["newsletter", "research", "analysis"] },
  { url: "https://simonwillison.net/atom/everything/", name: "Simon Willison", pillar: "gtm", tier: 3, refreshMinutes: 120, tags: ["blog", "tools", "llm-applications"] },
  { url: "https://lilianweng.github.io/index.xml", name: "Lil'Log (Lilian Weng)", pillar: "research", tier: 3, refreshMinutes: 480, tags: ["blog", "tutorials", "openai"] },
  { url: "https://newsletter.maartengrootendorst.com/feed", name: "Ahead of AI", pillar: "research", tier: 3, refreshMinutes: 240, tags: ["newsletter", "tutorials"] },

  // ═══════════════════════════════════════
  // FUNDING & FINANCIAL (Tier 2-3)
  // ═══════════════════════════════════════
  { url: "https://news.crunchbase.com/feed/", name: "Crunchbase News", pillar: "funding", tier: 2, refreshMinutes: 30, tags: ["funding", "startups", "deals"] },
  { url: "https://www.cbinsights.com/research/feed/", name: "CB Insights", pillar: "funding", tier: 2, refreshMinutes: 60, tags: ["funding", "analysis", "trends"] },
  { url: "https://pitchbook.com/blog/rss", name: "PitchBook Blog", pillar: "funding", tier: 2, refreshMinutes: 60, tags: ["funding", "vc", "pe"] },
  { url: "https://a16z.com/feed/", name: "a16z Blog", pillar: "funding", tier: 2, refreshMinutes: 120, tags: ["vc", "thesis", "ai"] },
  { url: "https://www.sequoiacap.com/feed/", name: "Sequoia Blog", pillar: "funding", tier: 2, refreshMinutes: 120, tags: ["vc", "thesis"] },

  // ═══════════════════════════════════════
  // KOREA & ASIA (Tier 2-3)
  // ═══════════════════════════════════════
  { url: "https://www.koreaherald.com/rss/tech.xml", name: "Korea Herald Tech", pillar: "korea", tier: 2, refreshMinutes: 30, tags: ["korea", "tech", "news"] },
  { url: "https://pulsenews.co.kr/rss/", name: "Pulse by Maeil", pillar: "korea", tier: 2, refreshMinutes: 30, tags: ["korea", "business", "finance"] },
  { url: "https://asia.nikkei.com/rss/feed/nar", name: "Nikkei Asia", pillar: "geopolitics", tier: 2, refreshMinutes: 30, tags: ["asia", "business", "geopolitics"] },
  { url: "https://www.scmp.com/rss/5/feed", name: "SCMP Tech", pillar: "geopolitics", tier: 2, refreshMinutes: 30, tags: ["china", "tech", "geopolitics"] },
  { url: "https://www.kedglobal.com/rss", name: "KED Global", pillar: "korea", tier: 3, refreshMinutes: 60, tags: ["korea", "startups", "economy"] },

  // ═══════════════════════════════════════
  // GO-TO-MARKET & DEVELOPER (Tier 3)
  // ═══════════════════════════════════════
  { url: "https://www.latent.space/feed", name: "Latent Space", pillar: "gtm", tier: 3, refreshMinutes: 240, tags: ["podcast", "engineering", "ai-tools"] },
  { url: "https://blog.langchain.dev/rss/", name: "LangChain Blog", pillar: "gtm", tier: 3, refreshMinutes: 120, tags: ["agents", "rag", "frameworks"] },
  { url: "https://blog.llamaindex.ai/feed", name: "LlamaIndex Blog", pillar: "gtm", tier: 3, refreshMinutes: 120, tags: ["rag", "data", "frameworks"] },
  { url: "https://www.semianalysis.com/feed", name: "SemiAnalysis", pillar: "compute", tier: 3, refreshMinutes: 120, tags: ["semiconductors", "gpu", "analysis"] },

  // ═══════════════════════════════════════
  // GEOPOLITICS OF AI (Tier 2)
  // ═══════════════════════════════════════
  { url: "https://www.reuters.com/technology/rss", name: "Reuters Tech", pillar: "geopolitics", tier: 1, refreshMinutes: 10, tags: ["wire", "global", "breaking"] },
  { url: "https://feeds.bloomberg.com/technology/news.rss", name: "Bloomberg Tech", pillar: "geopolitics", tier: 1, refreshMinutes: 10, tags: ["wire", "financial", "breaking"] },
  { url: "https://www.ft.com/technology?format=rss", name: "FT Technology", pillar: "geopolitics", tier: 1, refreshMinutes: 15, tags: ["financial", "analysis", "global"] },
];

/**
 * Get feeds filtered by pillar
 */
export function getFeedsByPillar(pillar: Pillar): FeedSource[] {
  return FEEDS.filter((f) => f.pillar === pillar);
}

/**
 * Get all feed URLs for RSS proxy allowlist
 */
export function getAllFeedUrls(): string[] {
  return FEEDS.map((f) => f.url);
}

/**
 * Get feeds sorted by refresh frequency (most frequent first)
 */
export function getFeedsByPriority(): FeedSource[] {
  return [...FEEDS].sort((a, b) => a.refreshMinutes - b.refreshMinutes);
}
