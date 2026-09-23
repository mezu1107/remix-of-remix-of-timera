import { t as supabase } from "./client-CqS_jkNP.mjs";
import { n as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { t as absUrl } from "./catalog-CjOF-ztI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-settings-CXAVkk7j.js
var asStrings = (v) => Array.isArray(v) ? v.filter((x) => typeof x === "string" && x.trim().length > 0) : [];
var asLinks = (v) => Array.isArray(v) ? v.map((x) => typeof x === "string" ? {
	label: x.split("|")[0]?.trim() ?? x,
	href: (x.split("|")[1] ?? "/").trim()
} : {
	label: String(x?.label ?? ""),
	href: String(x?.href ?? "/")
}).filter((l) => l.label.length > 0) : [];
var DEFAULT_SETTINGS = {
	id: "",
	brandName: "TIMERA",
	brandSuffix: "Timepieces",
	logoUrl: null,
	brandTagline: "Luxury timepieces, delivered across Pakistan.",
	marqueeEnabled: true,
	marqueeItems: ["1 year international warranty on every timepiece"],
	featuredIn: [],
	warrantyYears: 1,
	navLinks: [],
	footerLinks: [],
	contactEmail: null,
	contactPhone: null,
	whatsappNumber: null,
	address: null,
	contactHours: null,
	instagramUrl: null,
	facebookUrl: null,
	tiktokUrl: null,
	youtubeUrl: null,
	featureEnabled: false,
	featureEyebrow: null,
	featureTitle: null,
	featureTitleAccent: null,
	featureDescription: null,
	featureCtaLabel: null,
	featureCtaHref: "/shop",
	featureImageUrl: null,
	featureEndsAt: null,
	trackingEnabled: true,
	metaPixelId: "4180744378882229",
	googleTagId: null,
	googleAdsPurchaseLabel: null,
	tiktokPixelId: "DALT99BC77UC60IQCHSG",
	linkedinPartnerId: null,
	snapchatPixelId: null,
	pinterestTagId: null,
	bingUetTagId: null,
	bingSiteVerification: null,
	googleSiteVerification: null,
	pinterestSiteVerification: null,
	videoWristUrl: null,
	videoWristTitle: null,
	videoShowcaseUrl: null,
	videoShowcaseTitle: null,
	videoUgcUrl: null,
	videoUgcTitle: null
};
function mapSiteSettings(r) {
	if (!r) return DEFAULT_SETTINGS;
	return {
		id: r.id ?? "",
		brandName: r.brand_name || "TIMERA",
		brandSuffix: r.brand_suffix ?? null,
		logoUrl: r.logo_url ? absUrl(r.logo_url) : null,
		brandTagline: r.brand_tagline ?? null,
		marqueeEnabled: r.marquee_enabled ?? true,
		marqueeItems: asStrings(r.marquee_items),
		featuredIn: asStrings(r.featured_in),
		warrantyYears: Number(r.warranty_years ?? 1),
		navLinks: asLinks(r.nav_links),
		footerLinks: asLinks(r.footer_links),
		contactEmail: r.contact_email ?? null,
		contactPhone: r.contact_phone ?? null,
		whatsappNumber: r.whatsapp_number ?? null,
		address: r.address ?? null,
		contactHours: r.contact_hours ?? null,
		instagramUrl: r.instagram_url ?? null,
		facebookUrl: r.facebook_url ?? null,
		tiktokUrl: r.tiktok_url ?? null,
		youtubeUrl: r.youtube_url ?? null,
		featureEnabled: r.feature_enabled ?? false,
		featureEyebrow: r.feature_eyebrow ?? null,
		featureTitle: r.feature_title ?? null,
		featureTitleAccent: r.feature_title_accent ?? null,
		featureDescription: r.feature_description ?? null,
		featureCtaLabel: r.feature_cta_label ?? null,
		featureCtaHref: r.feature_cta_href ?? "/shop",
		featureImageUrl: r.feature_image_url ? absUrl(r.feature_image_url) : null,
		featureEndsAt: r.feature_ends_at ?? null,
		trackingEnabled: r.tracking_enabled ?? true,
		metaPixelId: r.meta_pixel_id || "4180744378882229",
		googleTagId: r.google_tag_id ?? null,
		googleAdsPurchaseLabel: r.google_ads_purchase_label ?? null,
		tiktokPixelId: r.tiktok_pixel_id || "DALT99BC77UC60IQCHSG",
		linkedinPartnerId: r.linkedin_partner_id ?? null,
		snapchatPixelId: r.snapchat_pixel_id ?? null,
		pinterestTagId: r.pinterest_tag_id ?? null,
		bingUetTagId: r.bing_uet_tag_id ?? null,
		bingSiteVerification: r.bing_site_verification ?? null,
		googleSiteVerification: r.google_site_verification ?? null,
		pinterestSiteVerification: r.pinterest_site_verification ?? null,
		videoWristUrl: r.video_wrist_url ?? null,
		videoWristTitle: r.video_wrist_title ?? null,
		videoShowcaseUrl: r.video_showcase_url ?? null,
		videoShowcaseTitle: r.video_showcase_title ?? null,
		videoUgcUrl: r.video_ugc_url ?? null,
		videoUgcTitle: r.video_ugc_title ?? null
	};
}
var siteSettingsQuery = queryOptions({
	queryKey: ["site_settings"],
	staleTime: 6e4,
	queryFn: async () => {
		try {
			const { data, error } = await supabase.from("site_settings").select("*").order("created_at", { ascending: true }).limit(1).maybeSingle();
			if (error) console.error("[siteSettingsQuery error]:", error);
			return mapSiteSettings(data);
		} catch (err) {
			console.error("[siteSettingsQuery catch]:", err);
			return DEFAULT_SETTINGS;
		}
	}
});
//#endregion
export { siteSettingsQuery as t };
