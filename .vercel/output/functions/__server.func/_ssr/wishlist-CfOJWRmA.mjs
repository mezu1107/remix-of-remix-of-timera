import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { ot as Heart } from "../_libs/lucide-react.mjs";
import { r as useWishlist } from "./shop-BkxySNBa.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { g as productsQuery } from "./catalog-DP9o3dVy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ProductCard } from "./ProductCard-nExjepVf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-CfOJWRmA.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistPage() {
	const ids = useWishlist((s) => s.ids);
	const { data: products = [] } = useQuery(productsQuery);
	const items = products.filter((p) => ids.includes(p.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.3em] text-primary",
				children: "Saved for you"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-5xl",
				children: "Wishlist"
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto h-16 w-16 rounded-full glass flex items-center justify-center mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-6 w-6 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-2xl",
						children: "No timepieces yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Tap the heart on any watch to save it here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							children: "Discover Timepieces"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-x-6 gap-y-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
				children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					index: i
				}, p.id))
			})
		]
	});
}
//#endregion
export { WishlistPage as component };
