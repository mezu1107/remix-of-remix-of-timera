import { i as generateText } from "../_libs/@ai-sdk/react+[...].mjs";
import { c as createServerFn } from "./createServerFn-BFFE07zL.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-C1wNywtg.mjs";
import { t as createServerRpc } from "./createServerRpc-MBa5GZ-L.mjs";
import { At as stringType, Ot as numberType, jt as unionType, kt as objectType } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { a as publicSupabase, i as loadCatalogue, n as catalogueToText, o as requireApiKey, r as createLovableAiGatewayProvider, t as CHAT_MODEL } from "./store-data.server-B_wcpe4b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai.functions-BXoJMcqV.js
function parseJson(text, fallback) {
	const cleaned = text.replace(/```json/gi, "").replace(/```/g, "").trim();
	const start = cleaned.search(/[[{]/);
	if (start < 0) return fallback;
	try {
		return JSON.parse(cleaned.slice(start));
	} catch {
		return fallback;
	}
}
var aiSearchProducts_createServerFn_handler = createServerRpc({
	id: "ba4dd3726b431dd1fd66492eff7ddecf803167426cd6305175a66040c2b1a8e9",
	name: "aiSearchProducts",
	filename: "src/lib/ai.functions.ts"
}, (opts) => aiSearchProducts.__executeServer(opts));
var aiSearchProducts = createServerFn({ method: "POST" }).validator((input) => objectType({ query: stringType().min(2).max(300) }).parse(input)).handler(aiSearchProducts_createServerFn_handler, async ({ data }) => {
	const gateway = createLovableAiGatewayProvider(requireApiKey());
	const rows = await loadCatalogue();
	if (rows.length === 0) return {
		slugs: [],
		summary: ""
	};
	const { text } = await generateText({
		model: gateway(CHAT_MODEL),
		system: "You match a shopper's natural-language request to watches in a catalogue. Only use slugs that appear in the catalogue. Return at most 8 matches, best first. Reply with strict JSON only: {\"summary\":\"one short sentence\",\"slugs\":[\"slug-1\",\"slug-2\"]}. If nothing fits, return an empty slugs array and explain briefly in summary.",
		prompt: `Shopper request: "${data.query}"\n\nCATALOGUE:\n${catalogueToText(rows)}`
	});
	const parsed = parseJson(text, {});
	const valid = new Set(rows.map((r) => r.slug));
	return {
		summary: String(parsed.summary ?? "").slice(0, 240),
		slugs: (parsed.slugs ?? []).filter((s) => typeof s === "string" && valid.has(s)).slice(0, 8)
	};
});
var aiReviewSummary_createServerFn_handler = createServerRpc({
	id: "1b473e8dfdb081708b99925335bbd15955fa1e9e3b265b2f0b9c19e3b2a973f1",
	name: "aiReviewSummary",
	filename: "src/lib/ai.functions.ts"
}, (opts) => aiReviewSummary.__executeServer(opts));
var aiReviewSummary = createServerFn({ method: "POST" }).validator((input) => objectType({ productId: stringType().uuid() }).parse(input)).handler(aiReviewSummary_createServerFn_handler, async ({ data }) => {
	const { data: reviews, error } = await publicSupabase().from("reviews").select("rating, title, body, customer_name").eq("product_id", data.productId).eq("approved", true).limit(60);
	if (error) throw error;
	const list = reviews ?? [];
	if (list.length < 2) return {
		available: false,
		summary: "",
		pros: [],
		cons: [],
		count: list.length
	};
	const { text } = await generateText({
		model: createLovableAiGatewayProvider(requireApiKey())(CHAT_MODEL),
		system: "You summarise customer reviews for a watch. Be factual and only use what reviewers actually wrote. Reply with strict JSON only: {\"summary\":\"2 short sentences\",\"pros\":[\"...\"],\"cons\":[\"...\"]}. Give at most 4 pros and 3 cons, each under 12 words. If reviewers raised no negatives, return an empty cons array.",
		prompt: list.map((r) => `★${r.rating} ${r.title ?? ""} — ${r.body ?? ""}`.trim()).join("\n").slice(0, 8e3)
	});
	const parsed = parseJson(text, {});
	return {
		available: true,
		count: list.length,
		summary: String(parsed.summary ?? "").slice(0, 400),
		pros: (parsed.pros ?? []).filter((s) => typeof s === "string").slice(0, 4),
		cons: (parsed.cons ?? []).filter((s) => typeof s === "string").slice(0, 3)
	};
});
var CopyInput = objectType({
	name: stringType().max(200).optional(),
	brief: stringType().max(1e3).optional(),
	brand: stringType().max(120).optional(),
	collection: stringType().max(120).optional(),
	category: stringType().max(120).optional(),
	movement: stringType().max(120).optional(),
	case_material: stringType().max(120).optional(),
	strap: stringType().max(120).optional(),
	water_resistance: stringType().max(120).optional(),
	price: unionType([stringType(), numberType()]).optional()
});
var aiWriteProductCopy_createServerFn_handler = createServerRpc({
	id: "c290f96140938ac6b5c398e613078ef522a7d69493d25a00cea4aacc206f62d7",
	name: "aiWriteProductCopy",
	filename: "src/lib/ai.functions.ts"
}, (opts) => aiWriteProductCopy.__executeServer(opts));
var aiWriteProductCopy = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => CopyInput.parse(input)).handler(aiWriteProductCopy_createServerFn_handler, async ({ data, context }) => {
	const { data: adminRow } = await context.supabase.from("user_roles").select("role").eq("user_id", context.userId).eq("role", "admin").maybeSingle();
	if (!adminRow) throw new Error("Forbidden");
	const { text } = await generateText({
		model: createLovableAiGatewayProvider(requireApiKey())(CHAT_MODEL),
		system: "You are a senior copywriter for a luxury quartz watch house (Timera watches are all quartz movement, never Swiss-made). Write elegant, concrete, non-cliché copy. Reply with strict JSON only: {\"name\":\"\",\"description\":\"\",\"features\":[\"\",\"\"],\"seo_title\":\"\",\"seo_description\":\"\",\"seo_keywords\":\"\"}. description: 60-120 words, no bullet points. features: 4-6 short phrases. seo_title under 60 characters and includes the product name. seo_description under 155 characters. seo_keywords: 5-8 comma separated phrases. Never invent certifications or awards.",
		prompt: JSON.stringify(data)
	});
	const parsed = parseJson(text, {});
	const clamp = (v, n) => String(v ?? "").slice(0, n);
	return {
		name: clamp(parsed.name, 200),
		description: clamp(parsed.description, 1500),
		features: (parsed.features ?? []).filter((s) => typeof s === "string").slice(0, 6),
		seo_title: clamp(parsed.seo_title, 60),
		seo_description: clamp(parsed.seo_description, 160),
		seo_keywords: clamp(parsed.seo_keywords, 300)
	};
});
var aiExtractProducts_createServerFn_handler = createServerRpc({
	id: "ccafcd381a92fbfe872907e28aa50283412f555659d0e4a64ae6d1e3b04c8965",
	name: "aiExtractProducts",
	filename: "src/lib/ai.functions.ts"
}, (opts) => aiExtractProducts.__executeServer(opts));
var aiExtractProducts = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({
	text: stringType().min(20).max(12e4),
	source: stringType().max(200).optional()
}).parse(input)).handler(aiExtractProducts_createServerFn_handler, async ({ data, context }) => {
	const { data: adminRow } = await context.supabase.from("user_roles").select("role").eq("user_id", context.userId).eq("role", "admin").maybeSingle();
	if (!adminRow) throw new Error("Forbidden");
	const { text } = await generateText({
		model: createLovableAiGatewayProvider(requireApiKey())(CHAT_MODEL),
		system: "You extract a product catalogue from raw text (PDF exports, price lists, spreadsheets pasted as text). Reply with strict JSON only: {\"products\":[{\"name\":\"\",\"price\":0,\"sale_price\":null,\"description\":\"\",\"brand\":\"\",\"collection\":\"\",\"category\":\"\",\"stock\":null,\"movement\":\"\",\"case_material\":\"\",\"strap\":\"\",\"water_resistance\":\"\",\"colors\":[\"\"],\"sizes\":[\"\"],\"features\":[\"\"],\"image_url\":\"\"}]}. price is a plain number in PKR without symbols or commas. Use null when a value is genuinely absent — never invent prices. Write a 25-45 word description when the source has none. Extract EVERY product you can find, in source order.",
		prompt: `Source: ${data.source ?? "upload"}\n\n${data.text}`.slice(0, 12e4)
	});
	const parsed = parseJson(text, {});
	const rows = Array.isArray(parsed.products) ? parsed.products : [];
	const str = (v, n = 300) => v == null ? "" : String(v).slice(0, n);
	const arr = (v) => Array.isArray(v) ? v.filter((x) => typeof x === "string").slice(0, 12) : [];
	const numOrNull = (v) => {
		const n = Number(String(v ?? "").replace(/[^0-9.]/g, ""));
		return Number.isFinite(n) && n > 0 ? n : null;
	};
	return { products: rows.map((r) => ({
		name: str(r.name, 200),
		price: numOrNull(r.price),
		sale_price: numOrNull(r.sale_price),
		description: str(r.description, 1500),
		brand: str(r.brand, 120),
		collection: str(r.collection, 120),
		category: str(r.category, 120),
		stock: numOrNull(r.stock),
		movement: str(r.movement, 120),
		case_material: str(r.case_material, 120),
		strap: str(r.strap, 120),
		water_resistance: str(r.water_resistance, 120),
		colors: arr(r.colors),
		sizes: arr(r.sizes),
		features: arr(r.features),
		image_url: str(r.image_url, 1e3)
	})).filter((r) => r.name.length > 1).slice(0, 300) };
});
//#endregion
export { aiExtractProducts_createServerFn_handler, aiReviewSummary_createServerFn_handler, aiSearchProducts_createServerFn_handler, aiWriteProductCopy_createServerFn_handler };
