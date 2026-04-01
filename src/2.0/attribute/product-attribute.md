# Product Attribute

An Attribute is a specification or characteristic of a product for example Color, Size, and Pattern an attribute of a T-Shirt. 

You can create as many attributes for a single product. Product Attribute plays a major factor.

### How to Create a Product Attribute in UnoPim

To Create UnoPim Attributes, open the Admin Panel and then follow the below steps.

### Add Attributes

**Step-1** Click on **Catalog** >> **Attributes** >> **Create Attributes** as shown in the below image.

<!-- TODO: Add screenshot of create attribute page -->

**Step-2** Now enter the **Code** and **Data Type** inside the general section.

<!-- TODO: Add screenshot of general section -->

**Note -** The **Is Unique** Validation is only available for Type - **Text, Datetime & Date**

**Step-3** Enter the Label of your Attribute as shown in the below image.

<!-- TODO: Add screenshot of label section -->

**Step-4** Select the Validation if you want to make your Attribute as a required field or Unique.

**Note -** The **Is Unique** Validation is only available for Type - **Text, Datetime & Date**

<!-- TODO: Add screenshot of validation section -->

**Step-5** Select the field if you want to make the Attribute value as per the locale and value as per the channel.

<!-- TODO: Add screenshot of configuration section -->

Now, click on **Save Attribute** button and then the attribute is created successfully in the Datagrid.

<!-- TODO: Add screenshot of attribute datagrid -->

Now **Save the Attribute** and then go to the Attribute Family from **Catalog >> Attribute Families** and assign it from the unassigned attribute by drag and drop at your desired place.

<!-- TODO: Add screenshot of attribute family assignment -->

Now, **Save Attribute Family** and check the output while creating products on the product edit page.

<!-- TODO: Add screenshot of attribute in product edit -->

### A Visual Breakdown of UnoPim Product Data Types

**1) Text** - A field that allows the user to enter a single line of text. It is typically used for short inputs like names, email addresses, or search queries.

<!-- TODO: Add screenshot of text attribute -->

**2) Textarea** - A field that provides a larger area for users to input multi-line text. It's useful for longer responses or comments, such as descriptions or messages. 

Additionally, you can Enable/Disable the Wysiwyg Editor.

<!-- TODO: Add screenshot of textarea attribute -->

**3) Boolean** - Represents a true or false value. It's often used in forms to capture yes/no or on/off selections.

<!-- TODO: Add screenshot of boolean attribute -->

**4) Select** - A dropdown menu that allows users to choose one option from a list. It's useful for making selections where only one option should be chosen from a predefined set of options.

<!-- TODO: Add screenshot of select attribute -->

**5) Multiselect** - Similar to a select field but allows users to choose multiple options from a list. It's useful when multiple selections are valid and necessary.

<!-- TODO: Add screenshot of multiselect attribute -->

**6) Datetime** - A field that allows users to select a specific date and time. It's often used for scheduling or timestamping events.

<!-- TODO: Add screenshot of datetime attribute -->

**7) Date** - A field that allows users to select or input a date only (without time). It's used for choosing a specific day in forms and calendars.

<!-- TODO: Add screenshot of date attribute -->

**8) Gallery** - A Gallery attribute that allows managing and displaying multiple images and **videos** per product, enhancing the product media experience.

1) The media attribute provides the ability to edit gallery images without changing their position.
2) Change the image position by dragging and dropping the gallery images.
3) **Video Support** — You can now upload and manage video files in the gallery alongside images.

<!-- TODO: Add screenshot of gallery attribute with video -->

::: tip
Video support in the gallery attribute was introduced in v1.0.0. You can upload common video formats directly to your product gallery.
:::

**9) Image** - A field for uploading or displaying image. Users can either upload an image file or view an image that's already been uploaded.

<!-- TODO: Add screenshot of image attribute -->

**10) File** - A field that allows users to upload files. It can accept various file types, such as documents, images, or other file formats.

<!-- TODO: Add screenshot of file attribute -->

**11) Checkbox** - A small box that can be checked or unchecked. It's used for binary choices, where a user can select or deselect an option, often used for agreements or preferences.

<!-- TODO: Add screenshot of checkbox attribute -->

**12) Price** - This input type is used to create price fields that are in addition to the predefined attributes: Prices.

<!-- TODO: Add screenshot of price attribute -->

## Swatch Types

UnoPim v2.0 introduces **Swatch Types** for **Select** and **Multiselect** attributes. Swatches provide a visual representation of attribute options, making it easier for users to identify and select values.

### Types of Swatches

| Swatch Type | Description |
|-------------|-------------|
| **Dropdown** | Standard dropdown selection (default) |
| **Color** | Displays color swatches for each option |
| **Image** | Displays image thumbnails for each option |
| **Text** | Displays text labels as visual swatches |

### How to Enable Swatch Types

1. Create or edit a **Select** or **Multiselect** attribute
2. In the attribute configuration, select the **Swatch Type** from the dropdown
3. For each attribute option, configure the swatch value:
   - **Color swatch**: Enter a hex color code (e.g., `#FF0000` for red)
   - **Image swatch**: Upload a small image for each option
   - **Text swatch**: Enter display text for each option
4. Click **Save Attribute**

<!-- TODO: Add screenshot of swatch type configuration -->

::: tip
Swatch types are especially useful for attributes like Color, Material, or Pattern where a visual representation helps users quickly identify options.
:::

By following the above steps, you can easily create a **Product Attribute** in UnoPim.
