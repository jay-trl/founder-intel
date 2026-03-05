# Founder Intelligence System

> AI Chief of Staff + War Room + Live Intel Loop — forked from [World Monitor](https://github.com/koala73/worldmonitor)

A real-time intelligence dashboard for AI foundation model startup founders. Monitors 80+ RSS feeds, 25+ YouTube/podcast channels, 40+ Twitter/X accounts, funding deals, model benchmarks, and compute markets — with an integrated Claude-powered strategic advisor.

## Quick Start

### 1. Fork World Monitor

```bash
# Fork via GitHub UI first, then:
git clone https://github.com/YOUR_USERNAME/worldmonitor.git founder-intel-system
cd founder-intel-system

# Rename remote
git remote rename origin upstream
git remote add origin https://github.com/YOUR_USERNAME/founder-intel-system.git
```

### 2. Install Dependencies

```bash
npm install

# Additional dependencies for our extensions
npm install @anthropic-ai/sdk replicate
```

### 3. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` with your API keys (see Environment Variables section below).

### 4. Run Development Server

```bash
npm run dev
# Opens at http://localhost:5173
```

### 5. Open in Claude Code

```bash
# From project root
claude
# Claude Code reads CLAUDE.md automatically for project context
```

## What We Keep from World Monitor

| Feature | Status | Notes |
|---------|--------|-------|
| Vite + TypeScript build | ✅ Keep | Unchanged |
| Vercel Edge Functions | ✅ Keep | Add new endpoints |
| Upstash Redis caching | ✅ Keep | Same caching patterns |
| RSS aggregation + proxy | ✅ Keep | Replace feed URLs |
| Circuit breaker logic | ✅ Keep | Apply to new APIs |
| Hybrid AI classification | ✅ Keep | Replace keywords |
| Transformers.js (browser ML) | ✅ Keep | Same clustering engine |
| Headline Memory RAG | ✅ Keep | Same IndexedDB + embeddings |
| Data freshness monitoring | ✅ Keep | Add new data sources |
| Prediction markets (Polymarket) | ✅ Keep | Filter to AI-related |

## What We Replace

| World Monitor | Founder Intel System |
|--------------|---------------------|
| 100+ geopolitical RSS feeds | 80+ AI industry feeds |
| Military/conflict keywords | AI industry taxonomy |
| Country Instability Index | Competitive Threat Posture |
| Conflict zones / military bases | Signal Feed (AI-clustered news) |
| Infrastructure layers (cables, pipelines) | Funding Radar |
| Live webcams | Podcast Intel |
| Naval / aviation tracking | X/Twitter Signal Feed |
| WORLD / TECH / FINANCE variants | Single AI-industry variant |

## What We Add

| Panel | Data Source | API |
|-------|-----------|-----|
| Podcast Intel | YouTube channels → Whisper → Claude extraction | YouTube Data API v3, Replicate, Anthropic |
| X/Twitter Feed | Curated account monitoring | X API v2 |
| Funding Radar | Funding rounds + overlap scoring | Crunchbase API |
| Model Leaderboard | Benchmark rankings with sparklines | LMSYS API, HuggingFace Hub |
| Compute Market | GPU pricing, NVIDIA signals | Cloud provider APIs |
| Talent Radar | Researcher movements | RSS + manual |
| Chief of Staff | Claude-powered strategic advisor | Anthropic Messages API |

## Environment Variables

```bash
# ═══ INHERITED (from World Monitor) ═══

# AI Classification — Groq for fast hybrid pipeline
GROQ_API_KEY=gsk_xxx

# Cross-user cache — Upstash Redis
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxx


# ═══ NEW ═══

# Claude API — Chief of Staff + podcast extraction
ANTHROPIC_API_KEY=sk-ant-xxx

# YouTube Data API v3 — channel monitoring
# Get from: https://console.cloud.google.com/apis/credentials
YOUTUBE_API_KEY=xxx

# X/Twitter API v2 — signal feed
# Get from: https://developer.twitter.com/en/portal
TWITTER_BEARER_TOKEN=xxx

# Replicate — Whisper transcription
# Get from: https://replicate.com/account/api-tokens
REPLICATE_API_TOKEN=xxx

# Crunchbase Basic API (optional, $29/mo)
# Get from: https://data.crunchbase.com/docs
CRUNCHBASE_API_KEY=xxx

# HuggingFace (free)
# Get from: https://huggingface.co/settings/tokens
HF_TOKEN=xxx
```

## Development with Claude Code

This project is designed to be built primarily with Claude Code. The `CLAUDE.md` file provides Claude with full project context including:

- Architecture decisions and rationale
- File structure with inheritance/replacement/new markers
- Data schemas for all intelligence types
- Integration patterns for the Chief of Staff
- Phase-by-phase implementation checklist

### Recommended Claude Code workflow:

```bash
# Start Claude Code
claude

# Phase 1 example prompts:
> "Strip the geopolitical panels and replace RSS feeds with the AI industry feeds from data/feeds.ts"
> "Build the SignalFeed panel adapting World Monitor's news panel component"
> "Adapt the Country Instability Index into Competitive Threat Posture using the weights in CLAUDE.md"

# Phase 2:
> "Build the FundingRadar panel with Crunchbase API integration"
> "Add a new edge function at api/model-benchmarks.ts that proxies LMSYS Arena data"

# Phase 3:
> "Build the YouTube monitoring pipeline: detection → transcription → extraction"
> "Create the PodcastIntel panel showing clips and stance tracking"

# Phase 4:
> "Build the ChiefOfStaff sidebar that calls the Anthropic API with War Room context"
```

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        WAR ROOM UI                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │  Signal   │ │ Podcast  │ │ X/Twitter│ │ Funding  │      │
│  │  Feed     │ │  Intel   │ │  Signal  │ │  Radar   │      │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘      │
│       │             │            │             │             │
│  ┌────┴─────┐ ┌────┴─────┐ ┌───┴──────┐ ┌───┴──────┐      │
│  │  Model   │ │ Compute  │ │  Threat  │ │Prediction│      │
│  │Leaderboard│ │ Market  │ │ Posture  │ │ Markets  │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              CHIEF OF STAFF SIDEBAR                  │   │
│  │         (Claude API + War Room context)               │   │
│  └─────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
   ┌─────────────┐ ┌──────────┐ ┌───────────┐
   │ Vercel Edge │ │ Upstash  │ │Transformers│
   │ Functions   │ │ Redis    │ │.js (browser│
   │ (30+ APIs)  │ │ (cache)  │ │ ML worker) │
   └──────┬──────┘ └──────────┘ └───────────┘
          │
    ┌─────┼─────┬──────────┬──────────┬──────────┐
    ▼     ▼     ▼          ▼          ▼          ▼
  RSS   YouTube  X/Twitter  Crunchbase  HuggingFace  Anthropic
  80+   Data     API v2     API         Hub API       API
  feeds API v3                                    (Chief of Staff)
```

## Deployment

```bash
# Deploy to Vercel (same as World Monitor)
vercel deploy

# Set environment variables in Vercel dashboard
# or via CLI:
vercel env add ANTHROPIC_API_KEY
vercel env add YOUTUBE_API_KEY
# ... etc
```

## License

MIT (inherited from World Monitor)

## Credits

- **World Monitor** by [Elie Habib](https://github.com/koala73) — the foundation this project builds on
- **Architecture & system design** — built with Claude
