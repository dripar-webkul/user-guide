# AI Agent

The AI Agent is a built-in, natural language interface for managing your PIM operations directly through conversation. Instead of navigating menus and forms, you can simply describe what you need in plain English, and the AI Agent will carry out the task for you.

With **23 built-in PIM tools** accessible via chat, the AI Agent transforms how you interact with your product data. Whether you need to create products, enrich descriptions, check data quality, or perform bulk updates, the AI Agent understands your intent and executes the right operations.

## Key Capabilities

### Product Management
Create, update, search, and bulk edit products without leaving the chat interface. The AI Agent can handle everything from single product updates to large-scale bulk operations across your catalog.

### Data Quality & Completeness
Run data quality scans to identify products with missing or incomplete information. The AI Agent can generate completeness reports and highlight exactly which fields need attention.

### Auto-Enrichment
Let the AI Agent automatically generate missing product descriptions, meta titles, meta descriptions, and other SEO-related fields. This is especially useful when onboarding large catalogs with sparse data.

### Bulk Operations
Perform bulk transformations across multiple products at once. Update attributes, reassign categories, or modify product data in batch, all through simple conversational commands.

### Task Planning
For complex, multi-step operations, the AI Agent can break down your request into a structured plan and execute each step in sequence, keeping you informed throughout the process.

## Real-Time Streaming (SSE)

The AI Agent uses **Server-Sent Events (SSE)** to stream responses in real time. As the agent processes your request, you see the output appear progressively, giving you immediate feedback rather than waiting for the entire response to complete.

## Conversation Persistence

All chat sessions are stored in the database, so your conversation history is preserved across page refreshes and browser sessions. You can pick up right where you left off, and the AI Agent retains the context of your previous messages within the same session.

## ACL Authorization

Every one of the 23 tools available to the AI Agent respects the **Access Control List (ACL)** permissions configured for your admin role. If your role does not have permission to perform a certain action (for example, deleting products), the AI Agent will not execute that action on your behalf. This ensures that the AI Agent operates strictly within the boundaries of your assigned permissions.

## Rate Limiting

To ensure fair usage and system stability, the AI Agent enforces a rate limit of **30 requests per minute** per user. If you exceed this limit, you will receive a notification to wait before sending additional messages.

::: tip
The AI Agent is most effective when you provide clear, specific instructions. For example, instead of saying "fix my products," try "update all products in the Electronics category that are missing a meta description."
:::
