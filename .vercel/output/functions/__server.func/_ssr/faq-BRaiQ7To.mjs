import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { c as faqsQuery } from "./catalog-CjOF-ztI.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-MqQzSS40.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-BRaiQ7To.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	const { data: faqs = [], isLoading } = useQuery(faqsQuery);
	const groups = faqs.reduce((acc, f) => {
		const key = f.category?.trim() || "General";
		(acc[key] ??= []).push(f);
		return acc;
	}, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe max-w-3xl py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.3em] text-primary",
				children: "Help Centre"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-5xl md:text-6xl",
				children: "Frequently asked"
			}),
			faqs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: faqs.map((f) => ({
						"@type": "Question",
						name: f.question,
						acceptedAnswer: {
							"@type": "Answer",
							text: f.answer
						}
					}))
				}) }
			}),
			isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 text-muted-foreground",
				children: "Loading…"
			}) : faqs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 text-muted-foreground",
				children: "No questions published yet."
			}) : Object.entries(groups).map(([category, list]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
					children: category
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-4",
					children: list.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: f.id,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left font-serif text-lg",
							children: f.question
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "leading-relaxed text-muted-foreground whitespace-pre-line",
							children: f.answer
						})]
					}, f.id))
				})]
			}, category))
		]
	});
}
//#endregion
export { FaqPage as component };
