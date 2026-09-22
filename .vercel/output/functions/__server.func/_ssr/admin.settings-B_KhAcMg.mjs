import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { Q as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { a as useQueryClient, r as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
import { t as Label } from "./label-DWh09J_8.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Textarea } from "./textarea-CSVRhi8K.mjs";
import { t as Switch } from "./switch-CD71K2_M.mjs";
import { r as VideoField, t as ImageField } from "./VideoField-CTua7mdx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.settings-B_KhAcMg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var linesToJson = (v) => v.split("\n").map((s) => s.trim()).filter(Boolean);
var jsonToLines = (v) => Array.isArray(v) ? v.filter((x) => typeof x === "string").join("\n") : "";
var linksToJson = (v) => linesToJson(v).map((line) => {
	const [label, href] = line.split("|");
	return {
		label: (label ?? "").trim(),
		href: (href ?? "/").trim()
	};
});
var jsonToLinkLines = (v) => Array.isArray(v) ? v.map((l) => `${l?.label ?? ""} | ${l?.href ?? "/"}`).join("\n") : "";
var toLocalInput = (iso) => {
	if (!iso) return "";
	const d = new Date(iso);
	const pad = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};
function SettingsAdmin() {
	const qc = useQueryClient();
	const { data, isLoading } = useQuery({
		queryKey: ["admin", "site_settings"],
		queryFn: async () => {
			const { data, error } = await supabase.from("site_settings").select("*").order("created_at", { ascending: true }).limit(1).maybeSingle();
			if (error) throw error;
			return data ?? null;
		}
	});
	const [f, setF] = (0, import_react.useState)({});
	const [marquee, setMarquee] = (0, import_react.useState)("");
	const [featuredIn, setFeaturedIn] = (0, import_react.useState)("");
	const [navLinks, setNavLinks] = (0, import_react.useState)("");
	const [footerLinks, setFooterLinks] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!data) return;
		setF(data);
		setMarquee(jsonToLines(data.marquee_items));
		setFeaturedIn(jsonToLines(data.featured_in));
		setNavLinks(jsonToLinkLines(data.nav_links));
		setFooterLinks(jsonToLinkLines(data.footer_links));
	}, [data]);
	const set = (k, v) => setF((p) => ({
		...p,
		[k]: v
	}));
	const save = useMutation({
		mutationFn: async () => {
			const payload = {
				brand_name: f.brand_name || "TIMERA",
				brand_suffix: f.brand_suffix || null,
				logo_url: f.logo_url || null,
				brand_tagline: f.brand_tagline || null,
				marquee_enabled: !!f.marquee_enabled,
				marquee_items: linesToJson(marquee),
				featured_in: linesToJson(featuredIn),
				warranty_years: Number(f.warranty_years || 1),
				nav_links: linksToJson(navLinks),
				footer_links: linksToJson(footerLinks),
				contact_email: f.contact_email || null,
				contact_phone: f.contact_phone || null,
				whatsapp_number: f.whatsapp_number || null,
				address: f.address || null,
				contact_hours: f.contact_hours || null,
				instagram_url: f.instagram_url || null,
				facebook_url: f.facebook_url || null,
				tiktok_url: f.tiktok_url || null,
				youtube_url: f.youtube_url || null,
				tracking_enabled: !!f.tracking_enabled,
				meta_pixel_id: f.meta_pixel_id || null,
				google_tag_id: f.google_tag_id || null,
				google_ads_purchase_label: f.google_ads_purchase_label || null,
				tiktok_pixel_id: f.tiktok_pixel_id || "DALT99BC77UC60IQCHSG",
				linkedin_partner_id: f.linkedin_partner_id || null,
				snapchat_pixel_id: f.snapchat_pixel_id || null,
				pinterest_tag_id: f.pinterest_tag_id || null,
				bing_uet_tag_id: f.bing_uet_tag_id || null,
				bing_site_verification: f.bing_site_verification || null,
				google_site_verification: f.google_site_verification || null,
				pinterest_site_verification: f.pinterest_site_verification || null,
				feature_enabled: !!f.feature_enabled,
				feature_eyebrow: f.feature_eyebrow || null,
				feature_title: f.feature_title || null,
				feature_title_accent: f.feature_title_accent || null,
				feature_description: f.feature_description || null,
				feature_cta_label: f.feature_cta_label || null,
				feature_cta_href: f.feature_cta_href || "/shop",
				feature_image_url: f.feature_image_url || null,
				feature_ends_at: f.feature_ends_at ? new Date(f.feature_ends_at).toISOString() : null,
				video_wrist_url: f.video_wrist_url || null,
				video_wrist_title: f.video_wrist_title || null,
				video_showcase_url: f.video_showcase_url || null,
				video_showcase_title: f.video_showcase_title || null,
				video_ugc_url: f.video_ugc_url || null,
				video_ugc_title: f.video_ugc_title || null
			};
			if (f.id) {
				const { error } = await supabase.from("site_settings").update(payload).eq("id", f.id);
				if (error) throw error;
			} else {
				const { error } = await supabase.from("site_settings").insert(payload);
				if (error) throw error;
			}
		},
		onSuccess: () => {
			toast.success("Settings saved — live on the storefront.");
			qc.invalidateQueries({ queryKey: ["admin", "site_settings"] });
			qc.invalidateQueries({ queryKey: ["site_settings"] });
		},
		onError: (e) => toast.error(e?.message ?? "Could not save.")
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-muted-foreground",
		children: "Loading settings…"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl sm:text-4xl",
				children: "Site Settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Brand name, logo, navigation links, the scrolling ticker and the limited-edition banner — all controlled here."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Brand",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Brand name",
						help: "Shown in the header, footer and mobile menu.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.brand_name ?? "",
							onChange: (e) => set("brand_name", e.target.value)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Brand sub-label",
						help: "Small text beside the logo, e.g. Timepieces.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.brand_suffix ?? "",
							onChange: (e) => set("brand_suffix", e.target.value)
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Logo image",
						help: "Leave empty to show the brand name as text.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
							value: f.logo_url ?? "",
							onChange: (v) => set("logo_url", v)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Short brand description (footer)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							rows: 3,
							value: f.brand_tagline ?? "",
							onChange: (e) => set("brand_tagline", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Warranty length (years)",
						help: "Used everywhere warranty is mentioned on the site.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: f.warranty_years ?? 1,
							onChange: (e) => set("warranty_years", e.target.value)
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Scrolling ticker (top strip)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						checked: !!f.marquee_enabled,
						onChange: (v) => set("marquee_enabled", v),
						label: "Show the always-running ticker"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Ticker messages",
						help: "One message per line. They run continuously in a single line.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							rows: 7,
							value: marquee,
							onChange: (e) => setMarquee(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Featured-in names",
						help: "One per line. Added to the same single-line ticker.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							rows: 5,
							value: featuredIn,
							onChange: (e) => setFeaturedIn(e.target.value)
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Navigation & footer links",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Header menu links",
					help: "One per line, format: Label | /path. Leave empty for the default menu.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 5,
						value: navLinks,
						onChange: (e) => setNavLinks(e.target.value),
						placeholder: "Shop | /shop\nJournal | /blog"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Extra footer links",
					help: "One per line, format: Label | /path.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 4,
						value: footerLinks,
						onChange: (e) => setFooterLinks(e.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Contact & social",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row2, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.contact_email ?? "",
							onChange: (e) => set("contact_email", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.contact_phone ?? "",
							onChange: (e) => set("contact_phone", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "WhatsApp number",
						help: "International format without +, e.g. 923001234567",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.whatsapp_number ?? "",
							onChange: (e) => set("whatsapp_number", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Address",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.address ?? "",
							onChange: (e) => set("address", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Opening hours",
						help: "Shown on the contact page, e.g. Mon–Sun · 10:00–22:00 PKT",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.contact_hours ?? "",
							onChange: (e) => set("contact_hours", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Instagram URL",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.instagram_url ?? "",
							onChange: (e) => set("instagram_url", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Facebook URL",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.facebook_url ?? "",
							onChange: (e) => set("facebook_url", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "TikTok URL",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.tiktok_url ?? "",
							onChange: (e) => set("tiktok_url", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "YouTube URL",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.youtube_url ?? "",
							onChange: (e) => set("youtube_url", e.target.value)
						})
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Pixels & tracking",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					checked: !!f.tracking_enabled,
					onChange: (v) => set("tracking_enabled", v),
					label: "Enable tracking on the storefront"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row2, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Meta Pixel ID",
						help: "Active Pixel: 4180744378882229",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.meta_pixel_id ?? "4180744378882229",
							onChange: (e) => set("meta_pixel_id", e.target.value),
							placeholder: "4180744378882229"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Google tag / GA4 ID",
						help: "Example: G-XXXXXXXXXX or AW-XXXXXXXXXX",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.google_tag_id ?? "",
							onChange: (e) => set("google_tag_id", e.target.value),
							placeholder: "G- or AW- tag ID"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Google Ads purchase label",
						help: "Optional conversion label for order purchases.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.google_ads_purchase_label ?? "",
							onChange: (e) => set("google_ads_purchase_label", e.target.value),
							placeholder: "Conversion label"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "TikTok Pixel ID",
						help: "Active Pixel: DALT99BC77UC60IQCHSG",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.tiktok_pixel_id ?? "DALT99BC77UC60IQCHSG",
							onChange: (e) => set("tiktok_pixel_id", e.target.value),
							placeholder: "DALT99BC77UC60IQCHSG"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "LinkedIn Partner ID",
						help: "Insight Tag partner id, example: 1234567",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.linkedin_partner_id ?? "",
							onChange: (e) => set("linkedin_partner_id", e.target.value),
							placeholder: "Partner ID"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Snapchat Pixel ID",
						help: "Snap Pixel id from Snapchat Ads Manager.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.snapchat_pixel_id ?? "",
							onChange: (e) => set("snapchat_pixel_id", e.target.value),
							placeholder: "Snap Pixel ID"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Pinterest Tag ID",
						help: "Example: 2612345678901",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.pinterest_tag_id ?? "",
							onChange: (e) => set("pinterest_tag_id", e.target.value),
							placeholder: "Pinterest Tag ID"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Microsoft / Bing UET Tag ID",
						help: "From Microsoft Ads → UET tag, example: 123456789",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.bing_uet_tag_id ?? "",
							onChange: (e) => set("bing_uet_tag_id", e.target.value),
							placeholder: "UET Tag ID"
						})
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Search engine verification",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row2, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Bing Webmaster (msvalidate.01)",
						help: "Paste only the content value of the meta tag.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.bing_site_verification ?? "",
							onChange: (e) => set("bing_site_verification", e.target.value),
							placeholder: "ABC123..."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Google Search Console",
						help: "google-site-verification content value.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.google_site_verification ?? "",
							onChange: (e) => set("google_site_verification", e.target.value),
							placeholder: "abc123..."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Pinterest domain verify",
						help: "p:domain_verify content value.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.pinterest_site_verification ?? "",
							onChange: (e) => set("pinterest_site_verification", e.target.value),
							placeholder: "abc123..."
						})
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Limited-edition banner (home page)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						checked: !!f.feature_enabled,
						onChange: (v) => set("feature_enabled", v),
						label: "Show the banner with countdown"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row2, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Eyebrow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: f.feature_eyebrow ?? "",
								onChange: (e) => set("feature_eyebrow", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Title",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: f.feature_title ?? "",
								onChange: (e) => set("feature_title", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Title accent (gold italic)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: f.feature_title_accent ?? "",
								onChange: (e) => set("feature_title_accent", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Button label",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: f.feature_cta_label ?? "",
								onChange: (e) => set("feature_cta_label", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Button link",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: f.feature_cta_href ?? "",
								onChange: (e) => set("feature_cta_href", e.target.value),
								placeholder: "/shop"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Countdown ends at",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "datetime-local",
								value: f.feature_ends_at ? toLocalInput(f.feature_ends_at) : "",
								onChange: (e) => set("feature_ends_at", e.target.value)
							})
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Description",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							rows: 3,
							value: f.feature_description ?? "",
							onChange: (e) => set("feature_description", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Background image",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
							value: f.feature_image_url ?? "",
							onChange: (v) => set("feature_image_url", v)
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Homepage videos",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mb-5",
						children: "Drag & drop videos from your phone or PC, or paste a URL. Only sections with a real video will appear on the homepage."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Watch on Wrist",
						help: "Lifestyle or wrist-shot video. Shows first. MP4 recommended.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoField, {
							value: f.video_wrist_url ?? "",
							onChange: (v) => set("video_wrist_url", v),
							folder: "homepage-videos"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Watch on Wrist — section title",
						help: "Optional heading. Default: 'See it in action'",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.video_wrist_title ?? "",
							onChange: (e) => set("video_wrist_title", e.target.value),
							placeholder: "See it on the wrist"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Product Showcase",
						help: "Product demo or close-up video. Shows second.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoField, {
							value: f.video_showcase_url ?? "",
							onChange: (v) => set("video_showcase_url", v),
							folder: "homepage-videos"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Product Showcase — section title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.video_showcase_title ?? "",
							onChange: (e) => set("video_showcase_title", e.target.value),
							placeholder: "Crafted to impress"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Customer / UGC Video",
						help: "Real customer video, unboxing or testimonial. Shows third.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoField, {
							value: f.video_ugc_url ?? "",
							onChange: (v) => set("video_ugc_url", v),
							folder: "homepage-videos"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Customer / UGC — section title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.video_ugc_title ?? "",
							onChange: (e) => set("video_ugc_title", e.target.value),
							placeholder: "Real customers. Real Timera."
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "lg",
					disabled: save.isPending,
					onClick: () => save.mutate(),
					children: [save.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Save changes"]
				})
			})
		]
	});
}
function Card({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-4 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-serif text-xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-4",
			children
		})]
	});
}
function Row2({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2",
		children
	});
}
function Field({ label, help, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 space-y-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "text-xs uppercase tracking-widest text-muted-foreground",
				children: label
			}),
			children,
			help && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: help
			})
		]
	});
}
function Toggle({ checked, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center justify-between gap-3 rounded-md border border-border/60 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0 text-sm",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			checked,
			onCheckedChange: onChange,
			className: "shrink-0"
		})]
	});
}
//#endregion
export { SettingsAdmin as component };
