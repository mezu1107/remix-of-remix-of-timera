import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { G as MessageCircle, I as Phone, T as ShoppingCart, Y as Mail } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { n as formatPrice } from "./utils-CyfkpwkR.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.leads-DwaaSWln.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STAGES = [
	{
		id: "all",
		label: "All shoppers"
	},
	{
		id: "add_to_cart",
		label: "Added to cart"
	},
	{
		id: "checkout_started",
		label: "Reached checkout"
	},
	{
		id: "checkout_details",
		label: "Left details"
	},
	{
		id: "purchased",
		label: "Purchased"
	}
];
var stageLabel = {
	add_to_cart: "Added to cart",
	checkout_started: "Reached checkout",
	checkout_details: "Left details",
	purchased: "Purchased"
};
var fmt = (v) => v ? new Date(v).toLocaleString("en-PK", {
	day: "numeric",
	month: "short",
	hour: "2-digit",
	minute: "2-digit"
}) : "—";
function LeadsAdmin() {
	const [search, setSearch] = (0, import_react.useState)("");
	const [stage, setStage] = (0, import_react.useState)("all");
	const list = useQuery({
		queryKey: ["admin", "cart-leads"],
		queryFn: async () => {
			const { data, error } = await supabase.from("cart_leads").select("*").order("updated_at", { ascending: false }).limit(500);
			if (error) throw error;
			return data ?? [];
		},
		refetchInterval: 3e4
	});
	const rows = (0, import_react.useMemo)(() => {
		const t = search.trim().toLowerCase();
		return (list.data ?? []).filter((r) => stage === "all" ? true : r.stage === stage).filter((r) => !t ? true : Object.values(r).some((v) => typeof v === "string" && v.toLowerCase().includes(t)));
	}, [
		list.data,
		search,
		stage
	]);
	const abandoned = (list.data ?? []).filter((r) => r.stage !== "purchased");
	const reachable = abandoned.filter((r) => r.email || r.phone);
	const lostValue = abandoned.reduce((a, r) => a + Number(r.cart_value ?? 0), 0);
	const exportCsv = () => {
		const head = [
			"stage",
			"name",
			"email",
			"phone",
			"city",
			"items",
			"cart_value",
			"order_number",
			"updated_at"
		];
		const body = rows.map((r) => [
			r.stage,
			r.name ?? "",
			r.email ?? "",
			r.phone ?? "",
			r.city ?? "",
			(r.items ?? []).map((i) => `${i.quantity}x ${i.name}`).join(" | "),
			r.cart_value ?? 0,
			r.order_number ?? "",
			r.updated_at ?? ""
		].map((v) => `"${String(v).replace(/"/g, "\"\"")}"`).join(","));
		const blob = new Blob([[head.join(","), ...body].join("\n")], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "timera-leads.csv";
		a.click();
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-2xl sm:text-3xl",
					children: "Shopper leads"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Everyone who added to cart or started checkout — follow up with the ones who never ordered."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: exportCsv,
					children: "Export CSV"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Abandoned carts",
						value: String(abandoned.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Contactable leads",
						value: String(reachable.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Value left in carts",
						value: formatPrice(lostValue)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [STAGES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: stage === s.id ? "default" : "outline",
					onClick: () => setStage(s.id),
					children: s.label
				}, s.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "ml-auto w-full sm:w-64",
					placeholder: "Search name, email, phone…",
					value: search,
					onChange: (e) => setSearch(e.target.value)
				})]
			}),
			list.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-16 text-center text-sm text-muted-foreground",
				children: "Loading leads…"
			}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl border border-border p-10 text-center text-sm text-muted-foreground",
				children: "No leads captured yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: r.name || r.email || r.phone || "Anonymous shopper"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground",
									children: [
										r.email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5" }), r.email]
										}),
										r.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), r.phone]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-3.5 w-3.5" }),
												r.item_count ?? 0,
												" items"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fmt(r.updated_at) })
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-3 py-1 text-xs ${r.stage === "purchased" ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`,
									children: stageLabel[r.stage] ?? r.stage
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: formatPrice(Number(r.cart_value ?? 0))
								})]
							})]
						}),
						(r.items ?? []).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: (r.items ?? []).map((i) => `${i.quantity}× ${i.name}`).join(", ")
						}),
						r.stage !== "purchased" && (r.phone || r.email) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [r.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${String(r.phone).replace(/\D/g, "")}`,
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mr-1.5 h-3.5 w-3.5" }), " WhatsApp"]
								})
							}), r.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${r.email}?subject=Your Timera cart is waiting`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mr-1.5 h-3.5 w-3.5" }), " Email"]
								})
							})]
						})
					]
				}, r.id))
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-serif text-2xl",
			children: value
		})]
	});
}
//#endregion
export { LeadsAdmin as component };
