# AI Agent Analytics

The AI Agent Analytics dashboard provides visibility into how the AI Agent is being used across your organization. It tracks token consumption, usage patterns, and costs, helping you manage your AI budget effectively.

## Analytics Dashboard Overview

The AI Agent Analytics dashboard gives you a centralized view of all AI Agent activity. From this dashboard, you can monitor:

- **Total tokens consumed** over a selected time period.
- **Number of conversations** initiated by each admin user.
- **Number of tool calls** executed by the AI Agent.
- **Daily and weekly usage trends** displayed in visual charts.

<!-- TODO: Add screenshot -->

This dashboard is accessible from the admin panel and is available to users with the appropriate permissions.

## Token Budget Tracking

The AI Agent operates on a **daily token budget** system. Each interaction with the AI Agent consumes tokens based on the complexity and length of the request and response. The analytics dashboard displays:

- **Daily token usage** — How many tokens have been consumed today.
- **Remaining budget** — How many tokens are still available for the current day.
- **Budget utilization percentage** — A visual indicator showing how much of the daily budget has been used.

When the daily token budget is exhausted, the AI Agent will notify you that the limit has been reached and will resume normal operation the following day when the budget resets.

::: tip
Keep an eye on the daily token usage if your team relies heavily on auto-enrichment or bulk operations, as these tasks tend to consume more tokens than simple queries.
:::

## Monitoring AI Usage and Costs

The analytics dashboard helps you understand the cost implications of AI Agent usage. Key metrics include:

- **Token consumption per user** — See which team members are using the AI Agent most frequently.
- **Token consumption per operation type** — Identify which types of operations (e.g., product creation, auto-enrichment, data quality scans) consume the most tokens.
- **Cost estimation** — Based on your AI provider's pricing, the dashboard can display an estimated cost for the tokens consumed.

<!-- TODO: Add screenshot -->

This information is valuable for budgeting and for identifying opportunities to optimize usage.

## Configuring Daily Token Budgets

To set or adjust the daily token budget:

1. Navigate to **Configuration >> AI Agent** in the admin panel.
2. Locate the **Daily Token Budget** setting.
3. Enter the maximum number of tokens allowed per day.
4. Click **Save Configuration** to apply the change.

<!-- TODO: Add screenshot -->

The budget applies globally across all admin users. Once the combined usage of all users reaches the daily limit, the AI Agent will pause until the next day.

::: tip
Start with a conservative daily budget and increase it gradually as you understand your team's typical usage patterns. This prevents unexpected spikes in AI costs.
:::

## Viewing Usage History and Trends

The analytics dashboard includes a **Usage History** section where you can review past activity over customizable date ranges. This section provides:

- **Daily usage breakdown** — A day-by-day view of token consumption and conversation counts.
- **Weekly and monthly summaries** — Aggregated views for longer-term trend analysis.
- **Peak usage identification** — Highlights days or periods with unusually high usage so you can investigate and plan accordingly.

<!-- TODO: Add screenshot -->

Use this historical data to make informed decisions about token budget allocation, team training, and workflow optimization.
