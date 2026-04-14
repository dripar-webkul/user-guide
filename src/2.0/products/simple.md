# Simple Product

## Dark / Light Theme

UnoPim supports a **Dark / Light Theme** toggle. Click the sun/moon icon in the top-right corner of the header bar (next to the notification bell) to switch between light and dark mode. Your preference is saved and persists across sessions.

<ImagePopup src="/assets/2.0/images/settings/dark-theme.png" alt="Dark Theme" />

A simple product is the most basic and common product type. It's a physical, unique, standalone product without any other variations. 

Simple products offer customizable options within a single SKU.

This is the step-by-step tutorial on how to add a simple product in [UnoPim](https://unopim.com/).

### To Create Simple Product in UnoPim
1. Click on **Catalog >> Products >>** select product type **Simple**,**Family** and enter **SKU**.

<ImagePopup src="/assets/2.0/images/simple-product/simple.png" alt="Create Simple Product" />

Now **Save the Product**, and you will get redirected to the Edit product page as shown below.

### General Attributes

It displays the attributes assigned in the product's family grouped by attribute group. 

The below given are required attributes present in the "default" family

1) Enter **SKU** of the product

2) Enter **Name** of the product.

3) Now enter the **URL Key** of the product.
 
<!-- TODO: Add screenshot of edit product page -->

### Short Description
Enter a short description of the features of the product.

### Description
Mention your product in detail.

<!-- TODO: Add screenshot of description fields -->

### Price
Insert the price and cost price of the product as shown in the below image

<!-- TODO: Add screenshot of price section -->

### Technical

Now Enable the product from the status option as shown below.

<!-- TODO: Add screenshot of status toggle -->

### Categories

You can also assign the product into the root category as shown in the below image.

<!-- TODO: Add screenshot of category assignment -->

### Associations

Also, you can add the Related Products, Upsell Products, and Cross Sell Products.

**1) Related Products -** Related products are products that are similar to a selected product. 

You can display potential substitutes help to them discover other similar products they might like. 

To add Related Products click on Add in the Related Products section and search the product through the SKU which you want to add as a Related Product as shown in the image below. 

<!-- TODO: Add screenshot of related products -->

Now click on **Add Selected Product** button.

**2) Up-Sell Products -** Upselling is the practice of selling a higher-end version of an item they're interested in. 

For instance, an electronics retailer pointing out the benefits of a better TV, a faster laptop, or a more durable tablet would be an example of upselling.

To add Up-Sell Products click on add in the Up-Sell Products section and search the product through the SKU which you want to add as a Up-Sell Product. 

Now click on **Add Selected Product** button.

**3) Cross-Sell Products -** Cross-sells are products that you promote, based on the current product. They are typically complementary items.

For example, if you are selling a laptop, cross-sells might be protective case stickers or a special adapter.

To add Cross-Sell Products click on add in the Cross-Sell Products section and search the product through SKU which you want to add as a Cross-Sell Product. 

Now click on **Add Selected Product** button.

You can also add as many products as per your requirements.

At last, **Save the Product**.

Now the product is created successfully and it will be visible in **Products Data Grid** as shown in the below image.

<ImagePopup src="/assets/2.0/images/simple-product/datagrid.png" alt="Products Datagrid" />

## Product Completeness

UnoPim v2.0 includes a **Product Completeness** system that provides quality scoring for your products. The completeness score indicates how much of the required product information has been filled in.

- Each channel has its own completeness calculation
- Completeness is shown as a percentage (e.g., 89%)
- Products with low completeness display the message "Low completeness, add details to improve"
- Products that are nearly complete show "Almost complete, just a few details left"

The completeness score is visible on the Dashboard and helps you identify products that need more information.

<!-- TODO: Add screenshot of product completeness indicator -->

::: tip
You can use the completeness system together with the **AI Auto-Enrichment** feature to automatically fill in missing product fields and improve your completeness score.
:::

## Product Bulk Edit

UnoPim supports **Bulk Edit** capabilities that allow you to edit multiple products at once. This is especially useful when you need to update a common attribute across many products.

To use bulk edit:
1. Navigate to **Catalog >> Products**
2. Select the products you want to edit using the checkboxes
3. Click on the **Bulk Actions** dropdown
4. Select **Edit** and choose the attribute you want to update
5. Enter the new value and apply the changes

<!-- TODO: Add screenshot of bulk edit interface -->

### Bulk Enable / Disable Products

1. Select multiple products using the checkboxes
2. A bulk action bar appears at the top
3. Choose **Enable** or **Disable** to change the status of all selected products at once

### Bulk Delete Products

1. Select the products you want to remove
2. Click the **Delete** bulk action
3. Confirm the deletion — this permanently removes the selected products

## Product Values Translation

The **Product Values Translation** feature allows you to translate product attribute values across all configured locales.

<ImagePopup src="/assets/2.0/images/simple-product/product-edit-locale.png" alt="Product Edit with Locale Switcher" />

### How to Translate Product Values Manually

1. Navigate to **Catalog >> Products** and click **Edit** on the product you want to translate.
2. At the top of the edit page, you will see two dropdowns:
   - **Channel Switcher** (e.g., "Default") — Select the channel whose values you want to edit.
   - **Locale Switcher** (e.g., "English (United States)") — Select the locale you want to enter translations for.
3. Switch to the target locale (e.g., French, German, Hindi).
4. The form reloads with the attribute values for that locale. Fields that support per-locale values display a **locale badge** (e.g., `EN_US`).
5. Enter the translated values for each field (Name, Description, URL Key, etc.).
6. Click **Save Product** to store the translations.
7. Repeat for each locale you want to translate.

::: tip
Attributes showing a **DEFAULT** badge are channel-specific. Attributes showing a locale badge (e.g., **EN_US**) are locale-specific. Attributes with both badges support values per channel AND per locale.
:::

### Auto-Translation with Magic AI

Instead of translating manually, you can enable **Auto-Translation** in **Magic AI >> Settings >> Translation**:

1. **Enable** the Translation toggle
2. Set the **Source Channel** and **Source Locale** (the language you write in, e.g., English)
3. Set the **Target Channel** and **Target Locales** (the languages to translate to)
4. Choose a **Translation Model** (you can pick a faster/cheaper provider for translations)
5. Optionally toggle **Replace Existing Value** to overwrite previous translations

Once enabled, when you create or update a product, UnoPim automatically translates all locale-specific fields to the target locales using AI.

## Dynamic Datagrid Columns and Filters

The Products Data Grid supports **dynamic columns and filters**. You can customize which columns are visible in your product listing and apply advanced filters to find specific products quickly.

<!-- TODO: Add screenshot of dynamic datagrid columns -->

## Product History

You can view the product history by navigating to **Catalog >> Products >> Edit Product** and clicking on **History**.

<!-- TODO: Add screenshot of product history -->

Afterwards, in the **Actions** you can view the product history details.

## Quick Export

You can quickly export your data in **CSV, XLS, or XLSX** formats directly from the product listing.

1. Select the products you want to export
2. Click on the **Quick Export** button
3. Choose your preferred format
4. The export file will be downloaded

<!-- TODO: Add screenshot of quick export -->

## Copy Product

You can quickly duplicate a product using the **Copy** action:

1. Navigate to **Catalog >> Products**
2. Find the product you want to copy in the datagrid
3. Click the **Copy icon** (clipboard icon) in the Actions column for that product
4. A new product is created as a duplicate with a new SKU
5. You can then edit the copied product to customize it

## Product Datagrid Columns

The product datagrid supports **dynamic column management**. Click the **Columns** button above the datagrid to open the "Manage columns" modal.

<ImagePopup src="/assets/2.0/images/simple-product/columns-selector.png" alt="Columns Selector" />

The modal shows two panels:

- **Available Columns (left)** — Lists all product attributes that can be added as columns (Parent, ID, Created At, Updated At, URL Key, Tax Category, Short Description, Description, Price, Cost, Meta Title, Meta Keywords, Meta Description, and all custom attributes). Paginated with search.
- **Selected Columns (right)** — Shows the currently visible columns. Default: SKU, Image, Name, Attribute Family, Status, Type, Complete.

To customize:

1. Drag columns from Available to Selected to add them
2. Drag columns within Selected to reorder them
3. Remove columns from Selected to hide them
4. Click **Apply** to save your column configuration

## Product Filters

Click the **Filter** button above the datagrid to expand the filter panel. You can filter products by:

- SKU, Name, Type (Simple/Configurable), Status (Enabled/Disabled), Attribute Family
- Any visible column can be used as a filter
- Filters support text search, dropdown selection, and date ranges
- Multiple filters can be combined for precise results
- Click **Apply Filters** to apply, or clear individual filters to reset

## History

UnoPim tracks a complete audit history for all major entities — not just products. Navigate to any entity's edit page and click on the **History** tab to view:

- **Products** — Track all changes to product attributes, status, categories, associations
- **Categories** — View history of category name, description, and field changes
- **Attributes** — Track when attributes were created, modified, or configuration changed
- **Attribute Families** — View when attributes were added or removed from families
- **Channels** — Track channel configuration changes

Each history entry shows: the date/time of the change, the user who made it, and the specific fields that were modified with before/after values. You can click the **View** action (eye icon) to see the full details of each change.

**Note:** Attributes that support values per channel will display a channel badge, while attributes that support values per locale will display a locale badge. If an attribute supports both values per channel and values per locale, it will display both badges.
