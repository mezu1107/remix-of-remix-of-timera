import { c as createServerFn } from "./createServerFn-BFFE07zL.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-C1wNywtg.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DPXO6OGB.mjs";
import { At as stringType, Ot as numberType, jt as unionType, kt as objectType } from "../_libs/@ai-sdk/gateway+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai.functions-8hRZ8_PW.js
var aiSearchProducts = createServerFn({ method: "POST" }).validator((input) => objectType({ query: stringType().min(2).max(300) }).parse(input)).handler(createSsrRpc("ba4dd3726b431dd1fd66492eff7ddecf803167426cd6305175a66040c2b1a8e9"));
var aiReviewSummary = createServerFn({ method: "POST" }).validator((input) => objectType({ productId: stringType().uuid() }).parse(input)).handler(createSsrRpc("1b473e8dfdb081708b99925335bbd15955fa1e9e3b265b2f0b9c19e3b2a973f1"));
var CopyInput = objectType({
	name: stringType().max(200).optional(),
	brief: stringType().max(1e3).optional(),
	brand: stringType().max(120).optional(),
	collection: stringType().max(120).optional(),
	category: stringType().max(120).optional(),
	movement: stringType().max(120).optional(),
	case_material: stringType().max(120).optional(),
	strap: stringType().max(120).optional(),
	water_resistance: stringType().max(120).optional(),
	price: unionType([stringType(), numberType()]).optional()
});
var aiWriteProductCopy = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => CopyInput.parse(input)).handler(createSsrRpc("c290f96140938ac6b5c398e613078ef522a7d69493d25a00cea4aacc206f62d7"));
var aiExtractProducts = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({
	text: stringType().min(20).max(12e4),
	source: stringType().max(200).optional()
}).parse(input)).handler(createSsrRpc("ccafcd381a92fbfe872907e28aa50283412f555659d0e4a64ae6d1e3b04c8965"));
//#endregion
export { aiWriteProductCopy as i, aiReviewSummary as n, aiSearchProducts as r, aiExtractProducts as t };
