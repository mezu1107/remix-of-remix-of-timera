import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { C as Sparkles, Et as CircleAlert, Q as LoaderCircle, Tt as CircleCheck, bt as Copy, dt as FileSpreadsheet, jt as Check, mt as ExternalLink, p as Upload } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { n as formatPrice } from "./utils-CyfkpwkR.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { a as useQueryClient, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as parseColorsText, t as CrudModule } from "./CrudModule-CfOc3LZf.mjs";
import { i as aiWriteProductCopy, t as aiExtractProducts } from "./ai.functions-8hRZ8_PW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.products-Dnd9felb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='1125' viewBox='0 0 900 1125'%3E%3Crect width='900' height='1125' fill='%23f4efe6'/%3E%3Ccircle cx='450' cy='530' r='210' fill='none' stroke='%23a77a43' stroke-width='26'/%3E%3Ccircle cx='450' cy='530' r='160' fill='%23fffaf0' stroke='%23d0b27c' stroke-width='8'/%3E%3Cpath d='M450 410v120l86 58' stroke='%232b2720' stroke-width='14' stroke-linecap='round' fill='none'/%3E%3Ctext x='450' y='980' text-anchor='middle' font-family='Georgia,serif' font-size='58' fill='%232b2720'%3ETIMERA%3C/text%3E%3C/svg%3E";
var aliases = {
	name: [
		"name",
		"productname",
		"title",
		"product"
	],
	slug: ["slug", "handle"],
	brand: ["brand", "vendor"],
	collection: ["collection", "series"],
	category: ["category", "type"],
	price: [
		"price",
		"regularprice",
		"rate",
		"mrp"
	],
	sale_price: [
		"saleprice",
		"offerprice",
		"discountedprice"
	],
	compare_at: ["compareat", "oldprice"],
	image_url: [
		"image",
		"imageurl",
		"mainimage",
		"photo",
		"picture"
	],
	gallery: ["gallery", "images"],
	movement: ["movement"],
	case_material: ["casematerial", "case"],
	strap: ["strap", "band"],
	water_resistance: ["waterresistance"],
	description: [
		"description",
		"body",
		"details",
		"detail"
	],
	features: ["features", "specs"],
	colors: [
		"colors",
		"colours",
		"color"
	],
	sizes: ["sizes", "size"],
	stock: [
		"stock",
		"inventory",
		"qty",
		"quantity"
	],
	badge: ["badge", "tag"],
	active: [
		"active",
		"published",
		"status"
	],
	featured: ["featured"],
	sort_order: ["sortorder", "position"],
	seo_title: ["seotitle", "metatitle"],
	seo_description: ["seodescription", "metadescription"],
	seo_keywords: ["seokeywords", "keywords"]
};
var norm = (v) => v.toLowerCase().replace(/[^a-z0-9]/g, "");
var slugify = (v) => v.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 90);
var list = (v) => v.split(/[\n;|,]+/).map((x) => x.trim()).filter(Boolean);
var num = (v, fallback = null) => {
	const n = Number(String(v).replace(/[^0-9.-]/g, ""));
	return Number.isFinite(n) && String(v).trim() !== "" ? n : fallback;
};
var bool = (v, fallback = false) => v.trim() ? [
	"1",
	"yes",
	"true",
	"live",
	"active",
	"published"
].includes(v.trim().toLowerCase()) : fallback;
function read(row, field) {
	for (const key of aliases[field]) if (row[key]?.trim()) return row[key].trim();
	return "";
}
function build(row, i) {
	const name = read(row, "name");
	if (!name) return null;
	const image = read(row, "image_url") || placeholderImage;
	const slug = slugify(read(row, "slug") || name);
	if (!slug) return null;
	return {
		name,
		slug,
		brand: read(row, "brand") || "Timera",
		collection: read(row, "collection") || "Signature",
		category: read(row, "category") || null,
		price: num(read(row, "price"), 0) ?? 0,
		sale_price: num(read(row, "sale_price")),
		compare_at: num(read(row, "compare_at")),
		image_url: image,
		gallery: list(read(row, "gallery")).length ? list(read(row, "gallery")) : [image],
		movement: read(row, "movement") || "Quartz",
		case_material: read(row, "case_material") || "Stainless Steel",
		strap: read(row, "strap") || "Premium Strap",
		water_resistance: read(row, "water_resistance") || "30m",
		rating: 4.8,
		reviews: 0,
		badge: read(row, "badge") || null,
		stock: num(read(row, "stock"), 10) ?? 10,
		description: read(row, "description") || `${name} by Timera.`,
		features: list(read(row, "features")),
		colors: list(read(row, "colors")).length ? list(read(row, "colors")) : ["Black #111111", "Silver #c0c5cd"],
		sizes: list(read(row, "sizes")).length ? list(read(row, "sizes")) : ["Standard"],
		featured: bool(read(row, "featured")),
		active: bool(read(row, "active"), true),
		sort_order: num(read(row, "sort_order"), i + 1) ?? i + 1,
		deal_id: null,
		seo_title: read(row, "seo_title") || null,
		seo_description: read(row, "seo_description") || null,
		seo_keywords: read(row, "seo_keywords") || null
	};
}
/** Turns a matrix of cells (from CSV or a spreadsheet) into product rows. */
function rowsToProducts(table) {
	const headers = table[0]?.map((h) => norm(String(h ?? ""))) ?? [];
	if (headers.filter((h) => Object.values(aliases).some((a) => a.includes(h))).length < 2) return [];
	return table.slice(1).map((cells, i) => {
		const row = {};
		headers.forEach((h, idx) => {
			row[h] = String(cells[idx] ?? "");
		});
		return build(row, i);
	}).filter((x) => Boolean(x));
}
function parseCsv(text) {
	const delimiter = text.split("\n")[0]?.includes("	") ? "	" : ",";
	const rows = [];
	let row = [];
	let cell = "";
	let q = false;
	for (let i = 0; i < text.length; i += 1) {
		const c = text[i];
		const n = text[i + 1];
		if (c === "\"") if (q && n === "\"") {
			cell += "\"";
			i += 1;
		} else q = !q;
		else if (c === delimiter && !q) {
			row.push(cell.trim());
			cell = "";
		} else if ((c === "\n" || c === "\r") && !q) {
			if (c === "\r" && n === "\n") i += 1;
			row.push(cell.trim());
			if (row.some(Boolean)) rows.push(row);
			row = [];
			cell = "";
		} else cell += c;
	}
	row.push(cell.trim());
	if (row.some(Boolean)) rows.push(row);
	return rows;
}
async function readSpreadsheet(file) {
	const XLSX = await import("../_libs/xlsx.mjs").then((n) => n.t);
	const wb = XLSX.read(await file.arrayBuffer(), { type: "array" });
	const sheet = wb.Sheets[wb.SheetNames[0]];
	return XLSX.utils.sheet_to_json(sheet, {
		header: 1,
		raw: false,
		defval: ""
	});
}
async function readPdfText(file) {
	const pdfjs = await import("../_libs/pdfjs-dist.mjs").then((n) => n.t);
	pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
	const doc = await pdfjs.getDocument({ data: await file.arrayBuffer() }).promise;
	let out = "";
	for (let p = 1; p <= doc.numPages; p += 1) {
		const content = await (await doc.getPage(p)).getTextContent();
		out += content.items.map((it) => it.str).join(" ") + "\n";
	}
	return out.trim();
}
/** Maps AI-extracted products onto the products table shape. */
function fromAi(p, i) {
	const image = p.image_url || placeholderImage;
	const name = String(p.name ?? "").trim();
	const slug = slugify(name);
	if (!name || !slug) return null;
	return {
		name,
		slug,
		brand: p.brand || "Timera",
		collection: p.collection || "Signature",
		category: p.category || null,
		price: Number(p.price ?? 0) || 0,
		sale_price: p.sale_price ?? null,
		compare_at: null,
		image_url: image,
		gallery: [image],
		movement: p.movement || "Quartz",
		case_material: p.case_material || "Stainless Steel",
		strap: p.strap || "Premium Strap",
		water_resistance: p.water_resistance || "30m",
		rating: 4.8,
		reviews: 0,
		badge: null,
		stock: p.stock ?? 10,
		description: p.description || `${name} by Timera.`,
		features: p.features ?? [],
		colors: p.colors?.length ? p.colors : ["Black #111111", "Silver #c0c5cd"],
		sizes: p.sizes?.length ? p.sizes : ["Standard"],
		featured: false,
		active: true,
		sort_order: i + 1,
		deal_id: null,
		seo_title: null,
		seo_description: null,
		seo_keywords: null
	};
}
function ProductCsvImport() {
	const inputRef = (0, import_react.useRef)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [status, setStatus] = (0, import_react.useState)("");
	const qc = useQueryClient();
	const importFile = async (files) => {
		const file = files?.[0];
		if (!file) return;
		setBusy(true);
		setStatus("Reading file…");
		try {
			const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
			let products = [];
			let rawText = "";
			if ([
				"xlsx",
				"xls",
				"xlsm",
				"ods"
			].includes(ext)) {
				const table = await readSpreadsheet(file);
				products = rowsToProducts(table.map((r) => Array.isArray(r) ? r.map((c) => String(c ?? "")) : []));
				rawText = table.map((r) => Array.isArray(r) ? r.join(" | ") : "").join("\n");
			} else if (ext === "pdf") {
				setStatus("Extracting text from the PDF…");
				rawText = await readPdfText(file);
			} else if (ext === "json") {
				const parsed = JSON.parse(await file.text());
				const arr = Array.isArray(parsed) ? parsed : parsed.products ?? [];
				products = arr.map(fromAi).filter(Boolean);
				rawText = JSON.stringify(arr).slice(0, 1e5);
			} else {
				rawText = await file.text();
				products = rowsToProducts(parseCsv(rawText));
			}
			if (products.length === 0) {
				if (rawText.trim().length < 20) throw new Error("Could not read any text from this file.");
				setStatus("Reading the document with AI…");
				products = (await aiExtractProducts({ data: {
					text: rawText.slice(0, 12e4),
					source: file.name
				} })).products.map(fromAi).filter(Boolean);
			}
			if (!products.length) throw new Error("No products could be found in this file.");
			setStatus(`Saving ${products.length} products…`);
			for (let s = 0; s < products.length; s += 100) {
				const { error } = await supabase.from("products").upsert(products.slice(s, s + 100), { onConflict: "slug" });
				if (error) throw error;
			}
			await qc.invalidateQueries({ queryKey: ["admin", "products"] });
			await qc.invalidateQueries({ queryKey: ["products"] });
			toast.success(`${products.length} products imported — live on the storefront.`);
		} catch (error) {
			toast.error(error?.message ?? "Import failed.");
		} finally {
			setBusy(false);
			setStatus("");
			if (inputRef.current) inputRef.current.value = "";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-border bg-card p-4 sm:p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-[11px] uppercase tracking-widest text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "h-4 w-4" }),
						" Product file import",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " AI powered"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Upload CSV, Excel (XLSX/XLS), JSON, TXT or PDF. Names, prices, descriptions and specs are read automatically — matching slugs update, new ones are created."
				}),
				status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-primary",
					children: status
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					ref: inputRef,
					type: "file",
					accept: ".csv,.tsv,.txt,.json,.pdf,.xlsx,.xls,.xlsm,.ods",
					className: "h-11 sm:w-64",
					onChange: (e) => importFile(e.target.files)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					disabled: busy,
					onClick: () => inputRef.current?.click(),
					className: "h-11 shrink-0",
					children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2",
						children: "Import"
					})]
				})]
			})]
		})
	});
}
/**
* MetaCatalogStatus — shows the catalog feed URL and a quick health check.
* Displayed at the top of the admin products page so the admin can easily
* copy the feed URL into Meta Commerce Manager.
*
* The feed endpoint is /api/public/v1/meta/catalog
*/
function MetaCatalogStatus() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const feedUrl = typeof window !== "undefined" ? `${window.location.origin}/api/public/v1/meta/catalog` : "https://timera.store/api/public/v1/meta/catalog";
	const { data, isLoading, isError } = useQuery({
		queryKey: ["meta-catalog-health"],
		staleTime: 5 * 6e4,
		retry: 1,
		queryFn: async () => {
			const res = await fetch("/api/public/v1/meta/catalog");
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const json = await res.json();
			return { count: Array.isArray(json.data) ? json.data.length : 0 };
		}
	});
	async function copy() {
		try {
			await navigator.clipboard.writeText(feedUrl);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border/60 bg-card p-4 sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: "Meta Product Catalog"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 font-semibold text-sm flex items-center gap-2",
					children: [
						isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Checking feed…"
						}),
						isError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-destructive",
							children: "Feed unavailable — check logs"
						})] }),
						data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-green-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-green-700",
							children: [data.count, " products ready to sync"]
						})] })
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://business.facebook.com/commerce/catalogs",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-primary transition",
					children: ["Open Meta Commerce Manager", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center gap-2 rounded-lg border border-border/50 bg-muted/30 px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "flex-1 truncate text-xs text-muted-foreground font-mono",
					children: feedUrl
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: copy,
					className: "shrink-0 text-muted-foreground hover:text-primary transition",
					"aria-label": "Copy feed URL",
					children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-green-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[10px] text-muted-foreground",
				children: "In Meta Commerce Manager → Catalog → Data sources → Add → Scheduled feed → paste the URL above. Meta will crawl it automatically. Product IDs match the pixel events exactly."
			})
		]
	});
}
function ProductsAdmin() {
	const { data: categories = [] } = useQuery({
		queryKey: ["admin", "category-options"],
		queryFn: async () => {
			const { data, error } = await supabase.from("categories").select("name").order("sort_order");
			if (error) throw error;
			return (data ?? []).map((c) => c.name);
		}
	});
	const { data: collections = [] } = useQuery({
		queryKey: ["admin", "collection-options"],
		queryFn: async () => {
			const { data, error } = await supabase.from("collections").select("name").order("sort_order");
			if (error) throw error;
			return (data ?? []).map((c) => c.name);
		}
	});
	const { data: deals = [] } = useQuery({
		queryKey: ["admin", "deal-options"],
		queryFn: async () => {
			const { data, error } = await supabase.from("deals").select("id, title").order("sort_order");
			if (error) throw error;
			return (data ?? []).map((d) => ({
				label: d.title,
				value: d.id
			}));
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaCatalogStatus, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCsvImport, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrudModule, {
				table: "products",
				title: "Products",
				description: "Your catalogue. New and edited products appear in the shop instantly.",
				orderBy: { column: "sort_order" },
				bulkFieldKeys: [
					"deal_id",
					"badge",
					"category",
					"collection",
					"sale_price",
					"stock",
					"featured",
					"active"
				],
				invalidate: [
					"products",
					"categories",
					"deals"
				],
				aiAssist: {
					label: "Write this product with AI",
					help: "Fill in the name (and any specs you know), then generate the description, features and SEO fields.",
					run: async (form) => aiWriteProductCopy({ data: {
						name: String(form.name ?? ""),
						brief: String(form.description ?? ""),
						brand: String(form.brand ?? ""),
						collection: String(form.collection ?? ""),
						category: String(form.category ?? ""),
						movement: String(form.movement ?? ""),
						case_material: String(form.case_material ?? ""),
						strap: String(form.strap ?? ""),
						water_resistance: String(form.water_resistance ?? ""),
						price: String(form.price ?? "")
					} })
				},
				columns: [
					{
						key: "image_url",
						label: "Image",
						render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: r.image_url,
							alt: "",
							className: "h-14 w-11 rounded object-cover"
						})
					},
					{
						key: "name",
						label: "Name",
						primary: true
					},
					{
						key: "category",
						label: "Category"
					},
					{
						key: "price",
						label: "Price",
						render: (r) => r.sale_price ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "whitespace-nowrap",
							children: [
								formatPrice(Number(r.sale_price)),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground line-through",
									children: formatPrice(Number(r.price))
								})
							]
						}) : formatPrice(Number(r.price))
					},
					{
						key: "colors",
						label: "Colours",
						render: (r) => {
							const list = parseColorsText(Array.isArray(r.colors) ? r.colors.join("\n") : String(r.colors ?? ""));
							if (!list.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "—"
							});
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex flex-wrap items-center gap-1.5",
								children: [list.slice(0, 6).map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									title: c.name,
									className: "h-5 w-5 overflow-hidden rounded-full ring-1 ring-border",
									style: { backgroundColor: c.hex },
									children: c.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: c.image,
										alt: "",
										className: "h-full w-full object-cover"
									}) : null
								}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: list.map((c) => c.name).join(", ")
								})]
							});
						}
					},
					{
						key: "stock",
						label: "Stock"
					},
					{
						key: "active",
						label: "Live",
						render: (r) => r.active ? "Yes" : "No"
					}
				],
				fields: [
					{
						section: "Basics",
						key: "product_type",
						label: "Product type",
						type: "select",
						options: [{
							label: "Watch",
							value: "watch"
						}, {
							label: "Perfume",
							value: "perfume"
						}],
						default: "watch",
						help: "Perfume products show fragrance notes instead of watch specifications on the site."
					},
					{
						section: "Basics",
						key: "name",
						label: "Name",
						type: "text",
						required: true
					},
					{
						section: "Basics",
						key: "slug",
						label: "Slug",
						type: "text",
						required: true,
						help: "Used in the product URL."
					},
					{
						section: "Basics",
						key: "brand",
						label: "Brand",
						type: "text",
						default: "Timera"
					},
					{
						section: "Basics",
						key: "collection",
						label: "Collection",
						type: collections.length ? "select" : "text",
						options: collections,
						required: true
					},
					{
						section: "Basics",
						key: "category",
						label: "Category",
						type: categories.length ? "select" : "text",
						options: categories
					},
					{
						section: "Basics",
						key: "description",
						label: "Description",
						type: "textarea",
						required: true
					},
					{
						section: "Pricing & deal",
						key: "price",
						label: "Regular price (PKR)",
						type: "number",
						required: true
					},
					{
						section: "Pricing & deal",
						key: "sale_price",
						label: "Sale price (PKR)",
						type: "number",
						help: "Leave empty for no sale. Shown instead of the regular price."
					},
					{
						section: "Pricing & deal",
						key: "compare_at",
						label: "Compare-at price (PKR)",
						type: "number"
					},
					{
						section: "Pricing & deal",
						key: "deal_id",
						label: "Part of deal",
						type: "select",
						options: deals
					},
					{
						section: "Pricing & deal",
						key: "badge",
						label: "Badge",
						type: "select",
						options: [
							"New",
							"Bestseller",
							"Limited",
							"Sale"
						]
					},
					{
						section: "Pricing & deal",
						key: "stock",
						label: "Stock",
						type: "number",
						default: 10
					},
					{
						section: "Images",
						key: "image_url",
						label: "Main image",
						type: "image",
						required: true
					},
					{
						section: "Images",
						key: "gallery",
						label: "Gallery images",
						type: "images",
						help: "Upload from your device or paste URLs."
					},
					{
						section: "Images",
						key: "videos",
						label: "Product videos",
						type: "videos",
						help: "Watch on wrist, dial close-up, movement, unboxing. Upload to Supabase Storage or Cloudinary first, then paste the URL. Max 1 video shows in the gallery initially — others shown in a tab."
					},
					{
						section: "Variants",
						key: "colors",
						label: "Colours of this watch",
						type: "colors",
						help: "Add every colour you sell. Give each one a name, pick the swatch colour and upload the photo of that exact colour — customers can then open it directly with its own link."
					},
					{
						section: "Variants",
						key: "sizes",
						label: "Sizes",
						type: "list",
						help: "One per line, e.g. 40mm"
					},
					{
						section: "Specification",
						key: "movement",
						label: "Movement",
						type: "text",
						default: "Quartz"
					},
					{
						section: "Specification",
						key: "case_material",
						label: "Case material",
						type: "text",
						default: "Stainless Steel"
					},
					{
						section: "Specification",
						key: "strap",
						label: "Strap",
						type: "text",
						default: "Leather"
					},
					{
						section: "Specification",
						key: "water_resistance",
						label: "Water resistance",
						type: "text",
						default: "50m"
					},
					{
						section: "Specification",
						key: "features",
						label: "Features",
						type: "list",
						help: "One feature per line."
					},
					{
						section: "Specification",
						key: "rating",
						label: "Rating",
						type: "number",
						default: 4.8
					},
					{
						section: "Specification",
						key: "reviews",
						label: "Review count",
						type: "number"
					},
					{
						section: "Fragrance (perfumes only)",
						key: "fragrance_family",
						label: "Fragrance family",
						type: "select",
						options: [
							"Woody",
							"Oud",
							"Floral",
							"Amber",
							"Fresh",
							"Aquatic",
							"Citrus",
							"Oriental",
							"Musk"
						]
					},
					{
						section: "Fragrance (perfumes only)",
						key: "concentration",
						label: "Concentration",
						type: "select",
						options: [
							"Parfum",
							"Eau de Parfum",
							"Eau de Toilette",
							"Attar Oil",
							"Body Mist"
						]
					},
					{
						section: "Fragrance (perfumes only)",
						key: "size_ml",
						label: "Bottle size (ml)",
						type: "number"
					},
					{
						section: "Fragrance (perfumes only)",
						key: "gender",
						label: "Best for",
						type: "select",
						options: [
							"Men",
							"Women",
							"Unisex"
						]
					},
					{
						section: "Fragrance (perfumes only)",
						key: "top_notes",
						label: "Top notes",
						type: "list",
						help: "One note per line."
					},
					{
						section: "Fragrance (perfumes only)",
						key: "heart_notes",
						label: "Heart notes",
						type: "list",
						help: "One note per line."
					},
					{
						section: "Fragrance (perfumes only)",
						key: "base_notes",
						label: "Base notes",
						type: "list",
						help: "One note per line."
					},
					{
						section: "Fragrance (perfumes only)",
						key: "longevity",
						label: "Longevity",
						type: "text",
						help: "e.g. 8–10 hours"
					},
					{
						section: "Fragrance (perfumes only)",
						key: "sillage",
						label: "Sillage",
						type: "text",
						help: "e.g. Moderate to strong"
					},
					{
						section: "SEO",
						key: "seo_title",
						label: "SEO title",
						type: "text",
						help: "Under 60 characters. Falls back to the product name."
					},
					{
						section: "SEO",
						key: "seo_description",
						label: "SEO description",
						type: "textarea",
						help: "Under 160 characters."
					},
					{
						section: "SEO",
						key: "seo_keywords",
						label: "SEO keywords",
						type: "text",
						help: "Comma separated."
					},
					{
						section: "Visibility",
						key: "sort_order",
						label: "Sort order",
						type: "number"
					},
					{
						section: "Visibility",
						key: "featured",
						label: "Featured on homepage",
						type: "switch"
					},
					{
						section: "Visibility",
						key: "active",
						label: "Live on site",
						type: "switch",
						default: true
					}
				]
			})
		]
	});
}
//#endregion
export { ProductsAdmin as component };
