import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as CrudModule } from "./CrudModule-DUGVkOfc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.reviews-CpNScekg.js
var import_jsx_runtime = require_jsx_runtime();
function ReviewsAdmin() {
	const { data: products = [] } = useQuery({
		queryKey: ["admin", "product-options"],
		queryFn: async () => {
			const { data, error } = await supabase.from("products").select("id, name").order("name");
			if (error) throw error;
			return data ?? [];
		}
	});
	const productMap = new Map(products.map((p) => [p.id, p.name]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrudModule, {
		table: "reviews",
		title: "Reviews",
		description: "Customer reviews. Approve one to publish it on the product page.",
		orderBy: {
			column: "created_at",
			ascending: false
		},
		invalidate: ["reviews", "products"],
		columns: [
			{
				key: "customer_name",
				label: "Customer",
				primary: true
			},
			{
				key: "product_id",
				label: "Product",
				render: (r) => productMap.get(r.product_id) ?? "—"
			},
			{
				key: "rating",
				label: "Rating",
				render: (r) => `${r.rating}/5`
			},
			{
				key: "title",
				label: "Title"
			},
			{
				key: "approved",
				label: "Approved",
				render: (r) => r.approved ? "Yes" : "Pending"
			}
		],
		fields: [
			{
				key: "product_id",
				label: "Product",
				type: "select",
				options: products.map((p) => ({
					label: p.name,
					value: p.id
				}))
			},
			{
				key: "customer_name",
				label: "Customer name",
				type: "text",
				required: true
			},
			{
				key: "rating",
				label: "Rating (1-5)",
				type: "number",
				default: 5
			},
			{
				key: "title",
				label: "Title",
				type: "text"
			},
			{
				key: "customer_role",
				label: "Customer role / city",
				type: "text"
			},
			{
				key: "body",
				label: "Review",
				type: "textarea"
			},
			{
				key: "approved",
				label: "Approved (visible publicly)",
				type: "switch"
			},
			{
				key: "featured",
				label: "Show as testimonial on home page",
				type: "switch"
			}
		]
	});
}
//#endregion
export { ReviewsAdmin as component };
