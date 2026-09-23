import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as CrudModule } from "./CrudModule-CfOc3LZf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.blog-DT5ANvaw.js
var import_jsx_runtime = require_jsx_runtime();
function BlogAdmin() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrudModule, {
		table: "blog_posts",
		title: "Journal Posts",
		description: "Stories and guides published on the public journal.",
		orderBy: {
			column: "published_at",
			ascending: false
		},
		invalidate: ["blog_posts"],
		columns: [
			{
				key: "image_url",
				label: "Image",
				render: (r) => r.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: r.image_url,
					alt: "",
					className: "h-12 w-20 rounded object-cover"
				}) : "—"
			},
			{
				key: "title",
				label: "Title"
			},
			{
				key: "category",
				label: "Category"
			},
			{
				key: "author",
				label: "Author"
			},
			{
				key: "published",
				label: "Published",
				render: (r) => r.published ? "Yes" : "Draft"
			}
		],
		fields: [
			{
				key: "title",
				label: "Title",
				type: "text",
				required: true
			},
			{
				key: "slug",
				label: "Slug",
				type: "text",
				required: true
			},
			{
				key: "category",
				label: "Category",
				type: "text",
				default: "Craft"
			},
			{
				key: "author",
				label: "Author",
				type: "text",
				default: "Timera Atelier"
			},
			{
				key: "excerpt",
				label: "Excerpt",
				type: "textarea"
			},
			{
				key: "content",
				label: "Content",
				type: "textarea"
			},
			{
				key: "image_url",
				label: "Cover image URL",
				type: "image"
			},
			{
				key: "published",
				label: "Published",
				type: "switch",
				default: true
			}
		]
	});
}
//#endregion
export { BlogAdmin as component };
