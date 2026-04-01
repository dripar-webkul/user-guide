# Configurable Product

It refers to a type of product that offers various options or variations, such as size, color, or features, which can be selected by the customer. The PIM system manages these options and their associated attributes, ensuring accurate and comprehensive product information across different configurations.

Configurable products are designed to meet individual needs, enhancing customer satisfaction and providing a tailored experience in [UnoPim](https://unopim.com/).

### Create Configurable Product in UnoPim

1. Click on **Catalog >> Products >>** select **Configurable** , **Family** and enter **SKU** under Product Type .

<!-- TODO: Add screenshot of configurable product creation -->

Now click on **Save the Product**, and now select the **configurable attributes** as per your requirements, and then click on **Save Product** button.

### Configurable (Super) Attributes

When creating a configurable product, you need to select **super attributes** — these are the attributes that define the variations of your product (e.g., Size, Color). 

In UnoPim v2.0, configurable product super attributes are fully supported with:
- Flexible super attribute selection during product creation
- Support for **variants_json** format for programmatic variant definition
- Size-based variants with configurable seeder support

<!-- TODO: Add screenshot of super attribute selection -->

### General Attributes

It displays the attributes assigned in the product's family grouped by attribute group. 

The below given are required attributes present in the "default" family

1) Enter **SKU** of the product

2) Enter **Name** of the product

3) Now enter the **URL Key** of the product

<!-- TODO: Add screenshot of configurable product edit page -->

### Short Description
Enter a short description of the features of the product.

### Description
Mention your product in detail.

<!-- TODO: Add screenshot of description fields -->

### Technical

Now Enable the product from the status option as shown below.

<!-- TODO: Add screenshot of status toggle -->

### Categories

You can also assign the product into the root category as shown in the below image.

<!-- TODO: Add screenshot of category assignment -->

### Variations

Now enter the variations of the product. Click on **Add Product** to add a new variant.

<!-- TODO: Add screenshot of variations section -->

Now add the variant — enter the configurable attributes and then click on **Add button**.

<!-- TODO: Add screenshot of add variant form -->

You can add as many variants as per the requirements of the product.

### Associations

Also, you can add the Related Products, Upsell Products, and Cross-Sell Products.

**1) Related Products -** Related products are products that are similar to a selected product. You can display potential substitutes help to them discover other similar products they might like. 

To add Related Products click on Add in the Related Products section and search the product through the SKU which you want to add as a Related Product. 

Now click on **Add Selected Product** button.

**2) Up-Sell Products -** Upselling is the practice of selling a higher-end version of an item they're interested in.

For instance, an electronics retailer pointing out the benefits of a better TV, a faster laptop, or a more durable tablet would be an example of upselling.

To add Up-Sell Products click on add in the Up-Sell Products section and search the product through the SKU which you want to add as a Up-Sell Product. 

Now click on **Add Selected Product** button.

**3) Cross-Sell Products -** Cross-sells are products that you promote, based on the current product. They are typically complementary items. For example, if you are selling a laptop, cross-sells might be protective case stickers or a special adapter.

To add Cross-Sell Products click on add in the Cross-Sell Products section and search the product through SKU which you want to add as a Cross-Sell Product. 

Now click on **Add Selected Product** button.

You can also add as many products as per your requirements.

At last, **Save the Product**.

Now the product has been created successfully and will be visible in the Products Data Grid.

<!-- TODO: Add screenshot of configurable product in datagrid -->

## Product Completeness

Configurable products also benefit from the **Product Completeness** system. The completeness score evaluates both the parent product and its variants, providing a holistic quality score.

- Completeness is calculated per channel and per locale
- The dashboard shows completeness percentages for each channel
- Low-completeness products are flagged for attention

::: tip
Focus on completing the parent product attributes first, then ensure each variant has its required attribute values filled in.
:::

## Product Bulk Edit

You can use **Bulk Edit** to update multiple configurable products at once. Select products from the datagrid and apply bulk changes to shared attributes.

<!-- TODO: Add screenshot of bulk edit for configurable products -->

## Product History

You can view the product history by navigating to **Catalog >> Products >> Edit Product** and clicking on **History**.

<!-- TODO: Add screenshot of product history -->

## Quick Export

You can quickly export your data into **CSV, XLS, XLSX** format directly from the product listing.

<!-- TODO: Add screenshot of quick export -->

**Note:** Attributes that support values per channel will display a channel badge, while attributes that support values per locale will display a locale badge. If an attribute supports both values per channel and values per locale, it will display both badges.
