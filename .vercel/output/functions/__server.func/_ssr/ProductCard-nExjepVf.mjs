import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { E as ShoppingBag, ot as Heart, x as Star } from "../_libs/lucide-react.mjs";
import { n as useCart, r as useWishlist } from "./shop-BkxySNBa.mjs";
import { n as formatPrice, t as cn } from "./utils-CyfkpwkR.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { f as listPrice, o as dealsQuery, s as effectivePrice } from "./catalog-DP9o3dVy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-nExjepVf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FALLBACK_IMAGE = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80";
function ProductCard({ product, index = 0, priority = false }) {
	const [imgSrc, setImgSrc] = (0, import_react.useState)(null);
	const [hoverColor, setHoverColor] = (0, import_react.useState)(null);
	const colorImage = product.colors.find((c) => c.name === hoverColor)?.image;
	const currentSrc = imgSrc ?? colorImage ?? product.image;
	const add = useCart((s) => s.add);
	const toggleWish = useWishlist((s) => s.toggle);
	const inWish = useWishlist((s) => s.ids.includes(product.id));
	const { data: deals = [] } = useQuery(dealsQuery);
	const deal = product.dealId ? deals.find((d) => d.id === product.dealId) : void 0;
	const price = effectivePrice(product);
	const orig = listPrice(product);
	const discountPct = orig && orig > price ? Math.round(100 - price / orig * 100) : null;
	const onSale = !!orig && orig > price;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative flex flex-col",
		style: { animationDelay: `${index * 50}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-xl bg-card aspect-[4/5]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					className: "block h-full w-full",
					tabIndex: -1,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: currentSrc || FALLBACK_IMAGE,
						alt: product.name,
						width: 480,
						height: 600,
						loading: priority ? "eager" : "lazy",
						fetchPriority: priority ? "high" : "auto",
						decoding: "async",
						onError: () => {
							if (imgSrc !== FALLBACK_IMAGE) setImgSrc(FALLBACK_IMAGE);
						},
						className: "h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.03]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-3 left-3 flex flex-col gap-1.5",
					children: [
						deal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest bg-primary text-white shadow-sm",
							children: deal.badge ?? `${deal.discountPercent}% off`
						}),
						!deal && onSale && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white",
							style: { background: "#dc2626" },
							children: "Sale"
						}),
						product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("rounded px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest", product.badge === "New" && "bg-foreground text-background", product.badge === "Bestseller" && "bg-primary text-white", product.badge === "Limited" && "border border-primary/50 bg-background/80 text-primary", ![
								"New",
								"Bestseller",
								"Limited"
							].includes(product.badge) && "bg-foreground text-background"),
							children: product.badge
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.preventDefault();
						toggleWish(product.id);
						toast.success(inWish ? "Removed from wishlist" : "Saved to wishlist");
					},
					className: cn("absolute top-3 right-3 h-8 w-8 rounded-full flex items-center justify-center border border-border/40 bg-background/80 backdrop-blur transition", inWish ? "text-primary" : "text-muted-foreground hover:text-primary"),
					"aria-label": inWish ? "Remove from wishlist" : "Save to wishlist",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("h-3.5 w-3.5", inWish && "fill-current") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-3 bottom-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: (e) => {
							e.preventDefault();
							add(product);
							toast.success(`${product.name} added to cart`);
						},
						disabled: product.stock <= 0,
						className: "flex w-full h-9 items-center justify-center gap-2 rounded-lg text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition disabled:opacity-50",
						style: { background: product.stock > 0 ? "#111111" : "#888" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }), product.stock > 0 ? "Quick Add" : "Out of Stock"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.preventDefault();
						if (product.stock <= 0) return;
						add(product);
						toast.success(`${product.name} added to cart`);
					},
					disabled: product.stock <= 0,
					className: "product-card-mobile-add absolute right-3 bottom-3 h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-background/85 backdrop-blur text-foreground transition active:scale-95 disabled:opacity-30 md:hidden",
					"aria-label": `Add ${product.name} to cart`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 space-y-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[9px] uppercase tracking-[0.22em] text-muted-foreground",
					children: product.brand
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					className: "block font-serif text-base leading-snug hover:text-primary transition-colors",
					children: product.name
				}),
				product.colors.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-1.5 pt-0.5",
					children: [product.colors.slice(0, 5).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						title: c.name,
						"aria-label": c.name,
						onMouseEnter: () => c.image && setHoverColor(c.name),
						onMouseLeave: () => setHoverColor(null),
						onFocus: () => c.image && setHoverColor(c.name),
						onBlur: () => setHoverColor(null),
						className: "h-3.5 w-3.5 rounded-full ring-offset-1 ring-offset-background transition hover:ring-2 hover:ring-primary",
						style: { backgroundColor: c.hex }
					}, c.name)), product.colors.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[9px] text-muted-foreground",
						children: ["+", product.colors.length - 5]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-baseline gap-2 pt-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold",
						style: { color: "#B08D57" },
						children: formatPrice(price)
					}), orig && orig > price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground line-through",
						children: formatPrice(orig)
					}), discountPct && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[9px] font-semibold text-white rounded px-1.5 py-0.5",
						style: { background: "#dc2626" },
						children: [
							"-",
							discountPct,
							"%"
						]
					})] })]
				}),
				product.reviews > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 pt-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-0.5",
						style: { color: "#B08D57" },
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("h-3 w-3", i < Math.round(product.rating) ? "fill-current" : "opacity-25") }, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[10px] text-muted-foreground",
						children: [
							"(",
							product.reviews,
							")"
						]
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
