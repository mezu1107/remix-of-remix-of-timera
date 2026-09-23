import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { C as Sparkles, Q as LoaderCircle, jt as Check, r as X, w as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { p as trackEvent } from "./tracking-DD-P3Lxb.mjs";
import { t as cn } from "./utils-CyfkpwkR.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { r as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { d as isWatch, g as productsQuery, u as isPerfume } from "./catalog-CjOF-ztI.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as SheetTrigger, n as SheetContent, t as Sheet } from "./sheet-D6Qp4gD0.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7QbLeDs.mjs";
import { r as aiSearchProducts } from "./ai.functions-8hRZ8_PW.mjs";
import { t as ProductCard } from "./ProductCard-CNfzhEzy.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-BpklBw4z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
function ShopPage() {
	const { data: allProducts = [], isLoading } = useQuery(productsQuery);
	const [tab, setTab] = (0, import_react.useState)("all");
	const products = (0, import_react.useMemo)(() => tab === "all" ? allProducts : allProducts.filter((p) => tab === "perfume" ? isPerfume(p) : isWatch(p)), [allProducts, tab]);
	const showPerfumeFilters = tab !== "watch" && allProducts.some(isPerfume);
	const showWatchFilters = tab !== "perfume";
	const collections = (0, import_react.useMemo)(() => [...new Set(products.map((p) => p.collection))], [products]);
	const brands = (0, import_react.useMemo)(() => [...new Set(products.map((p) => p.brand))], [products]);
	const movements = (0, import_react.useMemo)(() => [...new Set(products.map((p) => p.movement).filter(Boolean))], [products]);
	const cases = (0, import_react.useMemo)(() => [...new Set(products.map((p) => p.case).filter(Boolean))], [products]);
	const families = (0, import_react.useMemo)(() => [...new Set(products.map((p) => p.fragranceFamily).filter(Boolean))], [products]);
	const genders = (0, import_react.useMemo)(() => [...new Set(products.map((p) => p.gender).filter(Boolean))], [products]);
	const [selectedFamilies, setSelectedFamilies] = (0, import_react.useState)([]);
	const [selectedGenders, setSelectedGenders] = (0, import_react.useState)([]);
	const [priceRange, setPriceRange] = (0, import_react.useState)([0, 25e3]);
	const [selectedCollections, setSelectedCollections] = (0, import_react.useState)([]);
	const [selectedBrands, setSelectedBrands] = (0, import_react.useState)([]);
	const [selectedMovements, setSelectedMovements] = (0, import_react.useState)([]);
	const [selectedCases, setSelectedCases] = (0, import_react.useState)([]);
	const [sort, setSort] = (0, import_react.useState)("featured");
	const [aiQuery, setAiQuery] = (0, import_react.useState)("");
	const [aiResult, setAiResult] = (0, import_react.useState)(null);
	const aiSearch = useMutation({
		mutationFn: (query) => aiSearchProducts({ data: { query } }),
		onSuccess: (r) => setAiResult(r),
		onError: () => toast.error("AI search is unavailable right now — please use the filters.")
	});
	const filtered = (0, import_react.useMemo)(() => {
		let list = products.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1] && (selectedCollections.length === 0 || selectedCollections.includes(p.collection)) && (selectedBrands.length === 0 || selectedBrands.includes(p.brand)) && (selectedMovements.length === 0 || selectedMovements.includes(p.movement)) && (selectedCases.length === 0 || selectedCases.includes(p.case)) && (selectedFamilies.length === 0 || p.fragranceFamily != null && selectedFamilies.includes(p.fragranceFamily)) && (selectedGenders.length === 0 || p.gender != null && selectedGenders.includes(p.gender)));
		if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
		if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
		if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
		if (aiResult) {
			const order = new Map(aiResult.slugs.map((s, i) => [s, i]));
			list = list.filter((p) => order.has(p.slug)).sort((a, b) => order.get(a.slug) - order.get(b.slug));
		}
		return list;
	}, [
		products,
		priceRange,
		selectedCollections,
		selectedBrands,
		selectedMovements,
		selectedCases,
		selectedFamilies,
		selectedGenders,
		sort,
		aiResult
	]);
	const toggle = (list, value, setter) => setter(list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);
	const clearAll = () => {
		setPriceRange([0, 25e3]);
		setSelectedCollections([]);
		setSelectedBrands([]);
		setSelectedMovements([]);
		setSelectedCases([]);
		setSelectedFamilies([]);
		setSelectedGenders([]);
		setAiResult(null);
		setAiQuery("");
	};
	const Filters = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-xl",
				children: "Filter the collection"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				title: "Price",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						value: priceRange,
						onValueChange: (v) => setPriceRange(v),
						min: 0,
						max: 25e3,
						step: 500,
						className: "my-4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", priceRange[0].toLocaleString()] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"$",
							priceRange[1].toLocaleString(),
							"+"
						] })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				title: "Collection",
				children: collections.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterCheckbox, {
					label: c,
					checked: selectedCollections.includes(c),
					onChange: () => toggle(selectedCollections, c, setSelectedCollections)
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				title: "Brand",
				children: brands.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterCheckbox, {
					label: b,
					checked: selectedBrands.includes(b),
					onChange: () => toggle(selectedBrands, b, setSelectedBrands)
				}, b))
			}),
			showWatchFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				title: "Movement",
				children: movements.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterCheckbox, {
					label: m,
					checked: selectedMovements.includes(m),
					onChange: () => toggle(selectedMovements, m, setSelectedMovements)
				}, m))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				title: "Case Material",
				children: cases.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterCheckbox, {
					label: c,
					checked: selectedCases.includes(c),
					onChange: () => toggle(selectedCases, c, setSelectedCases)
				}, c))
			})] }),
			showPerfumeFilters && families.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				title: "Fragrance Family",
				children: families.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterCheckbox, {
					label: f,
					checked: selectedFamilies.includes(f),
					onChange: () => toggle(selectedFamilies, f, setSelectedFamilies)
				}, f))
			}),
			showPerfumeFilters && genders.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				title: "For",
				children: genders.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterCheckbox, {
					label: g,
					checked: selectedGenders.includes(g),
					onChange: () => toggle(selectedGenders, g, setSelectedGenders)
				}, g))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: clearAll,
				className: "w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4 mr-2" }), " Clear all filters"]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.3em] text-primary",
						children: "The Collection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-serif text-5xl md:text-6xl",
						children: tab === "perfume" ? "All Perfumes" : tab === "watch" ? "All Timepieces" : "Watches & Perfumes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground max-w-2xl",
						children: tab === "perfume" ? "Concentrated eau de parfum and pure attars — 8 to 12 hours of wear, cash on delivery and insured shipping across Pakistan." : "Every Timera piece — quality-checked in-house, delivered with a signed authenticity card, warranty and insured delivery across Pakistan."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-10 flex flex-wrap gap-2",
				children: [
					{
						key: "all",
						label: "All"
					},
					{
						key: "watch",
						label: "Watches"
					},
					{
						key: "perfume",
						label: "Perfumes"
					}
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t.key),
					className: "rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition " + (tab === t.key ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50"),
					children: t.label
				}, t.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-xl border border-border bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " AI search"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex flex-col gap-3 sm:flex-row",
						onSubmit: (e) => {
							e.preventDefault();
							const q = aiQuery.trim();
							if (q.length > 1) {
								trackEvent("search", { metadata: { query: q } });
								aiSearch.mutate(q);
							}
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: aiQuery,
							onChange: (e) => setAiQuery(e.target.value),
							placeholder: "Describe what you want — e.g. a gold dress watch under Rs 500,000 for evenings",
							className: "h-11"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "h-11 sm:w-40",
							disabled: aiSearch.isPending || aiQuery.trim().length < 2,
							children: aiSearch.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Find my watch"
						})]
					}),
					aiResult && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-center gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: aiResult.summary || "Here is what matches best."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => {
								setAiResult(null);
								setAiQuery("");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mr-1 h-3.5 w-3.5" }), " Clear AI results"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-10 lg:grid-cols-[280px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden lg:block sticky top-32 self-start max-h-[calc(100vh-9rem)] overflow-y-auto pr-2",
					children: Filters
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-medium",
							children: filtered.length
						}), " pieces"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "lg:hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-4 w-4 mr-2" }), " Filters"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
							side: "left",
							className: "w-full sm:max-w-sm overflow-y-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: Filters
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: sort,
							onValueChange: setSort,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "w-[180px] h-9",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "featured",
									children: "Featured"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "price-asc",
									children: "Price: Low to High"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "price-desc",
									children: "Price: High to Low"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "rating",
									children: "Highest Rated"
								})
							] })]
						})]
					})]
				}), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-x-6 gap-y-12 grid-cols-2 md:grid-cols-3",
					children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-[4/5] rounded-lg bg-muted animate-pulse" }, i))
				}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-20 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-2xl",
							children: "No timepieces match your filters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "Adjust or clear filters to see more."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: clearAll,
							className: "mt-6",
							children: "Clear filters"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-x-6 gap-y-12 grid-cols-2 md:grid-cols-3",
					children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product: p,
						index: i,
						priority: i < 4
					}, p.id))
				})] })]
			})
		]
	});
}
function FilterGroup({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mb-4 text-[11px] uppercase tracking-[0.28em] text-primary",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2.5",
		children
	})] });
}
function FilterCheckbox({ label, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center gap-3 cursor-pointer group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
			checked,
			onCheckedChange: onChange
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-muted-foreground group-hover:text-foreground transition",
			children: label
		})]
	});
}
//#endregion
export { ShopPage as component };
