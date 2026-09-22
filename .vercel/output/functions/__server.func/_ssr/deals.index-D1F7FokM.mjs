import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { Lt as ArrowUpRight, Pt as BadgePercent, b as Tag } from "../_libs/lucide-react.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { g as productsQuery, o as dealsQuery } from "./catalog-DP9o3dVy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/deals.index-D1F7FokM.js
var import_jsx_runtime = require_jsx_runtime();
function DealsPage() {
	const { data: deals = [], isLoading } = useQuery(dealsQuery);
	const { data: products = [] } = useQuery(productsQuery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.3em] text-primary",
				children: "Limited time"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-3 font-serif text-5xl md:text-6xl",
				children: ["Current ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic gold-text",
					children: "deals"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted-foreground",
				children: "Every live offer in one place. Tap a deal to see exactly which timepieces are included."
			}),
			isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16 text-muted-foreground",
				children: "Loading deals…"
			}) : deals.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16 text-muted-foreground",
				children: "No deals are running right now. Check back soon."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2",
				children: deals.map((d, i) => {
					const count = products.filter((p) => p.dealId === d.id).length;
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
							to: "/deals/$slug",
							params: { slug: d.slug },
							className: "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-luxe",
							children: [d.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[16/9] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: d.image,
									alt: d.title,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col gap-3 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest",
										children: [
											d.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-primary/10 px-3 py-1 text-primary",
												children: d.badge
											}),
											d.discountPercent > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 rounded-full bg-foreground/5 px-3 py-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgePercent, { className: "h-3.5 w-3.5" }),
													" ",
													d.discountPercent,
													"% off"
												]
											}),
											d.code && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 rounded-full bg-foreground/5 px-3 py-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3.5 w-3.5" }),
													" ",
													d.code
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-serif text-2xl",
										children: d.title
									}),
									d.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: d.subtitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-auto flex items-center gap-2 text-xs uppercase tracking-widest text-primary",
										children: [
											count,
											" ",
											count === 1 ? "watch" : "watches",
											" in this deal ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })
										]
									})
								]
							})]
						})
					}, d.id);
				})
			})
		]
	});
}
//#endregion
export { DealsPage as component };
