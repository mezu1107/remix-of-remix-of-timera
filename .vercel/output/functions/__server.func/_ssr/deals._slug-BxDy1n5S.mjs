import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { Pt as BadgePercent, b as Tag, zt as ArrowLeft } from "../_libs/lucide-react.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { g as productsQuery, o as dealsQuery } from "./catalog-DP9o3dVy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ProductCard } from "./ProductCard-nExjepVf.mjs";
import { t as Route } from "./deals._slug-D6GU-U-j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/deals._slug-BxDy1n5S.js
var import_jsx_runtime = require_jsx_runtime();
function DealDetail() {
	const { slug } = Route.useParams();
	const { data: deals = [], isLoading } = useQuery(dealsQuery);
	const { data: products = [] } = useQuery(productsQuery);
	const deal = deals.find((d) => d.slug === slug || d.id === slug);
	const items = deal ? products.filter((p) => p.dealId === deal.id) : [];
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe py-24 text-muted-foreground",
		children: "Loading deal…"
	});
	if (!deal) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-4xl",
			children: "This deal has ended"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/deals",
			className: "mt-6 inline-flex items-center gap-2 text-primary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " See live deals"]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/deals",
				className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " All deals"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest",
						children: [
							deal.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary/10 px-3 py-1 text-primary",
								children: deal.badge
							}),
							deal.discountPercent > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-foreground/5 px-3 py-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgePercent, { className: "h-3.5 w-3.5" }),
									" ",
									deal.discountPercent,
									"% off"
								]
							}),
							deal.code && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-foreground/5 px-3 py-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3.5 w-3.5" }),
									" Code ",
									deal.code
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-serif text-4xl md:text-5xl",
						children: deal.title
					}),
					deal.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg text-muted-foreground",
						children: deal.subtitle
					}),
					deal.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted-foreground",
						children: deal.description
					})
				] }), deal.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: deal.image,
					alt: deal.title,
					className: "aspect-[4/3] w-full rounded-2xl object-cover"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 font-serif text-2xl",
				children: "Watches in this deal"
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "No products are linked to this deal yet. Assign products to it in Admin → Products → Part of deal."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4",
				children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					index: i,
					priority: i < 4
				}, p.id))
			})
		]
	});
}
//#endregion
export { DealDetail as component };
