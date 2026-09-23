import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as CrudModule } from "./CrudModule-CfOc3LZf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.collections-DV3gjkt9.js
var import_jsx_runtime = require_jsx_runtime();
function CollectionsAdmin() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrudModule, {
		table: "collections",
		title: "Collections",
		description: "Curated collection tiles shown on the homepage.",
		orderBy: { column: "sort_order" },
		invalidate: ["collections"],
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
				key: "name",
				label: "Name"
			},
			{
				key: "tagline",
				label: "Tagline"
			},
			{
				key: "sort_order",
				label: "Order"
			},
			{
				key: "active",
				label: "Active",
				render: (r) => r.active ? "Yes" : "No"
			}
		],
		fields: [
			{
				key: "name",
				label: "Name",
				type: "text",
				required: true
			},
			{
				key: "slug",
				label: "Slug",
				type: "text",
				required: true,
				help: "Lowercase, hyphenated — used in links."
			},
			{
				key: "tagline",
				label: "Tagline",
				type: "text"
			},
			{
				key: "image_url",
				label: "Image URL",
				type: "image"
			},
			{
				key: "sort_order",
				label: "Sort order",
				type: "number"
			},
			{
				key: "active",
				label: "Active",
				type: "switch",
				default: true
			}
		]
	});
}
//#endregion
export { CollectionsAdmin as component };
