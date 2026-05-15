---
layout: home
home: true

hero:
  name: "UnoPim User Guide"
  text: "A Comprehensive User Guide for Seamless Navigation of UnoPim."
  tagline: "Everything you need to manage products, categories, users, and more — now updated for v2.1.0."
  actions:
    - theme: brand
      text: Get Started (v2.1.0) →
      link: /2.1/introduction/
    - theme: alt
      text: What's New in v2.1.0
      link: /2.1/releases/
    - theme: alt
      text: v2.0 Docs
      link: /2.0/introduction/
    - theme: alt
      text: v1.0 Docs
      link: /1.0/introduction/
    - theme: alt
      text: View on GitHub
      link: https://github.com/unopim/unopim
  image:
    src: /home-logo.png
    alt: UnoPim

features:
  - title: Products and Categories
    details: Create and manage product records and category hierarchies with completeness scoring and bulk edit capabilities.
    icon: 📦
    link: /2.1/products/

  - title: Users and Roles
    details: Configure users, roles, and permissions to control access and responsibilities within UnoPim.
    icon: 👥
    link: /2.1/settings/roles/

  - title: Locales and Currencies
    details: Set up locales and currencies to support multilingual and multi-currency product catalogs with AI-powered translation.
    icon: 🌍
    link: /2.1/settings/locale/

  - title: Attributes & Family
    details: Define and assign attributes and families with swatch types and video support to standardize product information.
    icon: 🧩
    link: /2.1/attribute/

  - title: Import & Export
    details: Import and export catalog data with drag-and-drop upload, real-time tracking, and pause/resume controls.
    icon: 🔁
    link: /2.1/data-transfer/

  - title: AI Agent & Magic AI
    details: Use the AI Agent Chat with 32+ PIM tools and Magic AI to automate product data enrichment across 10+ providers.
    icon: 🤖
    link: /2.1/ai-agent/

  - title: Dashboard
    details: Get a comprehensive overview with product statistics, activity charts, completeness scores, and channel readiness.
    icon: 📊
    link: /2.1/dashboard/

  - title: Notifications & Webhooks
    details: Stay informed with in-app notifications and automate workflows with product update webhooks.
    icon: 🔔
    link: /2.1/notifications/
---

## What's New in v2.1.0

Released **13 May 2026**. v2.1.0 focuses on operations, AI flexibility, and a hardened security baseline.

### 🐳 Production-Ready Docker Setup
Multi-container stack (Nginx + PHP-FPM by default, Apache fallback) shipped via Docker Hub images, with healthchecks, Redis, Elasticsearch, and Mailpit. OPcache-tuned `php.ini` and an auto-publish workflow are included. → [Introduction](/2.1/introduction/)

### 🌱 Demo Data Seeding
Onboard with realistic sample data in seconds. Toggle from the installer wizard, pass `--with-demo-data` to `php artisan unopim:install`, or run the standalone `php artisan unopim:install:demo-data` command at any time. → [Introduction](/2.1/introduction/)

### 🔗 ManageAssociations AI Agent Tool
Add, remove, list, or mirror related products, up-sells, and cross-sells through natural language — no need to open each product edit page. Product search results in the chat now render as clickable links. → [AI Agent Chat](/2.1/ai-agent/ai-agent-chat)

### 🧠 MagicAI Custom Provider
Plug in any OpenAI-compatible service — self-hosted gateways, proxies, or alternative inference endpoints — by selecting the **Custom** provider and supplying your own base URL. → [Magic AI → Platforms](/2.1/magic-ai/platforms)

### ✅ Test Connection (ModelRecommender)
Validate a platform's credentials and base URL before relying on it. The recommender skips image-only models so credential tests don't false-negative. → [Magic AI → Platforms](/2.1/magic-ai/platforms)

### ⚡ Async Product Webhook Dispatch
Webhook deliveries on product create/update now run as a queued `SendProductWebhook` job, so admin actions return immediately even when the receiving endpoint is slow. → [Webhooks](/2.1/configuration/webhooks)

### 📊 Clickable Dashboard Product Stats
Product-stats tiles (Active, Inactive, With Variants, Enriched, New This Week) act as filter chips — click one to deep-link into the product grid pre-filtered to that set. → [Dashboard](/2.1/dashboard/)

### 💬 PrismErrorResolver
AI Agent Chat now translates provider and Prism errors (rate limit, invalid key, model unavailable) into clear, user-friendly messages. → [AI Agent Chat](/2.1/ai-agent/ai-agent-chat)

### 🔒 Security Hardening
Admin-login rate limiting (5/min per email + IP), server-side password validation, forgot-password user-enumeration protection, open-redirect blocking on Referer-based redirects, user-edit privilege-escalation guard, `clean_content()` HTMLPurifier-backed XSS helper, and `APP_DEBUG_ALLOWED_IPS` IP-restricted debugbar. → [What's New](/2.1/releases/)

### 🌍 Improved Dutch (`nl_NL`) Translations
Quality pass across nine packages — informal tone, stray prefix removal, zero-width-space cleanup. Community contribution from [@TheMazeIsAmazing](https://github.com/TheMazeIsAmazing).

### 🏎 Performance & PostgreSQL Compatibility
New indexes on `channels.code`, `locales.status`, `currencies.status`, and a composite index on `core_config(code, channel_code, locale_code)`. PostgreSQL pass covers JSON search support, `jsonContains()` grammar, driver-gated MySQL bulk-mode session vars, and DataGrid filter fixes across AiAgent tools, Channel, and AttributeOption grids.

---

[See all v2.1.0 changes →](/2.1/releases/)
