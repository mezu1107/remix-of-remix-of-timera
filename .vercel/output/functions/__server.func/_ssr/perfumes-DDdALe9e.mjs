import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { C as Sparkles, O as ShieldCheck, g as Timer, gt as Droplets, lt as Gift, m as Truck } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-CyfkpwkR.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { g as productsQuery, s as effectivePrice, u as isPerfume } from "./catalog-CjOF-ztI.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ProductCard } from "./ProductCard-CNfzhEzy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/perfumes-DDdALe9e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var perfume_hero_default = "/assets/perfume-hero-BJpKknUA.jpg";
var FAMILY_ALL = "All";
var GENDER_ALL = "Everyone";
function PerfumesPage() {
	const { data: products = [], isLoading } = useQuery(productsQuery);
	const perfumes = (0, import_react.useMemo)(() => products.filter(isPerfume), [products]);
	const families = (0, import_react.useMemo)(() => [FAMILY_ALL, ...new Set(perfumes.map((p) => p.fragranceFamily).filter(Boolean))], [perfumes]);
	const genders = (0, import_react.useMemo)(() => [GENDER_ALL, ...new Set(perfumes.map((p) => p.gender).filter(Boolean))], [perfumes]);
	const [family, setFamily] = (0, import_react.useState)(FAMILY_ALL);
	const [gender, setGender] = (0, import_react.useState)(GENDER_ALL);
	const list = perfumes.filter((p) => (family === FAMILY_ALL || p.fragranceFamily === family) && (gender === GENDER_ALL || p.gender === gender));
	const giftSet = perfumes.find((p) => /set|bundle|trio/i.test(p.name));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[58vh] min-h-[420px] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: perfume_hero_default,
						alt: "Timera luxury perfume collection",
						className: "h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-luxe absolute inset-0 flex flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.35em] text-primary",
								children: "New from the Maison"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-4 max-w-2xl font-serif text-4xl leading-[1.05] md:text-6xl",
								children: ["Fragrances that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic gold-text",
									children: "stay with you"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-lg text-muted-foreground",
								children: "Concentrated eau de parfum and pure attars, blended for Pakistan's climate — 8 to 12 hours of wear, heavy sillage, and bottles worth keeping."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "h-12 px-8 text-xs uppercase tracking-[0.25em]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#fragrances",
										children: "Shop the fragrances"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "h-12 px-8 text-xs uppercase tracking-[0.25em]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/shop",
										children: "Browse everything"
									})
								})]
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border/60 bg-card/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-luxe grid grid-cols-2 gap-6 py-8 md:grid-cols-4",
				children: [
					{
						icon: Timer,
						t: "8–12 hour longevity",
						s: "High oil concentration"
					},
					{
						icon: Truck,
						t: "Free delivery over Rs 5,000",
						s: "Nationwide, insured"
					},
					{
						icon: ShieldCheck,
						t: "Cash on delivery",
						s: "Pay when it arrives"
					},
					{
						icon: Droplets,
						t: "Skin-safe blends",
						s: "Alcohol & attar options"
					}
				].map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(u.icon, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: u.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: u.s
					})] })]
				}, u.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "fragrances",
			className: "container-luxe py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.3em] text-primary",
						children: "The Fragrance Wardrobe"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-serif text-4xl md:text-5xl",
						children: "All Perfumes"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [list.length, " fragrances"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chips, {
						label: "Family",
						options: families,
						value: family,
						onChange: setFamily
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chips, {
						label: "For",
						options: genders,
						value: gender,
						onChange: setGender
					})]
				}),
				isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4",
					children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-[4/5] animate-pulse rounded-lg bg-muted" }, i))
				}) : list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-muted-foreground",
					children: "No fragrances match that combination yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4",
					children: list.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product: p,
						index: i,
						priority: i < 4
					}, p.id))
				})
			]
		}),
		giftSet && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxe pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-[280px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: giftSet.image,
						alt: giftSet.name,
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 md:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "mb-4",
							children: "Gifting"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl md:text-4xl",
							children: giftSet.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: giftSet.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 font-serif text-3xl gold-text",
							children: ["Rs ", effectivePrice(giftSet).toLocaleString("en-PK")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "mt-6 h-12 px-8 text-xs uppercase tracking-[0.25em]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$slug",
								params: { slug: giftSet.slug },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "mr-2 h-4 w-4" }), " Shop the gift set"]
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe pb-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Fragrance guide"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-serif text-3xl md:text-4xl",
					children: "How to pick your signature"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: [
						{
							t: "Woody & Oud",
							d: "Warm, smoky and dominant. Perfect for evenings, weddings and winter."
						},
						{
							t: "Floral & Amber",
							d: "Rose, jasmine and vanilla warmth — romantic, soft and long-wearing."
						},
						{
							t: "Fresh & Aquatic",
							d: "Citrus and marine notes for daily office wear in Pakistan's heat."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl",
							children: c.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: c.d
						})]
					}, c.t))
				})
			]
		})
	] });
}
function Chips({ label, options, value, onChange }) {
	if (options.length <= 1) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mr-1 text-[11px] uppercase tracking-[0.28em] text-muted-foreground",
			children: label
		}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => onChange(o),
			className: cn("rounded-full border px-4 py-1.5 text-xs transition", value === o ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50"),
			children: o
		}, o))]
	});
}
//#endregion
export { PerfumesPage as component };
