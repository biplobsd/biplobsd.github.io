---
logoUrl: https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/webmerge/logo.webp
title: WebMerge
category: Utilities
p_name_1: Edge Add-ons
p_link_1: https://microsoftedge.microsoft.com/addons/detail/kfdnpdinfcohppjmbddokpeenlonmpfm
p_name_2: Firefox Add-ons
p_link_2: https://addons.mozilla.org/en-US/android/addon/webmerge/
p_name_3: Github release
p_link_3: https://github.com/biplobsd/webmerge/releases/latest
p_name_4: Source Code
p_link_4: https://github.com/biplobsd/webmerge
img_1: https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/webmerge/s8.webp
img_2: https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/webmerge/s7.webp
img_3: https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/webmerge/s6.webp
img_4: https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/webmerge/s5.webp
img_5: https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/webmerge/s4.webp
img_6: https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/webmerge/s3.webp
img_7: https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/webmerge/s2.webp

date: 1775112383968
tags:
  - Chrome Extension
  - Firefox add-ons
  - Svelte
  - TypeScript
  - daisyUI
  - Tailwind
  - AI
  - Open-Source
---

**WebMerge** is a browser extension for Chrome and Firefox that aggregates and searches across multiple websites simultaneously. It uses AI to extract structured data from web pages and presents results in a unified, sortable feed.

### Download

| Browser | Download |
|---------|----------|
| 🦊 Firefox | [Firefox Add-ons](https://addons.mozilla.org/en-US/android/addon/webmerge/) |
| 🔷 Microsoft Edge | [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kfdnpdinfcohppjmbddokpeenlonmpfm) |
| 🌐 Chrome / Brave | [GitHub Releases](https://github.com/biplobsd/webmerge/releases/latest) |

### Features
- **Parallel Multi-Site Search** — Query multiple websites at once in a single search.
- **AI-Powered Data Extraction** — Uses OpenRouter or Mistral AI to parse raw HTML to cleaned Markdown and then into structured items (titles, prices, images, dates etc.).
- **Custom Site Schemas** — Define your own field schemas per site to extract exactly the data you need.
- **Result Feed** — Browse, sort, and filter aggregated results across all sites.
- **Homepage Feeds** — Pin sites as "homepage" sources and fetch their latest listings with one click.
- **Result Cards** — Customisable card layouts with drag-and-drop field ordering, per-site or per-group.
- **Site Groups** — Organise your sites into named groups and search within a specific group.
- **Enrichments** — Optionally fetch extra metadata from external APIs (e.g. OMDB for movie ratings).
- **Context Menu Integration** — Right-click any page to add it as a new site.
- **Custom Cookies** — Pass session cookies to search on sites that require login.
- **Chrome & Firefox** — Full support for both browsers with a single codebase.
- **Dynamic Filter Tabs** — Filter results by any categorical field (e.g. `media_type`, `genre`) with auto-generated filter rows.
- **Media Type Filtering** — The `media_type` field (e.g. Movie, Series, Game) is surfaced as a filter row when two or more distinct values exist.
- **Smooth Card Animations** — GPU-accelerated hover effects (lift, scale, image zoom, ambient glow).

### How It Works
1. **Configure Sites** — Add search sites with URL templates (e.g. `https://example.com/search?q={query}`) and field schemas.
2. **Search** — Enter a query; the extension fetches all enabled sites in parallel.
3. **AI Extraction** — Each page's HTML is converted to cleaned Markdown and sent to the LLM, which extracts structured JSON matching your schema.
4. **Results** — Items are merged, sorted by publish date, and displayed in a card grid.

### Limitations
- Cloudflare-protected sites are not supported.
- Sites with heavy JavaScript rendering may not work properly.

### Setup — AI API Key

WebMerge uses OpenAI-compatible APIs for AI extraction.

1. Create an account with your provider and generate an API key.
2. Open the extension and go to **Settings → AI Settings**.
3. Paste your API key and set the provider base URL/model. Recommended values:

| Provider | Base URL | Model |
|----------|----------|-------|
| Mistral AI | `https://api.mistral.ai/v1` | `devstral-latest` |
| OpenRouter | `https://openrouter.ai/api/v1` | `google/gemini-2.5-flash-lite` |

The AI key is stored locally in your browser's extension storage and is never shared.

### In-App Guide

**Add Your First Site**
1. Go to **Settings → Sites**
2. Click **Add Site**
3. Fill in search/listing URLs and save.

**Context Menu Add Site**
1. Right-click on any page.
2. Choose **Add site to WebMerge**.
3. Confirm and save in the popup form.

**Homepage Auto Fetch**
1. Enable **Homepage auto-fetch** on a site.
2. Enable **Always show latest on open** in settings.

When both are enabled, WebMerge fetches homepage sources on startup.

More details: https://github.com/biplobsd/webmerge

If this app has been helpful to you, consider [buying me a ☕coffee](https://www.buymeacoffee.com/biplobsd). It would make me very happy 😃

<a href="https://www.buymeacoffee.com/biplobsd" target="_blank"><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGg5MTA5YXE0cXp3Z3M5cHA4bmthajI2YzQwbXZ1NXhmZ3E1cTYwcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TDQOtnWgsBx99cNoyH/giphy.gif" alt="Buy Me A Coffee" width="50" height="50"></a>
