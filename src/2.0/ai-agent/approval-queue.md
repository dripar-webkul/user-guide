# Approval Queue

The Approval Queue is a review mechanism that allows you to inspect and approve (or reject) changes made by the AI Agent before they are applied to your product data. This gives you full control over what the AI Agent modifies in your catalog.

## What is the Approval Queue?

When the AI Agent performs operations that modify your data, such as updating product descriptions, changing prices, or enriching SEO fields, those changes can be routed through an approval queue instead of being applied immediately. This acts as a safety net, ensuring that no unintended modifications reach your live catalog without your explicit consent.

<!-- TODO: Add screenshot -->

## Configurable Modes

The Approval Queue supports two modes of operation:

### Auto-Approve Mode

In this mode, changes made by the AI Agent are applied immediately without requiring manual review. This is suitable for trusted, routine operations where speed is more important than manual oversight.

### Manual Review Mode

In this mode, all changes made by the AI Agent are held in a pending state until you explicitly approve them. This is the recommended mode when you want to maintain strict control over your product data, especially for bulk operations or content generation.

::: tip
You can switch between auto-approve and manual review modes at any time from the AI Agent configuration settings. Start with manual review to build confidence, then switch to auto-approve for routine tasks once you are comfortable.
:::

## Reviewing Pending Changes

When changes are awaiting your review, they appear in the Approval Queue. Each pending change displays:

- **The product or entity affected** — Which product, category, or record the change applies to.
- **The field being modified** — The specific attribute or field that will be updated.
- **The current value** — What the field contains right now.
- **The proposed value** — What the AI Agent wants to change it to.
- **The timestamp** — When the AI Agent made the change.

<!-- TODO: Add screenshot -->

This side-by-side comparison makes it easy to evaluate whether the proposed change is accurate and appropriate.

## Approving Changes

To approve a pending change, review the proposed modification and click the **Approve** button. Once approved, the change is applied to the product data immediately.

You can also approve multiple changes at once if you are satisfied with a batch of modifications.

## Rejecting Changes

If a proposed change is not suitable, click the **Reject** button. The change is discarded and will not be applied to your data. The AI Agent is not notified of the rejection, so you can reject freely without affecting future AI behavior.

<!-- TODO: Add screenshot -->

## When Confirmation is Required

Certain types of changes require additional confirmation, even in auto-approve mode. These include:

- **Image changes between requests** — If the AI Agent proposes modifications to product images or media assets, you will be prompted to confirm the change regardless of your approval mode setting.
- **Bulk modifications** — Large-scale changes affecting many products may trigger a confirmation step to prevent accidental mass updates.
- **Destructive operations** — Any operation that removes or overwrites significant amounts of data will ask for your explicit confirmation.

::: tip
The Approval Queue is particularly useful when using auto-enrichment features. You can let the AI Agent generate descriptions and SEO content, then review everything in the queue before publishing the changes to your catalog.
:::
