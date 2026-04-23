# Simple Product

A **Simple Product** is a single, standalone SKU — one physical item with one set of attributes and no variations. It's the most common product type in UnoPim and the right choice whenever a product *doesn't* need size, colour, or other variants.

## What is a Simple Product?

| | Simple Product |
|---|---|
| **Structure** | One SKU, one set of attribute values, one row in the product grid. |
| **When to use it** | The item has no variants, or each variant should be managed as its own separate record. |
| **Typical examples** | A book, a single paint colour, a specific box of screws, a ring-bound notebook. |
| **Compare with** | [Configurable Product](./configurable.md) — use that when one catalog entry needs to group multiple size/colour/material variants under a single parent. |

## How does it work?

A Simple Product is created in two phases:

1. **Create** — you set the product type to `Simple`, pick an attribute family, and give it a SKU. That creates a minimal record.
2. **Edit** — UnoPim redirects you to the product edit page, where you fill in the attributes defined by the family (name, description, price, categories, images, associations, …) and save.

Because attribute availability is driven by the **attribute family**, a Simple Product in the `default` family has a different set of editable fields than one in, say, a `books` family. Managing the shape of a Simple Product means managing its family — see [Attribute Family](../attribute/attribute-family.md).

## How to Create a Simple Product

### Step 1 — Start creation

1. Click **Catalog >> Products >> Create Product**.
2. Select product type **Simple**.
3. Pick the **Family** (controls which attributes are editable).
4. Enter a unique **SKU**.
5. Click **Save**.

<ImagePopup src="/assets/2.0/images/simple-product/simple.png" alt="Create Simple Product" />

UnoPim redirects you to the edit page, where every remaining field is filled in.

<ImagePopup src="/assets/2.0/images/simple-product/editProduct.png" alt="Edit Simple Product" />

### Step 2 — Fill in the product details

The edit page groups attributes by **Attribute Group** (General, Short Description, Description, Price, Technical, Categories, Associations, …). Exactly which groups appear depends on the family you chose at creation.

The `default` family requires at minimum:

| Field | Meaning |
|---|---|
| **SKU** | Unique product identifier. Cannot be duplicated. |
| **Name** | Display name shown to customers. |
| **URL Key** | URL-safe slug for storefront links. |

Additional built-in sections for the `default` family:

| Section | Purpose |
|---|---|
| **Short Description** | One- or two-line summary. Appears on listing cards and SEO previews. |
| **Description** | Full product copy — can use the WYSIWYG editor. |
| **Price** | Selling price plus cost price per currency. |
| **Technical** | Status toggle — enables/disables the product. |
| **Categories** | Assign the product to one or more categories (including a root category). |
| **Associations** | Related / Up-sell / Cross-sell product links (see below). |

<ImagePopup src="/assets/2.0/images/simple-product/description.png" alt="Description fields" />

<ImagePopup src="/assets/2.0/images/simple-product/price.png" alt="Price section" />

<ImagePopup src="/assets/2.0/images/simple-product/status.png" alt="Status toggle" />

<ImagePopup src="/assets/2.0/images/simple-product/category.png" alt="Category assignment" />

### Step 3 — Add associations

At the bottom of the edit page you can link this product to others. All three sections work the same way: click **Add**, search by SKU, then click **Add Selected Product**.

| Association | When to use it |
|---|---|
| **Related Products** | Similar alternatives — helps customers discover substitutes they might also like. |
| **Up-Sell Products** | Higher-end versions — a better TV, a faster laptop, a more durable tablet. |
| **Cross-Sell Products** | Complementary items — protective case + laptop, adapter + phone. |

<ImagePopup src="/assets/2.0/images/simple-product/related.png" alt="Related Products" />

<ImagePopup src="/assets/2.0/images/simple-product/upsell.png" alt="Up-sell Products" />

<ImagePopup src="/assets/2.0/images/simple-product/association.png" alt="Associations" />

### Step 4 — Save

Click **Save Product**. The product appears in the **Products Data Grid**.

<ImagePopup src="/assets/2.0/images/simple-product/save.png" alt="Save Product" />

<ImagePopup src="/assets/2.0/images/simple-product/datagrid.png" alt="Products Datagrid" />

<ImagePopup src="/assets/2.0/images/simple-product/product-listing.png" alt="Product Listing" />

<ImagePopup src="/assets/2.0/images/simple-product/final.png" alt="Final Product" />

::: tip
Attributes that support values per channel show a **channel badge**. Attributes that support values per locale show a **locale badge**. Attributes that support both show both badges — these are the fields you'll revisit when you switch channels or locales on the edit page.
:::

## Working with a Simple Product after creation

Once created, a Simple Product supports the full set of UnoPim product features. The rest of this page groups them by what you're trying to do.

### Translate values across locales

UnoPim supports **Product Values Translation** — per-locale values for any attribute flagged as locale-specific.

<ImagePopup src="/assets/2.0/images/simple-product/product-edit-locale.png" alt="Product Edit with Locale Switcher" />

#### Manual translation

1. Open the product in **Catalog >> Products**.
2. At the top of the edit page, use the two switchers:
   - **Channel Switcher** (e.g., *Default*) — picks which channel's values you're editing.
   - **Locale Switcher** (e.g., *English (United States)*) — picks the locale.
3. Switch to the target locale. The form reloads with that locale's values. Locale-specific fields show a locale badge (e.g., `EN_US`).
4. Enter the translated values (Name, Description, URL Key, …).
5. Click **Save Product**.
6. Repeat per locale.

::: tip
A **DEFAULT** badge means channel-specific. A locale badge (e.g., `EN_US`) means locale-specific. Both badges together means the attribute supports values per channel **and** per locale.
:::

#### Auto-translation with Magic AI

Enable **Magic AI >> Settings >> Translation** and every product save auto-translates locale-specific fields into the target locales:

1. Toggle **Enabled** on.
2. Set the **Source Channel** and **Source Locale** (the language you write in).
3. Set the **Target Channel** and **Target Locales**.
4. Pick a **Translation Model** — you can use a cheaper/faster provider for this.
5. Optionally toggle **Replace Existing Value** to overwrite existing translations on re-run.

See [Magic AI — Settings](../magic-ai/settings.md) for the full field reference.

### Check completeness

UnoPim computes a **Product Completeness** score per product, per channel, per locale:

- Score is displayed as a percentage (e.g., 89%).
- Low-completeness products show *"Low completeness, add details to improve"*.
- Nearly-complete products show *"Almost complete, just a few details left"*.
- The Dashboard aggregates completeness per channel in the **Completeness** widget.

::: tip
Pair completeness with **Magic AI Auto-Enrichment** (Magic AI >> Settings >> Agentic PIM) to automatically fill in missing fields and bump the score.
:::

### Review change history

Click the **History** tab on the product edit page to see every change. Each entry records:

- Date/time of the change.
- The user who made it.
- Exact fields that were modified, with before/after values.

Click the **eye icon** on any entry to view the full detail. UnoPim tracks history for **products, categories, attributes, attribute families, and channels** with the same UI.

<ImagePopup src="/assets/2.0/images/simple-product/history.png" alt="Product History" />

<ImagePopup src="/assets/2.0/images/simple-product/preview.png" alt="History entry detail" />

### Duplicate a product

To create a new product seeded from an existing one:

1. In **Catalog >> Products**, find the row to copy.
2. Click the **Copy icon** (clipboard) in the Actions column.
3. UnoPim creates a duplicate with a new SKU.
4. Edit the copy to customise it.

## Working with the Products listing

The listing at **Catalog >> Products** is where you find, filter, bulk-edit, and export products.

### Manage columns

Click the **Columns** button to open the **Manage columns** modal.

<ImagePopup src="/assets/2.0/images/simple-product/columns-selector.png" alt="Columns Selector" />

| Panel | Contents |
|---|---|
| **Available Columns** (left) | Every attribute that can be shown as a column — ID, Parent, Created/Updated At, URL Key, Tax Category, Short Description, Description, Price, Cost, Meta Title, Meta Keywords, Meta Description, plus every custom attribute. Search + pagination. |
| **Selected Columns** (right) | Currently visible columns. Default: SKU, Image, Name, Attribute Family, Status, Type, Complete. |

To customise:

1. Drag from Available to Selected to add a column.
2. Drag within Selected to reorder.
3. Drag out of Selected (or click remove) to hide.
4. Click **Apply**.

### Filter products

Click **Filter** above the datagrid to expand the filter panel. You can filter by:

- SKU, Name, Type (Simple / Configurable), Status (Enabled / Disabled), Attribute Family.
- Any visible column — text, dropdown, or date-range depending on the column type.
- Multiple filters can be combined for precise queries.

Click **Apply Filters** to run the query, or clear individual filters to reset.

### Bulk edit

UnoPim supports **Bulk Edit** on any attribute shared by the selected products:

1. Go to **Catalog >> Products**.
2. Tick the rows you want to edit.
3. Open the **Bulk Actions** dropdown.
4. Select **Edit** and choose the attribute.
5. Enter the new value and apply.

#### Bulk Enable / Disable

1. Select multiple products.
2. In the bulk action bar, choose **Enable** or **Disable**.

#### Bulk Delete

1. Select the products.
2. Click **Delete**.
3. Confirm — the deletion is permanent.

### Quick Export

Export selected (or all) products directly from the listing:

1. Select the products.
2. Click **Quick Export**.
3. Choose **CSV**, **XLS**, or **XLSX**.
4. The file downloads once processing is complete.

<ImagePopup src="/assets/2.0/images/simple-product/export.png" alt="Quick Export" />

<ImagePopup src="/assets/2.0/images/simple-product/exportOutput.png" alt="Export Output" />

For scheduled or filtered exports, use the full **[Export](../data-transfer/export.md)** workflow in Data Transfer.

## Related reading

- **[Configurable Product](./configurable.md)** — when to use variants instead of a single Simple SKU.
- **[Attribute Family](../attribute/attribute-family.md)** — controls which fields appear on a Simple Product.
- **[Magic AI — Settings](../magic-ai/settings.md)** — configure auto-translation and auto-enrichment for products.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — create, update, and bulk-edit Simple Products via natural language.
