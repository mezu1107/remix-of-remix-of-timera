import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { $ as LayoutDashboard, A as Settings, B as Package, K as Menu, O as ShieldCheck, Pt as BadgePercent, V as Newspaper, W as MessageSquareQuote, X as LogOut, _ as Ticket, a as Watch, et as Layers, f as UserSearch, k as ShieldAlert, o as Wallet, q as Megaphone, rt as Images, wt as CircleQuestionMark, y as Tags } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { t as cn } from "./utils-CyfkpwkR.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { _ as useNavigate, f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn } from "./createServerFn-BFFE07zL.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-C1wNywtg.mjs";
import { a as SheetTrigger, n as SheetContent, t as Sheet } from "./sheet-D6Qp4gD0.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DPXO6OGB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BFnGca8E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
var claimAdminAccess = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("2f292c67e4313167de89d7e1d65c806e93bc8b9ad80daad3d4b9f5c08fa9e1f5"));
var links = [
	{
		to: "/admin",
		label: "Overview",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/admin/hero",
		label: "Hero Slides",
		icon: Images
	},
	{
		to: "/admin/collections",
		label: "Collections",
		icon: Layers
	},
	{
		to: "/admin/categories",
		label: "Categories",
		icon: Tags
	},
	{
		to: "/admin/products",
		label: "Products",
		icon: Watch
	},
	{
		to: "/admin/deals",
		label: "Deals",
		icon: BadgePercent
	},
	{
		to: "/admin/coupons",
		label: "Coupons",
		icon: Ticket
	},
	{
		to: "/admin/popups",
		label: "Popups",
		icon: Megaphone
	},
	{
		to: "/admin/reviews",
		label: "Reviews",
		icon: MessageSquareQuote
	},
	{
		to: "/admin/blog",
		label: "Journal",
		icon: Newspaper
	},
	{
		to: "/admin/faqs",
		label: "FAQs",
		icon: CircleQuestionMark
	},
	{
		to: "/admin/orders",
		label: "Orders",
		icon: Package
	},
	{
		to: "/admin/leads",
		label: "Shopper Leads",
		icon: UserSearch
	},
	{
		to: "/admin/payments",
		label: "Payments & Delivery",
		icon: Wallet
	},
	{
		to: "/admin/trust",
		label: "Trust Centre",
		icon: ShieldCheck
	},
	{
		to: "/admin/settings",
		label: "Site Settings",
		icon: Settings
	}
];
function AdminLayout() {
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [state, setState] = (0, import_react.useState)("loading");
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		const check = async () => {
			const { data } = await supabase.auth.getSession();
			if (!data.session) {
				if (!cancelled) setState("anon");
				return;
			}
			try {
				const { isAdmin } = await claimAdminAccess({});
				if (cancelled) return;
				setState(isAdmin ? "ok" : "denied");
			} catch {
				if (!cancelled) setState("denied");
			}
		};
		check();
		const { data: sub } = supabase.auth.onAuthStateChange(() => check());
		return () => {
			cancelled = true;
			sub.subscription.unsubscribe();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		setMenuOpen(false);
	}, [pathname]);
	if (state === "loading") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe py-32 text-center text-muted-foreground",
		children: "Checking your access…"
	});
	if (state !== "ok") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe py-20 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-md rounded-xl border border-border bg-card p-6 text-center sm:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mx-auto h-8 w-8 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 font-serif text-2xl sm:text-3xl",
					children: state === "anon" ? "Sign in to continue" : "Admin access required"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: state === "anon" ? "The store dashboard is private. Sign in with your owner account to manage the storefront." : "This account doesn't have admin rights. Ask the store owner to grant you access."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: state === "anon" ? "/auth" : "/",
						children: state === "anon" ? "Sign in" : "Back to store"
					})
				})
			]
		})
	});
	const NavList = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "space-y-1",
		children: links.map((l) => {
			const active = l.exact ? pathname === l.to : pathname.startsWith(l.to);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: l.to,
				onClick: () => setMenuOpen(false),
				className: cn("flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition", active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: l.label
				})]
			}, l.to);
		})
	});
	const signOut = async () => {
		await supabase.auth.signOut();
		navigate({ to: "/" });
	};
	const current = links.find((l) => l.exact ? pathname === l.to : pathname.startsWith(l.to));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-6 lg:py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 lg:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
					open: menuOpen,
					onOpenChange: setMenuOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Open admin menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						side: "left",
						className: "w-[85vw] max-w-xs overflow-y-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-[11px] uppercase tracking-[0.3em] text-primary",
								children: "Timera"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-serif text-2xl",
								children: "Store Admin"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: NavList
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "mt-8 w-full",
								onClick: signOut,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4 mr-2" }), " Sign out"]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "min-w-0 truncate text-sm font-medium",
					children: current?.label ?? "Store Admin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: signOut,
					"aria-label": "Sign out",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden lg:sticky lg:top-28 lg:block lg:self-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.3em] text-primary",
						children: "Timera"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-serif text-2xl",
						children: "Store Admin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: NavList
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "mt-8 w-full",
						onClick: signOut,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4 mr-2" }), " Sign out"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})]
		})]
	});
}
//#endregion
export { AdminLayout as component };
