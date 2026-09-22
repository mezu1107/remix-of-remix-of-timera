/**
 * upload.ts — Supabase Storage upload helpers
 *
 * Uploads any file (image OR video) directly to Supabase Storage and returns
 * the public URL. The admin can then drag-and-drop from their phone or PC.
 *
 * Storage buckets used:
 *   media   — images, videos, hero backgrounds, product gallery
 *
 * The bucket must exist in Supabase Storage with public read access.
 * Create it once in Dashboard → Storage → New bucket → name: "media" → Public.
 */
import { supabase } from "@/integrations/supabase/client";

const BUCKETS = ["homepage-videos", "media", "products", "public", "assets"];

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Failed to read image file"));
    reader.readAsDataURL(file);
  });
}

/**
 * Uploads a File to Supabase Storage and returns the public URL.
 * Falls back to base64 Data URL if storage bucket is restricted or unconfigured.
 */
export async function uploadToStorage(file: File, folder = "uploads"): Promise<string> {
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "bin";
  const random = Math.random().toString(36).slice(2, 8);
  const path = `${folder}/${Date.now()}-${random}.${ext}`;

  for (const bucket of BUCKETS) {
    try {
      const { error } = await supabase.storage
        .from(bucket)
        .upload(path, file, {
          cacheControl: "31536000",
          upsert: true,
          contentType: file.type || undefined,
        });

      if (!error) {
        const { data } = supabase.storage.from(bucket).getPublicUrl(path);
        if (data?.publicUrl) return data.publicUrl;
      }
    } catch {
      // Try next bucket
    }
  }

  // If storage buckets fail or aren't writable, fallback to base64 Data URL for images
  if (file.type.startsWith("image/")) {
    return await fileToDataUrl(file);
  }

  throw new Error("Could not upload file to storage bucket. Please check Supabase Storage permissions.");
}

/** Returns true if a string looks like a video file URL */
export function isVideoUrl(url: string): boolean {
  return /\.(mp4|webm|mov|m4v|ogv)(\?|$)/i.test(url);
}

/** Returns true if a string looks like an image file URL or data URL */
export function isImageUrl(url: string): boolean {
  return /^data:image\//.test(url) || /\.(jpe?g|png|gif|webp|avif|svg)(\?|$)/i.test(url);
}
