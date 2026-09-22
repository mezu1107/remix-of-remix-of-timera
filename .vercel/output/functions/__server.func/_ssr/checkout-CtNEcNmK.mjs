import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { B as Package, O as ShieldCheck, Q as LoaderCircle, St as Circle, Tt as CircleCheck, Z as Lock, m as Truck, st as Headphones, yt as CreditCard } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { d as tiktokIdentify, p as trackEvent } from "./tracking-DD-P3Lxb.mjs";
import { n as useCart, t as captureLead } from "./shop-BkxySNBa.mjs";
import { n as formatPrice, t as cn } from "./utils-CyfkpwkR.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { r as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { a as couponsQuery, m as paymentSettingsQuery, s as effectivePrice } from "./catalog-DP9o3dVy.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
import { t as Label } from "./label-DWh09J_8.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Textarea } from "./textarea-CSVRhi8K.mjs";
import { t as validateCoupon } from "./coupons-DT54zLdJ.mjs";
import { t as FreeShipProgress } from "./FreeShipProgress-_OCaRrIW.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "../_libs/@radix-ui/react-radio-group+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-CtNEcNmK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
/**
* ATTRIBUTION MODULE — isolated, additive.
*
* Captures UTM parameters + Meta click id (fbclid) on the first page a visitor
* lands on, persists first-touch and last-touch separately in localStorage and
* exposes the payload for the order API and the Conversions API.
*
* Nothing here touches cart, checkout or pricing logic.
*/
var FIRST_KEY = "timera.attr.first";
var LAST_KEY = "timera.attr.last";
var WINDOW_DAYS = 28;
var read = (key) => {
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
};
var write = (key, value) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {}
};
function readCookie(name) {
	if (typeof document === "undefined") return null;
	const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
	return match ? decodeURIComponent(match[1]) : null;
}
function currentTouch() {
	if (typeof window === "undefined") return null;
	const params = new URLSearchParams(window.location.search);
	const get = (k) => {
		const v = params.get(k);
		return v ? v.slice(0, 300) : null;
	};
	const touch = {
		utm_source: get("utm_source"),
		utm_medium: get("utm_medium"),
		utm_campaign: get("utm_campaign"),
		utm_content: get("utm_content"),
		utm_term: get("utm_term"),
		fbclid: get("fbclid"),
		landing_page: `${window.location.pathname}${window.location.search}`.slice(0, 500),
		referrer: (document.referrer || null)?.slice(0, 500) ?? null,
		at: (/* @__PURE__ */ new Date()).toISOString()
	};
	if (Boolean(touch.utm_source || touch.utm_medium || touch.utm_campaign || touch.utm_content || touch.utm_term || touch.fbclid)) return touch;
	if (touch.referrer && !touch.referrer.includes(window.location.host)) return {
		...touch,
		utm_source: hostOf(touch.referrer),
		utm_medium: "referral"
	};
	return null;
}
var hostOf = (url) => {
	try {
		return new URL(url).host;
	} catch {
		return null;
	}
};
/** Meta's fbc cookie value derived from a fresh fbclid, per Meta's spec. */
function fbcFromClickId(fbclid) {
	if (!fbclid) return null;
	return `fb.1.${Date.now()}.${fbclid}`;
}
/** Call once per page load (safe to call more often). */
function captureAttribution() {
	if (typeof window === "undefined") return null;
	const touch = currentTouch();
	const first = read(FIRST_KEY);
	read(LAST_KEY);
	if (touch) {
		if (!first) write(FIRST_KEY, touch);
		write(LAST_KEY, touch);
		if (touch.fbclid && !readCookie("_fbc")) try {
			document.cookie = `_fbc=${fbcFromClickId(touch.fbclid)}; path=/; max-age=${WINDOW_DAYS * 86400}`;
		} catch {}
	}
	return getAttribution() ?? (touch ? {
		first: touch,
		last: touch,
		fbclid: touch.fbclid ?? null,
		fbp: null,
		fbc: null
	} : null);
}
function getAttribution() {
	if (typeof window === "undefined") return null;
	const first = read(FIRST_KEY);
	const last = read(LAST_KEY) ?? first;
	const fbp = readCookie("_fbp");
	const fbc = readCookie("_fbc") ?? fbcFromClickId(last?.fbclid ?? null);
	if (!first && !last && !fbp && !fbc) return null;
	return {
		first: first ?? {},
		last: last ?? {},
		fbclid: last?.fbclid ?? first?.fbclid ?? null,
		fbp,
		fbc
	};
}
/** Flat, backward-compatible shape sent to the order API. */
function attributionForOrder() {
	const attr = getAttribution();
	if (!attr) return null;
	return {
		first_utm_source: attr.first.utm_source ?? null,
		first_utm_medium: attr.first.utm_medium ?? null,
		first_utm_campaign: attr.first.utm_campaign ?? null,
		first_utm_content: attr.first.utm_content ?? null,
		first_utm_term: attr.first.utm_term ?? null,
		first_landing_page: attr.first.landing_page ?? null,
		first_touch_at: attr.first.at ?? null,
		last_utm_source: attr.last.utm_source ?? null,
		last_utm_medium: attr.last.utm_medium ?? null,
		last_utm_campaign: attr.last.utm_campaign ?? null,
		last_utm_content: attr.last.utm_content ?? null,
		last_utm_term: attr.last.utm_term ?? null,
		last_touch_at: attr.last.at ?? null,
		fbclid: attr.fbclid,
		fbp: attr.fbp,
		fbc: attr.fbc,
		attribution: {
			first: attr.first,
			last: attr.last
		}
	};
}
function CheckoutPage() {
	const items = useCart((s) => s.items);
	const clear = useCart((s) => s.clear);
	const { data: coupons = [] } = useQuery(couponsQuery);
	const { data: settings } = useQuery(paymentSettingsQuery);
	const { data: payInfo } = useQuery({
		queryKey: ["payment-instructions"],
		staleTime: 5 * 6e4,
		queryFn: async () => {
			const res = await fetch("/api/public/v1/payment-instructions");
			if (!res.ok) throw new Error("Failed to load payment details");
			return await res.json();
		}
	});
	const [couponInput, setCouponInput] = (0, import_react.useState)("");
	const [appliedCode, setAppliedCode] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return null;
		try {
			return localStorage.getItem("timera.coupon");
		} catch {
			return null;
		}
	});
	const [payMethod, setPayMethod] = (0, import_react.useState)("cod");
	const [placed, setPlaced] = (0, import_react.useState)(null);
	const checkoutTracked = (0, import_react.useRef)(false);
	const idempotencyKey = (0, import_react.useRef)(typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`);
	const warrantyMonths = settings?.warrantyMonths ?? 12;
	const warrantyLabel = warrantyMonths >= 12 ? `${Math.round(warrantyMonths / 12)}-Year Warranty` : `${warrantyMonths}-Month Warranty`;
	const subtotal = items.reduce((a, i) => a + effectivePrice(i.product) * i.quantity, 0);
	const coupon = (0, import_react.useMemo)(() => coupons.find((c) => c.code.toLowerCase() === (appliedCode ?? "").toLowerCase()) ?? null, [coupons, appliedCode]);
	const discount = (0, import_react.useMemo)(() => {
		if (!coupon || subtotal < coupon.minOrder) return 0;
		const value = coupon.discountType === "percent" ? subtotal * coupon.discountValue / 100 : coupon.discountValue;
		return Math.min(Math.round(value * 100) / 100, subtotal);
	}, [coupon, subtotal]);
	const deliveryBase = settings?.deliveryCharge ?? 250;
	const freeAbove = settings?.freeDeliveryAbove ?? 5e3;
	const shipping = subtotal - discount >= freeAbove ? 0 : deliveryBase;
	const codExtra = payMethod === "cod" ? Number(settings?.codCharge ?? 0) : 0;
	const total = Math.max(0, subtotal - discount + shipping + codExtra);
	(0, import_react.useEffect)(() => {
		if (checkoutTracked.current || items.length === 0) return;
		checkoutTracked.current = true;
		trackEvent("begin_checkout", {
			value: total,
			metadata: { items: items.map((i) => ({
				item_id: i.product.id,
				item_name: i.product.name,
				quantity: i.quantity,
				price: effectivePrice(i.product)
			})) }
		});
		captureLead({
			stage: "checkout_started",
			cartValue: total,
			items: items.map((i) => ({
				name: i.product.name,
				slug: i.product.slug,
				quantity: i.quantity,
				price: effectivePrice(i.product)
			}))
		});
	}, [items, total]);
	const captureContact = (form) => {
		if (!form) return;
		const fd = new FormData(form);
		const get = (k) => String(fd.get(k) ?? "").trim();
		const phone = get("phone");
		const name = get("name");
		if (!phone && !name) return;
		captureLead({
			stage: "checkout_details",
			cartValue: total,
			phone: phone || null,
			name: name || null,
			address: get("address") || null,
			city: get("city") || null,
			items: items.map((i) => ({
				name: i.product.name,
				slug: i.product.slug,
				quantity: i.quantity,
				price: effectivePrice(i.product)
			}))
		});
	};
	const methods = [];
	if (settings?.codEnabled ?? true) methods.push({
		id: "cod",
		label: "Cash on Delivery",
		sub: codExtra ? `+ ${formatPrice(codExtra)} COD handling fee` : "Pay in cash when your order arrives"
	});
	if (settings?.easypaisaEnabled) methods.push({
		id: "easypaisa",
		label: "Easypaisa",
		sub: payInfo?.easypaisa?.number ? `Send to ${payInfo.easypaisa.number}` : void 0
	});
	if (settings?.jazzcashEnabled) methods.push({
		id: "jazzcash",
		label: "JazzCash",
		sub: payInfo?.jazzcash?.number ? `Send to ${payInfo.jazzcash.number}` : void 0
	});
	if (settings?.bankEnabled) methods.push({
		id: "bank",
		label: "Bank Transfer",
		sub: payInfo?.bank?.bankName ?? void 0
	});
	if (methods.length && !methods.some((m) => m.id === payMethod)) setTimeout(() => setPayMethod(methods[0].id), 0);
	const applyCoupon = async () => {
		const code = couponInput.trim();
		if (!code) return;
		const result = await validateCoupon(code, subtotal, coupons);
		if (!result.valid) return toast.error(result.reason);
		setAppliedCode(result.code);
		try {
			localStorage.setItem("timera.coupon", result.code);
		} catch {}
		toast.success(`Code ${result.code} applied.`);
	};
	const placeOrder = useMutation({
		mutationFn: async (form) => {
			const fd = new FormData(form);
			const get = (k) => String(fd.get(k) ?? "").trim();
			const customerName = get("name");
			const customerPhone = get("phone");
			const customerEmail = get("email") || `${customerPhone}@timera.noemail`;
			const address = [
				get("address"),
				get("city"),
				get("province")
			].filter(Boolean).join(", ");
			const methodLabel = methods.find((m) => m.id === payMethod)?.label ?? "Cash on Delivery";
			const { data: sessionData } = await supabase.auth.getSession();
			const token = sessionData.session?.access_token;
			trackEvent("add_payment_info", {
				value: total,
				currency: "PKR",
				metadata: {
					payment_method: payMethod,
					email: customerEmail,
					phone: customerPhone,
					items: items.map((i) => ({
						item_id: i.product.id,
						item_name: i.product.name,
						quantity: i.quantity,
						price: effectivePrice(i.product)
					}))
				}
			});
			tiktokIdentify({
				email: customerEmail,
				phone: customerPhone
			});
			captureAttribution();
			const attr = attributionForOrder();
			const res = await fetch("/api/public/v1/orders", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					...token ? { Authorization: `Bearer ${token}` } : {}
				},
				body: JSON.stringify({
					customer_name: customerName,
					customer_email: customerEmail,
					customer_phone: customerPhone || null,
					shipping_address: address,
					notes: [get("notes"), `Payment: ${methodLabel}`].filter(Boolean).join(" — "),
					coupon_code: appliedCode,
					idempotency_key: idempotencyKey.current,
					items: items.map((i) => ({
						product_id: i.product.id,
						slug: i.product.slug,
						quantity: i.quantity,
						color: i.color ?? null,
						size: i.size ?? null
					})),
					...attr ?? {}
				})
			});
			const out = await res.json().catch(() => ({}));
			if (!res.ok || !out?.ok) throw new Error(out?.error ?? "We couldn't save your order. Please try again.");
			const orderNumber = out.order?.order_number;
			const confirmedTotal = Number(out.order?.total ?? total);
			const eventId = String(out.event_id || `order_${orderNumber}`);
			trackEvent("place_order", {
				orderNumber,
				value: confirmedTotal,
				currency: "PKR",
				metadata: {
					coupon: appliedCode,
					payment_method: payMethod,
					event_id: eventId,
					email: customerEmail,
					phone: customerPhone,
					items: items.map((i) => ({
						item_id: i.product.id,
						item_name: i.product.name,
						quantity: i.quantity,
						price: effectivePrice(i.product)
					}))
				}
			});
			return {
				orderNumber,
				confirmedTotal,
				eventId,
				email: customerEmail,
				phone: customerPhone
			};
		},
		onSuccess: (r) => {
			tiktokIdentify({
				email: r.email,
				phone: r.phone,
				externalId: r.orderNumber
			});
			trackEvent("purchase", {
				orderNumber: r.orderNumber,
				value: r.confirmedTotal,
				currency: "PKR",
				metadata: {
					coupon: appliedCode,
					payment_method: payMethod,
					event_id: r.eventId,
					email: r.email,
					phone: r.phone,
					items: items.map((i) => ({
						item_id: i.product.id,
						item_name: i.product.name,
						quantity: i.quantity,
						price: effectivePrice(i.product)
					}))
				}
			});
			fetch("/api/public/v1/meta/event", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					event_name: "Purchase",
					event_id: r.eventId,
					order_number: r.orderNumber,
					browser_sent: true,
					event_source_url: typeof window !== "undefined" ? window.location.href : void 0
				})
			}).catch(() => {});
			captureLead({
				stage: "purchased",
				orderNumber: r.orderNumber,
				cartValue: r.confirmedTotal
			});
			setPlaced({
				orderNumber: r.orderNumber,
				total: r.confirmedTotal
			});
			clear();
			try {
				localStorage.removeItem("timera.coupon");
			} catch {}
		},
		onError: (e) => toast.error(e?.message ?? "Something went wrong. Please try again.")
	});
	if (placed) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe mx-auto max-w-lg py-16 text-center sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full",
				style: { background: "#B08D57" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8 text-white" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl sm:text-4xl",
				children: "Order Confirmed!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-muted-foreground",
				children: ["Order number: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-foreground",
					children: placed.orderNumber
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm font-semibold",
				style: { color: "#B08D57" },
				children: formatPrice(placed.total)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted-foreground max-w-sm mx-auto",
				children: [
					"Shukriya! Aap ka order receive ho gaya hai.",
					" ",
					settings?.paymentNote ? settings.paymentNote : "Hamari team jald WhatsApp ya call par rabta kare gi."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid grid-cols-2 gap-3 text-xs text-muted-foreground max-w-xs mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 rounded-lg border border-border p-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-primary shrink-0" }), " 2–4 business days"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 rounded-lg border border-border p-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-primary shrink-0" }),
						" ",
						warrantyLabel
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/track",
						children: "Track Order"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Continue Shopping"
					})
				})]
			})
		]
	});
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe mx-auto max-w-lg py-16 text-center sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl sm:text-4xl",
				children: "Your cart is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: "Add a watch to your cart to continue."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					children: "Browse Watches"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-8 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl sm:text-4xl",
				children: "Checkout"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3.5 w-3.5 text-primary" }), " Delivery all over Pakistan"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-primary" }),
							" ",
							warrantyLabel,
							" on every watch"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-3.5 w-3.5 text-primary" }), " Premium gift packaging included"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					placeOrder.mutate(e.currentTarget);
				},
				onBlur: (e) => captureContact(e.currentTarget),
				className: "mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8 min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-xl mb-5",
							children: "Contact Details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "name",
									name: "name",
									label: "Full Name",
									placeholder: "Muhammad Ali",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "phone",
									name: "phone",
									label: "Phone Number (WhatsApp preferred)",
									type: "tel",
									placeholder: "03XX-XXXXXXX",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "email",
									name: "email",
									label: "Email Address (optional)",
									type: "email",
									placeholder: "your@email.com"
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-xl mb-5",
							children: "Delivery Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "address",
								name: "address",
								label: "Street Address (House No., Street, Area)",
								placeholder: "House 5, Street 3, Gulberg",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "city",
									name: "city",
									label: "City",
									placeholder: "Lahore",
									required: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "province",
									name: "province",
									label: "Province",
									placeholder: "Punjab"
								})]
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-xl mb-5",
								children: "Payment Method"
							}),
							methods.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl border border-border p-4 text-sm text-muted-foreground",
								children: "No payment methods are currently enabled. Please contact us to place your order."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
								value: payMethod,
								onValueChange: (v) => setPayMethod(v),
								className: "space-y-2.5",
								children: methods.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4 transition has-[:checked]:border-primary has-[:checked]:bg-primary/5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
											value: m.id,
											id: `pay-${m.id}`,
											className: "mt-0.5 shrink-0"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold",
												children: m.label
											}), m.sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-xs text-muted-foreground",
												children: m.sub
											})]
										}),
										m.id === "cod" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-auto shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white",
											style: { background: "#16a34a" },
											children: "Recommended"
										})
									]
								}, m.id))
							}),
							payMethod === "easypaisa" && settings?.easypaisaEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayDetails, {
								lines: [["Easypaisa number", payInfo?.easypaisa?.number ?? "Loading…"], ["Account title", payInfo?.easypaisa?.accountName ?? "Loading…"]],
								hint: "Transfer the total amount and send a screenshot on WhatsApp after placing your order."
							}),
							payMethod === "jazzcash" && settings?.jazzcashEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayDetails, {
								lines: [["JazzCash number", payInfo?.jazzcash?.number ?? "Loading…"], ["Account title", payInfo?.jazzcash?.accountName ?? "Loading…"]],
								hint: "Transfer the total amount and send a screenshot on WhatsApp after placing your order."
							}),
							payMethod === "bank" && settings?.bankEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayDetails, {
								lines: [
									["Bank", payInfo?.bank?.bankName ?? "Loading…"],
									["Account title", payInfo?.bank?.accountTitle ?? "Loading…"],
									["Account number", payInfo?.bank?.accountNumber ?? "Loading…"],
									["IBAN", payInfo?.bank?.iban ?? "Loading…"]
								],
								hint: "Transfer the total and send a deposit slip on WhatsApp after placing your order."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-xl mb-4",
							children: "Order Notes (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							name: "notes",
							rows: 3,
							placeholder: "Delivery instructions, special requests…"
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "glass h-fit rounded-2xl p-5 sm:p-6 lg:sticky lg:top-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-xl",
							children: "Your Order"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 max-h-64 space-y-4 overflow-y-auto border-t border-border/40 pt-5",
							children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-14 w-12 shrink-0 overflow-hidden rounded-lg bg-card border border-border/30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: i.product.image,
											alt: i.product.name,
											className: "h-full w-full object-cover"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm",
											children: i.product.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												"Qty ",
												i.quantity,
												i.color ? ` · ${i.color}` : "",
												i.size ? ` · ${i.size}` : ""
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "shrink-0 text-sm font-medium",
										children: formatPrice(effectivePrice(i.product) * i.quantity)
									})
								]
							}, i.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 border-t border-border/40 pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: couponInput,
									onChange: (e) => setCouponInput(e.target.value),
									onKeyDown: (e) => e.key === "Enter" && applyCoupon(),
									placeholder: "Promo code",
									className: "h-10 flex-1 text-sm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									className: "h-10 shrink-0 text-xs",
									onClick: applyCoupon,
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
							className: "mt-5 space-y-2 border-t border-border/40 pt-5 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Subtotal",
									value: formatPrice(subtotal)
								}),
								discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Discount",
									value: `− ${formatPrice(discount)}`,
									accent: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Delivery",
									value: shipping === 0 ? "Free" : formatPrice(shipping)
								}),
								codExtra > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "COD fee",
									value: formatPrice(codExtra)
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FreeShipProgress, {
							subtotal: subtotal - discount,
							className: "mt-4"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							className: "mt-5 w-full text-[12px] font-bold uppercase tracking-[0.2em]",
							style: { height: "3.25rem" },
							disabled: placeOrder.isPending || methods.length === 0,
							children: placeOrder.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Placing Order…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "mr-2 h-4 w-4" }), "Place Order"] })
						}),
						payMethod === "cod" && !placeOrder.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-center text-[10px] text-muted-foreground",
							children: "You will pay cash when your order arrives."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-center justify-center gap-3 text-[10px] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-3.5 w-3.5 text-primary" }), " Cash on Delivery"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-primary" }),
										" ",
										warrantyLabel
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { className: "h-3.5 w-3.5 text-primary" }), " Support Available"]
								})
							]
						}),
						settings?.warrantyNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center text-[10px] text-muted-foreground",
							children: settings.warrantyNote
						})
					]
				})]
			})
		]
	});
}
function Field({ id, name, label, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
			htmlFor: id,
			className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-0.5 text-destructive",
				children: "*"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id,
			name,
			type,
			required,
			placeholder,
			className: "h-11"
		})]
	});
}
function PayDetails({ lines, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 rounded-xl border border-primary/25 bg-primary/5 p-4 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-2 sm:grid-cols-2",
			children: lines.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-widest text-muted-foreground",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 break-all font-semibold",
					children: v
				})]
			}, k))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-xs text-muted-foreground",
			children: hint
		})]
	});
}
function SummaryRow({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center justify-between gap-3 ${accent ? "text-primary" : "text-muted-foreground"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-foreground",
			children: value
		})]
	});
}
//#endregion
export { CheckoutPage as component };
