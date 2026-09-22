import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { t as createOpenAICompatible } from "../_libs/ai-sdk__openai-compatible.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-data.server-B_wcpe4b.js
/** Lovable AI Gateway provider. Server-only — never import from client code. */
function createLovableAiGatewayProvider(apiKey) {
	return createOpenAICompatible({
		name: "lovable",
		baseURL: "https://ai.gateway.lovable.dev/v1",
		headers: { "Lovable-API-Key": apiKey }
	});
}
var CHAT_MODEL = "google/gemini-3.6-flash";
function requireApiKey() {
	const key = process.env.LOVABLE_API_KEY;
	if (!key) throw new Error("AI is not configured (missing key).");
	return key;
}
var DEFAULT_SUPABASE_URL = "https://gggxfqmyanodyshwkijl.supabase.co";
var DEFAULT_SUPABASE_KEY = "sb_publishable_qGXKDtJnGkd3OuOSRawWUw_60CKifyU";
/** Server-side publishable Supabase client (RLS applies as anon). */
function publicSupabase() {
	const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
	const key = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY || DEFAULT_SUPABASE_KEY;
	return createClient(url, key, {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		},
		global: { fetch: (input, init) => {
			const h = new Headers(init?.headers);
			if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
			h.set("apikey", key);
			return fetch(input, {
				...init,
				headers: h
			});
		} }
	});
}
/** Compact, public catalogue snapshot used as grounding context for AI features. */
async function loadCatalogue(limit = 60) {
	const { data, error } = await publicSupabase().from("products").select("slug, name, brand, collection, category, price, sale_price, movement, case_material, strap, water_resistance, stock, rating, badge, description").eq("active", true).order("sort_order").limit(limit);
	if (error) throw error;
	return data ?? [];
}
function catalogueToText(rows) {
	return rows.map((p) => `- ${p.name} (slug: ${p.slug}) | brand ${p.brand} | collection ${p.collection} | category ${p.category ?? "—"} | price Rs ${p.sale_price ?? p.price}${p.sale_price ? ` (was Rs ${p.price})` : ""} | ${p.movement} | ${p.case_material} case | ${p.strap} strap | ${p.water_resistance} | rating ${p.rating} | ${p.stock > 0 ? "in stock" : "out of stock"} | ${(p.description ?? "").slice(0, 220)}`).join("\n");
}
//#endregion
export { publicSupabase as a, loadCatalogue as i, catalogueToText as n, requireApiKey as o, createLovableAiGatewayProvider as r, CHAT_MODEL as t };
