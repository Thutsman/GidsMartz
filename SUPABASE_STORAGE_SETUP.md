# Supabase Storage Setup for Image Uploads

This guide will help you set up Supabase Storage to enable image file uploads in the admin dashboard.

## Step 1: Create Storage Bucket

1. Go to your Supabase project dashboard
2. Navigate to **Storage** in the left sidebar
3. Click **"New bucket"**
4. Configure the bucket:
   - **Name**: `product-images`
   - **Public bucket**: ✅ **Enable** (so images can be accessed via public URLs)
   - **File size limit**: 5 MB (or your preferred limit)
   - **Allowed MIME types**: `image/jpeg, image/jpg, image/png, image/webp, image/gif`
5. Click **"Create bucket"**

## Step 2: Set Up Storage Policies

After creating the bucket, you need to set up policies to allow uploads and public access.

### Policy 1: Allow Public Read Access

```sql
-- Allow anyone to read images
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'product-images');
```

### Policy 2: Allow Authenticated Users to Upload

```sql
-- Allow authenticated users to upload (you may want to restrict this further)
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'product-images' 
  AND auth.role() = 'authenticated'
);
```

### Policy 3: Allow Authenticated Users to Update/Delete

```sql
-- Allow authenticated users to update/delete their uploads
CREATE POLICY "Authenticated users can update"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'product-images' 
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'product-images' 
  AND auth.role() = 'authenticated'
);
```

## Step 3: Alternative - Service Role Key for Admin Uploads

If you're using the service role key for admin operations (current implementation), you may not need the above policies. The service role key bypasses RLS. However, for better security in production:

1. **Option A**: Use Supabase Auth for admin authentication
2. **Option B**: Keep using service role key but restrict it to server-side only (current setup)

## Step 4: Test the Upload

1. Go to `/admin` in your application
2. Click "Add Product"
3. Click "Upload" next to "Main Image"
4. Select an image file
5. Click "Upload File"
6. The image should upload and the URL should appear in the input field

## Troubleshooting

### "Bucket not found" error
- Make sure the bucket name is exactly `product-images`
- Check that the bucket exists in your Supabase Storage dashboard

### "Permission denied" error
- Check your storage policies
- Verify your Supabase service role key is set correctly
- Ensure the bucket is set to public if you want public access

### Images not displaying
- Check that the bucket is set to public
- Verify the public URL is being generated correctly
- Check browser console for CORS errors

### File size too large
- Adjust the file size limit in the bucket settings
- Or update the validation in `/api/upload/route.ts`

## Security Considerations

⚠️ **Important for Production:**

1. **File Type Validation**: The API already validates file types, but you should also:
   - Enable MIME type restrictions in the bucket settings
   - Consider server-side image processing/validation

2. **File Size Limits**: 
   - Set appropriate limits in bucket settings
   - The API currently limits to 5MB

3. **Access Control**:
   - Consider implementing proper authentication for admin users
   - Use signed URLs for private images if needed
   - Implement rate limiting on upload endpoints

4. **Image Optimization**:
   - Consider adding image compression/resizing before upload
   - Use CDN for faster image delivery

## Next Steps

After setting up storage, the upload functionality will work automatically. The admin form now supports:
- ✅ File uploads for main image
- ✅ Multiple file uploads for additional images
- ✅ URL input (fallback option)
- ✅ Image previews
- ✅ Remove uploaded images
