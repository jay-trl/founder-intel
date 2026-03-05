# Founder Intelligence Migration Plan

## Context

This repo is a fork of **World Monitor** (a geopolitical intelligence dashboard) being transformed into **Founder Intelligence** — an AI industry signal feed for startup founders. The existing `data/feeds.ts` (80+ AI-focused RSS feeds) and `data/keywords.ts` (AI industry classification rules) are already written. The goal is to strip geopolitical panels/services and wire up the AI feeds into a new **SignalFeed** panel as the first deliverable.

---

## File Fate Map

### Root Config & Build

| File | Fate | Notes |
|------|------|-------|
| `package.json` | MODIFY | Remove unused geopolitical deps later; no changes for Phase 1 |
| `vite.config.ts` | KEEP | Build system is reusable as-is |
| `tsconfig.json` | KEEP | |
| `tsconfig.api.json` | KEEP | |
| `vercel.json` | KEEP | |
| `middleware.ts` | MODIFY | Remove variant routing for full/finance/happy; keep single variant |
| `index.html` | MODIFY | Update title/meta for Founder Intelligence |
| `settings.html` | MODIFY | Strip geopolitical settings later |
| `live-channels.html` | DELETE | YouTube live channels not needed |
| `playground-settings-*.html` | DELETE | Design playground files |
| `.env.example` | MODIFY | Remove geopolitical API keys, keep GROQ/UPSTASH/FINNHUB |

### `data/` — Data Configuration

| File | Fate | Notes |
|------|------|-------|
| `data/feeds.ts` | KEEP | Already AI-industry focused — **core to SignalFeed** |
| `data/keywords.ts` | KEEP | Already AI-industry classification — **core to SignalFeed** |
| `data/twitter-lists.ts` | KEEP | Curated AI leadership accounts |
| `data/youtube-channels.ts` | KEEP | AI podcast/video channels |
| `data/gamma-irradiators.json` | DELETE | Geopolitical |
| `data/gamma-irradiators-raw.json` | DELETE | Geopolitical |
| `data/telegram-channels.json` | DELETE | OSINT channels not relevant |

### `api/` — Vercel Edge Functions

#### KEEP (relevant to AI founder intel)

| File | Fate | Notes |
|------|------|-------|
| `api/news/v1/[rpc].ts` | KEEP | News feed endpoint — **core** |
| `api/market/v1/[rpc].ts` | KEEP | Market data for AI stocks |
| `api/research/v1/[rpc].ts` | KEEP | arXiv papers, HN, trending repos |
| `api/prediction/v1/[rpc].ts` | KEEP | Prediction markets |
| `api/economic/v1/[rpc].ts` | KEEP | Macro signals |
| `api/intelligence/v1/[rpc].ts` | KEEP | Classification/deduction engine |
| `api/cyber/v1/[rpc].ts` | KEEP | Cyber threats to AI infra |
| `api/infrastructure/v1/[rpc].ts` | KEEP | Internet/cloud outages |
| `api/_api-key.js` | KEEP | Auth shared helper |
| `api/_cors.js` | KEEP | CORS shared helper |
| `api/_cors.test.mjs` | KEEP | |
| `api/_rate-limit.js` | KEEP | Rate limiting |
| `api/_relay.js` | KEEP | Relay helper |
| `api/_rss-allowed-domains.js` | MODIFY | Update allowlist for AI feeds |
| `api/rss-proxy.js` | KEEP | **Core** — proxies RSS feeds |
| `api/data/city-coords.ts` | KEEP | Geo enrichment |
| `api/bootstrap.js` | KEEP | App bootstrap |
| `api/version.js` | KEEP | Version endpoint |
| `api/cache-purge.js` | KEEP | Cache management |
| `api/enrichment/company.js` | KEEP | Company enrichment |
| `api/enrichment/signals.js` | KEEP | Signal enrichment |
| `api/story.js` | KEEP | Story detail |
| `api/og-story.js` | KEEP | OG meta for stories |
| `api/og-story.test.mjs` | KEEP | |
| `api/register-interest.js` | KEEP | Email registration |
| `api/api-cache.json` | KEEP | |
| `api/seed-health.js` | KEEP | |
| `api/download.js` | KEEP | |
| `api/fwdstart.js` | KEEP | |

#### DELETE (geopolitical domains)

| File | Fate | Notes |
|------|------|-------|
| `api/aviation/v1/[rpc].ts` | DELETE | Aviation tracking |
| `api/maritime/v1/[rpc].ts` | DELETE | Ship tracking |
| `api/military/v1/[rpc].ts` | DELETE | Military flights |
| `api/conflict/v1/[rpc].ts` | DELETE | Armed conflict |
| `api/wildfire/v1/[rpc].ts` | DELETE | Fire detection |
| `api/seismology/v1/[rpc].ts` | DELETE | Earthquakes |
| `api/displacement/v1/[rpc].ts` | DELETE | Refugees |
| `api/giving/v1/[rpc].ts` | DELETE | Philanthropy |
| `api/climate/v1/[rpc].ts` | DELETE | Climate anomalies |
| `api/unrest/v1/[rpc].ts` | DELETE | Protests |
| `api/positive-events/v1/[rpc].ts` | DELETE | Good news |
| `api/natural/v1/[rpc].ts` | DELETE | Natural events |
| `api/supply-chain/v1/[rpc].ts` | DELETE | Shipping/minerals |
| `api/trade/v1/[rpc].ts` | DELETE | Tariffs/trade |
| `api/ais-snapshot.js` | DELETE | AIS vessel tracking |
| `api/opensky.js` | DELETE | Aircraft tracking |
| `api/oref-alerts.js` | DELETE | Israel sirens |
| `api/gpsjam.js` | DELETE | GPS interference |
| `api/geo.js` | DELETE | Geopolitical geo |
| `api/polymarket.js` | DELETE | Prediction markets raw |
| `api/telegram-feed.js` | DELETE | Telegram OSINT |
| `api/youtube/embed.js` | DELETE | YouTube embed |
| `api/youtube/embed.test.mjs` | DELETE | |
| `api/youtube/live.js` | DELETE | YouTube live |
| `api/eia/[[...path]].js` | DELETE | EIA energy proxy |
| `api/loaders-xml-wms-regression.test.mjs` | DELETE | |

### `server/` — Server Handlers

#### KEEP

| File | Fate | Notes |
|------|------|-------|
| `server/gateway.ts` | MODIFY | Remove geopolitical service registrations |
| `server/router.ts` | KEEP | |
| `server/cors.ts` | KEEP | |
| `server/error-mapper.ts` | KEEP | |
| `server/env.d.ts` | MODIFY | Remove unused env var types |
| `server/_shared/*` | KEEP | All shared utils (redis, rate-limit, hash, etc.) |
| `server/worldmonitor/news/v1/*` | KEEP | News service — **core** |
| `server/worldmonitor/market/v1/*` | KEEP | Market service |
| `server/worldmonitor/research/v1/*` | KEEP | Research service |
| `server/worldmonitor/prediction/v1/*` | KEEP | Prediction service |
| `server/worldmonitor/economic/v1/*` | KEEP | Economic service |
| `server/worldmonitor/intelligence/v1/*` | KEEP | Intelligence service |
| `server/worldmonitor/cyber/v1/*` | KEEP | Cyber service |
| `server/worldmonitor/infrastructure/v1/*` | KEEP | Infrastructure service |

#### DELETE (geopolitical service handlers)

| Directory | Fate |
|-----------|------|
| `server/worldmonitor/aviation/v1/` | DELETE |
| `server/worldmonitor/maritime/v1/` | DELETE |
| `server/worldmonitor/military/v1/` | DELETE |
| `server/worldmonitor/conflict/v1/` | DELETE |
| `server/worldmonitor/wildfire/v1/` | DELETE |
| `server/worldmonitor/seismology/v1/` | DELETE |
| `server/worldmonitor/displacement/v1/` | DELETE |
| `server/worldmonitor/giving/v1/` | DELETE |
| `server/worldmonitor/climate/v1/` | DELETE |
| `server/worldmonitor/unrest/v1/` | DELETE |
| `server/worldmonitor/positive-events/v1/` | DELETE |
| `server/worldmonitor/natural/v1/` | DELETE |
| `server/worldmonitor/supply-chain/v1/` | DELETE |
| `server/worldmonitor/trade/v1/` | DELETE |

### `src/components/` — UI Components

#### KEEP (reusable infrastructure)

| File | Fate | Notes |
|------|------|-------|
| `Panel.ts` | KEEP | Base panel class — **reused by SignalFeed** |
| `VirtualList.ts` | KEEP | Virtual scrolling — **reused by SignalFeed** |
| `MapContainer.ts` | KEEP | Map wrapper |
| `Map.ts` | KEEP | Map component |
| `DeckGLMap.ts` | KEEP | WebGL map |
| `MapPopup.ts` | KEEP | Map popups |
| `SearchModal.ts` | KEEP | Search |
| `UnifiedSettings.ts` | MODIFY | Strip geopolitical settings |
| `StoryModal.ts` | KEEP | Story detail view |
| `SignalModal.ts` | KEEP | Signal detail |
| `NewsPanel.ts` | MODIFY | **Basis for SignalFeed** — adapt to use `data/feeds.ts` pillars |
| `MarketPanel.ts` | KEEP | AI stock tracking |
| `InsightsPanel.ts` | KEEP | AI-powered insights |
| `PredictionPanel.ts` | KEEP | Prediction markets |
| `EconomicPanel.ts` | KEEP | Economic indicators |
| `MonitorPanel.ts` | KEEP | Custom monitors |
| `DownloadBanner.ts` | KEEP | App download CTA |
| `CommunityWidget.ts` | KEEP | Community |
| `RuntimeConfigPanel.ts` | KEEP | Runtime config |
| `WorldClockPanel.ts` | KEEP | World clock |
| `BreakingNewsBanner.ts` | KEEP | Breaking alerts |
| `PlaybackControl.ts` | KEEP | Timeline playback |
| `index.ts` | MODIFY | Update exports |

#### NEW

| File | Fate | Notes |
|------|------|-------|
| `SignalFeedPanel.ts` | **NEW** | Primary panel — displays AI industry signals from `data/feeds.ts`, classified by `data/keywords.ts`, filterable by pillar |

#### DELETE (geopolitical panels)

| File | Fate | Notes |
|------|------|-------|
| `AirlineIntelPanel.ts` | DELETE | Aviation |
| `AviationCommandBar.ts` | DELETE | Aviation |
| `CIIPanel.ts` | DELETE | Country instability |
| `CascadePanel.ts` | DELETE | Infrastructure cascade |
| `ClimateAnomalyPanel.ts` | DELETE | Climate |
| `CountryBriefPage.ts` | DELETE | Country briefs |
| `CountryBriefPanel.ts` | DELETE | Country briefs |
| `CountryDeepDivePanel.ts` | DELETE | Country deep dive |
| `CountryIntelModal.ts` | DELETE | Country intel |
| `CountryTimeline.ts` | DELETE | Country timeline |
| `DeductionPanel.ts` | DELETE | Intel deduction |
| `DisplacementPanel.ts` | DELETE | Refugees |
| `GdeltIntelPanel.ts` | DELETE | GDELT intelligence |
| `GeoHubsPanel.ts` | DELETE | Geo hubs |
| `GivingPanel.ts` | DELETE | Philanthropy |
| `GlobeMap.ts` | DELETE | 3D globe |
| `GoodThingsDigestPanel.ts` | DELETE | Happy variant |
| `GulfEconomiesPanel.ts` | DELETE | Gulf economies |
| `HeroSpotlightPanel.ts` | DELETE | Happy variant |
| `IntelligenceGapBadge.ts` | DELETE | Intel gaps |
| `InvestmentsPanel.ts` | DELETE | GCC investments |
| `LiveNewsPanel.ts` | DELETE | Live TV news |
| `LiveWebcamsPanel.ts` | DELETE | Webcams |
| `MacroSignalsPanel.ts` | DELETE | Can add back later if needed |
| `MobileWarningModal.ts` | DELETE | |
| `OrefSirensPanel.ts` | DELETE | Israel sirens |
| `PizzIntIndicator.ts` | DELETE | PIZZINT |
| `PopulationExposurePanel.ts` | DELETE | Population exposure |
| `PositiveNewsFeedPanel.ts` | DELETE | Happy variant |
| `ProgressChartsPanel.ts` | DELETE | Happy variant |
| `RegulationPanel.ts` | DELETE | Can rebuild later if needed |
| `RenewableEnergyPanel.ts` | DELETE | Happy variant |
| `SatelliteFiresPanel.ts` | DELETE | Wildfires |
| `SecurityAdvisoriesPanel.ts` | DELETE | Can add back later |
| `ServiceStatusPanel.ts` | DELETE | Cloud status |
| `SpeciesComebackPanel.ts` | DELETE | Happy variant |
| `StablecoinPanel.ts` | DELETE | Stablecoins |
| `StatusPanel.ts` | DELETE | Status |
| `StrategicPosturePanel.ts` | DELETE | Military posture |
| `StrategicRiskPanel.ts` | DELETE | Strategic risk |
| `SupplyChainPanel.ts` | DELETE | Supply chain |
| `TechEventsPanel.ts` | DELETE | Can rebuild if needed |
| `TechHubsPanel.ts` | DELETE | |
| `TechReadinessPanel.ts` | DELETE | |
| `TelegramIntelPanel.ts` | DELETE | Telegram OSINT |
| `TradePolicyPanel.ts` | DELETE | Trade policy |
| `UcdpEventsPanel.ts` | DELETE | UCDP conflicts |
| `VerificationChecklist.ts` | DELETE | |
| `BreakthroughsTickerPanel.ts` | DELETE | Happy variant |
| `CountersPanel.ts` | DELETE | Happy variant |
| `ETFFlowsPanel.ts` | DELETE | ETF flows |

### `src/services/` — Business Logic

#### KEEP (core infrastructure)

| File | Fate | Notes |
|------|------|-------|
| `rss.ts` | MODIFY | Wire to `data/feeds.ts` instead of `config/feeds.ts` — **core to SignalFeed** |
| `threat-classifier.ts` | MODIFY | Wire to `data/keywords.ts` classification |
| `clustering.ts` | KEEP | Semantic clustering |
| `trending-keywords.ts` | KEEP | Velocity/spike detection |
| `velocity.ts` | KEEP | Signal velocity |
| `ai-classify-queue.ts` | KEEP | Hybrid LLM classification |
| `ai-flow-settings.ts` | KEEP | AI settings |
| `analytics.ts` | KEEP | Analytics |
| `bootstrap.ts` | MODIFY | Strip geopolitical bootstrap |
| `data-freshness.ts` | MODIFY | Remove unused data sources |
| `i18n.ts` | KEEP | Internationalization |
| `ml-worker.ts` | KEEP | ML worker |
| `ml-capabilities.ts` | KEEP | ML capabilities |
| `persistent-cache.ts` | KEEP | IDB cache |
| `storage.ts` | KEEP | Storage utils |
| `settings-manager.ts` | MODIFY | Strip geopolitical settings |
| `settings-constants.ts` | MODIFY | |
| `runtime.ts` | KEEP | Runtime detection |
| `runtime-config.ts` | KEEP | Runtime config |
| `index.ts` | MODIFY | Update exports |
| `breaking-news-alerts.ts` | KEEP | Breaking alerts |
| `meta-tags.ts` | MODIFY | Update for Founder Intel branding |
| `analysis-core.ts` | KEEP | Analysis engine |
| `analysis-worker.ts` | KEEP | Analysis worker |
| `entity-extraction.ts` | KEEP | Entity extraction |
| `entity-index.ts` | KEEP | Entity index |
| `story-data.ts` | KEEP | Story loading |
| `story-renderer.ts` | KEEP | Story rendering |
| `summarization.ts` | KEEP | LLM summarization |
| `market/index.ts` | KEEP | Market service |
| `market-watchlist.ts` | KEEP | Market watchlist |
| `news/index.ts` | KEEP | News service |
| `research/index.ts` | KEEP | Research service |
| `prediction/index.ts` | KEEP | Prediction service |
| `economic/index.ts` | KEEP | Economic service |
| `intelligence/index.ts` | KEEP | Intelligence service |
| `cyber/index.ts` | KEEP | Cyber service |
| `infrastructure/index.ts` | KEEP | Infrastructure service |

#### DELETE (geopolitical services)

| File | Fate |
|------|------|
| `aviation/*` | DELETE |
| `maritime/*` | DELETE |
| `military/*` | DELETE (if exists as directory) |
| `conflict/*` | DELETE |
| `wildfires/*` | DELETE |
| `displacement/*` | DELETE |
| `giving/*` | DELETE |
| `climate/*` | DELETE |
| `unrest/*` | DELETE |
| `supply-chain/*` | DELETE |
| `trade/*` | DELETE |
| `military-flights.ts` | DELETE |
| `military-vessels.ts` | DELETE |
| `military-bases.ts` | DELETE |
| `military-surge.ts` | DELETE |
| `usni-fleet.ts` | DELETE |
| `wingbits.ts` | DELETE |
| `oref-alerts.ts` | DELETE |
| `oref-locations.ts` | DELETE |
| `gps-interference.ts` | DELETE |
| `earthquakes.ts` | DELETE |
| `eonet.ts` | DELETE |
| `weather.ts` | DELETE |
| `cable-activity.ts` | DELETE |
| `cable-health.ts` | DELETE |
| `telegram-intel.ts` | DELETE |
| `country-instability.ts` | DELETE |
| `country-geometry.ts` | DELETE |
| `cached-risk-scores.ts` | DELETE |
| `cached-theater-posture.ts` | DELETE |
| `hotspot-escalation.ts` | DELETE |
| `infrastructure-cascade.ts` | DELETE |
| `geo-activity.ts` | DELETE |
| `geo-convergence.ts` | DELETE |
| `geo-hub-index.ts` | KEEP | Useful for geo-enriching AI news |
| `tech-hub-index.ts` | KEEP | Tech hub geo data |
| `tech-activity.ts` | KEEP | Tech activity tracking |
| `investments-focus.ts` | DELETE |
| `population-exposure.ts` | DELETE |
| `positive-classifier.ts` | DELETE |
| `positive-events-geo.ts` | DELETE |
| `conservation-data.ts` | DELETE |
| `happiness-data.ts` | DELETE |
| `happy-share-renderer.ts` | DELETE |
| `kindness-data.ts` | DELETE |
| `humanity-counters.ts` | DELETE |
| `progress-data.ts` | DELETE |
| `renewable-energy-data.ts` | DELETE |
| `renewable-installations.ts` | DELETE |
| `celebration.ts` | DELETE |
| `security-advisories.ts` | DELETE |
| `pizzint.ts` | DELETE |
| `gdelt-intel.ts` | DELETE |
| `usa-spending.ts` | DELETE |
| `signal-aggregator.ts` | KEEP | Signal aggregation |
| `temporal-baseline.ts` | DELETE |
| `parallel-analysis.ts` | KEEP | Parallel analysis |
| `cross-module-integration.ts` | MODIFY | Strip geopolitical modules |
| `focal-point-detector.ts` | KEEP | Focal point detection |
| `related-assets.ts` | MODIFY | Strip geopolitical assets |
| `correlation.ts` | KEEP | Correlation engine |
| `globe-render-settings.ts` | DELETE | 3D globe |
| `live-news.ts` | DELETE | Live TV streams |
| `live-stream-settings.ts` | DELETE | |
| `tv-mode.ts` | DELETE | |
| `desktop-readiness.ts` | DELETE | |
| `tauri-bridge.ts` | DELETE | Desktop app |
| `ollama-models.ts` | DELETE | Local LLM |
| `story-share.ts` | DELETE | |
| `activity-tracker.ts` | KEEP | Activity tracking |
| `sentiment-gate.ts` | DELETE | Happy variant |

### `src/config/` — Configuration

#### KEEP

| File | Fate | Notes |
|------|------|-------|
| `index.ts` | MODIFY | Update exports |
| `variant.ts` | MODIFY | Single variant or rename to "founder" |
| `variant-meta.ts` | MODIFY | Founder Intel metadata |
| `panels.ts` | MODIFY | **Major rewrite** — single panel set for Founder Intel |
| `feeds.ts` | MODIFY | Wire to `data/feeds.ts` instead of inline feed definitions |
| `commands.ts` | KEEP | Keyboard commands |
| `markets.ts` | KEEP | Market symbols for AI stocks |
| `ml-config.ts` | KEEP | ML configuration |
| `entities.ts` | KEEP | Entity definitions |
| `ai-datacenters.ts` | KEEP | Datacenter geo data |
| `ai-regulations.ts` | KEEP | AI regulation tracker |
| `ai-research-labs.ts` | KEEP | Research lab geo data |
| `startup-ecosystems.ts` | KEEP | Startup hub data |
| `tech-companies.ts` | KEEP | Tech company data |
| `tech-geo.ts` | KEEP | Tech geography |
| `map-layer-definitions.ts` | MODIFY | Strip geopolitical layers |
| `beta.ts` | KEEP | Beta flags |
| `variants/base.ts` | MODIFY | |
| `variants/tech.ts` | MODIFY | Basis for founder variant |
| `variants/full.ts` | DELETE | |
| `variants/finance.ts` | DELETE | |
| `variants/happy.ts` | DELETE | |

#### DELETE

| File | Fate |
|------|------|
| `airports.ts` | DELETE |
| `bases-expanded.ts` | DELETE |
| `countries.ts` | DELETE |
| `finance-geo.ts` | DELETE |
| `geo.ts` | DELETE |
| `gulf-fdi.ts` | DELETE |
| `irradiators.ts` | DELETE |
| `military.ts` | DELETE |
| `pipelines.ts` | DELETE |
| `ports.ts` | DELETE |
| `trade-routes.ts` | DELETE |

### `src/` — Other Directories

| Directory/File | Fate | Notes |
|----------------|------|-------|
| `src/App.ts` | MODIFY | Strip geopolitical panel wiring |
| `src/main.ts` | MODIFY | Simplified bootstrap |
| `src/app/data-loader.ts` | MODIFY | **Major rewrite** — remove geopolitical data loading, wire AI feeds |
| `src/app/app-context.ts` | MODIFY | Strip geopolitical context |
| `src/app/event-handlers.ts` | MODIFY | Strip geopolitical handlers |
| `src/app/panel-layout.ts` | MODIFY | Simplified layout |
| `src/app/refresh-scheduler.ts` | MODIFY | Strip geopolitical refresh cycles |
| `src/app/search-manager.ts` | KEEP | |
| `src/app/country-intel.ts` | DELETE | |
| `src/app/desktop-updater.ts` | DELETE | |
| `src/app/index.ts` | MODIFY | |
| `src/types/index.ts` | MODIFY | Strip geopolitical types, add Pillar type |
| `src/utils/*` | KEEP | All utils are reusable |
| `src/styles/main.css` | MODIFY | Update branding |
| `src/styles/panels.css` | KEEP | |
| `src/styles/base-layer.css` | KEEP | |
| `src/styles/happy-theme.css` | DELETE | |
| `src/styles/country-deep-dive.css` | DELETE | |
| `src/styles/rtl-overrides.css` | KEEP | |
| `src/styles/settings-window.css` | KEEP | |
| `src/locales/*.json` | MODIFY | Strip geopolitical translations, add founder-intel keys |
| `src/workers/*.ts` | KEEP | ML/analysis workers |
| `src/generated/client/worldmonitor/news/` | KEEP | |
| `src/generated/client/worldmonitor/market/` | KEEP | |
| `src/generated/client/worldmonitor/research/` | KEEP | |
| `src/generated/client/worldmonitor/prediction/` | KEEP | |
| `src/generated/client/worldmonitor/economic/` | KEEP | |
| `src/generated/client/worldmonitor/intelligence/` | KEEP | |
| `src/generated/client/worldmonitor/cyber/` | KEEP | |
| `src/generated/client/worldmonitor/infrastructure/` | KEEP | |
| `src/generated/client/worldmonitor/aviation/` | DELETE | |
| `src/generated/client/worldmonitor/maritime/` | DELETE | |
| `src/generated/client/worldmonitor/military/` | DELETE | |
| `src/generated/client/worldmonitor/conflict/` | DELETE | |
| `src/generated/client/worldmonitor/wildfire/` | DELETE | |
| `src/generated/client/worldmonitor/seismology/` | DELETE | |
| `src/generated/client/worldmonitor/displacement/` | DELETE | |
| `src/generated/client/worldmonitor/giving/` | DELETE | |
| `src/generated/client/worldmonitor/climate/` | DELETE | |
| `src/generated/client/worldmonitor/unrest/` | DELETE | |
| `src/generated/client/worldmonitor/positive_events/` | DELETE | |
| `src/generated/client/worldmonitor/natural/` | DELETE | |
| `src/generated/client/worldmonitor/supply_chain/` | DELETE | |
| `src/generated/client/worldmonitor/trade/` | DELETE | |
| `src/generated/server/worldmonitor/` (same pattern) | DELETE matching | |
| `src/data/conservation-wins.json` | DELETE | |
| `src/data/renewable-installations.json` | DELETE | |
| `src/data/world-happiness.json` | DELETE | |
| `src/e2e/*` | MODIFY | Strip geopolitical harness |
| `src/live-channels-main.ts` | DELETE | |
| `src/live-channels-window.ts` | DELETE | |
| `src/settings-main.ts` | KEEP | |
| `src/settings-window.ts` | KEEP | |
| `src/shims/*` | KEEP | |
| `src/bootstrap/*` | KEEP | |

### `proto/` — Protocol Buffer Definitions

| Directory | Fate | Notes |
|-----------|------|-------|
| `proto/worldmonitor/news/` | KEEP | |
| `proto/worldmonitor/market/` | KEEP | |
| `proto/worldmonitor/research/` | KEEP | |
| `proto/worldmonitor/prediction/` | KEEP | |
| `proto/worldmonitor/economic/` | KEEP | |
| `proto/worldmonitor/intelligence/` | KEEP | |
| `proto/worldmonitor/cyber/` | KEEP | |
| `proto/worldmonitor/infrastructure/` | KEEP | |
| `proto/worldmonitor/core/` | KEEP | Shared types |
| `proto/sebuf/` | KEEP | HTTP annotations |
| `proto/buf.*` | KEEP | |
| All other proto dirs | DELETE | aviation, maritime, military, conflict, etc. |

### Other Directories

| Directory/File | Fate | Notes |
|----------------|------|-------|
| `docs/DOCUMENTATION.md` | MODIFY | Will need updating |
| `docs/api/*.openapi.json/yaml` | DELETE matching | Delete for removed services |
| `docs/Docs_To_Review/*` | DELETE | Stale docs |
| `docs/MIGRATION-PLAN.md` | **NEW** | This file |
| `e2e/` | MODIFY | Strip geopolitical tests |
| `tests/` | MODIFY | Strip geopolitical tests |
| `scripts/` | MODIFY | Remove geopolitical seed scripts |
| `convex/` | KEEP | Email registration |
| `src-tauri/` | DELETE | Desktop app wrapper (defer) |
| `deploy/` | KEEP | Nginx config |
| `shared/` | MODIFY | Update RSS allowlist |
| `public/` | MODIFY | Update favicons/branding later |
| `tmp/` | DELETE | Temporary files |
| `.github/` | MODIFY | Remove geopolitical CI workflows |

---

## Phase 1: SignalFeed Panel (First Deliverable)

### What gets built

A new `src/components/SignalFeedPanel.ts` that:

1. **Imports feeds from `data/feeds.ts`** — converts `FeedSource[]` to the existing `Feed` type used by `src/services/rss.ts`
2. **Classifies items using `data/keywords.ts`** — already wired via `src/services/threat-classifier.ts`
3. **Renders as a pillar-filterable feed** — tabs/chips for: All, Competitive, Regulatory, Funding, Compute, Research, Talent, GTM, Geopolitics, Korea
4. **Reuses existing infrastructure**:
   - `Panel` base class from `src/components/Panel.ts`
   - `WindowedList` from `src/components/VirtualList.ts` for virtual scrolling
   - `fetchCategoryFeeds` from `src/services/rss.ts` for feed fetching
   - `classifyByKeyword` from `src/services/threat-classifier.ts` for classification
   - `clusterNewsHybrid` from `src/services/clustering.ts` for deduplication
   - Severity color coding from existing theme utilities

### Files to create/modify in Phase 1

| File | Action | Description |
|------|--------|-------------|
| `src/components/SignalFeedPanel.ts` | NEW | The SignalFeed panel component |
| `src/config/panels.ts` | MODIFY | Add `signal-feed` panel to panel config, make it priority 1 |
| `src/config/feeds.ts` | MODIFY | Bridge `data/feeds.ts` FeedSource → existing Feed type |
| `src/app/data-loader.ts` | MODIFY | Add signal feed data loading using `data/feeds.ts` |
| `src/components/index.ts` | MODIFY | Export SignalFeedPanel |
| `src/types/index.ts` | MODIFY | Add `Pillar` type import from `data/feeds.ts` |

### Key reuse points

- **`src/services/rss.ts:fetchCategoryFeeds()`** — already handles batched RSS fetching with caching, failure cooldown, persistent IndexedDB cache, keyword classification, and ML vector store ingestion. No changes needed for Phase 1.
- **`src/services/threat-classifier.ts`** — already does hybrid keyword + LLM classification. The keyword classifier already uses AI-focused rules.
- **`src/components/Panel.ts`** — base class with header, count badge, activity tracking, collapse/expand, drag-and-drop. Reuse directly.
- **`src/components/VirtualList.ts`** — chunked virtual scrolling for large lists. Reuse for signal items.
- **`data/feeds.ts:FEEDS`** — 80+ AI industry feeds already categorized by pillar with refresh rates and tags.
- **`data/keywords.ts:CLASSIFICATION_KEYWORDS`** — 98 classification rules with pillar/severity/category mapping.

---

## Summary Statistics

| Category | KEEP | MODIFY | DELETE | NEW |
|----------|------|--------|--------|-----|
| Root config | 4 | 4 | 3 | 0 |
| `data/` | 4 | 0 | 3 | 0 |
| `api/` | 18 | 1 | 26 | 0 |
| `server/` | 6 dirs + shared | 2 | 14 dirs | 0 |
| `src/components/` | 16 | 3 | 40 | 1 |
| `src/services/` | 30+ | 8 | 40+ | 0 |
| `src/config/` | 10 | 7 | 11 | 0 |
| `src/` other | 8 | 10 | 8 | 0 |
| `proto/` | 8 dirs | 0 | 14 dirs | 0 |
| Other dirs | 3 | 6 | 2 | 1 |

---

## Verification

After Phase 1:
1. `npm run typecheck:all` — must pass with no errors
2. `npm run build:full` — must produce a clean build
3. Manual: open the app → SignalFeed panel should render with classified AI industry signals
4. Manual: pillar filter tabs should filter signals by category
5. Manual: items should show severity color coding and pillar badges
