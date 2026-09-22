import { t as supabase } from "./client-CqS_jkNP.mjs";
import { n as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-DP9o3dVy.js
var ASSET_BASE = "https://timeras.lovable.app";
var absUrl = (u) => {
	if (!u) return "";
	const t = u.trim();
	if (t.startsWith("/")) return `${ASSET_BASE}${t}`;
	return t;
};
/** Normalises jsonb text arrays, recursively unwrapping values double-encoded by imports. */
var asArray = (v) => {
	const raw = Array.isArray(v) ? v.flat(Infinity) : typeof v === "string" ? [v] : [];
	const out = [];
	for (const item of raw) {
		if (typeof item !== "string") continue;
		const trimmed = item.trim();
		if (trimmed.startsWith("[") && trimmed.endsWith("]")) try {
			const inner = JSON.parse(trimmed);
			if (Array.isArray(inner)) {
				out.push(...asArray(inner));
				continue;
			}
		} catch {}
		const cleaned = trimmed.replace(/^\[+|\]+$/g, "").replace(/^"+|"+$/g, "").trim();
		if (cleaned) out.push(cleaned);
	}
	return out;
};
/**
* Parses admin-entered colour lines. Supported shapes:
*   `Blue`
*   `Blue #1e3a8a`
*   `Blue #1e3a8a | https://…/blue-watch.jpg`   ← swatch swaps the product photo
*/
function parseColors(v) {
	const rows = asArray(v);
	if (!rows.length) return [];
	return rows.map((row) => {
		const [left, ...rest] = row.split("|");
		const image = rest.join("|").trim();
		const base = left.trim();
		const match = base.match(/(#[0-9a-fA-F]{3,8})\s*$/);
		const hex = match ? match[1] : "#1a1a1a";
		return {
			name: (match ? base.slice(0, match.index).trim() : base) || hex,
			hex,
			image: image ? absUrl(image) : void 0
		};
	}).filter((c) => c.name.length > 0);
}
/** URL-friendly key for a colour name, used by the `?color=` product link. */
var colorSlug = (name) => name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
function mapProduct(row) {
	const gallery = asArray(row.gallery).map(absUrl);
	const sizes = asArray(row.sizes);
	const colors = parseColors(row.colors);
	const image = absUrl(typeof row.image_url === "string" ? row.image_url : "");
	const videos = asArray(row.videos).map(absUrl);
	return {
		id: row.id,
		slug: row.slug,
		name: row.name,
		brand: row.brand,
		collection: row.collection,
		category: row.category ?? null,
		productType: row.product_type === "perfume" ? "perfume" : "watch",
		price: Number(row.price),
		salePrice: row.sale_price != null ? Number(row.sale_price) : void 0,
		compareAt: row.compare_at ? Number(row.compare_at) : void 0,
		image,
		gallery: gallery.length ? gallery : image ? [image] : [],
		videos,
		colors: colors.length ? colors : [{
			name: "Default",
			hex: "#1a1a1a"
		}],
		sizes,
		movement: row.movement,
		case: row.case_material,
		strap: row.strap,
		waterResistance: row.water_resistance,
		fragranceFamily: row.fragrance_family ?? null,
		concentration: row.concentration ?? null,
		sizeMl: row.size_ml != null ? Number(row.size_ml) : null,
		topNotes: asArray(row.top_notes),
		heartNotes: asArray(row.heart_notes),
		baseNotes: asArray(row.base_notes),
		longevity: row.longevity ?? null,
		sillage: row.sillage ?? null,
		gender: row.gender ?? null,
		rating: Number(row.rating),
		reviews: row.reviews ?? 0,
		badge: row.badge ?? void 0,
		stock: row.stock ?? 0,
		description: row.description ?? "",
		features: asArray(row.features),
		featured: !!row.featured,
		sortOrder: row.sort_order ?? 0,
		dealId: row.deal_id ?? null,
		seoTitle: row.seo_title ?? null,
		seoDescription: row.seo_description ?? null,
		seoKeywords: row.seo_keywords ?? null
	};
}
/** Price a customer actually pays. */
var effectivePrice = (p) => p.salePrice && p.salePrice > 0 && p.salePrice < p.price ? p.salePrice : p.price;
/** Struck-through reference price, when there is one. */
var listPrice = (p) => p.salePrice && p.salePrice > 0 && p.salePrice < p.price ? p.price : p.compareAt;
/**
* Listing columns only. `gallery` and the SEO fields are deliberately left out —
* they can hold large inline images and are only needed on the product page,
* so skipping them keeps shop/home payloads small and fast.
*/
var LIST_COLUMNS = "id,slug,name,brand,collection,category,product_type,price,sale_price,compare_at,image_url,colors,sizes,movement,case_material,strap,water_resistance,fragrance_family,concentration,size_ml,top_notes,heart_notes,base_notes,longevity,sillage,gender,rating,reviews,badge,stock,description,features,featured,sort_order,deal_id,videos";
var productsQuery = queryOptions({
	queryKey: ["products"],
	staleTime: 5 * 6e4,
	queryFn: async () => {
		const { data, error } = await supabase.from("products").select(LIST_COLUMNS).eq("active", true).order("sort_order", { ascending: true });
		if (error) throw error;
		return (data ?? []).map(mapProduct);
	}
});
/** Split a catalogue list by product type. */
var isPerfume = (p) => p.productType === "perfume";
var isWatch = (p) => p.productType !== "perfume";
var heroSlidesQuery = queryOptions({
	queryKey: ["hero_slides"],
	queryFn: async () => {
		const { data, error } = await supabase.from("hero_slides").select("*").eq("active", true).order("sort_order", { ascending: true });
		if (error) throw error;
		return (data ?? []).map((r) => ({
			id: r.id,
			eyebrow: r.eyebrow,
			title: r.title,
			titleAccent: r.title_accent,
			description: r.description,
			ctaLabel: r.cta_label,
			ctaHref: r.cta_href,
			image: absUrl(r.image_url ?? ""),
			videoUrl: r.video_url ? absUrl(r.video_url) : null
		}));
	}
});
var collectionsQuery = queryOptions({
	queryKey: ["collections"],
	queryFn: async () => {
		const { data, error } = await supabase.from("collections").select("*").eq("active", true).order("sort_order", { ascending: true });
		if (error) throw error;
		return (data ?? []).map((r) => ({
			id: r.id,
			name: r.name,
			slug: r.slug,
			tagline: r.tagline,
			image: r.image_url ? absUrl(r.image_url) : null
		}));
	}
});
queryOptions({
	queryKey: ["categories"],
	queryFn: async () => {
		const { data, error } = await supabase.from("categories").select("*").eq("active", true).order("sort_order", { ascending: true });
		if (error) throw error;
		return (data ?? []).map((r) => ({
			id: r.id,
			name: r.name,
			slug: r.slug,
			description: r.description,
			image: r.image_url ? absUrl(r.image_url) : null
		}));
	}
});
var withinWindow = (startsAt, endsAt) => {
	const now = Date.now();
	if (startsAt && new Date(startsAt).getTime() > now) return false;
	if (endsAt && new Date(endsAt).getTime() < now) return false;
	return true;
};
var dealsQuery = queryOptions({
	queryKey: ["deals"],
	queryFn: async () => {
		const { data, error } = await supabase.from("deals").select("*").eq("active", true).order("sort_order", { ascending: true });
		if (error) throw error;
		return (data ?? []).map((r) => ({
			id: r.id,
			slug: r.slug ?? r.id,
			title: r.title,
			subtitle: r.subtitle,
			description: r.description,
			badge: r.badge,
			discountPercent: r.discount_percent ?? 0,
			code: r.code,
			image: r.image_url ? absUrl(r.image_url) : null,
			ctaLabel: r.cta_label,
			ctaHref: r.cta_href,
			startsAt: r.starts_at,
			endsAt: r.ends_at
		})).filter((d) => withinWindow(d.startsAt, d.endsAt));
	}
});
var popupsQuery = queryOptions({
	queryKey: ["popups"],
	queryFn: async () => {
		const { data, error } = await supabase.from("popups").select("*").eq("active", true).order("sort_order", { ascending: true });
		if (error) throw error;
		return (data ?? []).map((r) => ({
			id: r.id,
			title: r.title,
			message: r.message,
			image: r.image_url ? absUrl(r.image_url) : null,
			badge: r.badge,
			ctaLabel: r.cta_label,
			ctaHref: r.cta_href,
			couponCode: r.coupon_code,
			delaySeconds: r.delay_seconds ?? 6,
			triggerType: r.trigger_type ?? "delay",
			frequency: r.frequency ?? "session",
			startsAt: r.starts_at,
			endsAt: r.ends_at
		})).filter((p) => withinWindow(p.startsAt, p.endsAt));
	}
});
var couponsQuery = queryOptions({
	queryKey: ["coupons"],
	queryFn: async () => {
		const { data, error } = await supabase.from("coupons").select("*").eq("active", true);
		if (error) throw error;
		return (data ?? []).map((r) => ({
			id: r.id,
			code: r.code,
			description: r.description,
			discountType: r.discount_type,
			discountValue: Number(r.discount_value ?? 0),
			minOrder: Number(r.min_order ?? 0),
			expiresAt: r.expires_at
		})).filter((c) => !c.expiresAt || new Date(c.expiresAt).getTime() > Date.now());
	}
});
var reviewsQuery = (productId) => queryOptions({
	queryKey: ["reviews", productId ?? "all"],
	queryFn: async () => {
		let q = supabase.from("reviews").select("*").eq("approved", true);
		if (productId) q = q.eq("product_id", productId);
		const { data, error } = await q.order("created_at", { ascending: false });
		if (error) throw error;
		return (data ?? []).map((r) => ({
			id: r.id,
			productId: r.product_id,
			customerName: r.customer_name,
			rating: r.rating ?? 5,
			title: r.title,
			body: r.body,
			createdAt: r.created_at
		}));
	}
});
/** Approved reviews marked as "featured" — shown as testimonials on the home page. */
var testimonialsQuery = queryOptions({
	queryKey: ["reviews", "featured"],
	queryFn: async () => {
		const { data, error } = await supabase.from("reviews").select("*").eq("approved", true).eq("featured", true).order("created_at", { ascending: false }).limit(8);
		if (error) throw error;
		return (data ?? []).map((r) => ({
			id: r.id,
			name: r.customer_name,
			role: r.customer_role ?? null,
			quote: r.body ?? r.title ?? "",
			rating: r.rating ?? 5
		}));
	}
});
var blogPostsQuery = queryOptions({
	queryKey: ["blog_posts"],
	queryFn: async () => {
		const { data, error } = await supabase.from("blog_posts").select("*").eq("published", true).order("published_at", { ascending: false });
		if (error) throw error;
		return (data ?? []).map((r) => ({
			id: r.id,
			slug: r.slug,
			title: r.title,
			excerpt: r.excerpt,
			content: r.content,
			author: r.author,
			category: r.category,
			image: r.image_url ? absUrl(r.image_url) : null,
			date: new Date(r.published_at).toLocaleDateString("en-US", {
				month: "long",
				day: "2-digit",
				year: "numeric"
			})
		}));
	}
});
var paymentSettingsQuery = queryOptions({
	queryKey: ["payment_settings"],
	staleTime: 6e4,
	queryFn: async () => {
		const { data: sessionData } = await supabase.auth.getSession();
		const source = sessionData.session ? "payment_settings" : "payment_settings_public";
		const { data, error } = await supabase.from(source).select("*").order("created_at", { ascending: true }).limit(1).maybeSingle();
		if (error) throw error;
		const r = data ?? {};
		return {
			id: r.id ?? "",
			currency: r.currency ?? "PKR",
			currencySymbol: r.currency_symbol ?? "Rs",
			codEnabled: r.cod_enabled ?? true,
			codCharge: Number(r.cod_charge ?? 0),
			deliveryCharge: Number(r.delivery_charge ?? 250),
			freeDeliveryAbove: Number(r.free_delivery_above ?? 5e3),
			easypaisaEnabled: r.easypaisa_enabled ?? false,
			easypaisaNumber: r.easypaisa_number ?? null,
			easypaisaAccountName: r.easypaisa_account_name ?? null,
			jazzcashEnabled: r.jazzcash_enabled ?? false,
			jazzcashNumber: r.jazzcash_number ?? null,
			jazzcashAccountName: r.jazzcash_account_name ?? null,
			bankEnabled: r.bank_enabled ?? false,
			bankName: r.bank_name ?? null,
			bankAccountTitle: r.bank_account_title ?? null,
			bankAccountNumber: r.bank_account_number ?? null,
			bankIban: r.bank_iban ?? null,
			warrantyMonths: r.warranty_months ?? 12,
			warrantyNote: r.warranty_note ?? "",
			paymentNote: r.payment_note ?? null
		};
	}
});
var faqsQuery = queryOptions({
	queryKey: ["faqs"],
	staleTime: 6e4,
	queryFn: async () => {
		const { data, error } = await supabase.from("faqs").select("id,question,answer,category,sort_order").eq("active", true).order("sort_order", { ascending: true });
		if (error) throw error;
		return (data ?? []).map((r) => ({
			id: r.id,
			question: r.question,
			answer: r.answer,
			category: r.category ?? null
		}));
	}
});
//#endregion
export { reviewsQuery as _, couponsQuery as a, faqsQuery as c, isWatch as d, listPrice as f, productsQuery as g, popupsQuery as h, colorSlug as i, heroSlidesQuery as l, paymentSettingsQuery as m, blogPostsQuery as n, dealsQuery as o, mapProduct as p, collectionsQuery as r, effectivePrice as s, absUrl as t, isPerfume as u, testimonialsQuery as v };
