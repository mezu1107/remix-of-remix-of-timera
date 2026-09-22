import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { n as formatPrice } from "./utils-CyfkpwkR.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-Bvt9fXID.js
var import_jsx_runtime = require_jsx_runtime();
function useCount(table) {
	return useQuery({
		queryKey: [
			"admin",
			"count",
			table
		],
		queryFn: async () => {
			const { count, error } = await supabase.from(table).select("id", {
				count: "exact",
				head: true
			});
			if (error) throw error;
			return count ?? 0;
		}
	});
}
function AdminOverview() {
	const products = useCount("products");
	const slides = useCount("hero_slides");
	const collections = useCount("collections");
	const posts = useCount("blog_posts");
	const orders = useCount("orders");
	const revenue = useQuery({
		queryKey: ["admin", "revenue"],
		queryFn: async () => {
			const { data, error } = await supabase.from("orders").select("total");
			if (error) throw error;
			return (data ?? []).reduce((a, o) => a + Number(o.total ?? 0), 0);
		}
	});
	const analytics = useQuery({
		queryKey: [
			"admin",
			"analytics",
			"overview"
		],
		refetchInterval: 15e3,
		queryFn: async () => {
			const since24h = (/* @__PURE__ */ new Date(Date.now() - 1440 * 60 * 1e3)).toISOString();
			const liveSince = Date.now() - 300 * 1e3;
			const hourSince = Date.now() - 3600 * 1e3;
			const { data, error } = await supabase.from("analytics_events").select("event_name,session_id,page_path,product_slug,product_name,created_at").gte("created_at", since24h).order("created_at", { ascending: false }).limit(2e3);
			if (error) throw error;
			const rows = data ?? [];
			const count = (name) => rows.filter((r) => r.event_name === name).length;
			const countSince = (name, ts) => rows.filter((r) => r.event_name === name && new Date(r.created_at).getTime() >= ts).length;
			const liveVisitors = new Set(rows.filter((r) => r.session_id && new Date(r.created_at).getTime() >= liveSince).map((r) => String(r.session_id))).size;
			const activeCarts = new Set(rows.filter((r) => r.event_name === "add_to_cart" && r.session_id && new Date(r.created_at).getTime() >= hourSince).map((r) => String(r.session_id))).size;
			const topProducts = Object.values(rows.filter((r) => r.event_name === "view_item" && r.product_name).reduce((acc, r) => {
				const slug = String(r.product_slug ?? r.product_name);
				acc[slug] = acc[slug] ?? {
					name: String(r.product_name),
					slug,
					views: 0
				};
				acc[slug].views += 1;
				return acc;
			}, {})).sort((a, b) => b.views - a.views).slice(0, 5);
			const topPages = Object.entries(rows.filter((r) => r.event_name === "page_view" && r.page_path).reduce((acc, r) => {
				const path = String(r.page_path);
				acc[path] = (acc[path] ?? 0) + 1;
				return acc;
			}, {})).map(([path, views]) => ({
				path,
				views
			})).sort((a, b) => b.views - a.views).slice(0, 5);
			return {
				liveVisitors,
				activeCarts,
				addToCartHour: countSince("add_to_cart", hourSince),
				checkoutsHour: countSince("begin_checkout", hourSince),
				purchasesHour: countSince("purchase", hourSince),
				pageViewsHour: countSince("page_view", hourSince),
				pageViews: count("page_view"),
				productViews: count("view_item"),
				checkouts: count("begin_checkout"),
				purchases: count("purchase"),
				topProducts,
				topPages
			};
		}
	});
	const cards = [
		{
			label: "Products",
			value: products.data ?? 0,
			to: "/admin/products"
		},
		{
			label: "Hero Slides",
			value: slides.data ?? 0,
			to: "/admin/hero"
		},
		{
			label: "Collections",
			value: collections.data ?? 0,
			to: "/admin/collections"
		},
		{
			label: "Journal Posts",
			value: posts.data ?? 0,
			to: "/admin/blog"
		},
		{
			label: "Orders",
			value: orders.data ?? 0,
			to: "/admin/orders"
		},
		{
			label: "Revenue",
			value: formatPrice(revenue.data ?? 0),
			to: "/admin/orders"
		},
		{
			label: "Live Visitors",
			value: analytics.data?.liveVisitors ?? 0,
			to: "/admin"
		},
		{
			label: "Page Views 24h",
			value: analytics.data?.pageViews ?? 0,
			to: "/admin"
		},
		{
			label: "Checkouts 24h",
			value: analytics.data?.checkouts ?? 0,
			to: "/admin/orders"
		},
		{
			label: "Purchases 24h",
			value: analytics.data?.purchases ?? 0,
			to: "/admin/orders"
		}
	];
	const live = [
		{
			label: "Live visitors (5m)",
			value: analytics.data?.liveVisitors ?? 0,
			hot: true
		},
		{
			label: "Active carts (1h)",
			value: analytics.data?.activeCarts ?? 0
		},
		{
			label: "Add to cart (1h)",
			value: analytics.data?.addToCartHour ?? 0
		},
		{
			label: "Checkouts (1h)",
			value: analytics.data?.checkoutsHour ?? 0
		},
		{
			label: "Purchases (1h)",
			value: analytics.data?.purchasesHour ?? 0
		},
		{
			label: "Page views (1h)",
			value: analytics.data?.pageViewsHour ?? 0
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-3xl md:text-4xl",
			children: "Overview"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: "Every change you make here appears on the public storefront immediately. Live stats refresh every 15s."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative flex h-2.5 w-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.25em] text-primary",
					children: "Live now"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
				children: live.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border/60 bg-background/40 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-widest text-muted-foreground",
						children: l.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-1 font-serif text-2xl ${l.hot ? "gold-text" : ""}`,
						children: l.value
					})]
				}, l.label))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: c.to,
				className: "rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-widest text-muted-foreground",
					children: c.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-serif text-4xl gold-text",
					children: c.value
				})]
			}, c.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Top products viewed today",
				children: (analytics.data?.topProducts.length ?? 0) === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "No product views tracked yet."
				}) : analytics.data?.topProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-b border-border/50 py-2 text-sm last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate",
						children: p.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 text-muted-foreground",
						children: [p.views, " views"]
					})]
				}, p.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Top pages today",
				children: (analytics.data?.topPages.length ?? 0) === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "No page views tracked yet."
				}) : analytics.data?.topPages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-b border-border/50 py-2 text-sm last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate",
						children: p.path
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 text-muted-foreground",
						children: [p.views, " views"]
					})]
				}, p.path))
			})]
		})
	] });
}
function Panel({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-serif text-xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children
		})]
	});
}
//#endregion
export { AdminOverview as component };
