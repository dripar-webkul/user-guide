# Magic AI

Magic AI is the ultimate tool for professionals in diverse fields looking to enhance their efficiency.

UnoPim integrates Magic AI, using artificial intelligence for product information management. Magic AI leverages advanced LLM (Large Language Model) technology to automate content creation, translation, and product enrichment.

## Content Generation

With Magic AI, you can effortlessly generate engaging **Products & Categories** content — including product names, descriptions, SEO metadata, and more.

<!-- TODO: Add screenshot of Magic AI content generation in action -->

Say goodbye to time-consuming manual content creation as Magic AI crafts compelling and unique descriptions, saving you valuable time and effort.

### Supported AI Providers

UnoPim provides native support for multiple AI providers through its **Multi-Platform MagicAI** system. You can configure one or more providers with encrypted credential storage for secure API key management.

**A) For Content — UnoPim supports these AI providers:**

* **OpenAI** – gpt-4o, gpt-4o-mini, gpt-3.5-turbo, dall-e-2, dall-e-3
* **Ollama** – llama2, llama3, mistral, qwen, deepseek-coder, phi, llava
* **Gemini** – gemini-2.5-pro, gemini-2.5-flash, gemini-2.0-flash, gemini-1.5-flash-latest, gemini-1.5-pro
* **Groq (xAI)** – deepseek-r1-distill-llama-70b, llama-3.1-8b-instant, openai/gpt-oss-120b, openai/gpt-oss-20b, groq/compound, qwen/qwen3-32b, moonshotai/kimi-k2-instruct-0905

::: tip
All providers are managed through a unified **LaravelAiAdapter** implementation. You can switch providers without changing your workflow.
:::

## How to Generate Text Content with AI

Follow these steps to generate text content for your products using Magic AI:

1. Navigate to **Catalog >> Products** and click **Edit** on a product.
2. Find a text field that supports AI generation (Name, Short Description, Description, Meta Title, Meta Description, etc.).
3. Click the **Magic AI icon** (sparkle/wand icon) next to the field.
4. The AI generates content based on:
   - The configured **Prompt** for that field type (from Magic AI >> Prompts).
   - The product's existing data (name, category, attributes).
   - The active **System Prompt** personality.
5. The generated content appears in the field.
6. Review and edit the generated content as needed.
7. Click **Save Product** to keep the changes.

You can also generate content for categories by navigating to a category edit page and using the same AI icon on supported fields.

::: tip
Configure your preferred AI provider and model in **Magic AI >> Settings >> Text Generation** before using this feature. Choose a platform that balances quality and cost for your needs.
:::

## How to Generate Images with AI

Follow these steps to generate product images using Magic AI:

1. Navigate to **Catalog >> Products** and click **Edit** on a product.
2. Find an Image or Gallery attribute.
3. Click the **Magic AI icon** next to the image field.
4. Enter a description of the image you want to generate (or the system uses the configured Image prompt from Magic AI >> Prompts).
5. The AI generates a product image based on the description.
6. Review the generated image.
7. Click to accept and attach it to the product.
8. Click **Save Product**.

::: tip
Image generation requires an AI platform that supports image creation (OpenAI with DALL-E, Gemini, or xAI). Configure your image platform in **Magic AI >> Settings >> Image Generation**.
:::

## Custom Prompts

Magic AI supports **Custom Prompts** for content generation. You can define specific instructions that guide the AI when generating content for your products and categories.

For example, you can set prompts like:
- "Generate a professional product description for an electronics store"
- "Write SEO-optimized content with keywords for fashion products"
- "Create a brief 50-word summary suitable for mobile displays"

<!-- TODO: Add screenshot of custom prompts configuration -->

## System Prompt Management

**System Prompts** allow you to configure the overall behavior and personality of the AI across your entire PIM system. This ensures consistent tone, style, and formatting across all AI-generated content.

To manage system prompts, navigate to **Configuration >> Magic AI >> System Prompt**.

<!-- TODO: Add screenshot of system prompt management -->

## Magic Image

Magic AI includes an **Image Generation** feature powered by DALL-E (OpenAI). You can generate product images directly from text descriptions.

To use Magic Image:
1. Navigate to a product edit page
2. Click on the **Magic AI** icon near the image/gallery field
3. Enter a description of the image you want to generate
4. Select the AI model (dall-e-2 or dall-e-3)
5. Click **Generate** to create the image

<!-- TODO: Add screenshot of Magic Image generation -->

## Auto-Translation

Magic AI provides **automatic translation** of product data when creating or updating products. When you save a product, Magic AI can automatically translate all locale-specific fields (name, description, etc.) to all configured locales in your channels.

This feature ensures your product information is available in every language without manual translation effort.

### Translation Settings UI

The Translation section is configured on the Magic AI Settings page at **Magic AI >> Settings**. Navigate there and scroll to the **Translation** section. The following fields are available:

| Field | Description |
|-------|-------------|
| **Enabled** | Toggle to enable or disable AI-powered translation |
| **Default Platform** | Select the AI platform to use for translations. You can choose a different provider than your content generation platform, allowing you to optimize for cost or speed |
| **Translation Model** | Select the specific model for translation tasks. This is independent of the text generation model |
| **Replace Existing Value** | When enabled, existing translations in target locales are overwritten with new AI-generated translations. When disabled, only empty locale fields are filled |
| **Source Channel** | The channel whose content serves as the translation source |
| **Target Channel** | The channel that receives the translated content |
| **Source Locale** | The locale to translate from (e.g., en_US) |
| **Target Locales** | A multi-select dropdown where you choose all the locales you want to translate into |

::: tip
Use the **Replace Existing Value** toggle carefully. When turned off, only empty fields are translated, preserving any manual translations you have already made. Turn it on only when you want to regenerate all translations from scratch.
:::

### How Auto-Translation Works

When auto-translation is enabled and a product is created or updated, UnoPim automatically translates all locale-specific fields (name, short description, description, meta title, meta description, meta keywords, etc.) to the configured target locales using the selected AI provider and model.

The translation respects channel and locale assignments, so only the locales assigned to the target channel are populated.

### Manual Translation via Locale Switcher

You can also translate product content manually by switching locales on the product edit page. Use the **locale switcher** dropdown at the top of the product edit form to switch between locales. Attributes that support per-locale values display a **locale badge** indicating which locale's value you are currently editing.

When you switch to a target locale, you can either type translations manually or let Magic AI generate them for that specific locale.

### AI-Powered Translation Command

For bulk translation of existing data, UnoPim v2.0 includes an **AI-Powered Translation Command** that uses Magic AI to bulk translate missing locale keys across all 32 non-English locales. This can automatically translate thousands of previously untranslated keys across all packages.

::: tip
The auto-translation feature works with any configured AI provider and respects your locale settings in each channel. For high-volume translation workloads, consider using a faster or cheaper provider dedicated to translations while keeping a premium provider for content generation.
:::

## AI-Powered Search

UnoPim v2.0 introduces **AI-Powered Search** that uses embedding similarity and semantic ranking to deliver more intelligent search results. Instead of simple keyword matching, the search understands the meaning behind your queries.

Key capabilities:
- **Embedding Similarity Service** — Converts product data into vector embeddings for semantic comparison
- **Semantic Ranking Service** — Ranks search results by relevance using AI understanding

<!-- TODO: Add screenshot of AI-powered search results -->

## Auto-Enrichment

The **Auto-Enrichment** feature automatically fills in missing product information such as descriptions and SEO fields. When enabled, Magic AI analyzes your product data and generates content for empty fields.

This is especially useful for:
- Bulk-imported products that lack descriptions
- Products missing SEO metadata (meta title, meta description, keywords)
- Incomplete product records flagged by the completeness system

<!-- TODO: Add screenshot of auto-enrichment in action -->

## AI in Agentic PIM Chat

The AI Agent Chat (Agentic PIM) also provides **Generate Content** and **Generate Image** tools. You can ask it in natural language to perform content and image generation without navigating through the UI.

Example prompts you can use in the chat:

- "Generate a product description for SKU SHOE-100"
- "Create an image for product Nike Air Max"

The agent uses the same configured AI providers and prompts behind the scenes, so your settings from **Magic AI >> Settings** and **Magic AI >> Prompts** apply automatically.
