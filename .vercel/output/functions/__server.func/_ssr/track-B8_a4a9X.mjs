import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { B as Package, Ct as CircleX, I as Phone, J as MapPin, O as ShieldCheck, Q as LoaderCircle, Tt as CircleCheck, at as House, m as Truck, xt as Clock } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { n as formatPrice } from "./utils-CyfkpwkR.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-B8_a4a9X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FLOW = [
	{
		key: "pending",
		label: "Order placed",
		icon: Clock,
		note: "We received your order"
	},
	{
		key: "confirmed",
		label: "Confirmed",
		icon: CircleCheck,
		note: "Payment / COD confirmed"
	},
	{
		key: "processing",
		label: "Packed",
		icon: Package,
		note: "Inspected & packed by our team"
	},
	{
		key: "shipped",
		label: "In transit",
		icon: Truck,
		note: "Handed to the courier"
	},
	{
		key: "delivered",
		label: "Delivered",
		icon: House,
		note: "Enjoy your Timera"
	}
];
var fmtDate = (v) => v ? new Date(v).toLocaleString("en-PK", {
	day: "numeric",
	month: "short",
	hour: "2-digit",
	minute: "2-digit"
}) : null;
function TrackPage() {
	const [orderNumber, setOrderNumber] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const lookup = useMutation({ mutationFn: async () => {
		const num = orderNumber.trim();
		if (!num) throw new Error("Please enter your order number.");
		const { data: session } = await supabase.auth.getSession();
		const token = session.session?.access_token;
		const qs = email.trim() ? `?email=${encodeURIComponent(email.trim())}` : "";
		const res = await fetch(`/api/public/v1/orders/${encodeURIComponent(num)}${qs}`, { headers: token ? { Authorization: `Bearer ${token}` } : void 0 });
		const body = await res.json();
		if (!res.ok || !body?.ok) throw new Error(body?.error ?? "We could not find that order.");
		return body.order;
	} });
	const order = lookup.data;
	const cancelled = order?.status === "cancelled";
	const historyAt = (key) => order?.status_history?.find((h) => h.status === key)?.at ?? null;
	const currentIndex = order ? Math.max(0, FLOW.findIndex((s) => s.key === order.status)) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-16 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.3em] text-primary animate-in fade-in slide-in-from-bottom-2 duration-500",
				children: "Track Order"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-4xl sm:text-5xl animate-in fade-in slide-in-from-bottom-3 duration-700",
				children: "Where's my watch?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted-foreground max-w-lg",
				children: [
					"Enter the order number from your confirmation (e.g. ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: "TM-XXXXXX"
					}),
					"). Guests should add the email used at checkout."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					lookup.mutate();
				},
				className: "mt-8 grid gap-2 sm:grid-cols-[1.2fr_1fr_auto]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Order number",
						value: orderNumber,
						onChange: (e) => setOrderNumber(e.target.value),
						className: "h-12"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "email",
						placeholder: "Email used at checkout",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						className: "h-12"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						className: "h-12 px-8",
						disabled: lookup.isPending,
						children: lookup.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Track"
					})
				]
			}),
			lookup.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive animate-in fade-in",
				children: lookup.error.message
			}),
			order && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Order"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-2xl",
									children: order.order_number
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: ["Placed ", fmtDate(order.created_at)]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full text-xs px-3 py-1 h-fit uppercase tracking-widest ${cancelled ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"}`,
								children: order.status
							})]
						}),
						(order.courier || order.tracking_number || order.estimated_delivery) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-3 text-sm",
							children: [
								order.courier && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border/70 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase tracking-widest text-muted-foreground",
										children: "Courier"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1",
										children: order.courier
									})]
								}),
								order.tracking_number && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border/70 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase tracking-widest text-muted-foreground",
										children: "Tracking #"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono",
										children: order.tracking_number
									})]
								}),
								order.estimated_delivery && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border/70 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase tracking-widest text-muted-foreground",
										children: "Estimated delivery"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1",
										children: fmtDate(order.estimated_delivery)
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-6",
							children: cancelled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-10 w-10 rounded-full bg-destructive/10 text-destructive flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: "Order cancelled"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: fmtDate(historyAt("cancelled") ?? order.updated_at)
									})]
								})]
							}) : FLOW.map((step, i) => {
								const at = historyAt(step.key);
								const done = i <= currentIndex;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"} ${i === currentIndex ? "ring-4 ring-primary/15 animate-pulse" : ""}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 pt-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `font-medium ${done ? "" : "text-muted-foreground"}`,
											children: step.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: at ? fmtDate(at) : step.note
										})]
									})]
								}, step.key);
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "Items in this order"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 divide-y divide-border/60",
							children: (order.items ?? []).map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 py-4",
								children: [
									it.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: it.image_url,
										alt: it.name ?? "Product",
										loading: "lazy",
										className: "h-16 w-16 rounded-xl object-cover border border-border/60"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-16 w-16 rounded-xl bg-muted flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-5 w-5 text-muted-foreground" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-medium",
											children: it.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												[
													it.brand,
													it.color,
													it.size
												].filter(Boolean).join(" · ") || "—",
												" · Qty ",
												it.quantity ?? 1
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										children: formatPrice(Number(it.price ?? 0) * Number(it.quantity ?? 1))
									})
								]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 space-y-1 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: formatPrice(Number(order.subtotal)) })]
								}),
								Number(order.discount) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Discount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: ["−", formatPrice(Number(order.discount))] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Delivery" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: Number(order.shipping) > 0 ? formatPrice(Number(order.shipping)) : "Free" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between pt-2 text-base font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: formatPrice(Number(order.total)) })]
								})
							]
						}),
						(order.shipping_address || order.customer_phone) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-2 text-sm",
							children: [order.shipping_address && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: order.shipping_address })]
							}), order.customer_phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: order.customer_phone })]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-4 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-primary" }), " Authenticity guaranteed"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-primary" }), " Nationwide courier coverage"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), " 7-day easy returns"]
					})
				]
			})
		]
	});
}
//#endregion
export { TrackPage as component };
