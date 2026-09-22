import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as blogPostsQuery } from "./catalog-DP9o3dVy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-DwPc1NFM.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPage() {
	const { data: posts = [], isLoading } = useQuery(blogPostsQuery);
	const [featured, ...rest] = posts;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.3em] text-primary",
				children: "The Journal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-3 font-serif text-5xl md:text-6xl",
				children: ["Notes from the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic gold-text",
					children: "atelier"
				})]
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 text-muted-foreground",
				children: "Loading stories…"
			}),
			featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/blog",
				className: "group grid gap-8 lg:grid-cols-2 mt-16 mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[4/3] overflow-hidden rounded-2xl bg-card",
					children: featured.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: featured.image,
						alt: featured.title,
						className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] uppercase tracking-widest text-primary",
							children: [
								featured.category,
								" · ",
								featured.date
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-serif text-3xl md:text-4xl group-hover:text-primary transition",
							children: featured.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: featured.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-xs uppercase tracking-widest text-muted-foreground",
							children: ["By ", featured.author]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: rest.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/5] overflow-hidden rounded-lg bg-card",
							children: post.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: post.image,
								alt: post.title,
								className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-[10px] uppercase tracking-widest text-primary",
							children: [
								post.category,
								" · ",
								post.date
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-serif text-xl group-hover:text-primary transition",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: post.excerpt
						})
					]
				}, post.id))
			})
		]
	});
}
//#endregion
export { BlogPage as component };
