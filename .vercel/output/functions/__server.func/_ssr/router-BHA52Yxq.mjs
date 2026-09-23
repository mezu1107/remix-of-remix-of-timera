import { o as __toESM } from "../_runtime.mjs";
import { a as streamText, n as DefaultChatTransport, o as require_react, r as convertToModelMessages, s as require_jsx_runtime, t as useChat } from "../_libs/@ai-sdk/react+[...].mjs";
import { At as ChevronDown, C as Sparkles, E as ShoppingBag, G as MessageCircle, I as Phone, It as ArrowUp, K as Menu, M as Search, O as ShieldCheck, P as Plus, Q as LoaderCircle, Rt as ArrowRight, U as Minus, Y as Mail, bt as Copy, d as User, h as Trash2, j as Send, jt as Check, lt as Gift, m as Truck, n as Youtube, nt as Instagram, ot as Heart, pt as Facebook, r as X, yt as CreditCard } from "../_libs/lucide-react.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { a as initPinterestPixel, c as pinterestPage, f as tiktokPage, i as initMetaPixel, l as setVerificationMeta, n as initGooglePixel, o as initSnapchatPixel, p as trackEvent, r as initLinkedInPixel, s as initTiktokPixel, t as initBingPixel, u as snapTrack } from "./tracking-DD-P3Lxb.mjs";
import { n as useCart, r as useWishlist } from "./shop-BkxySNBa.mjs";
import { n as formatPrice, t as cn } from "./utils-CyfkpwkR.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as QueryClientProvider, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as couponsQuery, g as productsQuery, h as popupsQuery, m as paymentSettingsQuery, s as effectivePrice } from "./catalog-CjOF-ztI.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { i as SheetTitle, n as SheetContent, r as SheetHeader, t as Sheet } from "./sheet-D6Qp4gD0.mjs";
import { t as Textarea } from "./textarea-CSVRhi8K.mjs";
import { i as loadCatalogue, n as catalogueToText, r as createLovableAiGatewayProvider, t as CHAT_MODEL } from "./store-data.server-B_wcpe4b.mjs";
import { t as FreeShipProgress } from "./FreeShipProgress-B6bhPojE.mjs";
import { t as Route$64 } from "./collections._slug-IYLxNePe.mjs";
import { t as siteSettingsQuery } from "./site-settings-CXAVkk7j.mjs";
import { a as trackTimeOnPage, i as trackScrollDepth, n as trackOutboundClick, r as trackPageView } from "./events-YIQlOK8l.mjs";
import { t as Route$65 } from "./deals._slug-ZwEmSi9G.mjs";
import { t as Route$66 } from "./policies._slug-BQ-PsKvj.mjs";
import { t as Route$67 } from "./product._slug-HKAP3yrK.mjs";
import { t as Route$68 } from "./trust-B_qTg4kt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BHA52Yxq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B8KkLBtb.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var WATCH_SUB = [
	{
		label: "All Watches",
		href: "/shop"
	},
	{
		label: "Strap Watches",
		href: "/shop?category=strap"
	},
	{
		label: "Chain Watches",
		href: "/shop?category=chain"
	},
	{
		label: "Arabic Dial Watches",
		href: "/shop?category=arabic"
	},
	{
		label: "Automatic",
		href: "/shop?movement=automatic"
	},
	{
		label: "Quartz",
		href: "/shop?movement=quartz"
	},
	{
		label: "Manual Wind",
		href: "/shop?movement=manual"
	}
];
var PERFUME_SUB = [
	{
		label: "All Perfumes",
		href: "/perfumes"
	},
	{
		label: "Men",
		href: "/perfumes?gender=men"
	},
	{
		label: "Women",
		href: "/perfumes?gender=women"
	},
	{
		label: "Unisex",
		href: "/perfumes?gender=unisex"
	}
];
var DEFAULT_NAV = [
	{
		label: "Watches",
		href: "/shop",
		sub: WATCH_SUB
	},
	{
		label: "Perfumes",
		href: "/perfumes",
		sub: PERFUME_SUB
	},
	{
		label: "Best Sellers",
		href: "/shop?badge=bestseller"
	},
	{
		label: "New Arrivals",
		href: "/shop?badge=new"
	},
	{
		label: "About",
		href: "/about"
	},
	{
		label: "Contact",
		href: "/contact"
	}
];
function DropdownMenu({ item }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		function handle(e) {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		}
		document.addEventListener("mousedown", handle);
		return () => document.removeEventListener("mousedown", handle);
	}, []);
	if (!item.sub?.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: item.href,
		className: "relative text-[12px] font-medium uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-primary group",
		children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative",
		onMouseEnter: () => setOpen(true),
		onMouseLeave: () => setOpen(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "flex items-center gap-1 text-[12px] font-medium uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-primary",
			"aria-expanded": open,
			"aria-haspopup": "true",
			children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-3 w-3 transition-transform duration-200", open && "rotate-180") })]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 animate-in fade-in slide-in-from-top-1 duration-150",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto h-2 w-3 overflow-hidden relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-1 h-2 w-2 rotate-45 border border-border bg-card mx-auto" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-[180px] rounded-xl border border-border bg-card shadow-luxe overflow-hidden",
				children: item.sub.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: s.href,
					onClick: () => setOpen(false),
					className: "block px-5 py-2.5 text-[12px] text-foreground/80 hover:bg-muted hover:text-primary transition-colors",
					children: s.label
				}, s.href))
			})]
		})]
	});
}
function SearchBar({ onClose }) {
	const navigate = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	function submit(e) {
		e.preventDefault();
		const term = q.trim();
		if (!term) return;
		onClose?.();
		trackEvent("search", { metadata: { query: term } });
		navigate({
			to: "/shop",
			search: { q: term }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "relative flex w-full items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			autoFocus: true,
			value: q,
			onChange: (e) => setQ(e.target.value),
			placeholder: "Search watches, perfumes…",
			className: "h-11 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
		})]
	});
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [signedIn, setSignedIn] = (0, import_react.useState)(false);
	const [mobileWatchOpen, setMobileWatchOpen] = (0, import_react.useState)(false);
	const [mobilePerfumeOpen, setMobilePerfumeOpen] = (0, import_react.useState)(false);
	const cartCount = useCart((s) => s.items.reduce((a, i) => a + i.quantity, 0));
	const wishCount = useWishlist((s) => s.ids.length);
	const toggleCart = useCart((s) => s.toggle);
	const { data: settings } = useQuery(siteSettingsQuery);
	const adminNav = (settings?.navLinks ?? []).map((n) => ({
		label: n.label,
		href: n.href
	}));
	const nav = adminNav.length ? adminNav.map((n) => {
		if (/watch/i.test(n.label) && !n.sub) return {
			...n,
			sub: WATCH_SUB
		};
		if (/perfume/i.test(n.label) && !n.sub) return {
			...n,
			sub: PERFUME_SUB
		};
		return n;
	}) : DEFAULT_NAV;
	const brand = settings?.brandName || "TIMERA";
	const whatsapp = settings?.whatsappNumber ?? settings?.contactPhone ?? "";
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => setSignedIn(!!data.session));
		const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => setSignedIn(!!session));
		return () => sub.subscription.unsubscribe();
	}, []);
	const BrandLogo = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: settings?.logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: settings.logoUrl,
		alt: brand,
		className: "h-9 w-auto max-w-[160px] object-contain sm:h-10"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "font-serif text-2xl font-semibold tracking-tight sm:text-3xl",
		style: { color: "#111111" },
		children: brand
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("sticky top-0 z-50 w-full transition-all duration-300", scrolled ? "border-b border-border/60 bg-background/95 backdrop-blur-xl shadow-sm" : "bg-background/98 border-b border-border/40"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-14 items-center gap-3 sm:h-16 lg:h-[60px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "lg:hidden shrink-0 rounded-md p-1.5 text-foreground/70 hover:text-primary transition",
						onClick: () => setMobileOpen(true),
						"aria-label": "Open navigation menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mr-auto flex items-baseline gap-1.5 lg:mr-0",
						children: BrandLogo
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden lg:flex flex-1 items-center justify-center gap-8 xl:gap-10",
						"aria-label": "Main navigation",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenu, { item }, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center gap-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-9 w-9",
								onClick: () => setSearchOpen((v) => !v),
								"aria-label": "Search",
								children: searchOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								asChild: true,
								className: "h-9 w-9",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: signedIn ? "/account" : "/auth",
									"aria-label": signedIn ? "My account" : "Sign in",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								asChild: true,
								className: "relative hidden sm:inline-flex h-9 w-9",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/wishlist",
									"aria-label": "Wishlist",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" }), wishCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -top-0.5 -right-0.5 h-[15px] min-w-[15px] rounded-full bg-primary px-1 text-[9px] font-bold text-white flex items-center justify-center leading-none",
										children: wishCount
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: toggleCart,
								className: "relative h-9 w-9",
								"aria-label": `Cart (${cartCount} items)`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-0.5 -right-0.5 h-[15px] min-w-[15px] rounded-full bg-primary px-1 text-[9px] font-bold text-white flex items-center justify-center leading-none",
									children: cartCount
								})]
							})
						]
					})
				]
			}), searchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border/40 py-3 animate-in slide-in-from-top-1 duration-150",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, { onClose: () => setSearchOpen(false) })
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: mobileOpen,
		onOpenChange: setMobileOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			side: "left",
			className: "w-[85vw] max-w-[320px] overflow-y-auto p-0 flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						onClick: () => setMobileOpen(false),
						children: settings?.logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: settings.logoUrl,
							alt: brand,
							className: "h-7 w-auto max-w-[120px] object-contain"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-xl",
							style: { color: "#111111" },
							children: brand
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMobileOpen(false),
						"aria-label": "Close menu",
						className: "text-muted-foreground hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border px-4 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, { onClose: () => setMobileOpen(false) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex-1 px-2 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex w-full items-center justify-between rounded-md px-3 py-3 font-serif text-base text-foreground transition hover:bg-muted hover:text-primary",
							onClick: () => setMobileWatchOpen((v) => !v),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Watches" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 transition-transform text-muted-foreground", mobileWatchOpen && "rotate-180") })]
						}), mobileWatchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ml-3 mb-1 border-l border-border/60 pl-3",
							children: WATCH_SUB.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: s.href,
								onClick: () => setMobileOpen(false),
								className: "block py-2 text-sm text-muted-foreground hover:text-primary transition",
								children: s.label
							}, s.href))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex w-full items-center justify-between rounded-md px-3 py-3 font-serif text-base text-foreground transition hover:bg-muted hover:text-primary",
							onClick: () => setMobilePerfumeOpen((v) => !v),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Perfumes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 transition-transform text-muted-foreground", mobilePerfumeOpen && "rotate-180") })]
						}), mobilePerfumeOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ml-3 mb-1 border-l border-border/60 pl-3",
							children: PERFUME_SUB.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: s.href,
								onClick: () => setMobileOpen(false),
								className: "block py-2 text-sm text-muted-foreground hover:text-primary transition",
								children: s.label
							}, s.href))
						})] }),
						[
							{
								label: "Best Sellers",
								href: "/shop?badge=bestseller"
							},
							{
								label: "New Arrivals",
								href: "/shop?badge=new"
							},
							{
								label: "Collections",
								href: "/collections"
							},
							{
								label: "About",
								href: "/about"
							},
							{
								label: "Contact",
								href: "/contact"
							},
							{
								label: "Track Order",
								href: "/track"
							}
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.href,
							onClick: () => setMobileOpen(false),
							className: "block rounded-md px-3 py-3 font-serif text-base text-foreground transition hover:bg-muted hover:text-primary",
							children: n.label
						}, n.label)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 h-px bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: signedIn ? "/account" : "/auth",
							onClick: () => setMobileOpen(false),
							className: "block rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
							children: signedIn ? "My Account" : "Sign In / Register"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/wishlist",
							onClick: () => setMobileOpen(false),
							className: "block rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
							children: "Wishlist"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border/40 px-5 py-4 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: "Why Timera?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2 text-[11px] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex items-center gap-1",
									children: "✓ Cash on Delivery"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex items-center gap-1",
									children: "✓ 1-Year Warranty"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex items-center gap-1",
									children: "✓ Delivery All Pakistan"
								})
							]
						}),
						whatsapp && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi Timera! I need help choosing a watch.")}`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-2 flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "Chat on WhatsApp"]
						})
					]
				})
			]
		})
	})] });
}
var WATCH_LINKS = [
	{
		label: "All Watches",
		to: "/shop"
	},
	{
		label: "Strap Watches",
		to: "/shop?category=strap"
	},
	{
		label: "Chain Watches",
		to: "/shop?category=chain"
	},
	{
		label: "Arabic Dial",
		to: "/shop?category=arabic"
	},
	{
		label: "Best Sellers",
		to: "/shop?badge=bestseller"
	},
	{
		label: "New Arrivals",
		to: "/shop?badge=new"
	}
];
var PERFUME_LINKS = [
	{
		label: "All Perfumes",
		to: "/perfumes"
	},
	{
		label: "Men's Fragrances",
		to: "/perfumes?gender=men"
	},
	{
		label: "Women's Fragrances",
		to: "/perfumes?gender=women"
	},
	{
		label: "Unisex",
		to: "/perfumes?gender=unisex"
	}
];
var HELP_LINKS = [
	{
		label: "Contact Us",
		to: "/contact"
	},
	{
		label: "Track Your Order",
		to: "/track"
	},
	{
		label: "FAQs",
		to: "/faq"
	},
	{
		label: "Shipping Policy",
		to: "/policies/shipping"
	},
	{
		label: "Returns Policy",
		to: "/policies/refund"
	},
	{
		label: "Warranty",
		to: "/policies/warranty"
	}
];
var LEGAL_LINKS = [
	{
		label: "Privacy Policy",
		to: "/policies/privacy"
	},
	{
		label: "Terms of Service",
		to: "/policies/terms"
	},
	{
		label: "Cookie Policy",
		to: "/policies/cookies"
	}
];
function Footer() {
	const { data: settings } = useQuery(siteSettingsQuery);
	const brand = settings?.brandName || "TIMERA";
	const whatsapp = settings?.whatsappNumber?.replace(/[^0-9]/g, "") ?? "";
	const waHref = whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi Timera! I have a question.")}` : null;
	const socials = [
		settings?.instagramUrl && {
			icon: Instagram,
			href: settings.instagramUrl,
			label: "Instagram"
		},
		settings?.facebookUrl && {
			icon: Facebook,
			href: settings.facebookUrl,
			label: "Facebook"
		},
		settings?.youtubeUrl && {
			icon: Youtube,
			href: settings.youtubeUrl,
			label: "YouTube"
		}
	].filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 border-t border-border/40 bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe py-16 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.5fr_2.5fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					settings?.logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: settings.logoUrl,
						alt: brand,
						className: "h-10 w-auto max-w-[160px] object-contain"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-2xl text-white",
						children: brand
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-sm text-sm leading-relaxed text-white/50",
						children: settings?.brandTagline || "Premium watches with Cash on Delivery across Pakistan. 1-year warranty on every timepiece."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-2.5",
						children: [
							settings?.contactPhone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${settings.contactPhone.replace(/\s/g, "")}`,
								className: "flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary shrink-0" }), settings.contactPhone]
							}),
							waHref && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waHref,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-primary shrink-0" }), "WhatsApp Us"]
							}),
							settings?.contactEmail && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${settings.contactEmail}`,
								className: "flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary shrink-0" }), settings.contactEmail]
							})
						]
					}),
					socials.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex items-center gap-3",
						children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": s.label,
							className: "flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 hover:border-primary/50 hover:text-primary transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
						}, s.label))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-10 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-4 text-[10px] uppercase tracking-[0.28em] text-primary",
							children: "Watches"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2.5",
							children: WATCH_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "text-sm text-white/50 hover:text-white transition",
								children: l.label
							}) }, l.label))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-4 text-[10px] uppercase tracking-[0.28em] text-primary",
							children: "Perfumes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2.5",
							children: PERFUME_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "text-sm text-white/50 hover:text-white transition",
								children: l.label
							}) }, l.label))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-4 text-[10px] uppercase tracking-[0.28em] text-primary",
							children: "Customer Care"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2.5",
							children: HELP_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "text-sm text-white/50 hover:text-white transition",
								children: l.label
							}) }, l.label))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-4 text-[10px] uppercase tracking-[0.28em] text-primary",
							children: "Legal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2.5",
							children: LEGAL_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "text-sm text-white/50 hover:text-white transition",
								children: l.label
							}) }, l.label))
						})] })
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-white/35",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						brand,
						". All rights reserved."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-4 text-[10px] text-white/35",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cash on Delivery Available" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1-Year Warranty" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delivery Across Pakistan" })
					]
				})]
			})]
		})
	});
}
var FALLBACK = [
	"Cash on Delivery available across all of Pakistan",
	"1-Year warranty on every timepiece",
	"Fast delivery — 2 to 4 business days",
	"Premium gift packaging with every order",
	"Call or WhatsApp us for help placing your order"
];
function AnnouncementBar() {
	const { data: settings } = useQuery(siteSettingsQuery);
	if (settings && !settings.marqueeEnabled) return null;
	const adminItems = settings?.marqueeItems ?? [];
	const featured = settings?.featuredIn ?? [];
	const isFeaturedLine = (t) => /^featured in/i.test(t.trim());
	const items = adminItems.length ? [...adminItems.filter((t) => !isFeaturedLine(t)), ...featured.map((n) => `Featured in ${n}`)] : FALLBACK;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden border-b border-border/40 bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-max whitespace-nowrap marquee",
			children: [
				...items,
				...items,
				...items,
				...items
			].map((text, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-3 px-6 py-2 text-[10px] uppercase tracking-[0.22em] text-white/60 sm:px-8 sm:py-2.5 sm:text-[11px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: "#B08D57" },
					children: "◆"
				})]
			}, i))
		})
	});
}
/** CART UPSELL — "complete the look" row inside the cart drawer. */
function CartUpsell() {
	const { data: products = [] } = useQuery(productsQuery);
	const items = useCart((s) => s.items);
	const add = useCart((s) => s.add);
	const suggestions = (0, import_react.useMemo)(() => {
		const inCart = new Set(items.map((i) => i.product.id));
		return products.filter((p) => p.stock > 0 && !inCart.has(p.id)).slice(0, 4);
	}, [products, items]);
	if (items.length === 0 || suggestions.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-border/50 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
			children: "Complete the look"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex gap-3 overflow-x-auto pb-1",
			children: suggestions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-32 shrink-0 rounded-xl border border-border/60 bg-background/60 p-2 backdrop-blur-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: p.name,
						loading: "lazy",
						className: "h-24 w-full rounded-lg object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 truncate text-[11px] leading-tight",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium text-primary",
						children: formatPrice(effectivePrice(p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							add(p);
							trackEvent("upsell_add", {
								productId: p.id,
								productSlug: p.slug,
								value: effectivePrice(p),
								metadata: { type: "cart_drawer" }
							});
						},
						className: "mt-2 flex w-full items-center justify-center gap-1 rounded-md border border-border py-1.5 text-[10px] uppercase tracking-[0.16em] transition hover:border-primary/40 hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), " Add"]
					})
				]
			}, p.id))
		})]
	});
}
function CartDrawer() {
	const { items, isOpen, setOpen, updateQty, remove } = useCart();
	const { data: pay } = useQuery(paymentSettingsQuery);
	const subtotal = items.reduce((sum, i) => sum + effectivePrice(i.product) * i.quantity, 0);
	const freeAbove = Number(pay?.freeDeliveryAbove ?? 5e3);
	const deliveryCharge = Number(pay?.deliveryCharge ?? 250);
	const shipping = subtotal >= freeAbove ? 0 : deliveryCharge;
	const total = subtotal + shipping;
	const warrantyMonths = pay?.warrantyMonths ?? 12;
	const warrantyLabel = warrantyMonths >= 12 ? `${Math.round(warrantyMonths / 12)}-Year Warranty` : `${warrantyMonths}-Month Warranty`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: isOpen,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "w-full sm:max-w-md h-[100dvh] max-h-[100dvh] flex flex-col overflow-hidden bg-background border-l border-border p-0",
			"aria-label": "Shopping cart",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
				className: "shrink-0 border-b border-border/50 px-5 pb-4 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
					className: "font-serif text-xl",
					children: ["Your Cart", items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-2 text-sm font-normal text-muted-foreground",
						children: [
							"(",
							items.reduce((a, i) => a + i.quantity, 0),
							" item",
							items.length !== 1 ? "s" : "",
							")"
						]
					})]
				}), subtotal > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FreeShipProgress, {
					subtotal,
					className: "mt-3"
				})]
			}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center gap-4 px-6 py-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-16 w-16 items-center justify-center rounded-full border border-border bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-6 w-6 text-muted-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-xl",
						children: "Your cart is empty"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Browse our watches and add something you like."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							children: "Browse Watches"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap justify-center gap-3 text-[10px] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-3 w-3 text-primary" }), " Cash on Delivery"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3 text-primary" }),
									" ",
									warrantyLabel
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3 w-3 text-primary" }), " All Pakistan"]
							})
						]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 min-h-0 overflow-y-auto px-5 py-4 space-y-4",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 pb-4 border-b border-border/40 last:border-0 last:pb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: item.product.slug },
							onClick: () => setOpen(false),
							className: "h-[72px] w-[60px] shrink-0 overflow-hidden rounded-xl bg-card border border-border/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.product.image,
								alt: item.product.name,
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[9px] uppercase tracking-[0.2em] text-muted-foreground",
											children: item.product.brand
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/product/$slug",
											params: { slug: item.product.slug },
											onClick: () => setOpen(false),
											className: "font-serif text-sm leading-snug hover:text-primary transition block",
											children: item.product.name
										}),
										(item.color || item.size) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-[10px] text-muted-foreground",
											children: [item.color, item.size].filter(Boolean).join(" · ")
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => remove(item.id),
									className: "shrink-0 text-muted-foreground hover:text-destructive transition p-0.5",
									"aria-label": `Remove ${item.product.name}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center rounded-lg border border-border/60",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => updateQty(item.id, item.quantity - 1),
											className: "px-2 py-1.5 text-muted-foreground hover:text-primary transition",
											"aria-label": "Decrease",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-7 text-center text-sm tabular-nums",
											children: item.quantity
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => updateQty(item.id, item.quantity + 1),
											className: "px-2 py-1.5 text-muted-foreground hover:text-primary transition",
											"aria-label": "Increase",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									style: { color: "#B08D57" },
									children: formatPrice(effectivePrice(item.product) * item.quantity)
								})]
							})]
						})]
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden sm:block shrink-0 px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartUpsell, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shrink-0 border-t border-border/50 px-5 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(subtotal) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delivery" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: shipping === 0 ? "text-primary font-medium" : "",
										children: shipping === 0 ? "Free" : formatPrice(shipping)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-t border-border/40 pt-2 font-serif text-base",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "Total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { color: "#B08D57" },
										children: formatPrice(total)
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "w-full h-12 text-[11px] uppercase tracking-[0.18em] font-semibold",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/checkout",
								children: ["Checkout — COD Available", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							asChild: true,
							className: "w-full h-9 text-xs text-muted-foreground",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cart",
								children: "View full cart"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-center gap-3 pt-1 text-[10px] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-3 w-3 text-primary" }), " Cash on Delivery"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3 text-primary" }),
										" ",
										warrantyLabel
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3 w-3 text-primary" }), " All Pakistan"]
								})
							]
						})
					]
				})
			] })]
		})
	});
}
var seenKey = (id) => `timera_popup_${id}`;
/** Pages where a marketing overlay would block the task the visitor came to do. */
var MUTED_PATHS = [
	"/auth",
	"/admin",
	"/checkout",
	"/account"
];
function PromoPopup() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const muted = MUTED_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
	const { data: popups = [] } = useQuery(popupsQuery);
	const popup = muted ? void 0 : popups[0];
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!popup || typeof window === "undefined") return;
		const key = seenKey(popup.id);
		if (popup.frequency === "once" && localStorage.getItem(key)) return;
		if (popup.frequency === "session" && sessionStorage.getItem(key)) return;
		let timer;
		const show = () => {
			setOpen(true);
			if (popup.frequency === "once") localStorage.setItem(key, "1");
			if (popup.frequency === "session") sessionStorage.setItem(key, "1");
			cleanup();
		};
		const onLeave = (e) => {
			if (e.clientY <= 0) show();
		};
		const cleanup = () => {
			if (timer) clearTimeout(timer);
			document.removeEventListener("mouseout", onLeave);
		};
		if (popup.triggerType === "delay" || popup.triggerType === "both") timer = setTimeout(show, Math.max(0, popup.delaySeconds) * 1e3);
		if (popup.triggerType === "exit" || popup.triggerType === "both") {
			document.addEventListener("mouseout", onLeave);
			if (popup.triggerType === "exit") timer = setTimeout(show, 15e3);
		}
		return cleanup;
	}, [popup]);
	if (!popup || !open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[80] flex items-end justify-center bg-foreground/40 p-3 backdrop-blur-sm sm:items-center sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-luxe sm:max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					"aria-label": "Close offer",
					className: "absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/80 backdrop-blur transition hover:text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}),
				popup.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: popup.image,
					alt: "",
					className: "h-40 w-full object-cover sm:h-52"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 sm:p-8",
					children: [
						popup.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-primary",
							children: popup.badge
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-2xl leading-tight sm:text-3xl",
							children: popup.title
						}),
						popup.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: popup.message
						}),
						popup.couponCode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 rounded-lg border border-dashed border-primary/50 bg-primary/5 px-4 py-3 text-center text-sm",
							children: ["Use code ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tracking-[0.2em] text-primary",
								children: popup.couponCode
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-2 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "h-11 flex-1 text-xs uppercase tracking-[0.22em]",
								onClick: () => setOpen(false),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: popup.ctaHref || "/shop",
									children: popup.ctaLabel || "Shop now"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								className: "h-11",
								onClick: () => setOpen(false),
								children: "No thanks"
							})]
						})
					]
				})
			]
		})
	});
}
var SUGGESTIONS = [
	"A gold dress watch under Rs 500,000",
	"Which piece suits daily wear and swimming?",
	"What is your return policy?"
];
/** Renders assistant text with support for [label](/path) links and simple bullets. */
function RichText({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-1.5",
		children: text.split("\n").filter((l) => l.trim().length > 0).map((line, i) => {
			const bullet = /^[-*•]\s+/.test(line);
			const content = bullet ? line.replace(/^[-*•]\s+/, "") : line;
			const parts = [];
			const re = /\[([^\]]+)\]\(([^)]+)\)/g;
			let last = 0;
			let m;
			while (m = re.exec(content)) {
				if (m.index > last) parts.push(strip(content.slice(last, m.index)));
				const href = m[2];
				parts.push(href.startsWith("/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: href,
					className: "text-primary underline underline-offset-2",
					children: m[1]
				}, `${i}-${m.index}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m[1] }, `${i}-${m.index}`));
				last = m.index + m[0].length;
			}
			parts.push(strip(content.slice(last)));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-sm leading-relaxed", bullet && "pl-3 before:content-['·'] before:mr-2"),
				children: parts
			}, i);
		})
	});
}
var strip = (s) => s.replace(/\*\*/g, "").replace(/^#+\s*/gm, "");
function AiAssistant() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [input, setInput] = (0, import_react.useState)("");
	const scrollRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const { messages, sendMessage, status, error } = useChat({ transport: new DefaultChatTransport({ api: "/api/chat" }) });
	const busy = status === "submitted" || status === "streaming";
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, status]);
	(0, import_react.useEffect)(() => {
		if (open && !busy) inputRef.current?.focus();
	}, [open, busy]);
	const submit = (text) => {
		const value = text.trim();
		if (!value || busy) return;
		setInput("");
		sendMessage({ text: value });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => setOpen((v) => !v),
		"aria-label": open ? "Close the Timera concierge" : "Ask the Timera concierge",
		className: "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105",
		children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-24 right-4 z-50 flex h-[70vh] max-h-[560px] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[0.3em] text-primary",
					children: "AI Concierge"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-lg",
					children: "Ask about our watches"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scrollRef,
				className: "flex-1 space-y-4 overflow-y-auto px-4 py-4",
				children: [
					messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "I can help you choose a timepiece, compare specifications, or explain shipping, returns and warranty."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => submit(s),
								className: "w-full rounded-lg border border-border px-3 py-2 text-left text-sm transition hover:border-primary hover:text-primary",
								children: s
							}, s))
						})]
					}),
					messages.map((m) => {
						const text = m.parts.map((p) => p.type === "text" ? p.text : "").join("").trim();
						if (!text) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("flex", m.role === "user" ? "justify-end" : "justify-start"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("max-w-[85%] rounded-2xl px-3.5 py-2.5", m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { text })
							})
						}, m.id);
					}),
					status === "submitted" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Thinking…"]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-destructive/30 bg-destructive/5 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-destructive",
							children: error.message?.slice(0, 220) || "The concierge is unavailable right now."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "You can also reach a human on WhatsApp — the green button on the right."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					submit(input);
				},
				className: "flex items-end gap-2 border-t border-border p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					ref: inputRef,
					rows: 1,
					value: input,
					onChange: (e) => setInput(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter" && !e.shiftKey) {
							e.preventDefault();
							submit(input);
						}
					},
					placeholder: "Ask anything about Timera…",
					className: "max-h-28 min-h-[2.75rem] resize-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "icon",
					disabled: busy || !input.trim(),
					"aria-label": "Send message",
					children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 pb-3 text-[10px] text-muted-foreground",
				children: "AI answers can be imperfect — product pages are the source of truth. Never share payment details here."
			})
		]
	})] });
}
/** Normalises a Pakistani number to international WhatsApp format. */
function toWaNumber(raw) {
	let n = String(raw ?? "").replace(/[^0-9]/g, "");
	if (!n) return "";
	if (n.startsWith("00")) n = n.slice(2);
	if (n.startsWith("0")) n = `92${n.slice(1)}`;
	else if (n.length === 10) n = `92${n}`;
	return n;
}
/**
* Floating WhatsApp button.
*
* Design decisions:
* - No animate-ping — the constant pulse animation was distracting and made
*   the site feel like a low-quality dropshipping store.
* - bottom-20 on mobile so it sits ABOVE the StickyBuyBar (which is ~60px tall)
*   and never obscures the Buy Now • Cash on Delivery  button.
* - right-4 keeps it inside the safe touch zone on small screens.
* - Only rendered when a WhatsApp number is actually configured in site settings.
*/
function FloatingWhatsApp({ fallbackNumber = "" }) {
	const { data: settings } = useQuery(siteSettingsQuery);
	const number = toWaNumber(settings?.whatsappNumber ?? settings?.contactPhone) || toWaNumber(fallbackNumber);
	if (!number) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `https://wa.me/${number}?text=${encodeURIComponent("Hi Timera! I need help choosing a watch.")}`,
		target: "_blank",
		rel: "noopener noreferrer",
		onClick: () => void trackEvent("whatsapp_click", { metadata: {
			channel: "whatsapp",
			source: "floating_button"
		} }),
		"aria-label": "Chat with Timera on WhatsApp — Need help placing an order?",
		title: "Need help? Chat with us on WhatsApp",
		className: [
			"fixed right-4 z-[55]",
			"bottom-6",
			"flex h-14 w-14 items-center justify-center rounded-full shadow-lg",
			"bg-[#25D366] text-white",
			"transition-transform duration-200 hover:scale-105 active:scale-95",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
		].join(" "),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 32 32",
			className: "h-7 w-7 fill-current",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.02 3C9.4 3 4.04 8.36 4.04 14.98c0 2.36.69 4.56 1.88 6.41L4 29l7.79-2.04a11.9 11.9 0 0 0 4.23.78h.01c6.61 0 11.98-5.36 11.98-11.98C28.01 8.36 22.64 3 16.02 3Zm0 21.72h-.01c-1.3 0-2.57-.35-3.68-1l-.26-.16-4.62 1.21 1.23-4.5-.17-.28a9.72 9.72 0 0 1-1.49-5.19c0-5.37 4.37-9.73 9.74-9.73 2.6 0 5.05 1.01 6.89 2.85a9.66 9.66 0 0 1 2.85 6.89c0 5.37-4.37 9.91-9.74 9.91Zm5.34-7.28c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.35-1.46-.87-.77-1.46-1.73-1.63-2.02-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.51h-.56c-.19 0-.51.07-.77.36-.27.29-1.01.99-1.01 2.42s1.04 2.8 1.19 3c.15.19 2.05 3.13 4.97 4.39.69.3 1.24.48 1.66.61.7.22 1.33.19 1.83.12.56-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.34Z" })
		})
	});
}
function TrackingPixels() {
	const { data: settings } = useQuery(siteSettingsQuery);
	const location = useRouterState({ select: (s) => s.location });
	(0, import_react.useEffect)(() => {
		initMetaPixel(settings?.metaPixelId);
	}, [settings?.metaPixelId]);
	(0, import_react.useEffect)(() => {
		initTiktokPixel(settings?.tiktokPixelId);
	}, [settings?.tiktokPixelId]);
	(0, import_react.useEffect)(() => {
		if (!settings?.googleTagId) return;
		initGooglePixel(settings.googleTagId, settings.googleAdsPurchaseLabel);
	}, [settings?.googleTagId, settings?.googleAdsPurchaseLabel]);
	(0, import_react.useEffect)(() => {
		initLinkedInPixel(settings?.linkedinPartnerId);
	}, [settings?.linkedinPartnerId]);
	(0, import_react.useEffect)(() => {
		initSnapchatPixel(settings?.snapchatPixelId);
	}, [settings?.snapchatPixelId]);
	(0, import_react.useEffect)(() => {
		initPinterestPixel(settings?.pinterestTagId);
	}, [settings?.pinterestTagId]);
	(0, import_react.useEffect)(() => {
		initBingPixel(settings?.bingUetTagId);
	}, [settings?.bingUetTagId]);
	(0, import_react.useEffect)(() => {
		setVerificationMeta("msvalidate.01", settings?.bingSiteVerification);
		setVerificationMeta("google-site-verification", settings?.googleSiteVerification);
		setVerificationMeta("p:domain_verify", settings?.pinterestSiteVerification);
	}, [
		settings?.bingSiteVerification,
		settings?.googleSiteVerification,
		settings?.pinterestSiteVerification
	]);
	(0, import_react.useEffect)(() => {
		tiktokPage();
		pinterestPage();
		snapTrack("PAGE_VIEW", {});
	}, [location.pathname, location.searchStr]);
	return null;
}
/**
* Mounts once at the root. Auto-fires:
*  - page_view on every route change
*  - scroll_depth at 25/50/75/100%
*  - time_on_page at 15s, 30s, 60s, 120s
*  - outbound_click on external link clicks
*/
function AutoTracker() {
	const location = useRouterState({ select: (s) => s.location });
	const firedDepths = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const firedTimes = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	(0, import_react.useEffect)(() => {
		firedDepths.current = /* @__PURE__ */ new Set();
		firedTimes.current = /* @__PURE__ */ new Set();
		trackPageView(location.pathname + (location.searchStr ?? ""));
	}, [location.pathname, location.searchStr]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const doc = document.documentElement;
			const total = doc.scrollHeight - doc.clientHeight;
			if (total <= 0) return;
			const pct = Math.round(window.scrollY / total * 100);
			for (const bucket of [
				25,
				50,
				75,
				100
			]) if (pct >= bucket && !firedDepths.current.has(bucket)) {
				firedDepths.current.add(bucket);
				trackScrollDepth(bucket);
			}
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const timers = [
			15,
			30,
			60,
			120
		].map((s) => window.setTimeout(() => {
			if (!firedTimes.current.has(s)) {
				firedTimes.current.add(s);
				trackTimeOnPage(s);
			}
		}, s * 1e3));
		return () => timers.forEach(window.clearTimeout);
	}, [location.pathname]);
	(0, import_react.useEffect)(() => {
		const onClick = (e) => {
			const target = e.target?.closest("a");
			if (!target) return;
			const href = target.getAttribute("href") || "";
			if (!/^https?:\/\//i.test(href)) return;
			try {
				if (new URL(href).host !== window.location.host) trackOutboundClick(href);
			} catch {}
		};
		document.addEventListener("click", onClick);
		return () => document.removeEventListener("click", onClick);
	}, []);
	return null;
}
/** Slim gold reading-progress bar pinned to the top of the viewport. */
function ScrollProgress() {
	const [pct, setPct] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let frame = 0;
		const onScroll = () => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				const doc = document.documentElement;
				const max = doc.scrollHeight - doc.clientHeight;
				setPct(max > 0 ? Math.min(100, doc.scrollTop / max * 100) : 0);
			});
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			if (frame) cancelAnimationFrame(frame);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full origin-left transition-[width] duration-150 ease-out",
			style: {
				width: `${pct}%`,
				background: "var(--grad-gold)"
			}
		})
	});
}
/** Appears after the first screen and returns the visitor to the top. */
function BackToTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 700);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Back to top",
		className: "fixed bottom-5 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur transition hover:border-primary hover:text-primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-4 w-4" })
	});
}
/**
* LiveSalesToast — DISABLED.
*
* The previous implementation displayed fabricated "Ali from Lahore just
* ordered…" toasts with randomly-seeded buyer names, cities and timestamps.
* None of that data came from real orders. It is a dark pattern that:
*
*   1. Manufactures social proof that does not exist
*   2. Erodes customer trust when noticed
*   3. Violates the project rule: "DO NOT USE FAKE SOCIAL PROOF"
*
* The component is kept as a named export so existing imports compile.
*
* TO RE-ENABLE CORRECTLY:
*   - Query the `orders` table for real recent orders (last 48 h)
*   - Show only city and product name (never fabricate buyer names)
*   - Only display when ≥ 3 real orders exist for that product
*   - Add an admin toggle in site_settings: show_sales_toast: boolean
*/
function LiveSalesToast() {
	return null;
}
var KEY = "timera.exit-offer";
var MUTED = [
	"/auth",
	"/admin",
	"/checkout",
	"/account"
];
/**
* EXIT-INTENT OFFER — last-chance discount when the visitor is about to leave.
* Uses a real active coupon from the database; silent when none exists.
*/
function ExitIntentOffer() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const muted = MUTED.some((p) => pathname === p || pathname.startsWith(`${p}/`));
	const { data: coupons = [] } = useQuery(couponsQuery);
	const coupon = coupons[0];
	const [open, setOpen] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (muted || !coupon || typeof window === "undefined") return;
		try {
			if (sessionStorage.getItem(KEY)) return;
		} catch {
			return;
		}
		let timer;
		const show = () => {
			setOpen(true);
			try {
				sessionStorage.setItem(KEY, "1");
			} catch {}
			trackEvent("exit_intent_offer", { metadata: { code: coupon.code } });
			cleanup();
		};
		const onLeave = (e) => {
			if (e.clientY <= 0) show();
		};
		const cleanup = () => {
			if (timer) clearTimeout(timer);
			document.removeEventListener("mouseout", onLeave);
		};
		document.addEventListener("mouseout", onLeave);
		if (window.matchMedia("(max-width: 768px)").matches) timer = setTimeout(show, 45e3);
		return cleanup;
	}, [coupon, muted]);
	if (!open || !coupon) return null;
	const copy = async () => {
		try {
			await navigator.clipboard.writeText(coupon.code);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {}
	};
	const value = coupon.discountType === "percent" ? `${coupon.discountValue}% off` : `Rs ${coupon.discountValue} off`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[85] flex items-end justify-center bg-foreground/40 p-3 backdrop-blur-sm sm:items-center sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md overflow-hidden rounded-2xl border border-primary/20 bg-card/80 p-7 shadow-luxe backdrop-blur-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					"aria-label": "Close offer",
					className: "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/70 backdrop-blur transition hover:text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 font-serif text-2xl leading-tight",
					children: [
						"Wait — take ",
						value,
						" with you"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: coupon.description || "Use this code at checkout before you go. Cash on Delivery available across Pakistan."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: copy,
					className: "mt-5 flex w-full items-center justify-between rounded-xl border border-dashed border-primary/50 bg-primary/5 px-4 py-3 text-sm transition hover:bg-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold tracking-[0.2em] text-primary",
						children: coupon.code
					}), copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4 text-muted-foreground" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-4 h-11 w-full text-xs uppercase tracking-[0.22em]",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						children: "Claim & shop now"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					className: "mt-3 w-full text-xs text-muted-foreground underline-offset-4 hover:underline",
					children: "No thanks, I'll pay full price"
				})
			]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		router.navigate({
			to: "/",
			replace: true
		});
	}, [router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "Taking you home…"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "That page has moved. Redirecting you to the Timera home page."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "mt-8 inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90",
					children: "Return home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-2xl",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try again or return home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "h-10 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "h-10 rounded-md border border-border px-6 text-sm font-medium inline-flex items-center",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$63 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Timera — Premium Watches Pakistan | Cash on Delivery" },
			{
				name: "description",
				content: "Shop Timera premium watches online. Cash on Delivery across Pakistan. 1-year warranty on every timepiece. Strap, chain, automatic, quartz and Arabic dial watches."
			},
			{
				name: "keywords",
				content: "Timera, watches Pakistan, buy watches online Pakistan, cash on delivery watches, strap watch, chain watch, arabic dial watch, automatic watch, quartz watch"
			},
			{
				name: "author",
				content: "Timera"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Timera — Premium Watches Pakistan | Cash on Delivery"
			},
			{
				property: "og:description",
				content: "Shop Timera premium watches online. Cash on Delivery across Pakistan. 1-year warranty on every timepiece."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Timera"
			},
			{
				property: "og:locale",
				content: "en_PK"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@timera"
			},
			{
				name: "theme-color",
				content: "#F7F5F0"
			},
			{
				name: "twitter:title",
				content: "Timera — Premium Watches Pakistan | Cash on Delivery"
			},
			{
				name: "twitter:description",
				content: "Shop Timera premium watches online. Cash on Delivery across Pakistan. 1-year warranty on every timepiece."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/36ae3d18-a66d-4d2c-8e58-ed76dda341c9"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/36ae3d18-a66d-4d2c-8e58-ed76dda341c9"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "preconnect",
				href: "https://connect.facebook.net"
			},
			{
				rel: "dns-prefetch",
				href: "https://connect.facebook.net"
			},
			{
				rel: "dns-prefetch",
				href: "https://www.googletagmanager.com"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Timera",
				url: "https://timera.store/",
				description: "Premium watches with Cash on Delivery across Pakistan. 1-year warranty on every timepiece.",
				sameAs: ["https://instagram.com/timera", "https://facebook.com/timera"]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			suppressHydrationWarning: true,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
var SafeWidget = class extends import_react.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}
	static getDerivedStateFromError() {
		return { hasError: true };
	}
	componentDidCatch(error) {
		console.warn("[SafeWidget caught error]:", error);
	}
	render() {
		if (this.state.hasError) return null;
		return this.props.children;
	}
};
function RootComponent() {
	const { queryClient } = Route$63.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#main",
					className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground",
					children: "Skip to content"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					id: "main",
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeWidget, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromoPopup, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeWidget, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackingPixels, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeWidget, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTracker, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeWidget, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiAssistant, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeWidget, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, { fallbackNumber: "" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeWidget, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveSalesToast, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeWidget, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExitIntentOffer, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
					position: "bottom-right",
					theme: "light"
				})
			]
		})
	});
}
var $$splitComponentImporter$32 = () => import("./routes-CeWVG-kP.mjs");
var Route$62 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Timera Watches Pakistan — Premium Watches | Cash on Delivery" },
			{
				name: "description",
				content: "Shop Timera premium watches online. Cash on Delivery across Pakistan, 1-year warranty on every timepiece. Strap watches, chain watches, automatic and quartz."
			},
			{
				name: "keywords",
				content: "Timera, watches Pakistan, buy watches online, cash on delivery watches, quartz watches, strap watch, chain watch, arabic dial watch, automatic watch"
			},
			{
				property: "og:title",
				content: "Timera Watches Pakistan — Premium Watches | Cash on Delivery"
			},
			{
				property: "og:description",
				content: "Premium watches with Cash on Delivery across Pakistan. 1-year warranty on every timepiece."
			},
			{
				property: "og:url",
				content: "https://timera.store/"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: "Timera",
				url: "https://timera.store/",
				potentialAction: {
					"@type": "SearchAction",
					target: "https://timera.store/shop?q={search_term_string}",
					"query-input": "required name=search_term_string"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
var $$splitComponentImporter$31 = () => import("./about-k19QJL4x.mjs");
var Route$61 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Timera — Precision Quartz Watches in Pakistan" },
			{
				name: "description",
				content: "Timera builds precision quartz timepieces for everyday luxury — accurate, durable and honestly priced, with warranty and nationwide delivery in Pakistan."
			},
			{
				property: "og:title",
				content: "About Timera — Precision Quartz Watches"
			},
			{
				property: "og:description",
				content: "Everyday luxury, powered by precision quartz."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./account-DFm51RdD.mjs");
var Route$60 = createFileRoute("/account")({
	head: () => ({
		meta: [
			{ title: "My Account — Timera" },
			{
				name: "description",
				content: "Your Timera account: orders, wishlist, addresses, and settings."
			},
			{
				property: "og:title",
				content: "My Account — Timera"
			},
			{
				property: "og:description",
				content: "Your Timera account dashboard."
			},
			{
				name: "robots",
				content: "noindex, nofollow"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/account"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./admin-BFnGca8E.mjs");
var Route$59 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Store Admin | Timera" },
		{
			name: "description",
			content: "Private Timera store dashboard for managing products, orders, deals, coupons, reviews and site settings. Staff access only."
		},
		{
			property: "og:title",
			content: "Store Admin | Timera"
		},
		{
			property: "og:description",
			content: "Private Timera store dashboard for managing products, orders, deals, coupons, reviews and site settings. Staff access only."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./auth-CAum3jY_.mjs");
var Route$58 = createFileRoute("/auth")({
	head: () => ({
		meta: [
			{ title: "Sign in or Create an Account | Timera" },
			{
				name: "description",
				content: "Sign in to your Timera account to track orders, save timepieces to your wishlist and access member previews."
			},
			{
				property: "og:title",
				content: "Sign in — Timera"
			},
			{
				property: "og:description",
				content: "Access your Timera account."
			},
			{
				property: "og:url",
				content: "https://timera.store/auth"
			},
			{
				name: "robots",
				content: "noindex, follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/auth"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./blog-aW6RX2xW.mjs");
var Route$57 = createFileRoute("/blog")({
	head: () => ({
		meta: [
			{ title: "Watch Journal — Guides & Stories | Timera" },
			{
				name: "description",
				content: "Timera's watch journal: buying guides, movement explainers, styling notes and stories from our Timera atelier."
			},
			{
				name: "keywords",
				content: "watch journal, watch buying guide, automatic movement guide, luxury watch blog, Timera"
			},
			{
				property: "og:title",
				content: "Watch Journal — Timera"
			},
			{
				property: "og:description",
				content: "Buying guides, movement explainers and stories from the Timera atelier."
			},
			{
				property: "og:url",
				content: "https://timera.store/blog"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/blog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./cart-DLal7rPw.mjs");
var Route$56 = createFileRoute("/cart")({
	head: () => ({
		meta: [
			{ title: "Your Cart — Timera" },
			{
				name: "description",
				content: "Review your Timera order and proceed to checkout with Cash on Delivery."
			},
			{
				property: "og:title",
				content: "Your Cart — Timera"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/cart"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./checkout-pl-fyL_o.mjs");
var Route$55 = createFileRoute("/checkout")({
	head: () => ({
		meta: [
			{ title: "Checkout — Timera Pakistan" },
			{
				name: "description",
				content: "Complete your Timera order — Cash on Delivery, Easypaisa, JazzCash and bank transfer across Pakistan."
			},
			{
				property: "og:title",
				content: "Checkout — Timera Pakistan"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/checkout"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./contact-Dl68eIQA.mjs");
var Route$54 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Timera — Customer Support Pakistan" },
			{
				name: "description",
				content: "Talk to the Timera team by phone, WhatsApp or email. Real support seven days a week for orders, delivery and warranty."
			},
			{
				property: "og:title",
				content: "Contact Timera"
			},
			{
				property: "og:description",
				content: "Phone, WhatsApp and email support for Timera customers."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./faq-BRaiQ7To.mjs");
var Route$53 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "FAQ — Shipping, Warranty & Payment | Timera" },
			{
				name: "description",
				content: "Answers about Timera delivery across Pakistan, cash on delivery, warranty, returns and watch care."
			},
			{
				property: "og:title",
				content: "Timera FAQ"
			},
			{
				property: "og:description",
				content: "Shipping, payment, warranty and returns answered."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/faq"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./perfumes-DDdALe9e.mjs");
var TITLE = "Perfumes Pakistan — Long-Lasting Luxury Fragrances | Timera";
var DESC = "Shop Timera perfumes: oud, floral, aquatic and attar fragrances with 8–12 hour longevity. Cash on delivery, free shipping over Rs 5,000 across Pakistan.";
var Route$52 = createFileRoute("/perfumes")({
	head: () => ({ meta: [
		{ title: TITLE },
		{
			name: "description",
			content: DESC
		},
		{
			name: "keywords",
			content: "perfume Pakistan, oud perfume, long lasting perfume, attar, eau de parfum, luxury fragrance online"
		},
		{
			property: "og:title",
			content: TITLE
		},
		{
			property: "og:description",
			content: DESC
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./shop-BpklBw4z.mjs");
var Route$51 = createFileRoute("/shop")({
	head: () => ({
		meta: [
			{ title: "Shop Luxury Watches & Perfumes Online | Timera" },
			{
				name: "description",
				content: "Browse every Timera watch and fragrance: precision quartz timepieces plus long-lasting perfumes, attars and gift sets. Filter by type, family, gender and price."
			},
			{
				name: "keywords",
				content: "buy luxury watches online, precision quartz watch, perfume for men, perfume for women, attar, oud, gift set, Timera shop"
			},
			{
				property: "og:title",
				content: "Shop Luxury Watches & Perfumes — Timera"
			},
			{
				property: "og:description",
				content: "Every Timera timepiece and fragrance — watches, perfumes, attars and gift sets."
			},
			{
				property: "og:url",
				content: "https://timera.store/shop"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/shop"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var BASE_URL = "https://timera-stores.lovable.app";
var Route$50 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const entries = [
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/shop",
			changefreq: "daily",
			priority: "0.9"
		},
		{
			path: "/blog",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/faq",
			changefreq: "monthly",
			priority: "0.5"
		},
		{
			path: "/track",
			changefreq: "monthly",
			priority: "0.4"
		},
		{
			path: "/wishlist",
			changefreq: "monthly",
			priority: "0.3"
		},
		{
			path: "/cart",
			changefreq: "monthly",
			priority: "0.3"
		},
		{
			path: "/policies/shipping",
			changefreq: "yearly",
			priority: "0.3"
		},
		{
			path: "/policies/refund",
			changefreq: "yearly",
			priority: "0.3"
		},
		{
			path: "/policies/warranty",
			changefreq: "yearly",
			priority: "0.3"
		},
		{
			path: "/policies/privacy",
			changefreq: "yearly",
			priority: "0.3"
		},
		{
			path: "/policies/terms",
			changefreq: "yearly",
			priority: "0.3"
		},
		{
			path: "/policies/cookies",
			changefreq: "yearly",
			priority: "0.3"
		}
	];
	try {
		const { data } = await createClient(process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.VITE_SUPABASE_PUBLISHABLE_KEY, { auth: {
			persistSession: false,
			autoRefreshToken: false
		} }).from("products").select("slug").eq("active", true);
		for (const row of data ?? []) entries.push({
			path: `/product/${row.slug}`,
			changefreq: "weekly",
			priority: "0.8"
		});
	} catch {}
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...entries.map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$20 = () => import("./track-B8_a4a9X.mjs");
var Route$49 = createFileRoute("/track")({
	head: () => ({
		meta: [
			{ title: "Track Your Order — Timera" },
			{
				name: "description",
				content: "Enter your Timera order number to see live status, courier details and delivery progress."
			},
			{
				property: "og:title",
				content: "Track Order — Timera"
			},
			{
				property: "og:description",
				content: "Live status of your Timera watch order."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/track"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./wishlist-Df9vxtcq.mjs");
var Route$48 = createFileRoute("/wishlist")({
	head: () => ({
		meta: [
			{ title: "Your Wishlist — Timera" },
			{
				name: "description",
				content: "The Timera timepieces you're considering, saved to your wishlist."
			},
			{
				property: "og:title",
				content: "Your Wishlist — Timera"
			},
			{
				property: "og:description",
				content: "Your saved Timera timepieces."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/wishlist"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./admin.index-Bvt9fXID.mjs");
var Route$47 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./admin.blog-DT5ANvaw.mjs");
var Route$46 = createFileRoute("/admin/blog")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./admin.categories-D3KDeJ7Y.mjs");
var Route$45 = createFileRoute("/admin/categories")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./admin.collections-DV3gjkt9.mjs");
var Route$44 = createFileRoute("/admin/collections")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./admin.coupons-DUWsslJG.mjs");
var Route$43 = createFileRoute("/admin/coupons")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./admin.deals-97VbWP-h.mjs");
var Route$42 = createFileRoute("/admin/deals")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./admin.faqs-B9FwRDmy.mjs");
var Route$41 = createFileRoute("/admin/faqs")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./admin.hero-DDU7aOBY.mjs");
var Route$40 = createFileRoute("/admin/hero")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./admin.leads-DwaaSWln.mjs");
var Route$39 = createFileRoute("/admin/leads")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./admin.orders-VYKGmHys.mjs");
var Route$38 = createFileRoute("/admin/orders")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./admin.payments-DkBdgdrt.mjs");
var Route$37 = createFileRoute("/admin/payments")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./admin.popups-DTt43k5B.mjs");
var Route$36 = createFileRoute("/admin/popups")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./admin.products-Dnd9felb.mjs");
var Route$35 = createFileRoute("/admin/products")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./admin.reviews-BXnLn_kO.mjs");
var Route$34 = createFileRoute("/admin/reviews")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./admin.settings-B_KhAcMg.mjs");
var Route$33 = createFileRoute("/admin/settings")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./admin.trust-BdXngAZY.mjs");
var Route$32 = createFileRoute("/admin/trust")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./admin.videos-C-8z-lRl.mjs");
var Route$31 = createFileRoute("/admin/videos")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
/**
* The concierge must never show a red error to a shopper. When the AI is not
* reachable we stream a helpful hand-written reply in the same UI-message
* stream format, so the chat keeps working on every deployment.
*/
function fallbackStream(text) {
	const body = [
		{ type: "start" },
		{ type: "start-step" },
		{
			type: "text-start",
			id: "fallback"
		},
		{
			type: "text-delta",
			id: "fallback",
			delta: text
		},
		{
			type: "text-end",
			id: "fallback"
		},
		{ type: "finish-step" },
		{ type: "finish" }
	].map((e) => `data: ${JSON.stringify(e)}\n\n`).join("") + "data: [DONE]\n\n";
	return new Response(body, {
		status: 200,
		headers: {
			"content-type": "text/event-stream",
			"cache-control": "no-cache",
			"x-vercel-ai-ui-message-stream": "v1"
		}
	});
}
var OFFLINE_REPLY = "I'm briefly offline, but I can still point you the right way: browse every precision-quartz Timera at /shop, current offers at /deals, and track an order at /track. Complimentary insured shipping over Rs 5,000 and 30-day returns on unworn pieces. For an instant human answer, tap the green WhatsApp button.";
var Route$30 = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
	const body = await request.json();
	if (!Array.isArray(body.messages)) return new Response("Messages are required", { status: 400 });
	const key = process.env.LOVABLE_API_KEY;
	if (!key) return fallbackStream(OFFLINE_REPLY);
	let catalogue = "";
	try {
		catalogue = catalogueToText(await loadCatalogue());
	} catch {
		catalogue = "";
	}
	const gateway = createLovableAiGatewayProvider(key);
	let result;
	try {
		result = streamText({
			model: gateway(CHAT_MODEL),
			system: [
				"You are the Timera Concierge, a warm and precise shopping assistant for the Timera watch store (Pakistan).",
				"Every Timera watch uses a precision QUARTZ movement. Timera is NOT Swiss-made and never claim otherwise — if asked, explain quartz is more accurate, service-free and keeps prices honest.",
				"Your job is to close the sale: always end with a clear next step (a product link, /shop, or /checkout).",
				"Answer only using the catalogue and store policies below. If something is not covered, say so and suggest contacting the team via the Contact page.",
				"Recommend at most 3 watches at a time. Always mention the price in Pakistani Rupees (Rs) and link the product as a markdown link like [Name](/product/slug).",
				"Never invent products, prices, discount codes, delivery dates or specifications.",
				"Never ask for card numbers, passwords or any payment details. If a customer offers them, tell them to use the secure checkout instead.",
				"Keep replies short — 2 to 5 sentences or a short bullet list.",
				"",
				"Store policies: complimentary insured shipping over Rs 5,000, 30-day returns on unworn pieces, every watch ships with an authenticity dossier. Orders can be tracked at /track. Security and privacy information lives at /trust.",
				"",
				"CATALOGUE:",
				catalogue || "(catalogue unavailable right now — apologise and suggest browsing /shop)"
			].join("\n"),
			messages: await convertToModelMessages(body.messages)
		});
	} catch {
		return fallbackStream(OFFLINE_REPLY);
	}
	try {
		return result.toUIMessageStreamResponse({ originalMessages: body.messages });
	} catch {
		return fallbackStream(OFFLINE_REPLY);
	}
} } } });
var $$splitComponentImporter$1 = () => import("./collections.index-DFdEG8k-.mjs");
var Route$29 = createFileRoute("/collections/")({
	head: () => ({
		meta: [
			{ title: "Watch Collections — Browse by Series | Timera" },
			{
				name: "description",
				content: "Explore every Timera collection: dress, dive, chronograph and heritage series. Open a collection to see only its timepieces."
			},
			{
				property: "og:title",
				content: "Watch Collections | Timera"
			},
			{
				property: "og:description",
				content: "Explore every Timera collection."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/collections"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./deals.index-6A5wqZe5.mjs");
var Route$28 = createFileRoute("/deals/")({
	head: () => ({
		meta: [
			{ title: "Watch Deals & Sale Offers in Pakistan | Timera" },
			{
				name: "description",
				content: "Live Timera deals: discounted luxury watches, limited-time sale offers and promo codes with nationwide cash-on-delivery."
			},
			{
				property: "og:title",
				content: "Watch Deals & Sale Offers | Timera"
			},
			{
				property: "og:description",
				content: "Live discounts on Timera timepieces, updated daily."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/deals"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
/**
* Shared helpers for the public REST API that lives under `/api/public/v1/*`.
* Server-only — never import from a component.
*/
var CORS_HEADERS = {
	"access-control-allow-origin": "*",
	"access-control-allow-methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
	"access-control-allow-headers": "authorization, content-type, apikey",
	"access-control-max-age": "86400"
};
function json(data, status = 200, headers = {}) {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			"content-type": "application/json; charset=utf-8",
			...CORS_HEADERS,
			...headers
		}
	});
}
function apiError(message, status = 400, details) {
	return json({
		ok: false,
		error: message,
		details: details ?? void 0
	}, status);
}
var preflight = () => new Response(null, {
	status: 204,
	headers: CORS_HEADERS
});
function env(name, fallbackName) {
	const value = process.env[name] ?? (fallbackName ? process.env[fallbackName] : void 0);
	if (!value) throw new Error(`Missing environment variable: ${name}`);
	return value;
}
function makeClient(accessToken) {
	const url = env("SUPABASE_URL", "VITE_SUPABASE_URL");
	const key = env("SUPABASE_PUBLISHABLE_KEY", "VITE_SUPABASE_PUBLISHABLE_KEY");
	return createClient(url, key, {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		},
		global: { fetch: (input, init) => {
			const headers = new Headers(init?.headers);
			headers.set("apikey", key);
			if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);
			else if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
			return fetch(input, {
				...init,
				headers
			});
		} }
	});
}
/** Anonymous client — row level security applies as a guest. */
var anonClient = () => makeClient();
function bearerToken(request) {
	const header = request.headers.get("authorization") ?? "";
	return header.toLowerCase().startsWith("bearer ") ? header.slice(7).trim() : "";
}
/** Resolves the signed-in user from the `Authorization: Bearer <access_token>` header. */
async function getUser(request) {
	const token = bearerToken(request);
	if (!token) return null;
	const client = makeClient(token);
	const { data, error } = await client.auth.getUser(token);
	if (error || !data.user) return null;
	return {
		id: data.user.id,
		email: data.user.email ?? null,
		client,
		token
	};
}
async function requireUser(request) {
	const user = await getUser(request);
	if (!user) throw new ApiHttpError("Sign in required", 401);
	return user;
}
async function requireAdmin(request) {
	const user = await requireUser(request);
	const { data, error } = await user.client.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle();
	if (error || !data) throw new ApiHttpError("Admin access required", 403);
	return user;
}
var ApiHttpError = class extends Error {
	status;
	constructor(message, status = 400) {
		super(message);
		this.status = status;
	}
};
/** Turns thrown ApiHttpError / Supabase errors into clean JSON responses. */
function handle(fn) {
	return async (ctx) => {
		try {
			return await fn(ctx);
		} catch (err) {
			if (err instanceof ApiHttpError) return apiError(err.message, err.status);
			console.error("[api]", err);
			return apiError(err?.message ?? "Unexpected server error", 500);
		}
	};
}
function searchParams(request) {
	return new URL(request.url).searchParams;
}
async function readJson(request) {
	try {
		return await request.json();
	} catch {
		throw new ApiHttpError("A valid JSON body is required", 400);
	}
}
/** Every price in this store is Pakistani Rupees. */
var CURRENCY = {
	code: "PKR",
	symbol: "Rs"
};
/** API directory — lists every available endpoint. */
var Route$27 = createFileRoute("/api/public/v1/")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async () => json({
		ok: true,
		name: "Timera Store API",
		version: "1",
		currency: CURRENCY,
		base: "/api/public/v1",
		auth: "Send `Authorization: Bearer <supabase access token>` for the endpoints marked auth.",
		endpoints: {
			catalogue: {
				"GET /products": "List active products (query: search, category, collection, featured, deal, limit, offset)",
				"GET /products/:slug": "One product with gallery, colours and reviews",
				"GET /categories": "Active categories",
				"GET /collections": "Active collections",
				"GET /deals": "Live deals",
				"GET /hero-slides": "Home page hero slides",
				"GET /blog": "Published blog posts",
				"GET /blog/:slug": "One blog post",
				"GET /reviews": "Approved reviews (query: product_id, featured)",
				"POST /reviews": "auth — submit a review",
				"GET /settings": "Brand, marquee, warranty and public payment settings"
			},
			shopping: {
				"POST /coupons/validate": "Check a coupon code against an order subtotal",
				"POST /orders": "Place an order (guest or signed in)",
				"GET /orders": "auth — the signed-in customer's orders",
				"GET /orders/:orderNumber": "Track an order (query: email for guests)"
			},
			account: {
				"POST /auth/signup": "Create an account",
				"POST /auth/login": "Sign in and receive an access token",
				"POST /auth/refresh": "Exchange a refresh token for a new session",
				"POST /auth/logout": "auth — end the session",
				"GET /auth/session": "auth — the current user",
				"GET /profile": "auth — the customer profile",
				"PUT /profile": "auth — update the customer profile"
			},
			admin: {
				"GET /admin/stats": "admin — dashboard totals",
				"GET /admin/orders": "admin — every order",
				"PATCH /admin/orders": "admin — update an order status",
				"GET /admin/products": "admin — every product incl. drafts",
				"POST /admin/products": "admin — create a product",
				"PUT /admin/products": "admin — update a product",
				"DELETE /admin/products": "admin — delete a product (query: id)",
				"GET /admin/customers": "admin — customer profiles"
			},
			system: { "GET /health": "Service heartbeat" }
		}
	}))
} } });
var Route$26 = createFileRoute("/api/public/v1/categories")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async () => {
		const { data, error } = await anonClient().from("categories").select("id,name,slug,description,image_url,sort_order").eq("active", true).order("sort_order");
		if (error) return apiError(error.message, 500);
		return json({
			ok: true,
			categories: data ?? []
		});
	})
} } });
var Route$25 = createFileRoute("/api/public/v1/collections")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async () => {
		const { data, error } = await anonClient().from("collections").select("id,name,slug,tagline,image_url,sort_order").eq("active", true).order("sort_order");
		if (error) return apiError(error.message, 500);
		return json({
			ok: true,
			collections: data ?? []
		});
	})
} } });
var Route$24 = createFileRoute("/api/public/v1/deals")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async () => {
		const { data, error } = await anonClient().from("deals").select("*").eq("active", true).order("sort_order");
		if (error) return apiError(error.message, 500);
		return json({
			ok: true,
			deals: data ?? []
		});
	})
} } });
var Route$23 = createFileRoute("/api/public/v1/health")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async () => {
		const { error } = await anonClient().from("products").select("id").limit(1);
		return json({
			ok: !error,
			service: "timera-api",
			database: error ? "unreachable" : "ok",
			time: (/* @__PURE__ */ new Date()).toISOString()
		});
	})
} } });
var Route$22 = createFileRoute("/api/public/v1/hero-slides")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async () => {
		const { data, error } = await anonClient().from("hero_slides").select("*").eq("active", true).order("sort_order");
		if (error) return apiError(error.message, 500);
		return json({
			ok: true,
			slides: data ?? []
		});
	})
} } });
/**
* Returns the enabled payment method details for the checkout page.
*
* Uses the normal anon/publishable key — no SUPABASE_SERVICE_ROLE_KEY needed.
* The RLS migration grants SELECT on payment_settings to authenticated.
* The anon key on the server (publishable key) maps to the `anon` role in
* Supabase, which we also grant SELECT to below the security boundary:
* only enabled payment methods are returned; secret credentials (e.g. full
* bank account numbers) are returned as-is since they are shown on checkout
* to customers who need them for bank transfer — this matches the original
* behaviour and is intentional.
*/
var Route$21 = createFileRoute("/api/public/v1/payment-instructions")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async () => {
		const { data, error } = await anonClient().from("payment_settings").select("easypaisa_enabled,easypaisa_number,easypaisa_account_name,jazzcash_enabled,jazzcash_number,jazzcash_account_name,bank_enabled,bank_name,bank_account_title,bank_account_number,bank_iban").order("created_at", { ascending: true }).limit(1).maybeSingle();
		if (error) return apiError(error.message, 500);
		const r = data ?? {};
		return json({
			ok: true,
			easypaisa: r.easypaisa_enabled ? {
				number: r.easypaisa_number ?? null,
				accountName: r.easypaisa_account_name ?? null
			} : null,
			jazzcash: r.jazzcash_enabled ? {
				number: r.jazzcash_number ?? null,
				accountName: r.jazzcash_account_name ?? null
			} : null,
			bank: r.bank_enabled ? {
				bankName: r.bank_name ?? null,
				accountTitle: r.bank_account_title ?? null,
				accountNumber: r.bank_account_number ?? null,
				iban: r.bank_iban ?? null
			} : null
		});
	})
} } });
var FIELDS$1 = [
	"full_name",
	"email",
	"phone",
	"address",
	"city",
	"postal_code",
	"avatar_url"
];
var Route$20 = createFileRoute("/api/public/v1/profile")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async ({ request }) => {
		const user = await requireUser(request);
		const { data, error } = await user.client.from("profiles").select("*").eq("id", user.id).maybeSingle();
		if (error) return apiError(error.message, 500);
		return json({
			ok: true,
			profile: data ?? {
				id: user.id,
				email: user.email
			}
		});
	}),
	PUT: handle(async ({ request }) => {
		const user = await requireUser(request);
		const body = await readJson(request);
		const patch = { id: user.id };
		for (const key of FIELDS$1) if (body[key] !== void 0) patch[key] = body[key];
		const { data, error } = await user.client.from("profiles").upsert(patch, { onConflict: "id" }).select("*").maybeSingle();
		if (error) return apiError(error.message, 400);
		return json({
			ok: true,
			profile: data
		});
	})
} } });
var Route$19 = createFileRoute("/api/public/v1/reviews")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async ({ request }) => {
		const q = searchParams(request);
		let query = anonClient().from("reviews").select("id,product_id,customer_name,customer_role,rating,title,body,featured,created_at").eq("approved", true).order("created_at", { ascending: false }).limit(Math.min(Number(q.get("limit") ?? 50) || 50, 200));
		const productId = q.get("product_id");
		if (productId) query = query.eq("product_id", productId);
		if (q.get("featured") === "true") query = query.eq("featured", true);
		const { data, error } = await query;
		if (error) return apiError(error.message, 500);
		return json({
			ok: true,
			reviews: data ?? []
		});
	}),
	POST: handle(async ({ request }) => {
		const user = await requireUser(request);
		const body = await readJson(request);
		const rating = Number(body.rating);
		if (!body.customer_name?.trim()) return apiError("customer_name is required");
		if (!Number.isFinite(rating) || rating < 1 || rating > 5) return apiError("rating must be between 1 and 5");
		const { data, error } = await user.client.from("reviews").insert({
			product_id: body.product_id ?? null,
			customer_name: body.customer_name.trim().slice(0, 80),
			rating: Math.round(rating),
			title: body.title?.trim().slice(0, 120) ?? null,
			body: body.body?.trim().slice(0, 2e3) ?? null,
			approved: false
		}).select("id").maybeSingle();
		if (error) return apiError(error.message, 400);
		return json({
			ok: true,
			id: data?.id,
			status: "pending_approval"
		}, 201);
	})
} } });
var Route$18 = createFileRoute("/api/public/v1/settings")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async () => {
		const supabase = anonClient();
		const [site, payment] = await Promise.all([supabase.from("site_settings").select("*").limit(1).maybeSingle(), supabase.from("payment_settings_public").select("*").limit(1).maybeSingle()]);
		if (site.error) return apiError(site.error.message, 500);
		return json({
			ok: true,
			currency: "PKR",
			site: site.data ?? null,
			payment: payment.error ? null : payment.data ?? null
		});
	})
} } });
var Route$17 = createFileRoute("/api/public/v1/admin/customers")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async ({ request }) => {
		const { data, error } = await (await requireAdmin(request)).client.from("profiles").select("id,full_name,email,phone,city,created_at").order("created_at", { ascending: false });
		if (error) return apiError(error.message, 500);
		return json({
			ok: true,
			customers: data ?? []
		});
	})
} } });
var STATUSES = [
	"pending",
	"confirmed",
	"processing",
	"shipped",
	"delivered",
	"cancelled"
];
var Route$16 = createFileRoute("/api/public/v1/admin/orders")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async ({ request }) => {
		const { data, error } = await (await requireAdmin(request)).client.from("orders").select("*").order("created_at", { ascending: false });
		if (error) return apiError(error.message, 500);
		return json({
			ok: true,
			currency: "PKR",
			orders: data ?? []
		});
	}),
	PATCH: handle(async ({ request }) => {
		const admin = await requireAdmin(request);
		const body = await readJson(request);
		if (!body.id) return apiError("id is required");
		if (body.status && !STATUSES.includes(body.status)) return apiError(`status must be one of: ${STATUSES.join(", ")}`);
		const patch = {};
		if (body.status) patch.status = body.status;
		if (body.notes !== void 0) patch.notes = body.notes;
		const { data, error } = await admin.client.from("orders").update(patch).eq("id", body.id).select("*").maybeSingle();
		if (error) return apiError(error.message, 400);
		return json({
			ok: true,
			order: data
		});
	})
} } });
var Route$15 = createFileRoute("/api/public/v1/admin/products")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async ({ request }) => {
		const { data, error } = await (await requireAdmin(request)).client.from("products").select("*").order("sort_order");
		if (error) return apiError(error.message, 500);
		return json({
			ok: true,
			currency: "PKR",
			products: data ?? []
		});
	}),
	POST: handle(async ({ request }) => {
		const admin = await requireAdmin(request);
		const body = await readJson(request);
		if (!body.name || !body.slug) return apiError("name and slug are required");
		const { data, error } = await admin.client.from("products").insert(body).select("*").maybeSingle();
		if (error) return apiError(error.message, 400);
		return json({
			ok: true,
			product: data
		}, 201);
	}),
	PUT: handle(async ({ request }) => {
		const admin = await requireAdmin(request);
		const { id, ...patch } = await readJson(request);
		if (!id) return apiError("id is required");
		const { data, error } = await admin.client.from("products").update(patch).eq("id", id).select("*").maybeSingle();
		if (error) return apiError(error.message, 400);
		return json({
			ok: true,
			product: data
		});
	}),
	DELETE: handle(async ({ request }) => {
		const admin = await requireAdmin(request);
		const id = searchParams(request).get("id");
		if (!id) return apiError("id query parameter is required");
		const { error } = await admin.client.from("products").delete().eq("id", id);
		if (error) return apiError(error.message, 400);
		return json({
			ok: true,
			deleted: id
		});
	})
} } });
var Route$14 = createFileRoute("/api/public/v1/admin/stats")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async ({ request }) => {
		const admin = await requireAdmin(request);
		const [orders, products, customers, reviews] = await Promise.all([
			admin.client.from("orders").select("total,status,created_at"),
			admin.client.from("products").select("id", {
				count: "exact",
				head: true
			}),
			admin.client.from("profiles").select("id", {
				count: "exact",
				head: true
			}),
			admin.client.from("reviews").select("id", {
				count: "exact",
				head: true
			}).eq("approved", false)
		]);
		const rows = orders.data ?? [];
		return json({
			ok: true,
			currency: "PKR",
			stats: {
				orders: rows.length,
				revenue: rows.reduce((sum, o) => sum + Number(o.total ?? 0), 0),
				pending_orders: rows.filter((o) => o.status === "pending").length,
				products: products.count ?? 0,
				customers: customers.count ?? 0,
				reviews_awaiting_approval: reviews.count ?? 0
			}
		});
	})
} } });
var Route$13 = createFileRoute("/api/public/v1/auth/login")({ server: { handlers: {
	OPTIONS: preflight,
	POST: handle(async ({ request }) => {
		const body = await readJson(request);
		if (!body.email?.trim() || !body.password) return apiError("email and password are required");
		const { data, error } = await anonClient().auth.signInWithPassword({
			email: body.email.trim(),
			password: body.password
		});
		if (error) return apiError(error.message, 401);
		return json({
			ok: true,
			user: data.user ? {
				id: data.user.id,
				email: data.user.email
			} : null,
			session: data.session ? {
				access_token: data.session.access_token,
				refresh_token: data.session.refresh_token,
				expires_at: data.session.expires_at
			} : null
		});
	})
} } });
var Route$12 = createFileRoute("/api/public/v1/auth/logout")({ server: { handlers: {
	OPTIONS: preflight,
	POST: handle(async ({ request }) => {
		await (await requireUser(request)).client.auth.signOut();
		return json({
			ok: true,
			message: "Signed out"
		});
	})
} } });
var Route$11 = createFileRoute("/api/public/v1/auth/refresh")({ server: { handlers: {
	OPTIONS: preflight,
	POST: handle(async ({ request }) => {
		const body = await readJson(request);
		if (!body.refresh_token) return apiError("refresh_token is required");
		const { data, error } = await anonClient().auth.refreshSession({ refresh_token: body.refresh_token });
		if (error) return apiError(error.message, 401);
		return json({
			ok: true,
			session: data.session ? {
				access_token: data.session.access_token,
				refresh_token: data.session.refresh_token,
				expires_at: data.session.expires_at
			} : null
		});
	})
} } });
var Route$10 = createFileRoute("/api/public/v1/auth/session")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async ({ request }) => {
		const user = await getUser(request);
		if (!user) return json({
			ok: true,
			signed_in: false,
			user: null
		});
		const { data } = await user.client.from("user_roles").select("role").eq("user_id", user.id);
		return json({
			ok: true,
			signed_in: true,
			user: {
				id: user.id,
				email: user.email
			},
			roles: (data ?? []).map((r) => r.role)
		});
	})
} } });
var Route$9 = createFileRoute("/api/public/v1/auth/signup")({ server: { handlers: {
	OPTIONS: preflight,
	POST: handle(async ({ request }) => {
		const body = await readJson(request);
		if (!body.email?.trim() || !body.password) return apiError("email and password are required");
		const { data, error } = await anonClient().auth.signUp({
			email: body.email.trim(),
			password: body.password,
			options: { data: { full_name: body.full_name?.trim() ?? null } }
		});
		if (error) return apiError(error.message, 400);
		return json({
			ok: true,
			user: data.user ? {
				id: data.user.id,
				email: data.user.email
			} : null,
			session: data.session ? {
				access_token: data.session.access_token,
				refresh_token: data.session.refresh_token,
				expires_at: data.session.expires_at
			} : null,
			message: data.session ? "Account created." : "Account created — confirm your email to sign in."
		}, 201);
	})
} } });
var Route$8 = createFileRoute("/api/public/v1/blog/")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async ({ request }) => {
		const q = searchParams(request);
		const limit = Math.min(Number(q.get("limit") ?? 24) || 24, 100);
		let query = anonClient().from("blog_posts").select("id,slug,title,excerpt,author,category,image_url,published_at").eq("published", true).order("published_at", { ascending: false }).limit(limit);
		const category = q.get("category");
		if (category) query = query.eq("category", category);
		const { data, error } = await query;
		if (error) return apiError(error.message, 500);
		return json({
			ok: true,
			posts: data ?? []
		});
	})
} } });
var Route$7 = createFileRoute("/api/public/v1/blog/$slug")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async ({ params }) => {
		const { data, error } = await anonClient().from("blog_posts").select("*").eq("slug", params.slug).eq("published", true).maybeSingle();
		if (error) return apiError(error.message, 500);
		if (!data) return apiError("Post not found", 404);
		return json({
			ok: true,
			post: data
		});
	})
} } });
var Route$6 = createFileRoute("/api/public/v1/coupons/validate")({ server: { handlers: {
	OPTIONS: preflight,
	POST: handle(async ({ request }) => {
		const body = await readJson(request);
		const code = body.code?.trim().toUpperCase();
		const subtotal = Number(body.subtotal ?? 0);
		if (!code) return apiError("code is required");
		const { data, error } = await anonClient().from("coupons").select("*").eq("code", code).eq("active", true).maybeSingle();
		if (error) return apiError(error.message, 500);
		if (!data) return json({
			ok: false,
			valid: false,
			reason: "This code is not valid."
		}, 200);
		const c = data;
		if (c.expires_at && new Date(c.expires_at).getTime() < Date.now()) return json({
			ok: true,
			valid: false,
			reason: "This code has expired."
		});
		if (c.usage_limit != null && c.used_count >= c.usage_limit) return json({
			ok: true,
			valid: false,
			reason: "This code has been fully redeemed."
		});
		if (subtotal < Number(c.min_order ?? 0)) return json({
			ok: true,
			valid: false,
			reason: `Spend at least Rs ${Number(c.min_order).toLocaleString("en-PK")} to use this code.`
		});
		const discount = c.discount_type === "percent" ? Math.round(subtotal * Number(c.discount_value) / 100) : Math.min(Number(c.discount_value), subtotal);
		return json({
			ok: true,
			valid: true,
			currency: "PKR",
			code: c.code,
			description: c.description,
			discount_type: c.discount_type,
			discount_value: Number(c.discount_value),
			discount
		});
	})
} } });
/**
* Meta Product Catalog feed.
* GET /api/public/v1/meta/catalog
*
* Returns a JSON product feed in the format Meta Commerce Manager expects
* when you set a "Scheduled feed" data source. Point your Meta catalog to:
*   https://timera.store/api/public/v1/meta/catalog
*
* Meta documentation: https://developers.facebook.com/docs/marketing-api/catalog/reference
*
* Field mapping:
*  id            → product UUID (stable identifier across website + pixel + catalog)
*  title         → product name
*  description   → product description (first 5000 chars)
*  availability  → "in stock" | "out of stock"
*  condition     → "new"
*  price         → sale_price ?? price, formatted as "NNNN PKR"
*  link          → canonical product URL
*  image_link    → main product image (must be https)
*  additional_image_link → gallery images (up to 10)
*  brand         → product brand
*  product_type  → "Watches" | "Perfumes"
*  custom_label_0 → collection name (for campaign targeting)
*  custom_label_1 → badge (Bestseller, New, etc.)
*  sale_price    → only set when there is a genuine sale price
*  inventory     → real stock count
*/
var SITE = "https://timera.store";
var Route$5 = createFileRoute("/api/public/v1/meta/catalog")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async () => {
		const { data: products, error } = await anonClient().from("products").select("id, slug, name, description, brand, collection, product_type, price, sale_price, image_url, gallery, stock, badge, active").eq("active", true).order("sort_order", { ascending: true }).limit(2e3);
		if (error) return new Response(JSON.stringify({
			ok: false,
			error: error.message
		}), {
			status: 500,
			headers: { "content-type": "application/json" }
		});
		const feed = { data: (products ?? []).map((p) => {
			const price = Number(p.sale_price ?? p.price) || 0;
			p.sale_price && Number(p.price);
			const inStock = Number(p.stock) > 0;
			const gallery = Array.isArray(p.gallery) ? p.gallery.filter((img) => typeof img === "string" && /^https:\/\//i.test(img)).slice(0, 10) : [];
			const imageUrl = typeof p.image_url === "string" && /^https:\/\//i.test(p.image_url) ? p.image_url : null;
			const item = {
				id: String(p.id),
				title: String(p.name ?? "").slice(0, 200),
				description: String(p.description ?? p.name ?? "").slice(0, 5e3),
				availability: inStock ? "in stock" : "out of stock",
				condition: "new",
				price: `${price.toFixed(0)} PKR`,
				link: `${SITE}/product/${p.slug}`,
				brand: String(p.brand ?? "Timera"),
				product_type: p.product_type === "perfume" ? "Perfumes" : "Watches",
				inventory: Number(p.stock) || 0
			};
			if (imageUrl) item.image_link = imageUrl;
			if (gallery.length > 0) item.additional_image_link = gallery;
			if (p.collection) item.custom_label_0 = String(p.collection);
			if (p.badge) item.custom_label_1 = String(p.badge);
			if (p.sale_price && Number(p.sale_price) < Number(p.price)) {
				item.sale_price = `${Number(p.sale_price).toFixed(0)} PKR`;
				item.original_price = `${Number(p.price).toFixed(0)} PKR`;
			}
			return item;
		}) };
		return new Response(JSON.stringify(feed, null, 2), {
			status: 200,
			headers: {
				"content-type": "application/json; charset=utf-8",
				"access-control-allow-origin": "*",
				"cache-control": "public, max-age=3600"
			}
		});
	})
} } });
/**
* META SERVER MODULE — Conversions API + Marketing API. Server-only.
* Never imported by a component. Secrets are read inside functions.
*
* Uses only the normal Supabase publishable key (anonClient).
* No SUPABASE_SERVICE_ROLE_KEY required.
*/
var DEFAULT_VERSION = "v21.0";
function capiToken() {
	return process.env["META_CAPI_ACCESS_TOKEN"] ?? process.env["META_ACCESS_TOKEN"] ?? null;
}
function marketingToken() {
	return process.env["META_MARKETING_ACCESS_TOKEN"] ?? process.env["META_ACCESS_TOKEN"] ?? null;
}
async function loadMetaConfig() {
	const { data } = await anonClient().from("meta_settings").select("*").order("created_at").limit(1).maybeSingle();
	return {
		pixelId: data?.pixel_id ?? process.env["META_PIXEL_ID"] ?? "4180744378882229",
		adAccountId: data?.ad_account_id ?? process.env["META_AD_ACCOUNT_ID"] ?? null,
		apiVersion: data?.api_version || DEFAULT_VERSION,
		testEventCode: data?.test_event_code ?? null,
		capiEnabled: data?.capi_enabled ?? true,
		marketingApiEnabled: data?.marketing_api_enabled ?? true,
		hasCapiToken: Boolean(capiToken()),
		hasMarketingToken: Boolean(marketingToken())
	};
}
var enc = new TextEncoder();
async function sha256(value) {
	const buf = await crypto.subtle.digest("SHA-256", enc.encode(value));
	return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
var norm = (v) => (v ?? "").trim().toLowerCase();
/** Meta requires normalised + SHA-256 hashed PII. Raw values never leave here. */
async function hashUserData(input) {
	const out = {};
	const put = async (key, value) => {
		if (value) out[key] = [await sha256(value)];
	};
	await put("em", norm(input.email));
	const phone = (input.phone ?? "").replace(/[^\d]/g, "");
	const e164 = phone.startsWith("0") ? `92${phone.slice(1)}` : phone;
	if (e164) out["ph"] = [await sha256(e164)];
	await put("fn", norm(input.firstName));
	await put("ln", norm(input.lastName));
	await put("ct", norm(input.city).replace(/\s+/g, ""));
	await put("st", norm(input.state).replace(/\s+/g, ""));
	await put("zp", norm(input.zip).replace(/\s+/g, ""));
	await put("country", norm(input.country) || "pk");
	if (input.externalId) out["external_id"] = [await sha256(norm(input.externalId))];
	if (input.fbp) out["fbp"] = input.fbp;
	if (input.fbc) out["fbc"] = input.fbc;
	if (input.ip) out["client_ip_address"] = input.ip;
	if (input.userAgent) out["client_user_agent"] = input.userAgent;
	return out;
}
async function sendCapiEvent(event, config) {
	const cfg = config ?? await loadMetaConfig();
	const token = capiToken();
	if (!cfg.capiEnabled) return {
		ok: false,
		status: 0,
		error: "Conversions API disabled in settings"
	};
	if (!cfg.pixelId) return {
		ok: false,
		status: 0,
		error: "Meta Pixel ID is not configured"
	};
	if (!token) return {
		ok: false,
		status: 0,
		error: "META_CAPI_ACCESS_TOKEN is not configured"
	};
	const body = { data: [{
		action_source: event.action_source ?? "website",
		event_time: event.event_time ?? Math.floor(Date.now() / 1e3),
		...event
	}] };
	if (cfg.testEventCode) body["test_event_code"] = cfg.testEventCode;
	try {
		const res = await fetch(`https://graph.facebook.com/${cfg.apiVersion}/${cfg.pixelId}/events?access_token=${encodeURIComponent(token)}`, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body)
		});
		const out = await res.json().catch(() => ({}));
		if (!res.ok) return {
			ok: false,
			status: res.status,
			error: out?.error?.message ?? `Meta returned ${res.status}`,
			fbtraceId: out?.error?.fbtrace_id
		};
		return {
			ok: true,
			status: res.status,
			eventsReceived: out?.events_received,
			fbtraceId: out?.fbtrace_id
		};
	} catch (err) {
		return {
			ok: false,
			status: 0,
			error: err?.message ?? "Network error contacting Meta"
		};
	}
}
[
	"spend",
	"impressions",
	"reach",
	"frequency",
	"clicks",
	"cpm",
	"cpc",
	"ctr",
	"actions",
	"action_values",
	"account_currency",
	"campaign_id",
	"campaign_name",
	"adset_id",
	"adset_name",
	"ad_id",
	"ad_name"
].join(",");
/**
* Meta Conversions API bridge. Additive — no existing endpoint was changed.
*
* POST /api/public/v1/meta/event
*  - Purchase events are ONLY accepted with a real order_number that exists in
*    the database; value/currency are recomputed from the stored order, never
*    trusted from the browser.
*  - Every event is written to meta_event_log first. A unique index on
*    (event_name, event_id, event_source) makes a repeated call a no-op, so a
*    refreshed success page can never produce a second Purchase.
*/
var ALLOWED = /* @__PURE__ */ new Set([
	"ViewContent",
	"Search",
	"AddToCart",
	"InitiateCheckout",
	"AddPaymentInfo",
	"Lead",
	"Purchase"
]);
var clientIp = (request) => request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
var Route$4 = createFileRoute("/api/public/v1/meta/event")({ server: { handlers: {
	OPTIONS: preflight,
	POST: handle(async ({ request }) => {
		const body = await readJson(request);
		const eventName = String(body.event_name ?? "").trim();
		if (!ALLOWED.has(eventName)) return apiError("Unsupported event_name");
		const db = anonClient();
		const config = await loadMetaConfig();
		let eventId = String(body.event_id ?? "").slice(0, 120);
		let value = Number(body.custom_data?.["value"] ?? 0) || null;
		let currency = String(body.custom_data?.["currency"] ?? "PKR");
		let customData = { ...body.custom_data ?? {} };
		let userData = body.user_data ?? {};
		let orderId = null;
		let orderNumber = null;
		if (eventName === "Purchase") {
			orderNumber = String(body.order_number ?? "").trim().slice(0, 60);
			if (!orderNumber) return apiError("order_number is required for Purchase");
			const { data: order, error } = await db.from("orders").select("id, order_number, total, status, items, customer_email, customer_phone, customer_name, shipping_address, fbp, fbc, user_id").eq("order_number", orderNumber).maybeSingle();
			if (error) return apiError(error.message, 500);
			if (!order) return apiError("Order not found", 404);
			if ([
				"cancelled",
				"failed",
				"refunded"
			].includes(String(order.status))) return json({
				ok: true,
				skipped: "Order is not a valid conversion",
				status: order.status
			});
			orderId = order.id;
			eventId = `purchase_${order.id}`;
			value = Number(order.total) || 0;
			currency = "PKR";
			const items = Array.isArray(order.items) ? order.items : [];
			customData = {
				value,
				currency,
				order_id: order.order_number,
				num_items: items.reduce((n, i) => n + (Number(i?.quantity) || 1), 0),
				content_type: "product",
				content_ids: items.map((i) => String(i?.product_id ?? i?.slug ?? "")).filter(Boolean),
				contents: items.map((i) => ({
					id: String(i?.product_id ?? i?.slug ?? ""),
					quantity: Number(i?.quantity) || 1,
					item_price: Number(i?.price) || 0
				}))
			};
			const [firstName, ...rest] = String(order.customer_name ?? "").split(" ");
			userData = {
				email: order.customer_email ?? void 0,
				phone: order.customer_phone ?? void 0,
				first_name: firstName || void 0,
				last_name: rest.join(" ") || void 0,
				city: String(order.shipping_address ?? "").split(",")[1]?.trim() || void 0,
				country: "pk",
				external_id: order.user_id ?? order.order_number,
				fbp: order.fbp ?? body.user_data?.fbp,
				fbc: order.fbc ?? body.user_data?.fbc
			};
			if (body.browser_sent) await db.from("meta_event_log").upsert({
				event_name: "Purchase",
				event_id: eventId,
				event_source: "browser",
				order_number: order.order_number,
				order_id: order.id,
				value,
				currency,
				status: "sent"
			}, {
				onConflict: "event_name,event_id,event_source",
				ignoreDuplicates: true
			});
			await db.from("orders").update({ purchase_event_id: eventId }).eq("id", order.id).is("purchase_event_id", null);
		}
		if (!eventId) eventId = `${eventName.toLowerCase()}_${crypto.randomUUID()}`;
		const { data: claim, error: claimError } = await db.from("meta_event_log").insert({
			event_name: eventName,
			event_id: eventId,
			event_source: "server",
			order_number: orderNumber,
			order_id: orderId,
			value,
			currency,
			status: "pending",
			test_event: Boolean(config.testEventCode),
			attribution: body.attribution ?? {}
		}).select("id").maybeSingle();
		if (claimError) {
			if (String(claimError.code) === "23505" || /duplicate key/i.test(claimError.message ?? "")) return json({
				ok: true,
				deduplicated: true,
				event_id: eventId
			});
			return apiError(claimError.message, 500);
		}
		const hashed = await hashUserData({
			email: userData.email ?? null,
			phone: userData.phone ?? null,
			firstName: userData.first_name ?? null,
			lastName: userData.last_name ?? null,
			city: userData.city ?? null,
			state: userData.state ?? null,
			zip: userData.zip ?? null,
			country: userData.country ?? "pk",
			externalId: userData.external_id ?? null,
			fbp: userData.fbp ?? null,
			fbc: userData.fbc ?? null,
			ip: clientIp(request),
			userAgent: request.headers.get("user-agent")
		});
		const result = await sendCapiEvent({
			event_name: eventName,
			event_id: eventId,
			event_source_url: body.event_source_url ?? null,
			user_data: hashed,
			custom_data: customData
		}, config);
		await db.from("meta_event_log").update({
			status: result.ok ? "sent" : "failed",
			error: result.ok ? null : (result.error ?? "unknown").slice(0, 400),
			fbtrace_id: result.fbtraceId ?? null,
			events_received: result.eventsReceived ?? null
		}).eq("id", claim?.id);
		return json({
			ok: true,
			event_id: eventId,
			capi: result.ok,
			error: result.ok ? void 0 : result.error
		});
	})
} } });
var Route$3 = createFileRoute("/api/public/v1/orders/")({ server: { handlers: {
	OPTIONS: preflight,
	/** Signed-in customer's own order history. */
	GET: handle(async ({ request }) => {
		const user = await requireUser(request);
		const { data, error } = await user.client.from("orders").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
		if (error) return apiError(error.message, 500);
		return json({
			ok: true,
			currency: "PKR",
			orders: data ?? []
		});
	}),
	/**
	* Place an order — works for signed-in customers AND guests.
	*
	* Uses ONLY the normal Supabase publishable key (anonClient / user client).
	* No SUPABASE_SERVICE_ROLE_KEY required.
	*
	* The RLS migration (20260906000000_orders_rls_no_service_role.sql) grants
	* INSERT to both the `anon` and `authenticated` roles, so this insert
	* succeeds without any service-role bypass.
	*
	* Security guarantees preserved:
	*  - All prices re-fetched from the database server-side (never trusted from client)
	*  - Coupon validated server-side
	*  - Shipping calculated server-side
	*  - Idempotency key prevents duplicate orders on retry/double-click
	*/
	POST: handle(async ({ request }) => {
		const body = await readJson(request);
		const name = body.customer_name?.trim() ?? "";
		const email = body.customer_email?.trim() ?? "";
		if (name.length < 2 || name.length > 120) return apiError("customer_name must be 2–120 characters");
		if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 200) return apiError("customer_email is invalid");
		if (body.customer_phone && body.customer_phone.length > 40) return apiError("customer_phone is too long");
		if (body.shipping_address && body.shipping_address.length > 500) return apiError("shipping_address is too long");
		if (body.notes && body.notes.length > 1e3) return apiError("notes is too long");
		if (!Array.isArray(body.items) || body.items.length === 0) return apiError("items must contain at least one product");
		if (body.items.length > 50) return apiError("Too many items in a single order");
		const idempotencyKey = typeof body.idempotency_key === "string" && body.idempotency_key.trim() ? body.idempotency_key.trim().slice(0, 80) : null;
		const user = await getUser(request);
		const writeClient = user?.client ?? anonClient();
		if (idempotencyKey) {
			if (user) {
				const { data: existing } = await writeClient.from("orders").select("id, order_number, total, status, created_at").eq("idempotency_key", idempotencyKey).eq("user_id", user.id).maybeSingle();
				if (existing) return json({
					ok: true,
					currency: "PKR",
					duplicate: true,
					event_id: `purchase_${existing.id}`,
					order: {
						order_number: existing.order_number,
						total: existing.total,
						status: existing.status,
						created_at: existing.created_at
					}
				}, 200);
			}
		}
		const rawItems = body.items.map((i) => ({
			product_id: typeof i.product_id === "string" ? i.product_id : null,
			slug: typeof i.slug === "string" ? i.slug : null,
			quantity: Math.max(1, Math.min(999, Math.round(Number(i.quantity) || 1))),
			color: typeof i.color === "string" ? i.color.slice(0, 60) : null,
			size: typeof i.size === "string" ? i.size.slice(0, 60) : null
		}));
		const ids = Array.from(new Set(rawItems.map((i) => i.product_id).filter((x) => !!x)));
		const slugs = Array.from(new Set(rawItems.map((i) => i.slug).filter((x) => !!x)));
		if (ids.length === 0 && slugs.length === 0) return apiError("Each item requires product_id or slug");
		const catalog = anonClient();
		const [byId, bySlug] = await Promise.all([ids.length ? catalog.from("products").select("id, slug, name, price, sale_price, active, image_url, brand").in("id", ids) : Promise.resolve({
			data: [],
			error: null
		}), slugs.length ? catalog.from("products").select("id, slug, name, price, sale_price, active, image_url, brand").in("slug", slugs) : Promise.resolve({
			data: [],
			error: null
		})]);
		if (byId.error) return apiError(byId.error.message, 500);
		if (bySlug.error) return apiError(bySlug.error.message, 500);
		const products = /* @__PURE__ */ new Map();
		const productsBySlug = /* @__PURE__ */ new Map();
		for (const p of [...byId.data ?? [], ...bySlug.data ?? []]) {
			products.set(p.id, p);
			if (p.slug) productsBySlug.set(p.slug, p);
		}
		const items = [];
		for (const it of rawItems) {
			const p = it.product_id && products.get(it.product_id) || it.slug && productsBySlug.get(it.slug);
			if (!p || p.active === false) return apiError("One or more products are unavailable");
			const price = Number(p.sale_price ?? p.price) || 0;
			if (price <= 0) return apiError(`Invalid price for ${p.name}`);
			items.push({
				product_id: p.id,
				slug: p.slug ?? null,
				name: String(p.name ?? "").slice(0, 160),
				image_url: p.image_url ?? null,
				brand: p.brand ?? null,
				price,
				quantity: it.quantity,
				color: it.color,
				size: it.size
			});
		}
		const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
		let discount = 0;
		let couponCode = null;
		if (body.coupon_code?.trim()) {
			const code = body.coupon_code.trim().toUpperCase().slice(0, 40);
			const { data: coupon, error: couponErr } = await catalog.from("coupons").select("code, discount_type, discount_value, min_order, usage_limit, used_count, expires_at, active").eq("code", code).eq("active", true).maybeSingle();
			if (couponErr) return apiError(couponErr.message, 500);
			if (!coupon) return apiError("Coupon code is not valid");
			if (coupon.expires_at && new Date(coupon.expires_at).getTime() < Date.now()) return apiError("Coupon has expired");
			if (coupon.usage_limit != null && Number(coupon.used_count) >= Number(coupon.usage_limit)) return apiError("Coupon usage limit reached");
			if (Number(coupon.min_order) > subtotal) return apiError(`Coupon requires a minimum order of ${coupon.min_order}`);
			const v = Number(coupon.discount_value) || 0;
			discount = coupon.discount_type === "percent" ? Math.round(subtotal * v / 100) : v;
			discount = Math.max(0, Math.min(discount, subtotal));
			couponCode = coupon.code;
		}
		let shipping = 0;
		const { data: pay } = await catalog.from("payment_settings_public").select("delivery_charge, free_delivery_above").limit(1).maybeSingle();
		if (pay) {
			const free = Number(pay.free_delivery_above) || 0;
			const fee = Number(pay.delivery_charge) || 0;
			shipping = free > 0 && subtotal >= free ? 0 : fee;
		}
		const total = Math.max(0, subtotal - discount + shipping);
		const payload = {
			order_number: `TM-${Date.now().toString(36).toUpperCase()}`,
			user_id: user?.id ?? null,
			customer_name: name,
			customer_email: email,
			customer_phone: body.customer_phone?.trim() ?? null,
			shipping_address: body.shipping_address?.trim() ?? null,
			notes: body.notes?.trim() ?? null,
			coupon_code: couponCode,
			items,
			subtotal,
			discount,
			shipping,
			total,
			status: "pending",
			...idempotencyKey ? { idempotency_key: idempotencyKey } : {},
			fbp: body.fbp ?? null,
			fbc: body.fbc ?? null,
			fbclid: body.fbclid ?? null,
			utm_source: body.utm_source ?? null,
			utm_medium: body.utm_medium ?? null,
			utm_campaign: body.utm_campaign ?? null,
			utm_content: body.utm_content ?? null,
			utm_term: body.utm_term ?? null,
			first_landing_page: body.first_landing_page ?? null,
			attribution: body.attribution ?? null
		};
		const { data: inserted, error: insertError } = await writeClient.from("orders").insert(payload).select("id, order_number, total, status, created_at").maybeSingle();
		if (insertError) return apiError(insertError.message, 400);
		if (!inserted) return apiError("Order could not be created. Please try again.", 500);
		return json({
			ok: true,
			currency: "PKR",
			event_id: `purchase_${inserted.id}`,
			order: {
				order_number: inserted.order_number,
				total: inserted.total,
				status: inserted.status,
				created_at: inserted.created_at
			}
		}, 201);
	})
} } });
var ORDER_FIELDS = "order_number,customer_name,customer_phone,shipping_address,items,subtotal,discount,shipping,total,status,status_history,tracking_number,courier,estimated_delivery,created_at,updated_at";
/**
* Track a single order.
*
* Signed-in customers:  look up by order_number + their own user_id (RLS enforced).
* Guests:               look up by order_number + exact customer_email.
*
* No SUPABASE_SERVICE_ROLE_KEY required.
* RLS policy "orders_select_guest_lookup" allows anon SELECT on rows where
* user_id IS NULL. The server filters further by order_number + customer_email
* so a guest can only see their own order.
*/
var Route$2 = createFileRoute("/api/public/v1/orders/$orderNumber")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async ({ request, params }) => {
		const orderNumber = params.orderNumber.trim().toUpperCase();
		const email = searchParams(request).get("email")?.trim().toLowerCase() ?? "";
		const user = await getUser(request);
		if (user) {
			const { data, error } = await user.client.from("orders").select(ORDER_FIELDS).eq("order_number", orderNumber).eq("user_id", user.id).maybeSingle();
			if (error) return apiError(error.message, 500);
			if (!data) return apiError("Order not found", 404);
			return json({
				ok: true,
				currency: "PKR",
				order: data
			});
		}
		if (!email) return apiError("Add ?email= (the email you used when ordering) or sign in to track your order.", 400);
		const { data, error } = await anonClient().from("orders").select(ORDER_FIELDS).eq("order_number", orderNumber).ilike("customer_email", email).is("user_id", null).maybeSingle();
		if (error) return apiError(error.message, 500);
		if (!data) return apiError("Order not found", 404);
		return json({
			ok: true,
			currency: "PKR",
			order: data
		});
	})
} } });
var LIST_COLUMNS = "id,slug,name,brand,collection,category,price,sale_price,compare_at,image_url,colors,sizes,movement,case_material,strap,water_resistance,rating,reviews,badge,stock,description,featured,sort_order,deal_id";
var Route$1 = createFileRoute("/api/public/v1/products/")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async ({ request }) => {
		const q = searchParams(request);
		const limit = Math.min(Number(q.get("limit") ?? 60) || 60, 200);
		const offset = Math.max(Number(q.get("offset") ?? 0) || 0, 0);
		let query = anonClient().from("products").select(LIST_COLUMNS, { count: "exact" }).eq("active", true).order("sort_order", { ascending: true }).range(offset, offset + limit - 1);
		const category = q.get("category");
		const collection = q.get("collection");
		const deal = q.get("deal");
		const search = q.get("search");
		if (category) query = query.eq("category", category);
		if (collection) query = query.eq("collection", collection);
		if (deal) query = query.eq("deal_id", deal);
		if (q.get("featured") === "true") query = query.eq("featured", true);
		if (search) query = query.ilike("name", `%${search}%`);
		const { data, error, count } = await query;
		if (error) return json({
			ok: false,
			error: error.message
		}, 500);
		return json({
			ok: true,
			currency: "PKR",
			count: count ?? data?.length ?? 0,
			limit,
			offset,
			products: data ?? []
		});
	})
} } });
var Route = createFileRoute("/api/public/v1/products/$slug")({ server: { handlers: {
	OPTIONS: preflight,
	GET: handle(async ({ params }) => {
		const supabase = anonClient();
		const { data, error } = await supabase.from("products").select("*").eq("slug", params.slug).eq("active", true).maybeSingle();
		if (error) return apiError(error.message, 500);
		if (!data) return apiError("Product not found", 404);
		const { data: reviews } = await supabase.from("reviews").select("id,customer_name,customer_role,rating,title,body,created_at").eq("product_id", data.id).eq("approved", true).order("created_at", { ascending: false }).limit(20);
		return json({
			ok: true,
			currency: "PKR",
			product: data,
			reviews: reviews ?? []
		});
	})
} } });
var IndexRoute = Route$62.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$63
});
var AboutRoute = Route$61.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$63
});
var AccountRoute = Route$60.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => Route$63
});
var AdminRoute = Route$59.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$63
});
var AuthRoute = Route$58.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$63
});
var BlogRoute = Route$57.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$63
});
var CartRoute = Route$56.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$63
});
var CheckoutRoute = Route$55.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$63
});
var ContactRoute = Route$54.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$63
});
var FaqRoute = Route$53.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$63
});
var PerfumesRoute = Route$52.update({
	id: "/perfumes",
	path: "/perfumes",
	getParentRoute: () => Route$63
});
var ShopRoute = Route$51.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$63
});
var SitemapDotxmlRoute = Route$50.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$63
});
var TrackRoute = Route$49.update({
	id: "/track",
	path: "/track",
	getParentRoute: () => Route$63
});
var TrustRoute = Route$68.update({
	id: "/trust",
	path: "/trust",
	getParentRoute: () => Route$63
});
var WishlistRoute = Route$48.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$63
});
var AdminIndexRoute = Route$47.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var AdminBlogRoute = Route$46.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => AdminRoute
});
var AdminCategoriesRoute = Route$45.update({
	id: "/categories",
	path: "/categories",
	getParentRoute: () => AdminRoute
});
var AdminCollectionsRoute = Route$44.update({
	id: "/collections",
	path: "/collections",
	getParentRoute: () => AdminRoute
});
var AdminCouponsRoute = Route$43.update({
	id: "/coupons",
	path: "/coupons",
	getParentRoute: () => AdminRoute
});
var AdminDealsRoute = Route$42.update({
	id: "/deals",
	path: "/deals",
	getParentRoute: () => AdminRoute
});
var AdminFaqsRoute = Route$41.update({
	id: "/faqs",
	path: "/faqs",
	getParentRoute: () => AdminRoute
});
var AdminHeroRoute = Route$40.update({
	id: "/hero",
	path: "/hero",
	getParentRoute: () => AdminRoute
});
var AdminLeadsRoute = Route$39.update({
	id: "/leads",
	path: "/leads",
	getParentRoute: () => AdminRoute
});
var AdminOrdersRoute = Route$38.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => AdminRoute
});
var AdminPaymentsRoute = Route$37.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => AdminRoute
});
var AdminPopupsRoute = Route$36.update({
	id: "/popups",
	path: "/popups",
	getParentRoute: () => AdminRoute
});
var AdminProductsRoute = Route$35.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => AdminRoute
});
var AdminReviewsRoute = Route$34.update({
	id: "/reviews",
	path: "/reviews",
	getParentRoute: () => AdminRoute
});
var AdminSettingsRoute = Route$33.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AdminRoute
});
var AdminTrustRoute = Route$32.update({
	id: "/trust",
	path: "/trust",
	getParentRoute: () => AdminRoute
});
var AdminVideosRoute = Route$31.update({
	id: "/videos",
	path: "/videos",
	getParentRoute: () => AdminRoute
});
var ApiChatRoute = Route$30.update({
	id: "/api/chat",
	path: "/api/chat",
	getParentRoute: () => Route$63
});
var CollectionsIndexRoute = Route$29.update({
	id: "/collections/",
	path: "/collections/",
	getParentRoute: () => Route$63
});
var CollectionsSlugRoute = Route$64.update({
	id: "/collections/$slug",
	path: "/collections/$slug",
	getParentRoute: () => Route$63
});
var DealsIndexRoute = Route$28.update({
	id: "/deals/",
	path: "/deals/",
	getParentRoute: () => Route$63
});
var DealsSlugRoute = Route$65.update({
	id: "/deals/$slug",
	path: "/deals/$slug",
	getParentRoute: () => Route$63
});
var PoliciesSlugRoute = Route$66.update({
	id: "/policies/$slug",
	path: "/policies/$slug",
	getParentRoute: () => Route$63
});
var ProductSlugRoute = Route$67.update({
	id: "/product/$slug",
	path: "/product/$slug",
	getParentRoute: () => Route$63
});
var ApiPublicV1IndexRoute = Route$27.update({
	id: "/api/public/v1/",
	path: "/api/public/v1/",
	getParentRoute: () => Route$63
});
var ApiPublicV1CategoriesRoute = Route$26.update({
	id: "/api/public/v1/categories",
	path: "/api/public/v1/categories",
	getParentRoute: () => Route$63
});
var ApiPublicV1CollectionsRoute = Route$25.update({
	id: "/api/public/v1/collections",
	path: "/api/public/v1/collections",
	getParentRoute: () => Route$63
});
var ApiPublicV1DealsRoute = Route$24.update({
	id: "/api/public/v1/deals",
	path: "/api/public/v1/deals",
	getParentRoute: () => Route$63
});
var ApiPublicV1HealthRoute = Route$23.update({
	id: "/api/public/v1/health",
	path: "/api/public/v1/health",
	getParentRoute: () => Route$63
});
var ApiPublicV1HeroSlidesRoute = Route$22.update({
	id: "/api/public/v1/hero-slides",
	path: "/api/public/v1/hero-slides",
	getParentRoute: () => Route$63
});
var ApiPublicV1PaymentInstructionsRoute = Route$21.update({
	id: "/api/public/v1/payment-instructions",
	path: "/api/public/v1/payment-instructions",
	getParentRoute: () => Route$63
});
var ApiPublicV1ProfileRoute = Route$20.update({
	id: "/api/public/v1/profile",
	path: "/api/public/v1/profile",
	getParentRoute: () => Route$63
});
var ApiPublicV1ReviewsRoute = Route$19.update({
	id: "/api/public/v1/reviews",
	path: "/api/public/v1/reviews",
	getParentRoute: () => Route$63
});
var ApiPublicV1SettingsRoute = Route$18.update({
	id: "/api/public/v1/settings",
	path: "/api/public/v1/settings",
	getParentRoute: () => Route$63
});
var ApiPublicV1AdminCustomersRoute = Route$17.update({
	id: "/api/public/v1/admin/customers",
	path: "/api/public/v1/admin/customers",
	getParentRoute: () => Route$63
});
var ApiPublicV1AdminOrdersRoute = Route$16.update({
	id: "/api/public/v1/admin/orders",
	path: "/api/public/v1/admin/orders",
	getParentRoute: () => Route$63
});
var ApiPublicV1AdminProductsRoute = Route$15.update({
	id: "/api/public/v1/admin/products",
	path: "/api/public/v1/admin/products",
	getParentRoute: () => Route$63
});
var ApiPublicV1AdminStatsRoute = Route$14.update({
	id: "/api/public/v1/admin/stats",
	path: "/api/public/v1/admin/stats",
	getParentRoute: () => Route$63
});
var ApiPublicV1AuthLoginRoute = Route$13.update({
	id: "/api/public/v1/auth/login",
	path: "/api/public/v1/auth/login",
	getParentRoute: () => Route$63
});
var ApiPublicV1AuthLogoutRoute = Route$12.update({
	id: "/api/public/v1/auth/logout",
	path: "/api/public/v1/auth/logout",
	getParentRoute: () => Route$63
});
var ApiPublicV1AuthRefreshRoute = Route$11.update({
	id: "/api/public/v1/auth/refresh",
	path: "/api/public/v1/auth/refresh",
	getParentRoute: () => Route$63
});
var ApiPublicV1AuthSessionRoute = Route$10.update({
	id: "/api/public/v1/auth/session",
	path: "/api/public/v1/auth/session",
	getParentRoute: () => Route$63
});
var ApiPublicV1AuthSignupRoute = Route$9.update({
	id: "/api/public/v1/auth/signup",
	path: "/api/public/v1/auth/signup",
	getParentRoute: () => Route$63
});
var ApiPublicV1BlogIndexRoute = Route$8.update({
	id: "/api/public/v1/blog/",
	path: "/api/public/v1/blog/",
	getParentRoute: () => Route$63
});
var ApiPublicV1BlogSlugRoute = Route$7.update({
	id: "/api/public/v1/blog/$slug",
	path: "/api/public/v1/blog/$slug",
	getParentRoute: () => Route$63
});
var ApiPublicV1CouponsValidateRoute = Route$6.update({
	id: "/api/public/v1/coupons/validate",
	path: "/api/public/v1/coupons/validate",
	getParentRoute: () => Route$63
});
var ApiPublicV1MetaCatalogRoute = Route$5.update({
	id: "/api/public/v1/meta/catalog",
	path: "/api/public/v1/meta/catalog",
	getParentRoute: () => Route$63
});
var ApiPublicV1MetaEventRoute = Route$4.update({
	id: "/api/public/v1/meta/event",
	path: "/api/public/v1/meta/event",
	getParentRoute: () => Route$63
});
var ApiPublicV1OrdersIndexRoute = Route$3.update({
	id: "/api/public/v1/orders/",
	path: "/api/public/v1/orders/",
	getParentRoute: () => Route$63
});
var ApiPublicV1OrdersOrderNumberRoute = Route$2.update({
	id: "/api/public/v1/orders/$orderNumber",
	path: "/api/public/v1/orders/$orderNumber",
	getParentRoute: () => Route$63
});
var ApiPublicV1ProductsIndexRoute = Route$1.update({
	id: "/api/public/v1/products/",
	path: "/api/public/v1/products/",
	getParentRoute: () => Route$63
});
var ApiPublicV1ProductsSlugRoute = Route.update({
	id: "/api/public/v1/products/$slug",
	path: "/api/public/v1/products/$slug",
	getParentRoute: () => Route$63
});
var AdminRouteChildren = {
	AdminBlogRoute,
	AdminCategoriesRoute,
	AdminCollectionsRoute,
	AdminCouponsRoute,
	AdminDealsRoute,
	AdminFaqsRoute,
	AdminHeroRoute,
	AdminLeadsRoute,
	AdminOrdersRoute,
	AdminPaymentsRoute,
	AdminPopupsRoute,
	AdminProductsRoute,
	AdminReviewsRoute,
	AdminSettingsRoute,
	AdminTrustRoute,
	AdminVideosRoute,
	AdminIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AccountRoute,
	AdminRoute: AdminRoute._addFileChildren(AdminRouteChildren),
	AuthRoute,
	BlogRoute,
	CartRoute,
	CheckoutRoute,
	ContactRoute,
	FaqRoute,
	PerfumesRoute,
	ShopRoute,
	SitemapDotxmlRoute,
	TrackRoute,
	TrustRoute,
	WishlistRoute,
	ApiChatRoute,
	CollectionsSlugRoute,
	DealsSlugRoute,
	PoliciesSlugRoute,
	ProductSlugRoute,
	CollectionsIndexRoute,
	DealsIndexRoute,
	ApiPublicV1CategoriesRoute,
	ApiPublicV1CollectionsRoute,
	ApiPublicV1DealsRoute,
	ApiPublicV1HealthRoute,
	ApiPublicV1HeroSlidesRoute,
	ApiPublicV1PaymentInstructionsRoute,
	ApiPublicV1ProfileRoute,
	ApiPublicV1ReviewsRoute,
	ApiPublicV1SettingsRoute,
	ApiPublicV1IndexRoute,
	ApiPublicV1AdminCustomersRoute,
	ApiPublicV1AdminOrdersRoute,
	ApiPublicV1AdminProductsRoute,
	ApiPublicV1AdminStatsRoute,
	ApiPublicV1AuthLoginRoute,
	ApiPublicV1AuthLogoutRoute,
	ApiPublicV1AuthRefreshRoute,
	ApiPublicV1AuthSessionRoute,
	ApiPublicV1AuthSignupRoute,
	ApiPublicV1BlogSlugRoute,
	ApiPublicV1CouponsValidateRoute,
	ApiPublicV1MetaCatalogRoute,
	ApiPublicV1MetaEventRoute,
	ApiPublicV1OrdersOrderNumberRoute,
	ApiPublicV1ProductsSlugRoute,
	ApiPublicV1BlogIndexRoute,
	ApiPublicV1OrdersIndexRoute,
	ApiPublicV1ProductsIndexRoute
};
var routeTree = Route$63._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient({ defaultOptions: { queries: {
			staleTime: 5 * 6e4,
			gcTime: 30 * 6e4,
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			retry: 1
		} } }) },
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadDelay: 30,
		defaultPreloadStaleTime: 6e4
	});
};
//#endregion
export { getRouter };
