import { t as supabase } from "./client-CqS_jkNP.mjs";
import { p as mapProduct, s as effectivePrice } from "./catalog-CjOF-ztI.mjs";
import { N as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-HKAP3yrK.js
var $$splitComponentImporter = () => import("./product._slug-cSsDVJHC.mjs");
var Route = createFileRoute("/product/$slug")({
	validateSearch: (search) => typeof search.color === "string" && search.color ? { color: search.color } : {},
	loader: async ({ params }) => {
		const { data, error } = await supabase.from("products").select("*").eq("slug", params.slug).eq("active", true).maybeSingle();
		if (error) throw error;
		if (!data) throw notFound();
		return { product: mapProduct(data) };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Not found — Timera" }, {
			name: "robots",
			content: "noindex"
		}] };
		const p = loaderData.product;
		const shareImage = /^https:\/\//i.test(p.image) ? p.image : null;
		const isPerfume = p.productType === "perfume";
		const base = (p.description ?? "").trim();
		const fallback = isPerfume ? `${p.name} — ${p.concentration ?? "long-lasting"} fragrance${p.sizeMl ? `, ${p.sizeMl}ml` : ""}. Cash on delivery across Pakistan.` : `${p.name} — ${p.movement} movement, ${p.case} case. 1-year warranty. Cash on delivery across Pakistan.`;
		const metaDescription = (base.length >= 50 ? base : fallback).replace(/\s+/g, " ").trim().slice(0, 155);
		return {
			meta: [
				{ title: isPerfume ? `${p.name} — ${p.brand} Perfume | Timera Pakistan` : `${p.name} — ${p.brand} Watch | Cash on Delivery | Timera Pakistan` },
				{
					name: "description",
					content: metaDescription
				},
				{
					name: "keywords",
					content: isPerfume ? `${p.name}, ${p.brand} perfume, buy perfume online Pakistan, cash on delivery, Timera` : `${p.name}, ${p.brand}, ${p.collection} watch, buy watch online Pakistan, COD watch, Timera`
				},
				{
					property: "og:title",
					content: `${p.name} — Timera`
				},
				{
					property: "og:description",
					content: metaDescription
				},
				{
					property: "og:type",
					content: "product"
				},
				{
					property: "og:url",
					content: `https://timera.store/product/${p.slug}`
				},
				...shareImage ? [{
					property: "og:image",
					content: shareImage
				}, {
					name: "twitter:image",
					content: shareImage
				}] : []
			],
			links: [{
				rel: "canonical",
				href: `https://timera.store/product/${p.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Product",
					name: p.name,
					...shareImage ? { image: shareImage } : {},
					description: p.description,
					brand: {
						"@type": "Brand",
						name: p.brand
					},
					...p.reviews > 0 ? { aggregateRating: {
						"@type": "AggregateRating",
						ratingValue: p.rating,
						reviewCount: p.reviews
					} } : {},
					offers: {
						"@type": "Offer",
						url: `https://timera.store/product/${p.slug}`,
						priceCurrency: "PKR",
						price: effectivePrice(p),
						availability: p.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
					}
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
