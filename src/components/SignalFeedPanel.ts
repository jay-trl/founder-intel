import { Panel } from './Panel';
import type { NewsItem } from '@/types';
import type { Pillar } from '../../data/feeds';
import { THREAT_PRIORITY } from '@/services/threat-classifier';
import { formatTime, getCSSColor } from '@/utils';
import { escapeHtml, sanitizeUrl } from '@/utils/sanitize';
import { t } from '@/services/i18n';
import { activityTracker } from '@/services';

const PILLAR_LABELS: Record<Pillar | 'all', string> = {
  all: 'All',
  competitive: 'Competitive',
  regulatory: 'Regulatory',
  funding: 'Funding',
  compute: 'Compute',
  research: 'Research',
  talent: 'Talent',
  gtm: 'GTM',
  geopolitics: 'Geopolitics',
  korea: 'Korea',
};

const ALL_PILLARS: Array<Pillar | 'all'> = [
  'all', 'competitive', 'regulatory', 'funding', 'compute',
  'research', 'talent', 'gtm', 'geopolitics', 'korea',
];

const THREAT_COLOR_VAR: Record<string, string> = {
  critical: '--threat-critical',
  high: '--threat-high',
  medium: '--threat-medium',
  low: '--threat-low',
  info: '--threat-info',
};

export class SignalFeedPanel extends Panel {
  private activePillar: Pillar | 'all' = 'all';
  private allItems: NewsItem[] = [];
  private filterBar: HTMLElement | null = null;
  private isFirstRender = true;

  constructor() {
    super({ id: 'signal-feed', title: 'Signal Feed', showCount: true, trackActivity: true });
    this.createFilterBar();
    this.setupActivityTracking();
  }

  private setupActivityTracking(): void {
    activityTracker.register(this.panelId);
    activityTracker.onChange(this.panelId, (newCount) => {
      this.setNewBadge(newCount, newCount > 0);
    });
    this.content.addEventListener('scroll', () => activityTracker.markAsSeen(this.panelId));
    this.element.addEventListener('click', () => activityTracker.markAsSeen(this.panelId));
  }

  private createFilterBar(): void {
    this.filterBar = document.createElement('div');
    this.filterBar.className = 'signal-feed-filters';
    this.filterBar.style.cssText =
      'display:flex;gap:4px;padding:6px 8px;overflow-x:auto;border-bottom:1px solid var(--border);flex-shrink:0;';

    for (const pillar of ALL_PILLARS) {
      const chip = document.createElement('button');
      chip.className = `signal-filter-chip${pillar === 'all' ? ' active' : ''}`;
      chip.textContent = PILLAR_LABELS[pillar];
      chip.dataset.pillar = pillar;
      chip.style.cssText =
        'padding:2px 8px;border-radius:12px;border:1px solid var(--border);background:transparent;' +
        'color:var(--text-dim);font-size:11px;cursor:pointer;white-space:nowrap;transition:all 0.15s;';
      chip.addEventListener('click', () => this.setFilter(pillar));
      this.filterBar.appendChild(chip);
    }

    // Insert filter bar between header and content
    this.element.insertBefore(this.filterBar, this.content);
  }

  private setFilter(pillar: Pillar | 'all'): void {
    if (pillar === this.activePillar) return;
    this.activePillar = pillar;

    // Update chip styles
    const chips = this.filterBar?.querySelectorAll('.signal-filter-chip');
    chips?.forEach((chip) => {
      const el = chip as HTMLElement;
      const isActive = el.dataset.pillar === pillar;
      el.classList.toggle('active', isActive);
      el.style.background = isActive ? 'var(--accent)' : 'transparent';
      el.style.color = isActive ? 'var(--bg)' : 'var(--text-dim)';
      el.style.borderColor = isActive ? 'var(--accent)' : 'var(--border)';
    });

    this.renderFiltered();
  }

  public renderSignals(items: NewsItem[]): void {
    this.allItems = items;
    if (items.length === 0) {
      this.setDataBadge('unavailable');
      this.showError(t('common.noNewsAvailable'));
      return;
    }
    this.setDataBadge('live');
    this.renderFiltered();
  }

  private renderFiltered(): void {
    let items = this.allItems;

    if (this.activePillar !== 'all') {
      items = items.filter((item) => {
        const cat = item.threat?.category as string | undefined;
        const pillar = this.inferPillar(item);
        return pillar === this.activePillar || cat === this.activePillar;
      });
    }

    // Sort by severity then recency
    const sorted = [...items].sort((a, b) => {
      const pa = THREAT_PRIORITY[a.threat?.level ?? 'info'];
      const pb = THREAT_PRIORITY[b.threat?.level ?? 'info'];
      if (pb !== pa) return pb - pa;
      return b.pubDate.getTime() - a.pubDate.getTime();
    });

    this.setCount(sorted.length);

    if (sorted.length === 0) {
      this.setContent(
        `<div class="panel-empty">${escapeHtml(`No signals for "${PILLAR_LABELS[this.activePillar]}"`)}</div>`,
      );
      return;
    }

    // Track activity
    const itemIds = sorted.map((_, i) => `signal-${i}-${sorted[i]!.title.slice(0, 30)}`);
    if (this.isFirstRender) {
      activityTracker.updateItems(this.panelId, itemIds);
      activityTracker.markAsSeen(this.panelId);
      this.isFirstRender = false;
    } else {
      activityTracker.updateItems(this.panelId, itemIds);
    }

    const html = sorted.map((item) => this.renderSignalItem(item)).join('');
    this.setContent(html);
  }

  /** Infer pillar from the feed type/region set during RSS fetch bridging */
  private inferPillar(_item: NewsItem): string | undefined {
    // The feed type is set to pillar name via feedSourceToFeed in config/feeds.ts
    // We match by source name against our feed directory
    return undefined; // Pillar info comes through threat.category in the classifier
  }

  private renderSignalItem(item: NewsItem): string {
    const threat = item.threat;
    const level = threat?.level ?? 'info';
    const colorVar = THREAT_COLOR_VAR[level] || '--text-dim';
    const color = getCSSColor(colorVar);

    const severityBadge = level !== 'info'
      ? `<span class="signal-severity" style="color:${color};border-color:${color}40;background:${color}15">${level.toUpperCase()}</span>`
      : '';

    const cat = threat?.category;
    const categoryBadge = cat && cat !== 'general'
      ? `<span class="signal-category" style="color:${color};border-color:${color}30;background:${color}10">${cat}</span>`
      : '';

    const pillarTag = threat?.category
      ? ''  // category already shown
      : '';

    return `
      <div class="item ${item.isAlert ? 'alert' : ''}" data-news-id="${escapeHtml(item.link)}">
        <div class="item-source">
          ${escapeHtml(item.source)}
          ${severityBadge}
          ${categoryBadge}
          ${pillarTag}
          ${item.isAlert ? '<span class="alert-tag">ALERT</span>' : ''}
        </div>
        <a class="item-title" href="${sanitizeUrl(item.link)}" target="_blank" rel="noopener">${escapeHtml(item.title)}</a>
        <div class="item-time">${formatTime(item.pubDate)}</div>
      </div>
    `;
  }

  public destroy(): void {
    this.filterBar?.remove();
    super.destroy();
  }
}
