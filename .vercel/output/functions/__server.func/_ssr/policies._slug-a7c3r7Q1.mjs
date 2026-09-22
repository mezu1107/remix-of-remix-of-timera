import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Route } from "./policies._slug-BQ-PsKvj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/policies._slug-a7c3r7Q1.js
var import_jsx_runtime = require_jsx_runtime();
function PolicyPage() {
	const { policy } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe max-w-3xl py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] uppercase tracking-[0.3em] text-primary",
				children: "Legal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-4xl sm:text-5xl",
				children: policy.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: ["Last updated: ", policy.updated]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-10",
				children: policy.sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: s.h
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed text-muted-foreground",
					children: s.p
				})] }, s.h))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 rounded-2xl border border-border/50 bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-sm",
					children: "Questions about our policies?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Contact us on WhatsApp or via the Contact page and our team will respond within 24 hours."
				})]
			})
		]
	});
}
//#endregion
export { PolicyPage as component };
