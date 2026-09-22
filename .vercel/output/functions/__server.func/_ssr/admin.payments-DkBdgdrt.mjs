import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { Q as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { a as useQueryClient, r as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
import { t as Label } from "./label-DWh09J_8.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Textarea } from "./textarea-CSVRhi8K.mjs";
import { t as Switch } from "./switch-CD71K2_M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.payments-DkBdgdrt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PaymentsAdmin() {
	const qc = useQueryClient();
	const { data, isLoading } = useQuery({
		queryKey: ["admin", "payment_settings"],
		queryFn: async () => {
			const { data, error } = await supabase.from("payment_settings").select("*").order("created_at", { ascending: true }).limit(1).maybeSingle();
			if (error) throw error;
			return data ?? null;
		}
	});
	const [f, setF] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		if (data) setF(data);
	}, [data]);
	const set = (k, v) => setF((p) => ({
		...p,
		[k]: v
	}));
	const save = useMutation({
		mutationFn: async () => {
			const payload = {
				currency: f.currency || "PKR",
				currency_symbol: f.currency_symbol || "Rs",
				cod_enabled: !!f.cod_enabled,
				cod_charge: Number(f.cod_charge || 0),
				delivery_charge: Number(f.delivery_charge || 0),
				free_delivery_above: Number(f.free_delivery_above || 0),
				easypaisa_enabled: !!f.easypaisa_enabled,
				easypaisa_number: f.easypaisa_number || null,
				easypaisa_account_name: f.easypaisa_account_name || null,
				jazzcash_enabled: !!f.jazzcash_enabled,
				jazzcash_number: f.jazzcash_number || null,
				jazzcash_account_name: f.jazzcash_account_name || null,
				bank_enabled: !!f.bank_enabled,
				bank_name: f.bank_name || null,
				bank_account_title: f.bank_account_title || null,
				bank_account_number: f.bank_account_number || null,
				bank_iban: f.bank_iban || null,
				warranty_months: Number(f.warranty_months || 12),
				warranty_note: f.warranty_note || "",
				payment_note: f.payment_note || null
			};
			if (f.id) {
				const { error } = await supabase.from("payment_settings").update(payload).eq("id", f.id);
				if (error) throw error;
			} else {
				const { error } = await supabase.from("payment_settings").insert(payload);
				if (error) throw error;
			}
		},
		onSuccess: () => {
			toast.success("Payment settings saved. Changes are live on the storefront.");
			qc.invalidateQueries({ queryKey: ["admin", "payment_settings"] });
			qc.invalidateQueries({ queryKey: ["payment_settings"] });
		},
		onError: (e) => toast.error(e?.message ?? "Could not save.")
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-muted-foreground",
		children: "Loading settings…"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl sm:text-4xl",
				children: "Payments & Delivery"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Turn payment methods on or off, set delivery charges and warranty — every change goes live on the storefront and checkout immediately."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Delivery (Pakistan)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Delivery charge (Rs)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						value: f.delivery_charge ?? "",
						onChange: (e) => set("delivery_charge", e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Free delivery above (Rs)",
					help: "Order total ≥ this amount ships free.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						value: f.free_delivery_above ?? "",
						onChange: (e) => set("free_delivery_above", e.target.value)
					})
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Cash on Delivery (COD)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					checked: !!f.cod_enabled,
					onChange: (v) => set("cod_enabled", v),
					label: "Accept Cash on Delivery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Extra COD charge (Rs)",
					help: "Optional handling fee on COD orders.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						value: f.cod_charge ?? "",
						onChange: (e) => set("cod_charge", e.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Easypaisa",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					checked: !!f.easypaisa_enabled,
					onChange: (v) => set("easypaisa_enabled", v),
					label: "Accept Easypaisa transfers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Easypaisa number",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: f.easypaisa_number ?? "",
						onChange: (e) => set("easypaisa_number", e.target.value),
						placeholder: "03XX-XXXXXXX"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Account title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: f.easypaisa_account_name ?? "",
						onChange: (e) => set("easypaisa_account_name", e.target.value)
					})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "JazzCash",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					checked: !!f.jazzcash_enabled,
					onChange: (v) => set("jazzcash_enabled", v),
					label: "Accept JazzCash transfers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "JazzCash number",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: f.jazzcash_number ?? "",
						onChange: (e) => set("jazzcash_number", e.target.value),
						placeholder: "03XX-XXXXXXX"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Account title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: f.jazzcash_account_name ?? "",
						onChange: (e) => set("jazzcash_account_name", e.target.value)
					})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Bank Transfer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					checked: !!f.bank_enabled,
					onChange: (v) => set("bank_enabled", v),
					label: "Accept Bank transfers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row2, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Bank name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.bank_name ?? "",
							onChange: (e) => set("bank_name", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Account title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.bank_account_title ?? "",
							onChange: (e) => set("bank_account_title", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Account number",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.bank_account_number ?? "",
							onChange: (e) => set("bank_account_number", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "IBAN",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.bank_iban ?? "",
							onChange: (e) => set("bank_iban", e.target.value)
						})
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Warranty & notes",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Warranty (months)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: f.warranty_months ?? 12,
							onChange: (e) => set("warranty_months", e.target.value)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Currency symbol",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.currency_symbol ?? "Rs",
							onChange: (e) => set("currency_symbol", e.target.value)
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Warranty note (shown on product & checkout)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							rows: 2,
							value: f.warranty_note ?? "",
							onChange: (e) => set("warranty_note", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Checkout payment note (shown after order)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							rows: 2,
							value: f.payment_note ?? "",
							onChange: (e) => set("payment_note", e.target.value)
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "lg",
					disabled: save.isPending,
					onClick: () => save.mutate(),
					children: [save.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Save changes"]
				})
			})
		]
	});
}
function Card({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-4 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-serif text-xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-4",
			children
		})]
	});
}
function Row2({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2",
		children
	});
}
function Field({ label, help, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "text-xs uppercase tracking-widest text-muted-foreground",
				children: label
			}),
			children,
			help && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: help
			})
		]
	});
}
function Toggle({ checked, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center justify-between gap-3 rounded-md border border-border/60 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			checked,
			onCheckedChange: onChange
		})]
	});
}
//#endregion
export { PaymentsAdmin as component };
