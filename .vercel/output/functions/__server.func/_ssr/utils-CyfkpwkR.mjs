import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-CyfkpwkR.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Format a price. Defaults to PKR (Pakistani Rupee) — the store operates from Pakistan. */
function formatPrice(value, currency = "PKR") {
	if (currency === "PKR") return `Rs ${new Intl.NumberFormat("en-PK", { maximumFractionDigits: 0 }).format(Math.round(value || 0))}`;
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		maximumFractionDigits: 0
	}).format(value);
}
//#endregion
export { formatPrice as n, cn as t };
