//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-Cugoymov.js
var manifest = {
	"1b473e8dfdb081708b99925335bbd15955fa1e9e3b265b2f0b9c19e3b2a973f1": {
		functionName: "aiReviewSummary_createServerFn_handler",
		importer: () => import("./_ssr/ai.functions-BXoJMcqV.mjs")
	},
	"2f292c67e4313167de89d7e1d65c806e93bc8b9ad80daad3d4b9f5c08fa9e1f5": {
		functionName: "claimAdminAccess_createServerFn_handler",
		importer: () => import("./_ssr/admin-access.functions-DPKd5m_n.mjs")
	},
	"ba4dd3726b431dd1fd66492eff7ddecf803167426cd6305175a66040c2b1a8e9": {
		functionName: "aiSearchProducts_createServerFn_handler",
		importer: () => import("./_ssr/ai.functions-BXoJMcqV.mjs")
	},
	"c290f96140938ac6b5c398e613078ef522a7d69493d25a00cea4aacc206f62d7": {
		functionName: "aiWriteProductCopy_createServerFn_handler",
		importer: () => import("./_ssr/ai.functions-BXoJMcqV.mjs")
	},
	"ccafcd381a92fbfe872907e28aa50283412f555659d0e4a64ae6d1e3b04c8965": {
		functionName: "aiExtractProducts_createServerFn_handler",
		importer: () => import("./_ssr/ai.functions-BXoJMcqV.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
