import { o as __toESM } from "../_runtime.mjs";
import { t as atelier_default } from "./atelier-Cht9IOP3.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
import { t as Label } from "./label-DWh09J_8.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-CAum3jY_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		redirect_uri: opts?.redirect_uri,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
function AuthPage() {
	const [mode, setMode] = (0, import_react.useState)("login");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) navigate({ to: "/account" });
		});
	}, [navigate]);
	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			if (mode === "login") {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				toast.success("Signed in");
				navigate({ to: "/account" });
			} else if (mode === "register") {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						emailRedirectTo: `${window.location.origin}/account`,
						data: { full_name: name }
					}
				});
				if (error) throw error;
				toast.success("Account created — check your email to confirm.");
			} else {
				const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/auth` });
				if (error) throw error;
				toast.success("Reset link sent");
			}
		} catch (err) {
			toast.error(err?.message ?? "Something went wrong");
		} finally {
			setLoading(false);
		}
	};
	const google = async () => {
		setLoading(true);
		const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
		if (result.error) {
			setLoading(false);
			toast.error("Google sign-in failed");
			return;
		}
		if (result.redirected) return;
		navigate({ to: "/account" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-[calc(100vh-9rem)] lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden lg:block relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: atelier_default,
					alt: "The Timera atelier",
					className: "h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-foreground/40 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-16 left-16 max-w-md text-background",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.3em]",
							children: "Le Cercle"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-serif text-4xl",
							children: "Discretion, delivered."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-background/80",
							children: "Members receive private previews, atelier stories, and priority access to limited editions."
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "font-serif text-2xl gold-text",
						children: "TIMERA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-8 font-serif text-4xl",
						children: [
							mode === "login" && "Welcome back",
							mode === "register" && "Create your account",
							mode === "forgot" && "Reset your password"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: [
							mode === "login" && "Sign in to access your orders, wishlist, and rewards.",
							mode === "register" && "Join Le Cercle and unlock member-only privileges.",
							mode === "forgot" && "We'll send a secure link to your email."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "mt-8 w-full h-12",
						onClick: google,
						disabled: loading,
						children: "Continue with Google"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-6 flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
							" or ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "space-y-5",
						children: [
							mode === "register" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "Full name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								value: name,
								onChange: (e) => setName(e.target.value),
								className: "mt-1.5 h-12"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								className: "mt-1.5 h-12",
								placeholder: "you@example.com"
							})] }),
							mode !== "forgot" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								type: "password",
								minLength: 6,
								value: password,
								onChange: (e) => setPassword(e.target.value),
								className: "mt-1.5 h-12"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								size: "lg",
								className: "w-full h-12",
								disabled: loading,
								children: [
									mode === "login" && (loading ? "Signing in…" : "Sign in"),
									mode === "register" && (loading ? "Creating…" : "Create account"),
									mode === "forgot" && (loading ? "Sending…" : "Send reset link")
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-2 text-sm text-muted-foreground",
						children: [mode === "login" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"New here?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMode("register"),
								className: "text-primary hover:underline",
								children: "Create an account"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMode("forgot"),
							className: "text-primary hover:underline",
							children: "Forgot your password?"
						}) })] }), mode !== "login" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMode("login"),
							className: "text-primary hover:underline",
							children: "Back to sign in"
						}) })]
					})
				]
			})
		})]
	});
}
//#endregion
export { AuthPage as component };
