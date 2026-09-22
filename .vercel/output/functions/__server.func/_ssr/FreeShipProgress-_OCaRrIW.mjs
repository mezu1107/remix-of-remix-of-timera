import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { m as Truck, z as PartyPopper } from "../_libs/lucide-react.mjs";
import { n as formatPrice } from "./utils-CyfkpwkR.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { m as paymentSettingsQuery } from "./catalog-DP9o3dVy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FreeShipProgress-_OCaRrIW.js
var import_jsx_runtime = require_jsx_runtime();
/**
* FREE-SHIPPING PROGRESS — the single strongest AOV lever.
* Threshold always comes from admin payment settings, never hardcoded.
*/
function FreeShipProgress({ subtotal, className = "" }) {
	const { data: settings } = useQuery(paymentSettingsQuery);
	const threshold = Number(settings?.freeDeliveryAbove ?? 5e3);
	if (!threshold || subtotal <= 0) return null;
	const remaining = Math.max(0, threshold - subtotal);
	const pct = Math.min(100, subtotal / threshold * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl border border-border/60 bg-background/60 p-3 backdrop-blur-xl ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "flex items-center gap-2 text-xs text-muted-foreground",
			children: remaining > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"Add ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-medium text-primary",
					children: formatPrice(remaining)
				}),
				" more for free delivery"
			] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyPopper, { className: "h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-foreground",
				children: "You've unlocked free delivery."
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 h-1.5 overflow-hidden rounded-full bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full transition-all duration-700",
				style: {
					width: `${pct}%`,
					background: "var(--grad-gold)"
				}
			})
		})]
	});
}
//#endregion
export { FreeShipProgress as t };
