import { s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { G as MessageCircle, I as Phone, J as MapPin, Y as Mail, n as Youtube, nt as Instagram, pt as Facebook, xt as Clock } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
import { t as Label } from "./label-DWh09J_8.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Textarea } from "./textarea-CSVRhi8K.mjs";
import { t as siteSettingsQuery } from "./site-settings-CXAVkk7j.mjs";
import { o as trackWhatsappClick, t as trackContact } from "./events-YIQlOK8l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Dl68eIQA.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { data: settings } = useQuery(siteSettingsQuery);
	const whatsapp = settings?.whatsappNumber?.replace(/[^0-9]/g, "") ?? "";
	const details = [
		settings?.contactEmail && {
			icon: Mail,
			label: "Email",
			value: settings.contactEmail,
			href: `mailto:${settings.contactEmail}`
		},
		settings?.contactPhone && {
			icon: Phone,
			label: "Phone",
			value: settings.contactPhone,
			href: `tel:${settings.contactPhone.replace(/\s/g, "")}`
		},
		whatsapp && {
			icon: MessageCircle,
			label: "WhatsApp",
			value: `+${whatsapp}`,
			href: `https://wa.me/${whatsapp}`
		},
		settings?.address && {
			icon: MapPin,
			label: "Address",
			value: settings.address,
			href: void 0
		},
		settings?.contactHours && {
			icon: Clock,
			label: "Hours",
			value: settings.contactHours,
			href: void 0
		}
	].filter(Boolean);
	const socials = [
		settings?.instagramUrl && {
			icon: Instagram,
			href: settings.instagramUrl,
			label: "Instagram"
		},
		settings?.facebookUrl && {
			icon: Facebook,
			href: settings.facebookUrl,
			label: "Facebook"
		},
		settings?.youtubeUrl && {
			icon: Youtube,
			href: settings.youtubeUrl,
			label: "YouTube"
		}
	].filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.3em] text-primary",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-3 font-serif text-5xl md:text-6xl",
					children: ["Talk to a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic gold-text",
						children: "real person."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: settings?.brandTagline ?? "We reply quickly on WhatsApp, phone and email."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 grid gap-12 lg:grid-cols-[1fr_1.4fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [
					details.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-muted-foreground" }),
					details.map((i) => {
						const Body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, { className: "h-5 w-5 text-primary" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: i.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-serif text-lg",
								children: i.value
							})] })]
						});
						return i.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: i.href,
							target: i.href.startsWith("http") ? "_blank" : void 0,
							rel: "noreferrer",
							onClick: () => i.label === "WhatsApp" ? trackWhatsappClick("contact-page") : trackContact(i.label.toLowerCase()),
							className: "block transition-opacity hover:opacity-80",
							children: Body
						}, i.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: Body }, i.label);
					}),
					socials.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-3 pt-2",
						children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": s.label,
							className: "glass flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
						}, s.label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					const form = e.currentTarget;
					const message = [
						`Name: ${form.elements.namedItem("fn")?.value} ${form.elements.namedItem("ln")?.value}`,
						`Email: ${form.elements.namedItem("em")?.value}`,
						`Subject: ${form.elements.namedItem("sub")?.value}`,
						form.elements.namedItem("msg")?.value
					].join("\n");
					trackContact("form");
					if (whatsapp) {
						window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
						toast.success("Opening WhatsApp with your message.");
					} else if (settings?.contactEmail) window.location.href = `mailto:${settings.contactEmail}?subject=${encodeURIComponent(form.elements.namedItem("sub")?.value || "Website enquiry")}&body=${encodeURIComponent(message)}`;
					else toast.error("No contact channel is configured yet.");
					form.reset();
				},
				className: "glass space-y-5 rounded-2xl p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "First name",
							id: "fn",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Last name",
							id: "ln",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						id: "em",
						type: "email",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Subject",
						id: "sub"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "msg",
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "msg",
						name: "msg",
						rows: 6,
						className: "mt-1.5",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						className: "h-12 w-full",
						children: "Send message"
					})
				]
			})]
		})]
	});
}
function Field(props) {
	const { label, id, ...rest } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		htmlFor: id,
		className: "text-xs uppercase tracking-widest text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		id,
		name: id,
		className: "mt-1.5 h-11",
		...rest
	})] });
}
//#endregion
export { ContactPage as component };
