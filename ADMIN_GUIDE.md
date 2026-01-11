# Admin Dashboard Guide

## Overview

The admin dashboard allows you to manage products and categories for the GIDS-MARTZ website. All changes made in the admin panel will be reflected on the Products page and the Featured Products section on the Home page.

## Accessing the Admin Dashboard

1. Navigate to `/admin` in your browser
2. Enter the admin password (default: `admin123`)
3. Click "Login"

⚠️ **Important**: Change the default password in production by setting the `NEXT_PUBLIC_ADMIN_PASSWORD` environment variable.

## Managing Products

### Viewing Products

- All products are displayed in a table format
- Use the search bar to filter products by name, brand, category, or SKU
- Products show:
  - Product image and name
  - Category and brand
  - Price and stock quantity
  - Stock status (In Stock / Out of Stock)
  - Featured badge (if applicable)

### Creating a New Product

1. Click the "Add Product" button
2. Fill in the required fields:
   - **Product Name** (required)
   - **Description** (required)
   - **Price** (required)
   - **Currency** (USD or ZWL)
   - **Category** (required - select from dropdown)
   - **Brand** (required)
   - **Main Image URL** (required)
3. Optional fields:
   - Subcategory
   - SKU
   - Stock quantity
   - Additional images (comma-separated URLs)
   - Specifications (key-value pairs)
   - Weight, dimensions, warranty
   - Discount percentage
4. Toggle switches:
   - **In Stock**: Check if product is available
   - **Featured**: Check to show on home page
   - **New Product**: Mark as new arrival
5. Click "Create Product"

### Editing a Product

1. Click the edit icon (pencil) next to the product
2. Modify any fields as needed
3. Click "Update Product"

### Deleting a Product

1. Click the delete icon (trash) next to the product
2. Confirm the deletion

⚠️ **Warning**: Deleted products cannot be recovered.

## Managing Categories

### Viewing Categories

- Categories are displayed in a grid layout
- Each card shows:
  - Category image
  - Category name and description
  - Number of products in the category
  - Featured badge (if applicable)

### Creating a New Category

1. Click the "Add Category" button
2. Fill in the required fields:
   - **Category Name** (required) - The slug will be auto-generated
   - **Slug** (required) - URL-friendly identifier
   - **Description** (required)
   - **Image URL** (required)
3. Optional fields:
   - **Icon Name** (e.g., "Zap", "Cog" - for Lucide icons)
   - **Display Order** (number for sorting)
4. Toggle **Featured** to show on home page
5. Click "Create Category"

### Editing a Category

1. Click the edit icon on the category card
2. Modify any fields
3. Click "Update Category"

### Deleting a Category

1. Click the delete icon on the category card
2. Confirm the deletion

⚠️ **Warning**: Deleting a category will not delete products, but products will lose their category association.

## Best Practices

1. **Product Images**: Use high-quality images (recommended: 400x400px or larger)
   - Use reliable image hosting (e.g., Supabase Storage, Cloudinary, or your own CDN)
   - Ensure images are accessible via HTTPS

2. **Product Descriptions**: Write clear, detailed descriptions
   - Include key features and specifications
   - Use proper grammar and formatting

3. **Stock Management**: Keep stock quantities updated
   - Set `inStock` to false when out of stock
   - Update `stockQuantity` regularly

4. **Featured Products**: Select your best/most popular products
   - Featured products appear on the home page
   - Limit to 10-20 featured products for best performance

5. **Categories**: Organize products logically
   - Use clear, descriptive category names
   - Set display order for better organization

6. **Specifications**: Add detailed specs for technical products
   - Use clear key names (e.g., "Rated Current", "Power Rating")
   - Include units where applicable

## Troubleshooting

### Products Not Appearing

- Check if products are marked as "In Stock"
- Verify the category is correctly assigned
- Check browser console for errors
- Verify Supabase connection in environment variables

### Images Not Loading

- Verify image URLs are accessible
- Check if URLs use HTTPS
- Ensure images are not blocked by CORS

### Changes Not Saving

- Check browser console for errors
- Verify Supabase connection
- Check RLS (Row Level Security) policies in Supabase
- Ensure you have proper permissions

### Search Not Working

- Clear browser cache
- Check if products have the fields you're searching for
- Verify the search query is correct

## Security Recommendations

1. **Change Default Password**: Set a strong password in production
2. **Use Environment Variables**: Never commit passwords to git
3. **Implement Proper Auth**: Consider using Supabase Auth for better security
4. **Rate Limiting**: Add rate limiting to prevent abuse
5. **Input Validation**: All inputs are validated, but review for your specific needs
6. **Backup Data**: Regularly backup your Supabase database

## Support

For issues or questions:
1. Check the browser console for errors
2. Review Supabase logs
3. Verify environment variables are set correctly
4. Check network requests in browser DevTools
