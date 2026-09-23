import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as CrudModule } from "./CrudModule-CfOc3LZf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.hero-DDU7aOBY.js
var import_jsx_runtime = require_jsx_runtime();
function HeroAdmin() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrudModule, {
		table: "hero_slides",
		title: "Hero Slides",
		description: "Homepage full-screen slider. Upload a background image or video directly from your phone or PC — no URL needed.",
		orderBy: { column: "sort_order" },
		invalidate: ["hero_slides"],
		columns: [
			{
				key: "image_url",
				label: "Media",
				render: (r) => r.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: r.image_url,
					alt: "",
					className: "h-12 w-20 rounded object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "No image"
				})
			},
			{
				key: "title",
				label: "Title"
			},
			{
				key: "eyebrow",
				label: "Eyebrow"
			},
			{
				key: "sort_order",
				label: "Order"
			},
			{
				key: "active",
				label: "Active",
				render: (r) => r.active ? "✓" : "—"
			}
		],
		fields: [
			{
				section: "Media",
				key: "image_url",
				label: "Background image",
				type: "image",
				help: "Drag & drop or tap to upload from your phone or PC. Recommended: 1920×1080 JPG."
			},
			{
				section: "Media",
				key: "video_url",
				label: "Background video (optional)",
				type: "video",
				help: "Upload an MP4 video. Will autoplay muted on loop. If set, video plays instead of the image."
			},
			{
				section: "Copy",
				key: "eyebrow",
				label: "Eyebrow (small text above title)",
				type: "text"
			},
			{
				section: "Copy",
				key: "title",
				label: "Heading",
				type: "text",
				required: true
			},
			{
				section: "Copy",
				key: "title_accent",
				label: "Accent words (shown italic in gold)",
				type: "text"
			},
			{
				section: "Copy",
				key: "description",
				label: "Subheading",
				type: "textarea"
			},
			{
				section: "Copy",
				key: "cta_label",
				label: "Button label",
				type: "text",
				default: "Shop Now"
			},
			{
				section: "Copy",
				key: "cta_href",
				label: "Button link",
				type: "text",
				default: "/shop"
			},
			{
				section: "Settings",
				key: "sort_order",
				label: "Sort order (lower = first)",
				type: "number"
			},
			{
				section: "Settings",
				key: "active",
				label: "Show this slide",
				type: "switch",
				default: true
			}
		]
	});
}
//#endregion
export { HeroAdmin as component };
