import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { C as Sparkles, D as Shield, H as Network, Nt as Bug, Z as Lock, ft as FileCheck, g as Timer, i as Workflow, tt as Key, vt as Database, yt as CreditCard } from "../_libs/lucide-react.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as trustSectionsQuery } from "./trust-B_qTg4kt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trust-CVgoid4Y.js
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	shield: Shield,
	lock: Lock,
	key: Key,
	"credit-card": CreditCard,
	database: Database,
	workflow: Workflow,
	timer: Timer,
	network: Network,
	sparkles: Sparkles,
	bug: Bug
};
function TrustPage() {
	const { data: sections = [], isLoading } = useQuery(trustSectionsQuery);
	const hero = sections.find((s) => s.group_name === "hero");
	const commitments = sections.filter((s) => s.group_name === "commitment");
	const blocks = sections.filter((s) => s.group_name === "section");
	const faqs = sections.filter((s) => s.group_name === "faq");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-12 lg:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.3em] text-primary",
						children: "Trust Centre"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-serif text-4xl md:text-6xl",
						children: hero?.heading ?? "Trust & Security"
					}),
					hero?.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground leading-relaxed",
						children: hero.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 inline-flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "This page is app-owner maintained content describing our own practices. It is not an independent audit, certification, or a guarantee against every possible risk."
						})]
					})
				]
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16 text-muted-foreground",
				children: "Loading…"
			}),
			commitments.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: commitments.map((c) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ICONS[c.icon ?? ""] ?? Shield, { className: "h-5 w-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-serif text-xl",
								children: c.heading
							}),
							c.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: c.body
							})
						]
					}, c.id);
				})
			}),
			blocks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-16 grid gap-10 md:grid-cols-2",
				children: blocks.map((b) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border-t border-border pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ICONS[b.icon ?? ""] ?? Shield, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-2xl",
									children: b.heading
								})]
							}),
							b.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: b.body
							}),
							b.bullets.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2",
								children: b.bullets.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							})
						]
					}, b.id);
				})
			}),
			faqs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20 max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl",
					children: "Common questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-8 space-y-8",
					children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-medium",
						children: f.heading
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: f.body
					})] }, f.id))
				})]
			})
		]
	});
}
//#endregion
export { TrustPage as component };
