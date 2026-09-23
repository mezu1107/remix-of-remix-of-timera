import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { E as ShoppingBag, O as ShieldCheck, P as Plus, Rt as ArrowRight, U as Minus, Z as Lock, b as Tag, h as Trash2, yt as CreditCard } from "../_libs/lucide-react.mjs";
import { n as useCart } from "./shop-BkxySNBa.mjs";
import { n as formatPrice } from "./utils-CyfkpwkR.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as couponsQuery, m as paymentSettingsQuery, s as effectivePrice } from "./catalog-CjOF-ztI.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as validateCoupon } from "./coupons-DT54zLdJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-DLal7rPw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { items, updateQty, remove } = useCart();
	const { data: coupons = [] } = useQuery(couponsQuery);
	const { data: settings } = useQuery(paymentSettingsQuery);
	const [coupon, setCoupon] = (0, import_react.useState)("");
	const [appliedCode, setAppliedCode] = (0, import_react.useState)(null);
	const subtotal = items.reduce((a, i) => a + effectivePrice(i.product) * i.quantity, 0);
	const activeCoupon = coupons.find((c) => c.code.toLowerCase() === (appliedCode ?? "").toLowerCase()) ?? null;
	const discount = activeCoupon && subtotal >= activeCoupon.minOrder ? Math.min(activeCoupon.discountType === "percent" ? Math.round(subtotal * activeCoupon.discountValue / 100 * 100) / 100 : activeCoupon.discountValue, subtotal) : 0;
	const freeAbove = settings?.freeDeliveryAbove ?? 5e3;
	const deliveryCharge = settings?.deliveryCharge ?? 250;
	const shipping = items.length === 0 || subtotal - discount >= freeAbove ? 0 : deliveryCharge;
	const total = Math.max(0, subtotal + shipping - discount);
	const remaining = freeAbove - (subtotal - discount);
	const applyCoupon = async () => {
		const code = coupon.trim();
		if (!code) return;
		const result = await validateCoupon(code, subtotal, coupons);
		if (!result.valid) return toast.error(result.reason);
		setAppliedCode(result.code);
		try {
			localStorage.setItem("timera.coupon", result.code);
		} catch {}
		toast.success(`Code ${result.code} applied.`);
	};
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-6 w-6 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl",
				children: "Your cart is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Browse our collection and add a watch you love."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "lg",
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					children: ["Browse Watches ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl sm:text-4xl",
				children: "Your Cart"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1.5 text-sm text-muted-foreground",
				children: [
					items.reduce((a, i) => a + i.quantity, 0),
					" item",
					items.length !== 1 ? "s" : ""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:grid grid-cols-[1fr_auto_auto_auto] gap-6 pb-3 border-b border-border/50 text-[9px] uppercase tracking-[0.22em] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Product" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-28 text-center",
							children: "Quantity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-24 text-right",
							children: "Price"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8" })
					]
				}), items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-[1fr_auto_auto_auto] gap-4 py-5 border-b border-border/40 items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug",
								params: { slug: item.product.slug },
								className: "h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-card border border-border/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.product.image,
									alt: item.product.name,
									className: "h-full w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] uppercase tracking-[0.22em] text-muted-foreground",
										children: item.product.brand
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/product/$slug",
										params: { slug: item.product.slug },
										className: "font-serif text-base hover:text-primary transition block leading-snug",
										children: item.product.name
									}),
									(item.color || item.size) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: [item.color, item.size].filter(Boolean).join(" · ")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-sm font-semibold md:hidden",
										style: { color: "#B08D57" },
										children: formatPrice(effectivePrice(item.product) * item.quantity)
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center rounded-lg border border-border md:w-28 justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => updateQty(item.id, item.quantity - 1),
									className: "p-2 text-muted-foreground hover:text-primary transition",
									"aria-label": "Decrease",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-8 text-center text-sm tabular-nums",
									children: item.quantity
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => updateQty(item.id, item.quantity + 1),
									className: "p-2 text-muted-foreground hover:text-primary transition",
									"aria-label": "Increase",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden md:block text-sm font-semibold w-24 text-right",
							style: { color: "#B08D57" },
							children: formatPrice(effectivePrice(item.product) * item.quantity)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => remove(item.id),
							className: "text-muted-foreground hover:text-destructive transition",
							"aria-label": "Remove item",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
						})
					]
				}, item.id))] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "glass h-fit rounded-2xl p-5 sm:p-6 lg:sticky lg:top-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-xl",
							children: "Order Summary"
						}),
						remaining > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-lg border border-border/50 bg-background/50 p-3 text-xs text-muted-foreground",
							children: [
								"Add ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: formatPrice(remaining)
								}),
								" more for free delivery",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border/60",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-primary transition-all duration-500",
										style: { width: `${Math.min(100, (subtotal - discount) / freeAbove * 100)}%` }
									})
								})
							]
						}),
						shipping === 0 && items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 rounded-lg border border-primary/30 bg-primary/5 px-3 py-2 text-xs text-primary",
							children: "✓ Free delivery unlocked"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "Promo code",
										value: coupon,
										onChange: (e) => setCoupon(e.target.value),
										onKeyDown: (e) => e.key === "Enter" && applyCoupon(),
										className: "pl-9 h-10 text-sm"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									onClick: applyCoupon,
									className: "h-10 shrink-0 text-xs",
									children: "Apply"
								})]
							}), appliedCode && discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1.5 text-xs text-primary",
								children: [
									"✓ ",
									appliedCode,
									" — saves ",
									formatPrice(discount)
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2.5 border-t border-border/40 pt-5 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Subtotal",
									value: formatPrice(subtotal)
								}),
								discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Discount",
									value: `− ${formatPrice(discount)}`,
									accent: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Delivery",
									value: shipping === 0 ? "Free" : formatPrice(shipping)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3 border-t border-border/40 pt-4 font-serif text-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { color: "#B08D57" },
										children: formatPrice(total)
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "mt-5 w-full h-12 text-xs uppercase tracking-[0.18em]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/checkout",
								children: ["Proceed to Checkout ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-3.5 w-3.5 text-primary" }), " Cash on Delivery"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-primary" }), " 1-Year Warranty"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5 text-primary" }), " Secure Checkout"]
								})
							]
						})
					]
				})]
			})
		]
	});
}
function Row({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center justify-between gap-3 ${accent ? "text-primary" : "text-muted-foreground"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-foreground",
			children: value
		})]
	});
}
//#endregion
export { CartPage as component };
