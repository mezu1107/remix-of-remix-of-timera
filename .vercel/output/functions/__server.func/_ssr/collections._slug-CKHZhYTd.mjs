import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { zt as ArrowLeft } from "../_libs/lucide-react.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { g as productsQuery, r as collectionsQuery } from "./catalog-DP9o3dVy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./collections._slug-BguBJQV-.mjs";
import { t as ProductCard } from "./ProductCard-nExjepVf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._slug-CKHZhYTd.js
var import_jsx_runtime = require_jsx_runtime();
function CollectionDetail() {
	const { slug } = Route.useParams();
	const { data: collections = [], isLoading, isError } = useQuery(collectionsQuery);
	const { data: products = [], isLoading: productsLoading } = useQuery(productsQuery);
	const slugify = (v) => v.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
	const collection = collections.find((c) => (c.slug ?? slugify(c.name)) === slug || slugify(c.name) === slug);
	const items = collection ? products.filter((p) => slugify(p.collection ?? "") === slugify(collection.name)) : [];
	if (isLoading && !isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe py-24 text-muted-foreground",
		children: "Loading collection…"
	});
	if (!collection) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-4xl",
			children: "Collection not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/collections",
			className: "mt-6 inline-flex items-center gap-2 text-primary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " All collections"]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/collections",
				className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " All collections"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.3em] text-primary",
						children: collection.tagline ?? "Collection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-serif text-4xl md:text-5xl",
						children: collection.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-muted-foreground",
						children: [
							items.length,
							" ",
							items.length === 1 ? "timepiece" : "timepieces",
							" in this collection."
						]
					})
				] }), collection.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: collection.image,
					alt: collection.name,
					className: "aspect-[4/3] w-full rounded-2xl object-cover"
				})]
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16 text-muted-foreground",
				children: productsLoading ? "Loading pieces…" : "No products in this collection yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4",
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
export { CollectionDetail as component };
