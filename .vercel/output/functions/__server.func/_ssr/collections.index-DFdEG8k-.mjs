import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { Lt as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { g as productsQuery, r as collectionsQuery } from "./catalog-CjOF-ztI.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections.index-DFdEG8k-.js
var import_jsx_runtime = require_jsx_runtime();
function CollectionsPage() {
	const { data: collections = [], isLoading } = useQuery(collectionsQuery);
	const { data: products = [] } = useQuery(productsQuery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.3em] text-primary",
				children: "Curated"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-3 font-serif text-5xl md:text-6xl",
				children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic gold-text",
					children: "collections"
				})]
			}),
			isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16 text-muted-foreground",
				children: "Loading collections…"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: collections.map((c, i) => {
					const count = products.filter((p) => p.collection === c.name).length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .6,
							delay: i * .06
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/collections/$slug",
							params: { slug: c.slug },
							className: "group relative block aspect-[4/5] overflow-hidden rounded-lg bg-card",
							children: [
								c.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.image,
									alt: c.name,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-6 text-background",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] uppercase tracking-[0.3em] text-background/80",
											children: c.tagline
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-2 font-serif text-3xl",
											children: c.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 flex items-center gap-2 text-xs uppercase tracking-widest",
											children: [
												count,
												" ",
												count === 1 ? "piece" : "pieces",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })
											]
										})
									]
								})
							]
						})
					}, c.id);
				})
			})
		]
	});
}
//#endregion
export { CollectionsPage as component };
