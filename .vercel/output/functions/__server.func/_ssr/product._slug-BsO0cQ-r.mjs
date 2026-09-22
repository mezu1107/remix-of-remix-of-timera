import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { B as Package, C as Sparkles, E as ShoppingBag, Et as CircleAlert, F as Play, G as MessageCircle, Mt as CalendarClock, O as ShieldCheck, Ot as ChevronRight, P as Plus, Q as LoaderCircle, U as Minus, jt as Check, kt as ChevronLeft, m as Truck, ot as Heart, st as Headphones, t as Zap, v as ThumbsUp, x as Star, yt as CreditCard } from "../_libs/lucide-react.mjs";
import { p as trackEvent } from "./tracking-DD-P3Lxb.mjs";
import { n as useCart, r as useWishlist } from "./shop-BkxySNBa.mjs";
import { n as formatPrice, t as cn } from "./utils-CyfkpwkR.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { _ as reviewsQuery, f as listPrice, g as productsQuery, i as colorSlug, m as paymentSettingsQuery, s as effectivePrice } from "./catalog-DP9o3dVy.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as aiReviewSummary } from "./ai.functions-8hRZ8_PW.mjs";
import { t as ProductCard } from "./ProductCard-nExjepVf.mjs";
import { t as siteSettingsQuery } from "./site-settings-D0yFJF7q.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-MqQzSS40.mjs";
import { t as Route } from "./product._slug-Dp_aLa3W.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-BsO0cQ-r.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* LiveVisitors — intentionally a no-op.
*
* The previous implementation displayed a randomly-drifting "23 people are
* viewing this right now" counter that had NO connection to real visitor data.
* This is a dark-pattern (fake urgency) that damages brand trust. The component
* is kept as a named export so existing imports compile cleanly.
*
* To re-enable properly: integrate a real-time presence system (e.g. Supabase
* Realtime channels or a dedicated analytics service) and only display the count
* when it genuinely reflects live sessions on that product.
*/
function LiveVisitors({ label: _label, className: _className }) {
	return null;
}
/**
* StockUrgency — shows a genuine low-stock warning.
*
* Rules:
*  - Only renders when real DB stock is > 0 and <= 12
*  - States the exact stock count (real data)
*  - Does NOT say "selling fast" — that claim would be fabricated
*  - Does NOT use countdown timers or false scarcity
*  - The progress bar is proportional to actual stock remaining
*/
function StockUrgency({ stock, className = "" }) {
	if (!Number.isFinite(stock) || stock <= 0 || stock > 12) return null;
	const pct = Math.max(8, Math.min(100, stock / 12 * 100));
	const label = stock === 1 ? "Only 1 left in stock" : stock <= 3 ? `Only ${stock} left in stock` : `${stock} remaining in stock`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl border border-amber-200/60 bg-amber-50/60 px-3 py-2.5 backdrop-blur ${className}`,
		role: "status",
		"aria-live": "polite",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-2 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5 shrink-0 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-amber-800",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 h-1.5 overflow-hidden rounded-full bg-amber-100",
			role: "progressbar",
			"aria-valuemin": 0,
			"aria-valuemax": 12,
			"aria-valuenow": stock,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full bg-amber-400 transition-all duration-700",
				style: { width: `${pct}%` }
			})
		})]
	});
}
/**
* Delivery estimate strip — Pakistan-specific.
*
* Shows "Estimated delivery Mon, 8 Sep – Wed, 10 Sep" based on today's date
* in Pakistan Standard Time (UTC+5). The 2–4 business-day window matches what
* we tell customers on the checkout page and in policies.
*
* No "order within X hours" claim — we don't know the actual dispatch cut-off
* from here, and a wrong cut-off time destroys trust.
*/
function DeliveryEstimate({ className = "" }) {
	const { data: settings } = useQuery(paymentSettingsQuery);
	const nowPKT = new Date(Date.now() + 300 * 60 * 1e3);
	function addDays(date, days) {
		const d = new Date(date);
		d.setUTCDate(d.getUTCDate() + days);
		return d;
	}
	function nextWorkday(date) {
		const d = new Date(date);
		while (d.getUTCDay() === 0) d.setUTCDate(d.getUTCDate() + 1);
		return d;
	}
	const from = nextWorkday(addDays(nowPKT, 2));
	const to = nextWorkday(addDays(nowPKT, 4));
	const fmt = (d) => d.toLocaleDateString("en-PK", {
		weekday: "short",
		day: "numeric",
		month: "short",
		timeZone: "Asia/Karachi"
	});
	const freeAbove = settings?.freeDeliveryAbove;
	const deliveryCharge = settings?.deliveryCharge;
	const shippingNote = freeAbove && deliveryCharge ? `Free delivery above Rs ${freeAbove.toLocaleString("en-PK")} · Rs ${deliveryCharge} otherwise` : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl border border-border/60 bg-background/60 px-3 py-2.5 backdrop-blur ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-2 text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"Estimated delivery:",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
					className: "font-medium text-foreground",
					children: [
						fmt(from),
						" – ",
						fmt(to)
					]
				})
			] })]
		}), shippingNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 pl-[1.375rem] text-[10px] text-muted-foreground",
			children: shippingNote
		})]
	});
}
/**
* RecentlyBought — intentionally a no-op.
*
* The previous implementation displayed seeded-random "34 sold in the last
* 7 days / Last shipped to Lahore" numbers that were NOT based on real order
* data. That constitutes fake social proof and erodes customer trust once
* discovered. The component is kept as a named export so existing imports
* don't break, but it renders nothing until real order analytics are wired in.
*
* To re-enable: query the `orders` table for actual per-product sales counts
* and render only when the count is meaningful (e.g. >= 5 verified orders).
*/
function RecentlyBought({ slug: _slug, className: _className }) {
	return null;
}
/**
* Pakistan-specific trust strip.
* Warranty label is read from payment_settings so it always matches
* whatever the admin has configured — never hard-coded.
*/
function TrustBadges({ className }) {
	const { data: settings } = useQuery(paymentSettingsQuery);
	const months = settings?.warrantyMonths ?? 12;
	const warrantyLabel = months >= 12 ? `${Math.round(months / 12)}-Year Warranty` : `${months}-Month Warranty`;
	const items = [
		{
			icon: CreditCard,
			label: "Cash on Delivery"
		},
		{
			icon: ShieldCheck,
			label: warrantyLabel
		},
		{
			icon: Truck,
			label: "All Pakistan Delivery"
		},
		{
			icon: Package,
			label: "Premium Packaging"
		},
		{
			icon: Headphones,
			label: "Same-Day Support"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: cn("grid grid-cols-2 gap-2 sm:grid-cols-5", className),
		children: items.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-2 rounded-xl border border-border/60 bg-background/60 px-3 py-2.5 text-[11px] leading-tight text-muted-foreground backdrop-blur transition hover:border-primary/30 hover:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0",
				children: label
			})]
		}, label))
	});
}
/**
* BundleUpsell — "Frequently bought together" section.
*
* Rules:
*  - Shows real prices only — no fake percentage discounts
*  - The "combined price" is simply the sum of real effective prices
*  - Only renders when 2+ complementary in-stock products exist
*  - Same-collection products are preferred as partners
*/
function BundleUpsell({ product }) {
	const { data: products = [] } = useQuery(productsQuery);
	const add = useCart((s) => s.add);
	const cartItems = useCart((s) => s.items);
	const [added, setAdded] = (0, import_react.useState)(false);
	const partners = (0, import_react.useMemo)(() => {
		const pool = products.filter((p) => p.id !== product.id && p.stock > 0);
		const same = pool.filter((p) => p.collection === product.collection);
		const rest = pool.filter((p) => p.collection !== product.collection);
		return [...same, ...rest].slice(0, 2);
	}, [products, product]);
	if (partners.length < 2) return null;
	const bundle = [product, ...partners];
	const combinedTotal = bundle.reduce((sum, p) => sum + effectivePrice(p), 0);
	const cartIds = new Set(cartItems.map((i) => i.product.id));
	const allInCart = bundle.every((p) => cartIds.has(p.id));
	function handleAddBundle() {
		bundle.forEach((p) => {
			if (!cartIds.has(p.id)) add(p);
		});
		setAdded(true);
		trackEvent("upsell_add", {
			productId: product.id,
			productSlug: product.slug,
			value: combinedTotal,
			metadata: {
				type: "bundle",
				count: bundle.length
			}
		});
		toast.success(`${bundle.length} items added to your cart`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-serif text-xl",
				children: "Frequently bought together"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "Add all three to your order in one tap."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap items-center gap-3",
				children: bundle.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4 shrink-0 text-muted-foreground",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								loading: "lazy",
								className: "h-20 w-20 rounded-xl object-cover border border-border/40"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 truncate text-[10px] text-muted-foreground",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-medium",
								style: { color: "#B08D57" },
								children: formatPrice(effectivePrice(p))
							})
						]
					})]
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Combined price"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base font-semibold",
					style: { color: "#B08D57" },
					children: formatPrice(combinedTotal)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "h-11 text-xs uppercase tracking-[0.18em]",
					onClick: handleAddBundle,
					disabled: allInCart,
					children: allInCart ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mr-2 h-4 w-4 text-primary" }), "All in cart"] }) : added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mr-2 h-4 w-4 text-primary" }), "Added to cart"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "mr-2 h-4 w-4" }),
						"Add all ",
						bundle.length
					] })
				})]
			})
		]
	});
}
/**
* Mobile sticky purchase bar — appears once the main Add-to-Cart
* button has scrolled off screen.
*
* Layout: [thumbnail + price] [Add to Cart] [Buy Now • Cash on Delivery ]
*/
function StickyBuyBar({ product, color, size, qty = 1, onAdd }) {
	const [show, setShow] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const add = useCart((s) => s.add);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 560);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const price = effectivePrice(product);
	const hasSale = product.salePrice != null && product.salePrice < product.price;
	const isOutOfStock = product.stock <= 0;
	function handleBuyNow() {
		trackEvent("add_to_cart", {
			productId: product.id,
			productSlug: product.slug,
			productName: product.name,
			value: price,
			metadata: { source: "sticky_buy_now" }
		});
		add(product, {
			color,
			size,
			quantity: qty
		});
		navigate({ to: "/checkout" });
	}
	function handleAdd() {
		trackEvent("add_to_cart", {
			productId: product.id,
			productSlug: product.slug,
			productName: product.name,
			value: price,
			metadata: { source: "sticky_add_to_cart" }
		});
		onAdd();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": !show,
		className: `fixed inset-x-0 bottom-[4.5rem] z-[60] border-t border-border/50 bg-background/95 backdrop-blur-xl transition-transform duration-300 lg:hidden ${show ? "translate-y-0" : "translate-y-full"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-lg items-center gap-2 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: "",
						"aria-hidden": true,
						className: "h-10 w-10 shrink-0 rounded-lg object-cover border border-border/40"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[10px] text-muted-foreground leading-none mb-0.5",
							children: product.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								style: { color: "#B08D57" },
								children: formatPrice(price)
							}), hasSale && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground line-through",
								children: formatPrice(product.price)
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					disabled: isOutOfStock,
					onClick: handleAdd,
					className: "flex h-10 items-center justify-center gap-1.5 rounded-lg border border-border px-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground transition hover:border-primary hover:text-primary disabled:opacity-40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden xs:inline",
						children: "Add"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					disabled: isOutOfStock,
					onClick: handleBuyNow,
					className: "flex h-10 items-center justify-center gap-1.5 rounded-lg px-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition disabled:opacity-40",
					style: { background: isOutOfStock ? "#999" : "#111111" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5" }), isOutOfStock ? "Sold Out" : "Buy Now • Cash on Delivery "]
				})
			]
		})
	});
}
/** Recently-viewed products, stored per browser (no account needed). */
var KEY = "timera.recently-viewed";
var MAX = 8;
function pushRecentlyViewed(slug) {
	if (typeof window === "undefined" || !slug) return;
	try {
		const list = readRecentlyViewed().filter((s) => s !== slug);
		list.unshift(slug);
		window.localStorage.setItem(KEY, JSON.stringify(list.slice(0, MAX)));
	} catch {}
}
function readRecentlyViewed() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
	} catch {
		return [];
	}
}
/** "Continue where you left off" — a proven conversion nudge. */
function RecentlyViewed({ excludeSlug }) {
	const [slugs, setSlugs] = (0, import_react.useState)([]);
	const { data: products = [] } = useQuery(productsQuery);
	(0, import_react.useEffect)(() => {
		setSlugs(readRecentlyViewed());
	}, [excludeSlug]);
	const items = slugs.filter((s) => s !== excludeSlug).map((s) => products.find((p) => p.slug === s)).filter((p) => Boolean(p)).slice(0, 4);
	if (items.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-luxe py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.3em] text-primary",
				children: "Recently viewed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-serif text-3xl",
				children: "Pick up where you left off"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4",
				children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})
		]
	});
}
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
function ReviewSummary({ productId }) {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["ai-review-summary", productId],
		queryFn: () => aiReviewSummary({ data: { productId } }),
		staleTime: 1e3 * 60 * 30,
		retry: false
	});
	if (isError) return null;
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 rounded-xl border border-border/60 bg-card p-5 text-sm text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Summarising customer reviews…"]
	});
	if (!data?.available) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border/60 bg-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] uppercase tracking-[0.28em] text-primary",
					children: [
						"AI summary of ",
						data.count,
						" reviews"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground",
				children: data.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-5 sm:grid-cols-2",
				children: [data.pros.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-xs uppercase tracking-widest text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "h-3.5 w-3.5 text-primary" }), " Praised for"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-1.5 text-sm text-muted-foreground",
					children: data.pros.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", p] }, p))
				})] }), data.cons.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-xs uppercase tracking-widest text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5 text-primary" }), " Worth knowing"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-1.5 text-sm text-muted-foreground",
					children: data.cons.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", c] }, c))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-[11px] text-muted-foreground",
				children: "Generated from approved customer reviews on this page."
			})
		]
	});
}
function ProductPage() {
	const { product } = Route.useLoaderData();
	const isPerfume = product.productType === "perfume";
	const { color: colorParam } = Route.useSearch();
	const navigate = useNavigate();
	const { data: paySettings } = useQuery(paymentSettingsQuery);
	const warrantyMonths = paySettings?.warrantyMonths ?? 12;
	const warrantyLabel = warrantyMonths >= 12 ? `${Math.round(warrantyMonths / 12)}-Year Warranty` : `${warrantyMonths}-Month Warranty`;
	const initialColor = product.colors.find((c) => colorSlug(c.name) === colorParam) ?? product.colors[0] ?? {
		name: "Default",
		hex: "#1a1a1a"
	};
	const add = useCart((s) => s.add);
	const wish = useWishlist();
	const inWish = wish.ids.includes(product.id);
	const [selectedImg, setSelectedImg] = (0, import_react.useState)(0);
	const [selectedMedia, setSelectedMedia] = (0, import_react.useState)(null);
	const [color, setColor] = (0, import_react.useState)(initialColor.name);
	const [colorImage, setColorImage] = (0, import_react.useState)(initialColor.image ?? null);
	const [size, setSize] = (0, import_react.useState)(product.sizes.length > 1 ? product.sizes[0] : void 0);
	const [qty, setQty] = (0, import_react.useState)(1);
	const videoItems = (product.videos ?? []).filter(Boolean);
	const touchStartX = (0, import_react.useRef)(null);
	const allImages = colorImage ? [colorImage, ...product.gallery.filter((g) => g !== colorImage)] : product.gallery.length ? product.gallery : [product.image];
	const allMedia = [...allImages.map((src) => ({
		type: "image",
		src
	})), ...videoItems.map((src) => ({
		type: "video",
		src
	}))];
	const activeIdx = selectedMedia ? allMedia.findIndex((m) => m.src === selectedMedia.src) : colorImage ? 0 : selectedImg;
	const totalMedia = allMedia.length;
	const goPrev = (0, import_react.useCallback)(() => {
		setSelectedMedia(null);
		setColorImage(null);
		setSelectedImg((i) => (i - 1 + totalMedia) % totalMedia);
	}, [totalMedia]);
	const goNext = (0, import_react.useCallback)(() => {
		setSelectedMedia(null);
		setColorImage(null);
		setSelectedImg((i) => (i + 1) % totalMedia);
	}, [totalMedia]);
	function onTouchStart(e) {
		touchStartX.current = e.touches[0].clientX;
	}
	function onTouchEnd(e) {
		if (touchStartX.current === null) return;
		const delta = e.changedTouches[0].clientX - touchStartX.current;
		touchStartX.current = null;
		if (Math.abs(delta) < 40) return;
		if (delta < 0) goNext();
		else goPrev();
	}
	const { data: siteSettings } = useQuery(siteSettingsQuery);
	const waNum = (siteSettings?.whatsappNumber ?? siteSettings?.contactPhone ?? "").replace(/[^0-9]/g, "").replace(/^0/, "92");
	const waHref = waNum ? `https://wa.me/${waNum}?text=${encodeURIComponent(`Hi Timera! I have a question about ${product.name}.`)}` : null;
	const activeMedia = selectedMedia ?? (activeIdx < allMedia.length ? allMedia[activeIdx] : null) ?? {
		type: "image",
		src: product.image
	};
	const mainImage = activeMedia.type === "image" ? activeMedia.src : allImages[0] ?? product.image;
	const { data: allProducts = [] } = useQuery(productsQuery);
	const { data: productReviews = [] } = useQuery(reviewsQuery(product.id));
	const related = allProducts.filter((p) => p.id !== product.id && p.collection === product.collection).slice(0, 4);
	const price = effectivePrice(product);
	const origPrice = listPrice(product);
	const discountPct = origPrice && origPrice > price ? Math.round(100 - price / origPrice * 100) : null;
	(0, import_react.useEffect)(() => {
		pushRecentlyViewed(product.slug);
		trackEvent("view_item", {
			productId: product.id,
			productSlug: product.slug,
			productName: product.name,
			value: price,
			metadata: {
				collection: product.collection,
				category: product.category
			}
		});
	}, [
		product.id,
		product.slug,
		product.name,
		product.collection,
		product.category,
		price
	]);
	function handleAddToCart() {
		add(product, {
			color,
			size,
			quantity: qty
		});
		toast.success(`${product.name} added to cart`);
	}
	function handleBuyNow() {
		add(product, {
			color,
			size,
			quantity: qty
		});
		navigate({ to: "/checkout" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-6 md:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mb-6 flex items-center gap-1.5 text-xs text-muted-foreground",
				"aria-label": "Breadcrumb",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-primary transition",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "hover:text-primary transition",
						children: isPerfume ? "Perfumes" : "Watches"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate max-w-[180px] text-foreground",
						children: product.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-2 lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 lg:sticky lg:top-24 lg:self-start",
					children: [totalMedia > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:flex flex-col gap-2",
						children: allMedia.map((media, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (media.type === "video") setSelectedMedia(media);
								else {
									setSelectedMedia(null);
									setColorImage(null);
									setSelectedImg(i);
								}
							},
							className: cn("relative h-[68px] w-[56px] shrink-0 overflow-hidden rounded-lg border-2 transition bg-card", activeIdx === i ? "border-primary" : "border-transparent hover:border-border"),
							"aria-label": media.type === "video" ? `Play video ${i + 1}` : `View image ${i + 1}`,
							children: media.type === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								src: media.src,
								muted: true,
								preload: "metadata",
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 flex items-center justify-center bg-black/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 text-white fill-white" })
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: media.src,
								alt: "",
								width: 56,
								height: 68,
								loading: "lazy",
								decoding: "async",
								className: "h-full w-full object-cover"
							})
						}, `${media.type}-${i}`))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-square overflow-hidden rounded-2xl bg-card shadow-luxe",
							onTouchStart,
							onTouchEnd,
							"aria-label": "Product media gallery",
							children: [
								activeMedia.type === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									src: activeMedia.src,
									controls: true,
									playsInline: true,
									preload: "metadata",
									className: "h-full w-full object-contain bg-black",
									"aria-label": "Product video"
								}, activeMedia.src) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: mainImage || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
									alt: `${product.name} — ${color}`,
									width: 800,
									height: 800,
									fetchPriority: "high",
									decoding: "async",
									onError: (e) => {
										const fallback = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80";
										if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
									},
									className: "h-full w-full object-cover animate-in fade-in duration-200"
								}, mainImage),
								activeMedia.type === "image" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-4 top-4 rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest bg-primary text-white",
									children: product.badge
								}), discountPct && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "absolute right-4 top-4 rounded px-2.5 py-1 text-[10px] font-semibold text-white",
									style: { background: "#dc2626" },
									children: [
										"-",
										discountPct,
										"%"
									]
								})] }),
								totalMedia > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: goPrev,
									"aria-label": "Previous media",
									className: "absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur text-foreground shadow transition hover:bg-background md:hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: goNext,
									"aria-label": "Next media",
									className: "absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur text-foreground shadow transition hover:bg-background md:hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
								})] })
							]
						}), totalMedia > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex justify-center gap-1.5 overflow-x-auto pb-1 md:hidden",
							children: allMedia.map((media, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									if (media.type === "video") setSelectedMedia(media);
									else {
										setSelectedMedia(null);
										setColorImage(null);
										setSelectedImg(i);
									}
								},
								"aria-label": media.type === "video" ? `Play video ${i + 1}` : `Go to image ${i + 1}`,
								className: "relative h-10 w-10 shrink-0 overflow-hidden rounded-md border-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-card",
								style: {
									borderColor: activeIdx === i ? "#B08D57" : "transparent",
									opacity: activeIdx === i ? 1 : .55
								},
								children: media.type === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									src: media.src,
									muted: true,
									preload: "metadata",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 flex items-center justify-center bg-black/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3 w-3 text-white fill-white" })
								})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: media.src,
									alt: "",
									className: "h-full w-full object-cover"
								})
							}, `mob-${media.type}-${i}`))
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] uppercase tracking-[0.28em] text-primary",
						children: [product.brand, product.collection ? ` · ${product.collection}` : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-serif text-3xl leading-tight md:text-4xl lg:text-[2.6rem]",
						children: product.name
					}),
					product.reviews > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-0.5",
							style: { color: "#B08D57" },
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("h-4 w-4", i < Math.round(product.rating) ? "fill-current" : "opacity-25") }, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#reviews",
							className: "text-sm text-muted-foreground hover:text-primary transition",
							children: [
								product.rating.toFixed(1),
								" (",
								product.reviews,
								" reviews)"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap items-baseline gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-3xl font-semibold",
								style: { color: "#B08D57" },
								children: formatPrice(price)
							}),
							origPrice && origPrice > price && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg text-muted-foreground line-through",
								children: formatPrice(origPrice)
							}),
							discountPct && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded px-2 py-0.5 text-[11px] font-semibold text-white",
								style: { background: "#dc2626" },
								children: [
									"Save ",
									discountPct,
									"%"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground max-w-lg",
						children: product.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: [
							{
								icon: CreditCard,
								text: "Cash on Delivery"
							},
							{
								icon: ShieldCheck,
								text: warrantyLabel
							},
							{
								icon: Truck,
								text: "All Pakistan Delivery"
							}
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-3.5 w-3.5 text-primary" }), t.text]
						}, t.text))
					}),
					product.colors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground mb-3",
							children: ["Color: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: color
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2.5",
							children: product.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								title: c.name,
								"aria-label": c.name,
								"aria-pressed": color === c.name,
								onMouseEnter: () => {
									if (c.image) new Image().src = c.image;
								},
								onClick: () => {
									setColor(c.name);
									setColorImage(c.image ?? null);
									navigate({
										to: "/product/$slug",
										params: { slug: product.slug },
										search: { color: colorSlug(c.name) },
										replace: true
									});
								},
								className: cn("h-9 w-9 rounded-full ring-offset-2 ring-offset-background transition overflow-hidden", color === c.name ? "ring-2 ring-primary" : "ring-1 ring-border hover:ring-primary/50"),
								style: { backgroundColor: c.hex },
								children: c.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.image,
									alt: "",
									width: 36,
									height: 36,
									loading: "lazy",
									decoding: "async",
									className: "h-full w-full object-cover"
								})
							}, c.name))
						})]
					}),
					product.sizes.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground mb-3",
							children: [
								isPerfume ? "Bottle Size" : "Case Size",
								": ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: size
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: product.sizes.map((sz) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSize(sz),
								className: cn("min-w-[60px] px-4 h-10 rounded-lg border text-sm font-medium transition", size === sz ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50"),
								children: sz
							}, sz))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: product.stock > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-green-500" }), "In stock — dispatched within 24 hours"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-xs text-red-600",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-red-500" }), "Currently out of stock — WhatsApp us for updates"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockUrgency, {
						stock: product.stock,
						className: "mt-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveVisitors, {
						className: "mt-3",
						label: isPerfume ? "people viewing this fragrance" : "people viewing this watch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentlyBought, {
						slug: product.slug,
						className: "mt-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliveryEstimate, { className: "mt-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 rounded-xl border border-border/50 bg-background/60 divide-y divide-border/40",
						children: (isPerfume ? [
							{
								q: "Is COD available?",
								a: "Yes — pay cash when delivered."
							},
							{
								q: "How long does delivery take?",
								a: "2–4 business days across Pakistan."
							},
							{
								q: "Can I return it?",
								a: "7-day return on defective or wrong items."
							},
							{
								q: "Is it genuine?",
								a: "Directly sourced — quality checked before dispatch."
							}
						] : [
							{
								q: "Is COD available?",
								a: "Yes — pay cash when delivered."
							},
							{
								q: "Is there a warranty?",
								a: warrantyLabel + " included with every watch."
							},
							{
								q: "How long does delivery take?",
								a: "2–4 business days across Pakistan."
							},
							{
								q: "Can I return it?",
								a: "7-day return on defective or wrong items."
							},
							{
								q: "Is it genuine?",
								a: "Quality checked before every dispatch."
							}
						]).map(({ q, a }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2.5 px-4 py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold text-foreground",
									children: q
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-1.5 text-muted-foreground/40 text-xs",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: a
								})
							] })]
						}, q))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center rounded-lg border border-border bg-background",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setQty(Math.max(1, qty - 1)),
										className: "px-3 py-3 text-muted-foreground hover:text-primary transition",
										"aria-label": "Decrease quantity",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-10 text-center text-sm font-semibold tabular-nums",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setQty(qty + 1),
										className: "px-3 py-3 text-muted-foreground hover:text-primary transition",
										"aria-label": "Increase quantity",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								variant: "outline",
								className: "flex-1 h-12 text-[11px] uppercase tracking-[0.18em]",
								disabled: product.stock <= 0,
								onClick: handleAddToCart,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 mr-2" }), "Add to Cart"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "outline",
								className: cn("h-12 w-12 shrink-0", inWish && "text-primary border-primary bg-primary/5"),
								onClick: () => {
									wish.toggle(product.id);
									toast.success(inWish ? "Removed from wishlist" : "Added to wishlist");
								},
								"aria-label": inWish ? "Remove from wishlist" : "Add to wishlist",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("h-5 w-5", inWish && "fill-current") })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: product.stock <= 0,
							onClick: handleBuyNow,
							className: "w-full flex h-[52px] items-center justify-center gap-2 rounded-lg text-[12px] font-bold uppercase tracking-[0.22em] text-white transition-all disabled:opacity-40 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
							style: { background: product.stock > 0 ? "#111111" : "#777" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 shrink-0" }), product.stock > 0 ? "Buy Now • Cash on Delivery " : "Out of Stock"]
						}), product.stock > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-center text-[10px] font-medium text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-3 w-3 text-green-600" }), "Pay cash when delivered · No advance payment"]
							})
						})]
					}),
					waHref && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waHref,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => void import("./tracking-DD-P3Lxb.mjs").then((n) => n.m).then((n) => n.n).then(({ trackEvent }) => trackEvent("whatsapp_click", { metadata: {
							source: "product_page",
							productSlug: product.slug
						} })),
						className: "mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-border/50 py-2.5 text-[11px] text-muted-foreground transition hover:border-[#25D366]/50 hover:text-[#25D366]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5" }), "Have a question? Chat with us on WhatsApp"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4",
						children: [
							{
								icon: ShieldCheck,
								text: warrantyLabel
							},
							{
								icon: CreditCard,
								text: "Cash on Delivery"
							},
							{
								icon: Truck,
								text: "All Pakistan"
							},
							{
								icon: Headphones,
								text: "Fast Support"
							}
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-1.5 rounded-xl border border-border/50 bg-background/50 p-3 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] leading-tight text-muted-foreground",
								children: t.text
							})]
						}, t.text))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
						type: "single",
						collapsible: true,
						className: "mt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: "specs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "text-xs uppercase tracking-widest",
									children: isPerfume ? "Fragrance Details" : "Specifications"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "grid grid-cols-2 gap-3 text-sm",
									children: (isPerfume ? [
										["Fragrance family", product.fragranceFamily],
										["Concentration", product.concentration],
										["Bottle size", product.sizeMl ? `${product.sizeMl} ml` : null],
										["Longevity", product.longevity],
										["Sillage", product.sillage],
										["Best for", product.gender],
										["Top notes", product.topNotes.length ? product.topNotes.join(", ") : null],
										["Heart notes", product.heartNotes.length ? product.heartNotes.join(", ") : null],
										["Base notes", product.baseNotes.length ? product.baseNotes.join(", ") : null],
										["Collection", product.collection],
										["Brand", product.brand]
									] : [
										["Movement", product.movement],
										["Case", product.case],
										["Strap", product.strap],
										["Water Resistance", product.waterResistance],
										["Collection", product.collection],
										["Brand", product.brand]
									]).filter(([, v]) => !!v).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-[10px] uppercase tracking-widest text-muted-foreground",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-sm",
										children: v
									})] }, k))
								}) })]
							}),
							product.features.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: "features",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "text-xs uppercase tracking-widest",
									children: "Features"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2",
									children: product.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 shrink-0 mt-0.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: f
										})]
									}, f))
								}) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: "shipping",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "text-xs uppercase tracking-widest",
									children: "Delivery & Returns"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, {
									className: "space-y-3 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Cash on Delivery"
										}), " is available across Pakistan. Pay when your order arrives — no advance payment required."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											"Orders are dispatched within 24 hours and typically arrive in",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground",
												children: "2–4 business days"
											}),
											" depending on your city."
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you receive a defective or incorrect item, contact us within 7 days and we will arrange a replacement or return at no charge." }),
										warrantyLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: warrantyLabel
										}), " is included with every Timera timepiece."] })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: "care",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "text-xs uppercase tracking-widest",
									children: isPerfume ? "Usage Tips" : "Care"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2 text-sm text-muted-foreground",
									children: (isPerfume ? [
										"Store the bottle upright, away from direct sunlight and heat.",
										"Apply to pulse points — wrists, neck, behind the ears.",
										"Do not rub after spraying; it breaks the top notes.",
										"Layer with an unscented moisturiser to extend longevity."
									] : [
										"Rinse with fresh water after exposure to salt water or sweat.",
										"Avoid strong magnetic fields and sudden shocks.",
										"Wipe the case and strap with a soft dry cloth regularly.",
										"Service every 3–5 years to maintain accuracy."
									]).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), t]
									}, t))
								}) })]
							})
						]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBadges, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BundleUpsell, { product })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "reviews",
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					defaultValue: "description",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
							className: "w-full justify-start border-b border-border/50 bg-transparent rounded-none h-auto p-0 gap-0",
							children: [
								"description",
								"reviews",
								"care"
							].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: v,
								className: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-5 py-3 text-[11px] uppercase tracking-widest",
								children: v === "reviews" ? `Reviews (${product.reviews})` : v.charAt(0).toUpperCase() + v.slice(1)
							}, v))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "description",
							className: "pt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-3xl text-base leading-relaxed text-muted-foreground",
								children: product.description
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "reviews",
							className: "pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-8 max-w-3xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewSummary, { productId: product.id })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-8 md:grid-cols-[280px_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-serif text-5xl",
										style: { color: "#B08D57" },
										children: product.reviews > 0 ? product.rating.toFixed(1) : "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 flex gap-0.5",
										style: { color: "#B08D57" },
										children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("h-4 w-4", i < Math.round(product.rating) && "fill-current") }, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: product.reviews > 0 ? `Based on ${product.reviews} reviews` : "No reviews yet — be the first."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-6",
									children: productReviews.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border/50 p-6 text-center text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No written reviews yet." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs",
											children: "Bought this watch? Contact us to share your experience."
										})]
									}) : productReviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pb-6 border-b border-border/40 last:border-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-medium text-sm",
													children: r.customerName
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex gap-0.5 mt-1",
													style: { color: "#B08D57" },
													children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("h-3.5 w-3.5", i < r.rating && "fill-current") }, i))
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-muted-foreground shrink-0",
													children: r.createdAt ? new Date(r.createdAt).toLocaleDateString("en-PK") : ""
												})]
											}),
											r.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm font-medium",
												children: r.title
											}),
											r.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1.5 text-sm text-muted-foreground leading-relaxed",
												children: r.body
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2.5 flex items-center gap-1.5 text-xs text-primary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), " Verified Purchase"]
											})
										]
									}, r.id))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "care",
							className: "pt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "max-w-2xl space-y-3 text-sm text-muted-foreground",
								children: (isPerfume ? [
									"Store the bottle upright, away from direct sunlight and heat.",
									"Apply to pulse points — wrists, neck and behind the ears.",
									"Do not rub after spraying; it breaks the top notes.",
									"Layer with an unscented moisturiser to extend longevity on dry skin."
								] : [
									"Rinse with fresh water after exposure to salt water or heavy sweat.",
									"Avoid strong magnetic fields and sudden shocks.",
									"Wipe the case and strap with a soft, dry cloth regularly.",
									"Service every 3–5 years to maintain precision."
								]).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), t]
								}, t))
							})
						})
					]
				})
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl md:text-3xl",
					children: "You may also like"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4",
					children: related.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product: p,
						index: i
					}, p.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentlyViewed, { excludeSlug: product.slug }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyBuyBar, {
				product,
				color,
				size,
				qty,
				onAdd: handleAddToCart
			})
		]
	});
}
//#endregion
export { ProductPage as component };
