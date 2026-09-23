import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as CrudModule } from "./CrudModule-CfOc3LZf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.coupons-DUWsslJG.js
var import_jsx_runtime = require_jsx_runtime();
function CouponsAdmin() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrudModule, {
		table: "coupons",
		title: "Coupons",
		description: "Discount codes customers can apply at checkout.",
		orderBy: {
			column: "created_at",
			ascending: false
		},
		invalidate: ["coupons"],
		columns: [
			{
				key: "code",
				label: "Code",
				primary: true
			},
			{
				key: "discount_type",
				label: "Type"
			},
			{
				key: "discount_value",
				label: "Value"
			},
			{
				key: "min_order",
				label: "Min order"
			},
			{
				key: "used_count",
				label: "Used"
			},
			{
				key: "active",
				label: "Active",
				render: (r) => r.active ? "Yes" : "No"
			}
		],
		fields: [
			{
				key: "code",
				label: "Code",
				type: "text",
				required: true,
				help: "Customers type this at checkout."
			},
			{
				key: "description",
				label: "Description",
				type: "text"
			},
			{
				key: "discount_type",
				label: "Discount type",
				type: "select",
				default: "percent",
				options: [{
					label: "Percentage off",
					value: "percent"
				}, {
					label: "Fixed amount off",
					value: "fixed"
				}]
			},
			{
				key: "discount_value",
				label: "Discount value",
				type: "number",
				required: true
			},
			{
				key: "min_order",
				label: "Minimum order",
				type: "number"
			},
			{
				key: "usage_limit",
				label: "Usage limit",
				type: "number"
			},
			{
				key: "expires_at",
				label: "Expires",
				type: "datetime"
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
export { CouponsAdmin as component };
