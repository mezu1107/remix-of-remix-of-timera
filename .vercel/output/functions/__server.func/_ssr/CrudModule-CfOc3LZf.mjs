import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { C as Sparkles, L as Pencil, N as RefreshCw, P as Plus, Q as LoaderCircle, S as SquareCheckBig, _t as Download, h as Trash2, it as ImagePlus, r as X } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { a as useQueryClient, r as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { i as colorSlug } from "./catalog-CjOF-ztI.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
import { t as Label } from "./label-DWh09J_8.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Textarea } from "./textarea-CSVRhi8K.mjs";
import { t as Switch } from "./switch-CD71K2_M.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7QbLeDs.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./dialog-z7Eue78-.mjs";
import { a as compressImage, i as VideosField, n as ImagesField, o as uploadToStorage, r as VideoField, t as ImageField } from "./VideoField-CTua7mdx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CrudModule-CfOc3LZf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Same shape the storefront parses: `Name #hex | imageUrl` (one per line). */
function serializeColors(rows) {
	return rows.filter((r) => r.name.trim()).map((r) => `${r.name.trim()} ${r.hex || "#1a1a1a"}${r.image ? ` | ${r.image}` : ""}`).join("\n");
}
function parseColorsText(text) {
	return String(text ?? "").split("\n").map((line) => line.trim()).filter(Boolean).map((line) => {
		const [left, ...rest] = line.split("|");
		const image = rest.join("|").trim();
		const base = left.trim();
		const match = base.match(/(#[0-9a-fA-F]{3,8})\s*$/);
		const hex = match ? match[1] : "#1a1a1a";
		return {
			name: (match ? base.slice(0, match.index).trim() : base) || hex,
			hex,
			image
		};
	});
}
function ColorsField({ value, onChange, productSlug }) {
	const [rows, setRows] = (0, import_react.useState)(() => parseColorsText(value));
	const lastPushed = (0, import_react.useRef)(value);
	(0, import_react.useEffect)(() => {
		if (value !== lastPushed.current) {
			lastPushed.current = value;
			setRows(parseColorsText(value));
		}
	}, [value]);
	const commit = (next) => {
		setRows(next);
		const serialized = serializeColors(next);
		lastPushed.current = serialized;
		onChange(serialized);
	};
	const update = (i, patch) => commit(rows.map((r, idx) => idx === i ? {
		...r,
		...patch
	} : r));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1.5 space-y-3",
		children: [
			rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg border border-dashed border-border p-4 text-xs text-muted-foreground",
				children: "No colours yet. Add one for every colour of this watch — each gets its own photo and its own link."
			}),
			rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-muted/30 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-border",
								style: { backgroundColor: row.hex },
								children: row.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: row.image,
									alt: "",
									className: "h-full w-full object-cover"
								}) : null
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "color",
								"aria-label": "Colour swatch",
								value: /^#[0-9a-fA-F]{6}$/.test(row.hex) ? row.hex : "#1a1a1a",
								onChange: (e) => update(i, { hex: e.target.value }),
								className: "h-11 w-12 cursor-pointer rounded-md border border-border bg-background p-1"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-[10rem] flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[10px] uppercase tracking-widest text-muted-foreground",
								children: "Colour name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: row.name,
								placeholder: "e.g. Midnight Blue",
								onChange: (e) => update(i, { name: e.target.value }),
								className: "mt-1 h-11"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorPhotoPicker, {
							value: row.image,
							onChange: (v) => update(i, { image: v })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon",
							"aria-label": "Remove colour",
							onClick: () => commit(rows.filter((_, idx) => idx !== i)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-destructive" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 break-all text-[11px] text-muted-foreground",
					children: [
						"Link:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", {
							className: "rounded bg-background px-1 py-0.5",
							children: [
								"/product/",
								productSlug || "your-product",
								"?color=",
								colorSlug(row.name) || "colour"
							]
						})
					]
				})]
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				onClick: () => commit([...rows, {
					name: "",
					hex: "#1a1a1a",
					image: ""
				}]),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add colour"]
			})
		]
	});
}
function ColorPhotoPicker({ value, onChange }) {
	const inputRef = (0, import_react.useRef)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const pick = async (files) => {
		const file = files?.[0];
		if (!file) return;
		setBusy(true);
		try {
			onChange(await uploadToStorage(await compressImage(file), "colors"));
			toast.success("Photo ready — save to publish it");
		} catch (e) {
			toast.error(e?.message ?? "Could not upload that image");
		} finally {
			setBusy(false);
			if (inputRef.current) inputRef.current.value = "";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-[9rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "text-[10px] uppercase tracking-widest text-muted-foreground",
			children: "Photo of this colour"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-1 flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: inputRef,
					type: "file",
					accept: "image/*",
					className: "hidden",
					onChange: (e) => pick(e.target.files)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					disabled: busy,
					onClick: () => inputRef.current?.click(),
					children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "mr-2 h-4 w-4" }), value ? "Replace" : "Upload"]
				}),
				value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon",
					"aria-label": "Remove photo",
					onClick: () => onChange(""),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})
			]
		})]
	});
}
/** Turns rows into a spreadsheet-safe CSV (every column, nested values as JSON). */
function rowsToCsv(rows) {
	const headers = [...new Set(rows.flatMap((r) => Object.keys(r)))];
	const cell = (v) => {
		if (v === null || v === void 0) return "";
		return `"${(typeof v === "object" ? JSON.stringify(v) : String(v)).replace(/"/g, "\"\"")}"`;
	};
	return [headers.join(","), ...rows.map((r) => headers.map((h) => cell(r[h])).join(","))].join("\n");
}
function downloadCsv(filename, csv) {
	const url = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" }));
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
var emptyFor = (f) => {
	if (f.default !== void 0) return f.default;
	switch (f.type) {
		case "number": return 0;
		case "switch": return false;
		case "images": return [];
		default: return "";
	}
};
var toLocalInput = (v) => {
	if (!v) return "";
	const d = new Date(String(v));
	if (Number.isNaN(d.getTime())) return "";
	const pad = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};
function CrudModule({ table, title, description, fields, columns, orderBy, invalidate, allowCreate = true, allowDelete = true, aiAssist, bulkFieldKeys }) {
	const [aiBusy, setAiBusy] = (0, import_react.useState)(false);
	const qc = useQueryClient();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({});
	const [search, setSearch] = (0, import_react.useState)("");
	const [selected, setSelected] = (0, import_react.useState)([]);
	const [bulkKey, setBulkKey] = (0, import_react.useState)("");
	const [bulkValue, setBulkValue] = (0, import_react.useState)("");
	const listQuery = useQuery({
		queryKey: ["admin", table],
		queryFn: async () => {
			let q = supabase.from(table).select("*");
			if (orderBy) q = q.order(orderBy.column, { ascending: orderBy.ascending ?? true });
			const { data, error } = await q;
			if (error) throw error;
			return data ?? [];
		}
	});
	const blank = (0, import_react.useMemo)(() => Object.fromEntries(fields.map((f) => [f.key, emptyFor(f)])), [fields]);
	const openCreate = () => {
		setEditing(null);
		setForm({ ...blank });
		setOpen(true);
	};
	const openEdit = (row) => {
		setEditing(row);
		setForm(Object.fromEntries(fields.map((f) => {
			const v = row[f.key];
			if (f.type === "list" || f.type === "colors") return [f.key, Array.isArray(v) ? v.join("\n") : v ?? ""];
			if (f.type === "images") return [f.key, Array.isArray(v) ? v : []];
			if (f.type === "video") return [f.key, typeof v === "string" ? v : ""];
			if (f.type === "videos") return [f.key, Array.isArray(v) ? v : []];
			if (f.type === "datetime") return [f.key, toLocalInput(v)];
			return [f.key, v ?? emptyFor(f)];
		})));
		setOpen(true);
	};
	const refreshPublic = () => {
		invalidate.forEach((key) => qc.invalidateQueries({ queryKey: [key] }));
		qc.invalidateQueries({ queryKey: ["admin"] });
	};
	const save = useMutation({
		mutationFn: async () => {
			const payload = {};
			for (const f of fields) {
				const raw = form[f.key];
				if (f.type === "number") payload[f.key] = raw === "" || raw === null ? null : Number(raw);
				else if (f.type === "switch") payload[f.key] = !!raw;
				else if (f.type === "images") payload[f.key] = Array.isArray(raw) ? raw : [];
				else if (f.type === "video") payload[f.key] = typeof raw === "string" ? raw || null : null;
				else if (f.type === "videos") payload[f.key] = Array.isArray(raw) ? raw : [];
				else if (f.type === "datetime") payload[f.key] = raw ? new Date(String(raw)).toISOString() : null;
				else if (f.type === "list" || f.type === "colors") payload[f.key] = String(raw ?? "").split("\n").map((s) => s.trim()).filter(Boolean);
				else payload[f.key] = raw === "" ? null : raw;
			}
			if (editing) {
				const { error } = await supabase.from(table).update(payload).eq("id", editing.id);
				if (error) throw error;
			} else {
				const { error } = await supabase.from(table).insert(payload);
				if (error) throw error;
			}
		},
		onSuccess: () => {
			toast.success(editing ? "Saved — live on the site" : "Created — live on the site");
			setOpen(false);
			refreshPublic();
		},
		onError: (e) => toast.error(e?.message ?? "Could not save")
	});
	const remove = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from(table).delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Deleted");
			refreshPublic();
		},
		onError: (e) => toast.error(e?.message ?? "Could not delete")
	});
	const bulkFields = (bulkFieldKeys ?? []).map((k) => fields.find((f) => f.key === k)).filter(Boolean);
	const bulkEnabled = bulkFields.length > 0;
	const bulkField = bulkFields.find((f) => f.key === bulkKey) ?? null;
	const bulkUpdate = useMutation({
		mutationFn: async () => {
			if (!bulkField || selected.length === 0) return;
			const raw = bulkValue;
			let value;
			if (bulkField.type === "number") value = raw === "" || raw === null ? null : Number(raw);
			else if (bulkField.type === "switch") value = !!raw;
			else value = raw === "" || raw === "__clear__" ? null : raw;
			const { error } = await supabase.from(table).update({ [bulkField.key]: value }).in("id", selected);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success(`Updated ${selected.length} item(s)`);
			setSelected([]);
			refreshPublic();
		},
		onError: (e) => toast.error(e?.message ?? "Bulk update failed")
	});
	const bulkDelete = useMutation({
		mutationFn: async () => {
			const { error } = await supabase.from(table).delete().in("id", selected);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Deleted");
			setSelected([]);
			refreshPublic();
		},
		onError: (e) => toast.error(e?.message ?? "Bulk delete failed")
	});
	const exportRows = async (onlySelected) => {
		const { data, error } = await supabase.from(table).select("*");
		if (error) return toast.error(error.message);
		const list = data ?? [];
		const picked = onlySelected ? list.filter((r) => selected.includes(r.id)) : list;
		if (!picked.length) return toast.error("Nothing to export");
		downloadCsv(`${table}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, rowsToCsv(picked));
		toast.success(`Exported ${picked.length} row(s)`);
	};
	const allRows = listQuery.data ?? [];
	const rows = (0, import_react.useMemo)(() => {
		const term = search.trim().toLowerCase();
		if (!term) return allRows;
		return allRows.filter((r) => Object.values(r).some((v) => typeof v === "string" && v.toLowerCase().includes(term)));
	}, [allRows, search]);
	const primaryCol = columns.find((c) => c.primary) ?? columns.find((c) => c.key !== "image_url") ?? columns[0];
	const sections = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		fields.forEach((f) => {
			const key = f.section ?? "Details";
			map.set(key, [...map.get(key) ?? [], f]);
		});
		return [...map.entries()];
	}, [fields]);
	const renderField = (f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: f.type === "switch" ? "flex items-center justify-between gap-4 rounded-lg border border-border/70 p-3" : "",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "text-xs uppercase tracking-widest text-muted-foreground",
				children: f.label
			}),
			f.type === "switch" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
				checked: !!form[f.key],
				onCheckedChange: (v) => setForm((s) => ({
					...s,
					[f.key]: v
				}))
			}) : f.type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
				value: String(form[f.key] ?? ""),
				onChange: (v) => setForm((s) => ({
					...s,
					[f.key]: v
				}))
			}) : f.type === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoField, {
				value: String(form[f.key] ?? ""),
				onChange: (v) => setForm((s) => ({
					...s,
					[f.key]: v
				})),
				help: f.help,
				folder: "videos"
			}) : f.type === "images" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagesField, {
				value: Array.isArray(form[f.key]) ? form[f.key] : [],
				onChange: (v) => setForm((s) => ({
					...s,
					[f.key]: v
				}))
			}) : f.type === "videos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideosField, {
				value: Array.isArray(form[f.key]) ? form[f.key] : [],
				onChange: (v) => setForm((s) => ({
					...s,
					[f.key]: v
				}))
			}) : f.type === "colors" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorsField, {
				value: String(form[f.key] ?? ""),
				onChange: (v) => setForm((s) => ({
					...s,
					[f.key]: v
				})),
				productSlug: String(form.slug ?? "")
			}) : f.type === "textarea" || f.type === "list" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				required: f.required,
				rows: f.type === "list" ? 4 : 5,
				value: form[f.key] ?? "",
				onChange: (e) => setForm((s) => ({
					...s,
					[f.key]: e.target.value
				})),
				className: "mt-1.5"
			}) : f.type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: String(form[f.key] ?? ""),
				onValueChange: (v) => setForm((s) => ({
					...s,
					[f.key]: v
				})),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "mt-1.5 h-11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Choose…" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: (f.options ?? []).map((o) => {
					const opt = typeof o === "string" ? {
						label: o,
						value: o
					} : o;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: opt.value,
						children: opt.label
					}, opt.value);
				}) })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				required: f.required,
				type: f.type === "number" ? "number" : f.type === "datetime" ? "datetime-local" : "text",
				step: f.type === "number" ? "any" : void 0,
				value: form[f.key] ?? "",
				onChange: (e) => setForm((s) => ({
					...s,
					[f.key]: e.target.value
				})),
				className: "mt-1.5 h-11"
			}),
			f.help && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs text-muted-foreground",
				children: f.help
			})
		]
	}, f.key);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-2xl sm:text-3xl md:text-4xl",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: description
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							className: "sm:hidden",
							onClick: () => refreshPublic(),
							"aria-label": "Refresh",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "hidden sm:inline-flex",
							onClick: () => refreshPublic(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4 mr-2" }), " Refresh"]
						}),
						bulkEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => void exportRows(selected.length > 0),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 sm:mr-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: selected.length ? `Export ${selected.length}` : "Export CSV"
							})]
						}),
						allowCreate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: openCreate,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 sm:mr-2" }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "New"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: search,
				onChange: (e) => setSearch(e.target.value),
				placeholder: "Search…",
				className: "mt-6 h-11 max-w-sm"
			}),
			bulkEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-2 rounded-xl border border-border bg-muted/40 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: () => setSelected(selected.length === rows.length ? [] : rows.map((r) => r.id)),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "mr-2 h-4 w-4" }), selected.length === rows.length && rows.length > 0 ? "Clear selection" : "Select all shown"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted-foreground",
						children: [selected.length, " selected"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: bulkKey,
						onValueChange: (v) => {
							setBulkKey(v);
							setBulkValue("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "h-10 w-[190px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Bulk change…" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: bulkFields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: f.key,
							children: f.label
						}, f.key)) })]
					}),
					bulkField?.type === "switch" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: String(bulkValue),
						onValueChange: (v) => setBulkValue(v === "true"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "h-10 w-[140px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Value" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "true",
							children: "Yes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "false",
							children: "No"
						})] })]
					}) : bulkField?.type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: String(bulkValue),
						onValueChange: setBulkValue,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "h-10 w-[190px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Value" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "__clear__",
							children: "— Remove —"
						}), (bulkField.options ?? []).map((o) => {
							const opt = typeof o === "string" ? {
								label: o,
								value: o
							} : o;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: opt.value,
								children: opt.label
							}, opt.value);
						})] })]
					}) : bulkField ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "h-10 w-[170px]",
						type: bulkField.type === "number" ? "number" : "text",
						value: bulkValue ?? "",
						placeholder: "New value",
						onChange: (e) => setBulkValue(e.target.value)
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: "sm",
						disabled: !bulkField || selected.length === 0 || bulkUpdate.isPending,
						onClick: () => bulkUpdate.mutate(),
						children: bulkUpdate.isPending ? "Applying…" : "Apply to selected"
					}),
					allowDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						size: "sm",
						variant: "outline",
						disabled: selected.length === 0 || bulkDelete.isPending,
						onClick: () => {
							if (confirm(`Delete ${selected.length} item(s) permanently?`)) bulkDelete.mutate();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 h-4 w-4 text-destructive" }), " Delete selected"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-3 md:hidden",
				children: [
					listQuery.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-8 text-center text-muted-foreground",
						children: "Loading…"
					}),
					!listQuery.isLoading && rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-8 text-center text-muted-foreground",
						children: "Nothing here yet."
					}),
					rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-border bg-card p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-start gap-3",
								children: [
									bulkEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										"aria-label": "Select row",
										className: "mt-1 h-4 w-4 shrink-0 accent-[hsl(var(--primary))]",
										checked: selected.includes(row.id),
										onChange: (e) => setSelected((s) => e.target.checked ? [...s, row.id] : s.filter((id) => id !== row.id))
									}),
									row.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: row.image_url,
										alt: "",
										className: "h-14 w-14 shrink-0 rounded-md object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-medium",
											children: primaryCol?.render ? primaryCol.render(row) : String(row[primaryCol?.key ?? "id"] ?? "—")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
											className: "mt-2 space-y-1",
											children: columns.filter((c) => c.key !== primaryCol?.key && c.key !== "image_url").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-2 text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "shrink-0 uppercase tracking-widest text-muted-foreground",
													children: c.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
													className: "min-w-0 truncate",
													children: c.render ? c.render(row) : String(row[c.key] ?? "—")
												})]
											}, c.key))
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									onClick: () => openEdit(row),
									"aria-label": "Edit",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
								}), allowDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									"aria-label": "Delete",
									onClick: () => {
										if (confirm("Delete this item permanently?")) remove.mutate(row.id);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-destructive" })
								})]
							})]
						})
					}, row.id))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 hidden overflow-x-auto rounded-xl border border-border bg-card md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border text-left",
						children: [
							bulkEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "w-10 px-4 py-3" }),
							columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "whitespace-nowrap px-4 py-3 text-[11px] uppercase tracking-widest text-muted-foreground font-medium",
								children: c.label
							}, c.key)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-4 py-3" })
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
						listQuery.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: columns.length + (bulkEnabled ? 2 : 1),
							className: "px-4 py-10 text-center text-muted-foreground",
							children: "Loading…"
						}) }),
						!listQuery.isLoading && rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: columns.length + (bulkEnabled ? 2 : 1),
							className: "px-4 py-10 text-center text-muted-foreground",
							children: "Nothing here yet."
						}) }),
						rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/60 last:border-0 hover:bg-muted/50",
							children: [
								bulkEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										"aria-label": "Select row",
										className: "h-4 w-4 accent-[hsl(var(--primary))]",
										checked: selected.includes(row.id),
										onChange: (e) => setSelected((s) => e.target.checked ? [...s, row.id] : s.filter((id) => id !== row.id))
									})
								}),
								columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "max-w-[280px] truncate px-4 py-3 align-middle",
									children: c.render ? c.render(row) : String(row[c.key] ?? "—")
								}, c.key)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-end gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											onClick: () => openEdit(row),
											"aria-label": "Edit",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
										}), allowDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											"aria-label": "Delete",
											onClick: () => {
												if (confirm("Delete this item permanently?")) remove.mutate(row.id);
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-destructive" })
										})]
									})
								})
							]
						}, row.id))
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[90vh] w-[calc(100vw-1.5rem)] max-w-2xl overflow-y-auto p-4 sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-serif text-xl sm:text-2xl",
						children: editing ? `Edit ${title.replace(/s$/, "")}` : `New ${title.replace(/s$/, "")}`
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "space-y-6",
						onSubmit: (e) => {
							e.preventDefault();
							save.mutate();
						},
						children: [
							aiAssist && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg border border-primary/40 bg-primary/5 p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-2 text-sm font-medium",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }),
												" ",
												aiAssist.label
											]
										}), aiAssist.help && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: aiAssist.help
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										disabled: aiBusy,
										onClick: async () => {
											setAiBusy(true);
											try {
												const result = await aiAssist.run(form);
												setForm((s) => {
													const next = { ...s };
													for (const [k, v] of Object.entries(result)) {
														if (v === void 0 || v === null || v === "") continue;
														const field = fields.find((f) => f.key === k);
														if (!field) continue;
														next[k] = field.type === "list" && Array.isArray(v) ? v.join("\n") : v;
													}
													return next;
												});
												toast.success("Draft generated — review before saving");
											} catch (e) {
												toast.error(e?.message ?? "Could not generate");
											} finally {
												setAiBusy(false);
											}
										},
										children: [aiBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2 h-4 w-4" }), aiBusy ? "Writing…" : "Generate"]
									})]
								})
							}),
							sections.map(([name, list]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [sections.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "border-b border-border pb-2 text-[11px] uppercase tracking-[0.28em] text-primary",
									children: name
								}), list.map(renderField)]
							}, name)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sticky bottom-0 flex flex-col-reverse gap-2 border-t border-border bg-background pt-4 sm:flex-row sm:justify-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setOpen(false),
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: save.isPending,
									children: save.isPending ? "Saving…" : "Save"
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
export { parseColorsText as n, CrudModule as t };
