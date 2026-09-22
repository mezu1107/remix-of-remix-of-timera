import { c as createServerFn } from "./createServerFn-BFFE07zL.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-C1wNywtg.mjs";
import { t as createServerRpc } from "./createServerRpc-MBa5GZ-L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-access.functions-DPKd5m_n.js
/**
* Checks whether the signed-in user has the admin role.
*
* Uses ONLY the authenticated user's own Supabase session (context.supabase).
* No SUPABASE_SERVICE_ROLE_KEY required.
*
* The RLS migration (20260906000000_orders_rls_no_service_role.sql) adds:
*   CREATE POLICY "user_roles_select_own" ON public.user_roles
*     FOR SELECT TO authenticated USING (user_id = auth.uid());
*
* This means an authenticated user can read their own role row, which is
* all we need here. The policy ensures they can never read other users' roles.
*
* Bootstrap:
*   If no admin row exists yet (fresh install), the first authenticated user
*   automatically becomes admin. The RLS migration also adds:
*     CREATE POLICY "user_roles_insert_own" ON public.user_roles
*       FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
*/
var claimAdminAccess_createServerFn_handler = createServerRpc({
	id: "2f292c67e4313167de89d7e1d65c806e93bc8b9ad80daad3d4b9f5c08fa9e1f5",
	name: "claimAdminAccess",
	filename: "src/lib/admin-access.functions.ts"
}, (opts) => claimAdminAccess.__executeServer(opts));
var claimAdminAccess = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(claimAdminAccess_createServerFn_handler, async ({ context }) => {
	const userId = context.userId;
	if (!userId) return { isAdmin: false };
	const db = context.supabase;
	const { data: mine, error: mineError } = await db.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin").maybeSingle();
	if (mineError) {
		console.error("[admin-access] role check error:", mineError.message);
		throw new Error("Unable to verify access. Please try again.");
	}
	if (mine) return { isAdmin: true };
	const { error: insertError } = await db.from("user_roles").insert({
		user_id: userId,
		role: "admin"
	});
	if (!insertError) return { isAdmin: true };
	if (insertError.code !== "23505") console.warn("[admin-access] bootstrap insert failed:", insertError.message);
	return { isAdmin: false };
});
//#endregion
export { claimAdminAccess_createServerFn_handler };
