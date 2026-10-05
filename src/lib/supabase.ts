import { createClient } from "@supabase/supabase-js";

const supabaseUrl = String(import.meta.env.VITE_SUPABASE_URL ?? "").trim();
const supabaseAnonKey = String(
  import.meta.env.VITE_SUPABASE_ANON_KEY ?? ""
).trim();

if (!supabaseUrl) {
  throw new Error("VITE_SUPABASE_URL is missing.");
}

if (!/^https?:\/\//i.test(supabaseUrl)) {
  throw new Error(
    `VITE_SUPABASE_URL is invalid. It must start with http:// or https://. Received: ${JSON.stringify(
      supabaseUrl
    )}`
  );
}

if (!supabaseAnonKey) {
  throw new Error("VITE_SUPABASE_ANON_KEY is missing.");
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
