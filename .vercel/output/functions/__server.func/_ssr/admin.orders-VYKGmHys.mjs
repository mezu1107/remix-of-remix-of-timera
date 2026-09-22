import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { B as Package, I as Phone, J as MapPin, N as RefreshCw, Ot as ChevronRight, Q as LoaderCircle, Y as Mail, ct as Globe, kt as ChevronLeft, m as Truck } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { n as formatPrice } from "./utils-CyfkpwkR.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { a as useQueryClient, r as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
import { t as Label } from "./label-DWh09J_8.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Textarea } from "./textarea-CSVRhi8K.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7QbLeDs.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./dialog-z7Eue78-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.orders-VYKGmHys.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUSES = [
	"all",
	"pending",
	"confirmed",
	"processing",
	"shipped",
	"delivered",
	"cancelled"
];
var PAGE_SIZE = 50;
var fmt = (v) => v ? new Date(v).toLocaleString("en-PK", {
	day: "numeric",
	month: "short",
	hour: "2-digit",
	minute: "2-digit"
}) : "—";
var toLocalInput = (v) => {
	if (!v) return "";
	const d = new Date(v);
	const pad = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};
function sourceBadge(row) {
	const src = row.utm_source ?? row.attribution?.last?.utm_source ?? row.attribution?.first?.utm_source;
	const campaign = row.utm_campaign ?? row.attribution?.last?.utm_campaign ?? row.attribution?.first?.utm_campaign;
	if (!src) return null;
	const label = campaign ? `${src} / ${campaign}` : src;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider",
		style: {
			background: /facebook|instagram|meta/i.test(String(src)) ? "#1877F2" : "#252525",
			color: "#fff"
		},
		title: `Campaign: ${campaign ?? "unknown"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-2.5 w-2.5" }), label]
	});
}
function OrdersAdmin() {
	const qc = useQueryClient();
	const [search, setSearch] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [page, setPage] = (0, import_react.useState)(0);
	const [active, setActive] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({});
	const list = useQuery({
		queryKey: [
			"admin",
			"orders",
			statusFilter,
			page
		],
		queryFn: async () => {
			let q = supabase.from("orders").select("*", { count: "exact" }).order("created_at", { ascending: false }).range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);
			if (statusFilter !== "all") q = q.eq("status", statusFilter);
			const { data, error, count } = await q;
			if (error) throw error;
			return {
				rows: data ?? [],
				total: count ?? 0
			};
		},
		refetchInterval: 3e4,
		staleTime: 15e3
	});
	const rows = (0, import_react.useMemo)(() => {
		const t = search.trim().toLowerCase();
		const all = list.data?.rows ?? [];
		if (!t) return all;
		return all.filter((r) => Object.values(r).some((v) => typeof v === "string" && v.toLowerCase().includes(t)));
	}, [list.data, search]);
	const totalPages = Math.ceil((list.data?.total ?? 0) / PAGE_SIZE);
	const changeStatus = (0, import_react.useCallback)((v) => {
		setStatusFilter(v);
		setPage(0);
	}, []);
	const open = (row) => {
		setActive(row);
		setForm({
			status: row.status ?? "pending",
			courier: row.courier ?? "",
			tracking_number: row.tracking_number ?? "",
			estimated_delivery: toLocalInput(row.estimated_delivery),
			notes: row.notes ?? ""
		});
	};
	const save = useMutation({
		mutationFn: async () => {
			const { error } = await supabase.from("orders").update({
				status: form.status,
				courier: form.courier || null,
				tracking_number: form.tracking_number || null,
				estimated_delivery: form.estimated_delivery ? new Date(form.estimated_delivery).toISOString() : null,
				notes: form.notes || null
			}).eq("id", active.id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Order updated");
			setActive(null);
			qc.invalidateQueries({ queryKey: ["admin", "orders"] });
		},
		onError: (e) => toast.error(e?.message ?? "Could not update the order")
	});
	const items = Array.isArray(active?.items) ? active.items : [];
	const statusCounts = (0, import_react.useMemo)(() => {
		const counts = {};
		for (const row of list.data?.rows ?? []) counts[row.status] = (counts[row.status] ?? 0) + 1;
		return counts;
	}, [list.data]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-3xl",
					children: "Orders"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: [
						list.data?.total ?? "…",
						" total orders",
						statusFilter !== "all" && ` · filtered by "${statusFilter}"`
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => qc.invalidateQueries({ queryKey: ["admin", "orders"] }),
					disabled: list.isFetching,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `mr-2 h-3.5 w-3.5 ${list.isFetching ? "animate-spin" : ""}` }), "Refresh"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => changeStatus(s),
						className: `rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider transition
                ${statusFilter === s ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`,
						children: [s, s !== "all" && statusCounts[s] ? ` (${statusCounts[s]})` : ""]
					}, s))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Search order, customer, phone…",
					value: search,
					onChange: (e) => setSearch(e.target.value),
					className: "max-w-xs h-9 text-sm"
				})]
			}),
			list.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Loading orders…"]
			}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl border border-border/70 p-8 text-center text-sm text-muted-foreground",
				children: statusFilter !== "all" ? `No "${statusFilter}" orders found.` : "No orders yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: rows.map((row) => {
					const rowItems = Array.isArray(row.items) ? row.items : [];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => open(row),
						className: "w-full rounded-xl border border-border/60 bg-card p-3.5 text-left transition-all hover:border-primary/40 hover:shadow-sm sm:p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex -space-x-2.5",
									children: [rowItems.slice(0, 3).map((it, i) => it.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: it.image_url,
										alt: it.name ?? "",
										loading: "lazy",
										className: "h-10 w-10 rounded-lg border-2 border-background object-cover"
									}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-10 w-10 rounded-lg border-2 border-background bg-muted flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-3.5 w-3.5 text-muted-foreground" })
									}, i)), rowItems.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "h-10 w-10 rounded-lg border-2 border-background bg-muted text-[10px] font-semibold flex items-center justify-center text-muted-foreground",
										children: ["+", rowItems.length - 3]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 flex-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-sm font-semibold",
										children: row.order_number
									}), sourceBadge(row)]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										row.customer_name,
										row.customer_phone ? ` · ${row.customer_phone}` : "",
										" · ",
										fmt(row.created_at)
									]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${{
										pending: "bg-amber-100 text-amber-800",
										confirmed: "bg-blue-100 text-blue-800",
										processing: "bg-violet-100 text-violet-800",
										shipped: "bg-indigo-100 text-indigo-800",
										delivered: "bg-green-100 text-green-800",
										cancelled: "bg-red-100 text-red-800"
									}[row.status] ?? "bg-muted text-muted-foreground"}`,
									children: row.status
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold",
									children: formatPrice(Number(row.total))
								})]
							})]
						})
					}, row.id);
				})
			}),
			totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-t border-border/40 pt-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground",
					children: [
						"Page ",
						page + 1,
						" of ",
						totalPages
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => setPage((p) => Math.max(0, p - 1)),
						disabled: page === 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => setPage((p) => Math.min(totalPages - 1, p + 1)),
						disabled: page >= totalPages - 1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!active,
				onOpenChange: (o) => !o && setActive(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[90vh] w-[calc(100vw-1.5rem)] max-w-2xl overflow-y-auto p-4 sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "font-serif text-xl sm:text-2xl",
						children: ["Order ", active?.order_number]
					}) }), active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							(active.utm_source || active.attribution?.last?.utm_source) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/50 bg-muted/30 px-4 py-3 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground mb-1",
										children: "Traffic Source"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Source: ", active.utm_source ?? active.attribution?.last?.utm_source ?? "—"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Medium: ", active.utm_medium ?? active.attribution?.last?.utm_medium ?? "—"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Campaign: ", active.utm_campaign ?? active.attribution?.last?.utm_campaign ?? "—"] }),
									(active.fbclid || active.attribution?.last?.fbclid) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"fbclid: ",
										(active.fbclid ?? active.attribution?.last?.fbclid ?? "").slice(0, 20),
										"…"
									] }),
									active.first_landing_page && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Landing: ", active.first_landing_page] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2 text-sm sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-muted-foreground shrink-0 mt-0.5" }), active.customer_email]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-muted-foreground shrink-0 mt-0.5" }), active.customer_phone ?? "—"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex gap-2 sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-muted-foreground shrink-0 mt-0.5" }), active.shipping_address ?? "—"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Products"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 divide-y divide-border/50",
									children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 py-3",
										children: [
											it.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: it.image_url,
												alt: it.name ?? "",
												loading: "lazy",
												className: "h-14 w-14 rounded-lg border border-border/50 object-cover"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-14 w-14 rounded-lg bg-muted flex items-center justify-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-5 w-5 text-muted-foreground" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "truncate font-medium text-sm",
														children: it.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted-foreground",
														children: [
															it.brand,
															it.color,
															it.size
														].filter(Boolean).join(" · ") || "—"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-xs text-muted-foreground",
														children: [
															formatPrice(Number(it.price ?? 0)),
															" × ",
															it.quantity ?? 1
														]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium shrink-0",
												children: formatPrice(Number(it.price ?? 0) * Number(it.quantity ?? 1))
											})
										]
									}, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 space-y-1.5 text-sm border-t border-border/40 pt-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(Number(active.subtotal)) })]
										}),
										Number(active.discount) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Discount ", active.coupon_code ? `(${active.coupon_code})` : ""] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["−", formatPrice(Number(active.discount))] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delivery" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: Number(active.shipping) > 0 ? formatPrice(Number(active.shipping)) : "Free" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between pt-1.5 font-semibold border-t border-border/40",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(Number(active.total)) })]
										})
									]
								})
							] }),
							Array.isArray(active.status_history) && active.status_history.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "History"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 space-y-1 text-sm",
								children: active.status_history.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex justify-between text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "capitalize text-foreground",
										children: h.status
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fmt(h.at) })]
								}, i))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs uppercase tracking-widest text-muted-foreground",
										children: "Status"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: form.status,
										onValueChange: (v) => setForm((f) => ({
											...f,
											status: v
										})),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "mt-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: STATUSES.filter((s) => s !== "all").map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: s,
											className: "capitalize",
											children: s
										}, s)) })]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs uppercase tracking-widest text-muted-foreground",
										children: "Courier"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										className: "mt-1.5",
										placeholder: "TCS / Leopards / M&P",
										value: form.courier,
										onChange: (e) => setForm((f) => ({
											...f,
											courier: e.target.value
										}))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs uppercase tracking-widest text-muted-foreground",
										children: "Tracking number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										className: "mt-1.5",
										value: form.tracking_number,
										onChange: (e) => setForm((f) => ({
											...f,
											tracking_number: e.target.value
										}))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs uppercase tracking-widest text-muted-foreground",
										children: "Estimated delivery"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										className: "mt-1.5",
										type: "datetime-local",
										value: form.estimated_delivery,
										onChange: (e) => setForm((f) => ({
											...f,
											estimated_delivery: e.target.value
										}))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs uppercase tracking-widest text-muted-foreground",
											children: "Internal notes"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											className: "mt-1.5",
											rows: 3,
											value: form.notes,
											onChange: (e) => setForm((f) => ({
												...f,
												notes: e.target.value
											}))
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-end gap-2 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => setActive(null),
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => save.mutate(),
									disabled: save.isPending,
									children: save.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "mr-2 h-4 w-4" }), "Save & update"] })
								})]
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { OrdersAdmin as component };
