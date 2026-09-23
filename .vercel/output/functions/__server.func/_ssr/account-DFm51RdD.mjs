import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { A as Settings, B as Package, J as MapPin, Q as LoaderCircle, X as LogOut, d as User, ot as Heart } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { r as useWishlist } from "./shop-BkxySNBa.mjs";
import { n as formatPrice, t as cn } from "./utils-CyfkpwkR.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { a as useQueryClient, r as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { g as productsQuery } from "./catalog-CjOF-ztI.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
import { t as Label } from "./label-DWh09J_8.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-DFm51RdD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	{
		id: "dashboard",
		label: "Dashboard",
		icon: User
	},
	{
		id: "orders",
		label: "Orders",
		icon: Package
	},
	{
		id: "wishlist",
		label: "Wishlist",
		icon: Heart
	},
	{
		id: "addresses",
		label: "Addresses",
		icon: MapPin
	},
	{
		id: "settings",
		label: "Settings",
		icon: Settings
	}
];
function AccountPage() {
	const navigate = useNavigate();
	const qc = useQueryClient();
	const [session, setSession] = (0, import_react.useState)(void 0);
	const [active, setActive] = (0, import_react.useState)("dashboard");
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => setSession(data.session));
		const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
		return () => sub.subscription.unsubscribe();
	}, []);
	(0, import_react.useEffect)(() => {
		if (session === null) navigate({ to: "/auth" });
	}, [session, navigate]);
	const userId = session?.user?.id;
	const { data: profile } = useQuery({
		queryKey: ["profile", userId],
		enabled: !!userId,
		queryFn: async () => {
			const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).maybeSingle();
			if (error) throw error;
			return data ?? null;
		}
	});
	const { data: orders = [], isLoading: ordersLoading } = useQuery({
		queryKey: ["my-orders", userId],
		enabled: !!userId,
		queryFn: async () => {
			const { data, error } = await supabase.from("orders").select("*").eq("user_id", userId).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const wishIds = useWishlist((s) => s.ids);
	const { data: products = [] } = useQuery(productsQuery);
	const wishItems = products.filter((p) => wishIds.includes(p.id));
	const [form, setForm] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		if (profile) setForm(profile);
		else if (session?.user) setForm({
			full_name: session.user.user_metadata?.full_name ?? "",
			email: session.user.email ?? ""
		});
	}, [profile, session]);
	const saveProfile = useMutation({
		mutationFn: async () => {
			const { error } = await supabase.from("profiles").upsert({
				id: userId,
				full_name: form.full_name || null,
				email: form.email || session?.user?.email || null,
				phone: form.phone || null,
				address: form.address || null,
				city: form.city || null,
				postal_code: form.postal_code || null
			});
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Details saved");
			qc.invalidateQueries({ queryKey: ["profile", userId] });
		},
		onError: (e) => toast.error(e?.message ?? "Could not save your details")
	});
	const signOut = async () => {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/",
			replace: true
		});
	};
	if (session === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe py-24 text-center text-muted-foreground",
		children: "Loading your account…"
	});
	if (!session) return null;
	const firstName = (form.full_name || session.user.email || "there").split(" ")[0];
	const totalSpent = orders.reduce((a, o) => a + Number(o.total || 0), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.3em] text-primary",
				children: "My Account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "truncate font-serif text-3xl sm:text-4xl lg:text-5xl",
					children: ["Hello, ", firstName]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					className: "shrink-0",
					onClick: signOut,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-4 w-4" }), " Sign out"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 truncate text-sm text-muted-foreground",
				children: session.user.email
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:mt-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "-mx-4 overflow-x-auto px-4 lg:mx-0 lg:overflow-visible lg:px-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 lg:flex-col lg:gap-1",
						children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActive(t.id),
							className: cn("flex shrink-0 items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm transition lg:w-full lg:justify-start lg:border-transparent lg:px-4 lg:py-3", active === t.id ? "bg-primary/10 text-primary border-primary/30" : "text-muted-foreground hover:bg-card hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "whitespace-nowrap",
								children: t.label
							})]
						}, t.id))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						active === "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Orders",
									value: String(orders.length)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Total spent",
									value: formatPrice(totalSpent)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Wishlist",
									value: String(wishItems.length)
								})
							]
						}),
						active === "orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								ordersLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Loading orders…"
								}),
								!ordersLoading && orders.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
									text: "You haven't placed an order yet.",
									cta: {
										to: "/shop",
										label: "Start shopping"
									}
								}),
								orders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-card p-4 sm:p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate font-medium",
												children: o.order_number
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-xs text-muted-foreground",
												children: [
													new Date(o.created_at).toLocaleDateString(),
													" · ",
													o.items?.length ?? 0,
													" item(s)"
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 rounded-full border border-primary/30 px-3 py-1 text-[11px] uppercase tracking-widest text-primary",
											children: o.status
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-serif text-lg",
											children: formatPrice(Number(o.total || 0))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "sm",
											variant: "outline",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/track",
												children: "Track"
											})
										})]
									})]
								}, o.id))
							]
						}),
						active === "wishlist" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
							children: [wishItems.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
								text: "Your wishlist is empty.",
								cta: {
									to: "/shop",
									label: "Browse watches"
								}
							}), wishItems.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$slug",
								params: { slug: p.slug },
								className: "group rounded-xl border border-border bg-card p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: p.name,
										className: "aspect-square w-full rounded-lg object-cover",
										loading: "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 truncate text-sm",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-primary",
										children: formatPrice(p.salePrice ?? p.price)
									})
								]
							}, p.id))]
						}),
						(active === "addresses" || active === "settings") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl space-y-4 rounded-xl border border-border bg-card p-4 sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										label: "Full name",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: form.full_name ?? "",
											onChange: (e) => setForm({
												...form,
												full_name: e.target.value
											})
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										label: "Phone",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: form.phone ?? "",
											onChange: (e) => setForm({
												...form,
												phone: e.target.value
											})
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "Address",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: form.address ?? "",
										onChange: (e) => setForm({
											...form,
											address: e.target.value
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										label: "City",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: form.city ?? "",
											onChange: (e) => setForm({
												...form,
												city: e.target.value
											})
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										label: "Postal code",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: form.postal_code ?? "",
											onChange: (e) => setForm({
												...form,
												postal_code: e.target.value
											})
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => saveProfile.mutate(),
									disabled: saveProfile.isPending,
									children: [saveProfile.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Save details"]
								})
							]
						})
					]
				})]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] uppercase tracking-[0.25em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 truncate font-serif text-2xl",
			children: value
		})]
	});
}
function FormField({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		}), children]
	});
}
function Empty({ text, cta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-dashed border-border p-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: text
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: cta.to,
				children: cta.label
			})
		})]
	});
}
//#endregion
export { AccountPage as component };
