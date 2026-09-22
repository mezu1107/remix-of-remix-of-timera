import { r as __exportAll$1 } from "../_runtime.mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tracking-DD-P3Lxb.js
var tracking_DD_P3Lxb_exports = /* @__PURE__ */ __exportAll$1({
	a: () => setVerificationMeta,
	c: () => initSnapchatPixel,
	d: () => tiktokIdentify,
	f: () => tiktokPage,
	i: () => initBingPixel,
	l: () => snapTrack,
	m: () => initMetaPixel,
	n: () => tracking_exports,
	o: () => initPinterestPixel,
	p: () => initGooglePixel,
	r: () => initLinkedInPixel,
	s: () => pinterestPage,
	t: () => trackEvent,
	u: () => initTiktokPixel
});
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var w$5 = () => window;
var activePixels = /* @__PURE__ */ new Set();
var clean$6 = (v) => String(v ?? "").trim();
/** Creates the fbq stub exactly as the official snippet does. */
function ensureStub$3() {
	if (typeof window === "undefined") return null;
	if (w$5().fbq) return w$5().fbq;
	const fbq = function(...args) {
		if (fbq.callMethod) fbq.callMethod.apply(fbq, args);
		else fbq.queue?.push(args);
	};
	fbq.push = fbq;
	fbq.loaded = true;
	fbq.version = "2.0";
	fbq.queue = [];
	w$5().fbq = fbq;
	if (!w$5()._fbq) w$5()._fbq = fbq;
	return fbq;
}
function loadPixelScript() {
	if (typeof document === "undefined") return;
	if (document.getElementById("meta-pixel-script")) return;
	const script = document.createElement("script");
	script.id = "meta-pixel-script";
	script.async = true;
	script.src = "https://connect.facebook.net/en_US/fbevents.js";
	const first = document.getElementsByTagName("script")[0];
	if (first?.parentNode) first.parentNode.insertBefore(script, first);
	else document.head.appendChild(script);
}
function injectNoscript(pixelId) {
	if (typeof document === "undefined") return;
	const id = `meta-pixel-noscript-${pixelId}`;
	if (document.getElementById(id)) return;
	const ns = document.createElement("noscript");
	ns.id = id;
	ns.innerHTML = `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${encodeURIComponent(pixelId)}&ev=PageView&noscript=1" />`;
	document.body?.appendChild(ns);
}
/**
* Boots the pixel. Safe to call repeatedly — each pixel id is only initialised once.
* Falls back to DEFAULT_META_PIXEL_ID when no id is configured in the admin.
*/
function initMetaPixel(pixelId) {
	if (typeof window === "undefined") return null;
	const id = clean$6(pixelId) || "4180744378882229";
	const fbq = ensureStub$3();
	if (!fbq) return null;
	loadPixelScript();
	if (!activePixels.has(id)) {
		fbq("init", id);
		activePixels.add(id);
		injectNoscript(id);
	}
	return id;
}
/**
* Fires a standard Meta event (auto-boots the pixel if it is not up yet).
* `eventId` is Meta's deduplication key — pass the same id to the Conversions
* API so browser + server events collapse into one conversion.
*/
function metaTrack(event, params = {}, eventId) {
	if (typeof window === "undefined") return;
	if (!activePixels.size) initMetaPixel();
	if (eventId) w$5().fbq?.("track", event, prune(params), { eventID: eventId });
	else w$5().fbq?.("track", event, prune(params));
}
/** Fires a custom (non-standard) Meta event. */
function metaTrackCustom(event, params = {}, eventId) {
	if (typeof window === "undefined") return;
	if (!activePixels.size) initMetaPixel();
	if (eventId) w$5().fbq?.("trackCustom", event, prune(params), { eventID: eventId });
	else w$5().fbq?.("trackCustom", event, prune(params));
}
function prune(params) {
	const out = {};
	for (const [k, v] of Object.entries(params)) {
		if (v === void 0 || v === null || v === "") continue;
		out[k] = v;
	}
	return out;
}
var clean$5 = (v) => String(v ?? "").trim();
var tagId = "";
var purchaseLabel = "";
var booted = /* @__PURE__ */ new Set();
function initGooglePixel(id, adsPurchaseLabel) {
	if (typeof window === "undefined") return null;
	const gid = clean$5(id);
	purchaseLabel = clean$5(adsPurchaseLabel);
	if (!gid) return null;
	tagId = gid;
	window.dataLayer = window.dataLayer ?? [];
	window.gtag = window.gtag ?? ((...args) => void window.dataLayer?.push(args));
	if (booted.has(gid)) return gid;
	booted.add(gid);
	if (!document.getElementById("google-tag-script")) {
		const script = document.createElement("script");
		script.id = "google-tag-script";
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gid)}`;
		document.head.appendChild(script);
	}
	window.gtag("js", /* @__PURE__ */ new Date());
	window.gtag("config", gid, { send_page_view: false });
	return gid;
}
function googleTrack(event, params = {}) {
	if (typeof window === "undefined" || !window.gtag) return;
	window.gtag("event", event, params);
}
function googleAdsConversion(params) {
	if (!tagId || !purchaseLabel || typeof window === "undefined") return;
	window.gtag?.("event", "conversion", {
		send_to: `${tagId}/${purchaseLabel}`,
		value: params.value,
		currency: params.currency ?? "PKR",
		transaction_id: params.transactionId
	});
}
/**
* TIKTOK PIXEL MODULE — Official TikTok Pixel Integration (ttq)
* Supports base script loading, PII SHA-256 hashing, ttq.identify(),
* dynamic event parameters, event_id deduplication, and purchase duplication prevention.
*/
var DEFAULT_TIKTOK_PIXEL_ID = typeof import.meta !== "undefined" && "DALT99BC77UC60IQCHSG" || "DALT99BC77UC60IQCHSG";
var w$4 = () => typeof window !== "undefined" ? window : {};
var clean$4 = (v) => String(v ?? "").trim();
var active$4 = /* @__PURE__ */ new Set();
var trackedPurchaseOrders = /* @__PURE__ */ new Set();
/** Creates the ttq stub exactly as the official TikTok snippet does. */
function ensureStub$2() {
	if (typeof window === "undefined" || typeof document === "undefined") return null;
	const win = w$4();
	if (win.ttq) return win.ttq;
	win.TiktokAnalyticsObject = "ttq";
	const ttq = [];
	win.ttq = ttq;
	ttq.methods = [
		"page",
		"track",
		"identify",
		"instances",
		"debug",
		"on",
		"off",
		"once",
		"ready",
		"alias",
		"group",
		"enableCookie",
		"disableCookie",
		"holdConsent",
		"revokeConsent",
		"grantConsent"
	];
	ttq.setAndDefer = function(t, e) {
		t[e] = function(...args) {
			t.push([e, ...args]);
		};
	};
	for (const m of ttq.methods) ttq.setAndDefer(ttq, m);
	ttq.instance = function(id) {
		const e = ttq._i?.[id] ?? [];
		for (const m of ttq.methods) ttq.setAndDefer(e, m);
		return e;
	};
	ttq.load = function(id, opts) {
		const url = "https://analytics.tiktok.com/i18n/pixel/events.js";
		ttq._i = ttq._i ?? {};
		ttq._i[id] = [];
		ttq._i[id]._u = url;
		ttq._t = ttq._t ?? {};
		ttq._t[id] = +/* @__PURE__ */ new Date();
		ttq._o = ttq._o ?? {};
		ttq._o[id] = opts ?? {};
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.async = true;
		script.src = `${url}?sdkid=${encodeURIComponent(id)}&lib=ttq`;
		const first = document.getElementsByTagName("script")[0];
		if (first?.parentNode) first.parentNode.insertBefore(script, first);
		else document.head.appendChild(script);
	};
	return ttq;
}
/** Boots the TikTok pixel. Safe to call repeatedly. */
function initTiktokPixel(pixelId) {
	if (typeof window === "undefined") return null;
	const envId = typeof import.meta !== "undefined" ? "DALT99BC77UC60IQCHSG" : void 0;
	const id = clean$4(pixelId) || clean$4(envId) || DEFAULT_TIKTOK_PIXEL_ID;
	const win = w$4();
	if (active$4.has(id) || win.ttq?._i && win.ttq._i[id]) {
		active$4.add(id);
		return id;
	}
	const ttq = ensureStub$2();
	if (!ttq) return null;
	active$4.add(id);
	try {
		ttq.load?.(id);
		ttq.page?.();
	} catch (e) {
		console.warn("[TikTok Pixel] Initialization warning:", e);
	}
	return id;
}
function tiktokPage() {
	if (typeof window === "undefined") return;
	if (!active$4.size) initTiktokPixel();
	try {
		w$4().ttq?.page?.();
	} catch (e) {
		console.warn("[TikTok Pixel] Page track warning:", e);
	}
}
/** Synchronous / Asynchronous SHA-256 hash algorithm for client-side PII. */
async function sha256(message) {
	const str = String(message ?? "").trim();
	if (!str) return "";
	if (typeof crypto !== "undefined" && crypto.subtle && crypto.subtle.digest) try {
		const msgUint8 = new TextEncoder().encode(str);
		const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
		return Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
	} catch {}
	return jsSha256(str);
}
var sha256HCache;
var sha256KCache;
function jsSha256(ascii) {
	function rightRotate(value, amount) {
		return value >>> amount | value << 32 - amount;
	}
	const mathPow = Math.pow;
	const maxWord = mathPow(2, 32);
	let i, j;
	let result = "";
	const words = [];
	const asciiBitLength = ascii.length * 8;
	let hash = sha256HCache = sha256HCache || [];
	let k = sha256KCache = sha256KCache || [];
	let primeCounter = k.length;
	const isComposite = {};
	for (let candidate = 2; primeCounter < 64; candidate++) if (!isComposite[candidate]) {
		for (i = 0; i < 300; i += candidate) isComposite[i] = true;
		hash[primeCounter] = mathPow(candidate, .5) * maxWord | 0;
		k[primeCounter] = mathPow(candidate, 1 / 3) * maxWord | 0;
		primeCounter++;
	}
	hash = hash.slice(0);
	for (i = 0; i < ascii.length; i++) {
		j = ascii.charCodeAt(i);
		if (j >> 8) return "";
		words[i >> 2] |= j << (3 - i % 4) * 8;
	}
	words[words.length] = 128 << (3 - ascii.length % 4) * 8;
	words[(ascii.length + 8 >> 6 << 4) + 15] = asciiBitLength;
	for (j = 0; j < words.length; j += 16) {
		const w = words.slice(j, j + 16);
		const oldHash = hash.slice(0);
		for (i = 0; i < 64; i++) {
			const w15 = w[i - 15], w2 = w[i - 2];
			const a = hash[0], e = hash[4];
			const temp1 = hash[7] + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) + (e & hash[5] ^ ~e & hash[6]) + k[i] + (w[i] = i < 16 ? w[i] : w[i - 16] + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ w15 >>> 3) + w[i - 7] + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ w2 >>> 10) | 0);
			hash = [temp1 + ((rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) + (a & hash[1] ^ a & hash[2] ^ hash[1] & hash[2])) | 0].concat(hash);
			hash[4] = hash[4] + temp1 | 0;
		}
		for (i = 0; i < 8; i++) hash[i] = hash[i] + oldHash[i] | 0;
	}
	for (i = 0; i < 8; i++) for (j = 3; j >= 0; j--) {
		const b = hash[i] >> j * 8 & 255;
		result += (b < 16 ? "0" : "") + b.toString(16);
	}
	return result;
}
/**
* Sends hashed PII to ttq.identify() before event dispatch.
* Hashes email, phone_number, and external_id with SHA-256.
*/
async function tiktokIdentify(data) {
	if (typeof window === "undefined") return;
	const win = w$4();
	if (!win.ttq?.identify) return;
	const identifyObj = {};
	if (data.email) {
		const cleanEmail = String(data.email).trim().toLowerCase();
		if (cleanEmail && !cleanEmail.endsWith("@timera.noemail")) identifyObj.email = await sha256(cleanEmail);
	}
	if (data.phone) {
		const cleanPhone = String(data.phone).replace(/\D/g, "");
		if (cleanPhone) identifyObj.phone_number = await sha256(cleanPhone);
	}
	if (data.externalId) {
		const cleanExtId = String(data.externalId).trim();
		if (cleanExtId) identifyObj.external_id = await sha256(cleanExtId);
	}
	if (Object.keys(identifyObj).length > 0) try {
		win.ttq.identify(identifyObj);
	} catch (err) {
		console.warn("[TikTok Pixel] Identify warning:", err);
	}
}
/** Generates a unique event_id for deduplication. */
function generateEventId() {
	if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
	return `${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
}
/**
* Tracks standard or custom TikTok events via ttq.track().
* Constructs contents array, value, currency, search_string, and event_id options.
*/
function tiktokTrack(event, params = {}, options) {
	if (typeof window === "undefined") return;
	if (!active$4.size) initTiktokPixel();
	const win = w$4();
	if (!win.ttq?.track) return;
	const orderId = String(params.order_id || params.orderNumber || params.order_number || "").trim();
	const eventId = options?.event_id || (typeof params.event_id === "string" && params.event_id ? params.event_id : orderId ? `tt_${event.toLowerCase()}_${orderId}` : generateEventId());
	if (event === "Purchase") {
		const dedupId = orderId || eventId;
		const storageKey = `tt_purchase_tracked_${dedupId}`;
		if (trackedPurchaseOrders.has(dedupId) || typeof sessionStorage !== "undefined" && sessionStorage.getItem(storageKey)) {
			console.log(`[TikTok Pixel] Purchase event for ${dedupId} already tracked. Skipping duplicate.`);
			return;
		}
		trackedPurchaseOrders.add(dedupId);
		try {
			sessionStorage.setItem(storageKey, "true");
		} catch {}
	}
	let contents = [];
	if (Array.isArray(params.contents) && params.contents.length > 0) contents = params.contents.map((item) => ({
		content_id: String(item.content_id || item.item_id || item.id || item.product_id || ""),
		content_type: String(item.content_type || "product"),
		content_name: String(item.content_name || item.item_name || item.name || item.product_name || "")
	})).filter((c) => Boolean(c.content_id || c.content_name));
	else if (params.content_id || params.productId || params.content_name || params.productName) contents = [{
		content_id: String(params.content_id || params.productId || ""),
		content_type: String(params.content_type || "product"),
		content_name: String(params.content_name || params.productName || "")
	}];
	const payload = {
		value: typeof params.value === "number" ? params.value : Number(params.value) || 0,
		currency: String(params.currency || "PKR")
	};
	if (contents.length > 0) payload.contents = contents;
	const searchStr = params.search_string || params.query || params.metadata?.query;
	if (searchStr) payload.search_string = String(searchStr);
	try {
		win.ttq.track(event, payload, { event_id: eventId });
	} catch (err) {
		console.warn(`[TikTok Pixel] Error tracking event ${event}:`, err);
	}
}
var w$3 = () => window;
var clean$3 = (v) => String(v ?? "").trim();
var active$3 = /* @__PURE__ */ new Set();
function ensureStub$1() {
	if (typeof window === "undefined" || typeof document === "undefined") return null;
	if (w$3().snaptr) return w$3().snaptr;
	const a = function(...args) {
		if (a.handleRequest) a.handleRequest.apply(a, args);
		else a.queue?.push(args);
	};
	a.queue = [];
	w$3().snaptr = a;
	if (!document.getElementById("snap-pixel-script")) {
		const s = document.createElement("script");
		s.id = "snap-pixel-script";
		s.async = true;
		s.src = "https://sc-static.net/scevent.min.js";
		const first = document.getElementsByTagName("script")[0];
		if (first?.parentNode) first.parentNode.insertBefore(s, first);
		else document.head.appendChild(s);
	}
	return a;
}
function initSnapchatPixel(pixelId, email) {
	if (typeof window === "undefined") return null;
	const id = clean$3(pixelId);
	if (!id) return null;
	const snaptr = ensureStub$1();
	if (!snaptr) return null;
	if (!active$3.has(id)) {
		active$3.add(id);
		snaptr("init", id, email ? { user_email: email } : {});
		snaptr("track", "PAGE_VIEW");
	}
	return id;
}
function snapTrack(event, params = {}) {
	if (typeof window === "undefined" || !active$3.size) return;
	const out = {};
	for (const [k, v] of Object.entries(params)) {
		if (v === void 0 || v === null || v === "") continue;
		out[k] = v;
	}
	w$3().snaptr?.("track", event, out);
}
var w$2 = () => window;
var clean$2 = (v) => String(v ?? "").trim();
var active$2 = /* @__PURE__ */ new Set();
function ensureStub() {
	if (typeof window === "undefined" || typeof document === "undefined") return null;
	if (w$2().pintrk) return w$2().pintrk;
	const pintrk = function(...args) {
		pintrk.queue?.push(args);
	};
	pintrk.queue = [];
	pintrk.version = "3.0";
	w$2().pintrk = pintrk;
	if (!document.getElementById("pinterest-tag-script")) {
		const s = document.createElement("script");
		s.id = "pinterest-tag-script";
		s.async = true;
		s.src = "https://s.pinimg.com/ct/core.js";
		const first = document.getElementsByTagName("script")[0];
		if (first?.parentNode) first.parentNode.insertBefore(s, first);
		else document.head.appendChild(s);
	}
	return pintrk;
}
function initPinterestPixel(tagId, email) {
	if (typeof window === "undefined") return null;
	const id = clean$2(tagId);
	if (!id) return null;
	const pintrk = ensureStub();
	if (!pintrk) return null;
	if (!active$2.has(id)) {
		active$2.add(id);
		pintrk("load", id, email ? { em: email } : {});
		pintrk("page");
		const nsId = `pinterest-noscript-${id}`;
		if (!document.getElementById(nsId)) {
			const ns = document.createElement("noscript");
			ns.id = nsId;
			ns.innerHTML = `<img height="1" width="1" style="display:none" alt="" src="https://ct.pinterest.com/v3/?event=init&tid=${encodeURIComponent(id)}&noscript=1" />`;
			document.body?.appendChild(ns);
		}
	}
	return id;
}
function pinterestPage() {
	if (typeof window === "undefined" || !active$2.size) return;
	w$2().pintrk?.("page");
}
function pinterestTrack(event, params = {}) {
	if (typeof window === "undefined" || !active$2.size) return;
	const out = {};
	for (const [k, v] of Object.entries(params)) {
		if (v === void 0 || v === null || v === "") continue;
		out[k] = v;
	}
	w$2().pintrk?.("track", event, out);
}
var w$1 = () => window;
var clean$1 = (v) => String(v ?? "").trim();
var active$1 = /* @__PURE__ */ new Set();
function initBingPixel(tagId) {
	if (typeof window === "undefined" || typeof document === "undefined") return null;
	const id = clean$1(tagId);
	if (!id || active$1.has(id)) return id || null;
	active$1.add(id);
	const win = w$1();
	win.uetq = win.uetq ?? [];
	const boot = () => {
		if (!win.UET) return;
		const o = {
			ti: id,
			enableAutoSpaTracking: true,
			q: win.uetq
		};
		const uet = new win.UET(o);
		win.uetq = uet;
		uet.push("pageLoad");
	};
	if (!document.getElementById("bing-uet-script")) {
		const s = document.createElement("script");
		s.id = "bing-uet-script";
		s.async = true;
		s.src = "https://bat.bing.com/bat.js";
		s.onload = boot;
		const first = document.getElementsByTagName("script")[0];
		if (first?.parentNode) first.parentNode.insertBefore(s, first);
		else document.head.appendChild(s);
	} else boot();
	return id;
}
function bingTrack(event, params = {}) {
	if (typeof window === "undefined" || !active$1.size) return;
	const out = {};
	for (const [k, v] of Object.entries(params)) {
		if (v === void 0 || v === null || v === "") continue;
		out[k] = v;
	}
	w$1().uetq?.push?.("event", event, out);
}
/** Adds/updates a <meta name="..." content="..."> verification tag. */
function setVerificationMeta(name, content) {
	if (typeof document === "undefined") return;
	const value = clean$1(content);
	let tag = document.head.querySelector(`meta[name="${name}"]`);
	if (!value) {
		tag?.remove();
		return;
	}
	if (!tag) {
		tag = document.createElement("meta");
		tag.name = name;
		document.head.appendChild(tag);
	}
	tag.content = value;
}
var w = () => window;
var clean = (v) => String(v ?? "").trim();
var active = /* @__PURE__ */ new Set();
function initLinkedInPixel(partnerId) {
	if (typeof window === "undefined" || typeof document === "undefined") return null;
	const id = clean(partnerId);
	if (!id || active.has(id)) return id || null;
	active.add(id);
	const win = w();
	win._linkedin_partner_id = id;
	win._linkedin_data_partner_ids = win._linkedin_data_partner_ids ?? [];
	win._linkedin_data_partner_ids.push(id);
	if (!win.lintrk) {
		const l = function(a, b) {
			l.q.push([a, b]);
		};
		l.q = [];
		win.lintrk = l;
	}
	if (!document.getElementById("linkedin-insight-script")) {
		const s = document.createElement("script");
		s.id = "linkedin-insight-script";
		s.async = true;
		s.type = "text/javascript";
		s.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
		document.head.appendChild(s);
	}
	const nsId = `linkedin-insight-noscript-${id}`;
	if (!document.getElementById(nsId)) {
		const ns = document.createElement("noscript");
		ns.id = nsId;
		ns.innerHTML = `<img height="1" width="1" style="display:none" alt="" src="https://px.ads.linkedin.com/collect/?pid=${encodeURIComponent(id)}&fmt=gif" />`;
		document.body?.appendChild(ns);
	}
	return id;
}
/** LinkedIn only supports conversion ids; pass one to record a conversion. */
function linkedInTrack(conversionId) {
	if (typeof window === "undefined" || !active.size) return;
	if (conversionId) w().lintrk?.("track", { conversion_id: conversionId });
}
var tracking_exports = /* @__PURE__ */ __exportAll({ trackEvent: () => trackEvent });
/** Standard Meta event per app event; `null` means send it as a custom event. */
var metaEventName = {
	page_view: "PageView",
	view_item: "ViewContent",
	view_item_list: "ViewContent",
	add_to_cart: "AddToCart",
	remove_from_cart: null,
	begin_checkout: "InitiateCheckout",
	add_payment_info: "AddPaymentInfo",
	place_order: null,
	purchase: "Purchase",
	search: "Search",
	view_cart: "ViewContent",
	add_to_wishlist: "AddToWishlist",
	share: null,
	sign_up: "CompleteRegistration",
	login: null,
	contact: "Contact",
	whatsapp_click: "Contact",
	scroll_depth: null,
	time_on_page: null,
	outbound_click: null,
	video_play: null,
	newsletter_signup: "Subscribe",
	coupon_applied: null,
	quick_view: "ViewContent",
	filter_apply: null,
	sort_change: null,
	exit_intent_offer: null,
	upsell_add: "AddToCart",
	sticky_buy_click: null
};
var googleEventName = {
	page_view: "page_view",
	view_item: "view_item",
	view_item_list: "view_item_list",
	add_to_cart: "add_to_cart",
	remove_from_cart: "remove_from_cart",
	begin_checkout: "begin_checkout",
	add_payment_info: "add_payment_info",
	place_order: "purchase",
	purchase: "purchase",
	search: "search",
	view_cart: "view_cart",
	add_to_wishlist: "add_to_wishlist",
	share: "share",
	sign_up: "sign_up",
	login: "login",
	contact: "generate_lead",
	whatsapp_click: "whatsapp_click",
	scroll_depth: "scroll",
	time_on_page: "user_engagement",
	outbound_click: "click",
	video_play: "video_start",
	newsletter_signup: "sign_up",
	coupon_applied: "select_promotion",
	quick_view: "view_item",
	filter_apply: "filter",
	sort_change: "sort",
	exit_intent_offer: "view_promotion",
	upsell_add: "add_to_cart",
	sticky_buy_click: "select_item"
};
/** TikTok standard events matching TikTok Pixel specification. */
var tiktokEventName = {
	page_view: "Pageview",
	view_item: "ViewContent",
	view_item_list: "ViewContent",
	quick_view: "ViewContent",
	add_to_cart: "AddToCart",
	add_to_wishlist: "AddToWishlist",
	begin_checkout: "InitiateCheckout",
	add_payment_info: "AddPaymentInfo",
	place_order: "PlaceAnOrder",
	purchase: "Purchase",
	search: "Search",
	sign_up: "CompleteRegistration",
	contact: "Contact",
	whatsapp_click: "Contact",
	newsletter_signup: "Subscribe",
	upsell_add: "AddToCart",
	sticky_buy_click: "ClickButton"
};
/** Snapchat standard events. */
var snapEventName = {
	page_view: "PAGE_VIEW",
	view_item: "VIEW_CONTENT",
	view_item_list: "VIEW_CONTENT",
	quick_view: "VIEW_CONTENT",
	add_to_cart: "ADD_CART",
	add_to_wishlist: "ADD_TO_WISHLIST",
	begin_checkout: "START_CHECKOUT",
	add_payment_info: "ADD_BILLING",
	place_order: "PURCHASE",
	purchase: "PURCHASE",
	search: "SEARCH",
	sign_up: "SIGN_UP",
	login: "LOGIN",
	contact: "CUSTOM_EVENT_2",
	whatsapp_click: "CUSTOM_EVENT_2",
	newsletter_signup: "SUBSCRIBE",
	upsell_add: "ADD_CART"
};
/** Pinterest standard events. */
var pinterestEventName = {
	page_view: "pagevisit",
	view_item: "pagevisit",
	view_item_list: "viewcategory",
	quick_view: "pagevisit",
	add_to_cart: "addtocart",
	begin_checkout: "checkout",
	place_order: "checkout",
	purchase: "checkout",
	search: "search",
	sign_up: "signup",
	newsletter_signup: "lead",
	contact: "lead",
	whatsapp_click: "lead",
	upsell_add: "addtocart"
};
function fireBrowserPixels(name, payload) {
	const value = Number(payload.value ?? 0) || void 0;
	const currency = payload.currency ?? "PKR";
	const metaParams = {
		content_ids: payload.productId ? [payload.productId] : void 0,
		content_name: payload.productName,
		content_type: payload.productId ? "product" : void 0,
		value,
		currency,
		...payload.metadata ?? {}
	};
	const standard = metaEventName[name];
	if (standard) metaTrack(standard, metaParams);
	else metaTrackCustom(name, metaParams);
	if ([
		"add_to_cart",
		"begin_checkout",
		"place_order",
		"upsell_add",
		"sticky_buy_click",
		"contact",
		"whatsapp_click",
		"newsletter_signup",
		"quick_view"
	].includes(name) && standard !== "Lead") metaTrack("Lead", metaParams);
	googleTrack(googleEventName[name], {
		page_path: payload.pagePath ?? window.location.pathname,
		currency,
		value,
		transaction_id: payload.orderNumber,
		items: payload.metadata?.items,
		item_id: payload.productId,
		item_name: payload.productName
	});
	const metaEmail = typeof payload.metadata?.email === "string" ? payload.metadata.email : void 0;
	const metaPhone = typeof payload.metadata?.phone === "string" ? payload.metadata.phone : void 0;
	if (metaEmail || metaPhone || payload.orderNumber) tiktokIdentify({
		email: metaEmail,
		phone: metaPhone,
		externalId: payload.orderNumber
	});
	const tiktokContents = (Array.isArray(payload.metadata?.items) ? payload.metadata.items : []).map((it) => ({
		content_id: String(it.item_id || it.id || it.product_id || ""),
		content_name: String(it.item_name || it.name || it.product_name || ""),
		quantity: Number(it.quantity || 1),
		price: Number(it.price || 0)
	})).filter((c) => Boolean(c.content_id || c.content_name));
	const tiktokParams = {
		content_id: payload.productId,
		content_name: payload.productName,
		content_type: payload.productId || tiktokContents.length > 0 ? "product" : void 0,
		value,
		currency,
		order_id: payload.orderNumber,
		query: typeof payload.metadata?.query === "string" ? payload.metadata.query : void 0,
		search_string: typeof payload.metadata?.query === "string" ? payload.metadata.query : void 0
	};
	if (tiktokContents.length > 0) tiktokParams.contents = tiktokContents;
	const ttName = tiktokEventName[name];
	if (ttName) tiktokTrack(ttName, tiktokParams, { event_id: typeof payload.metadata?.event_id === "string" ? payload.metadata.event_id : void 0 });
	snapTrack(snapEventName[name] ?? "CUSTOM_EVENT_1", {
		item_ids: payload.productId ? [payload.productId] : void 0,
		item_category: payload.productName,
		price: value,
		currency,
		transaction_id: payload.orderNumber
	});
	pinterestTrack(pinterestEventName[name] ?? "custom", {
		product_id: payload.productId,
		product_name: payload.productName,
		value,
		currency,
		order_id: payload.orderNumber
	});
	bingTrack(googleEventName[name], {
		ecomm_prodid: payload.productId,
		revenue_value: value,
		currency,
		transaction_id: payload.orderNumber
	});
	if (name === "purchase") {
		googleAdsConversion({
			value,
			currency,
			transactionId: payload.orderNumber
		});
		linkedInTrack(payload.metadata?.linkedInConversionId);
	}
}
function getSessionId() {
	const key = "timera-analytics-session";
	const existing = window.sessionStorage.getItem(key);
	if (existing) return existing;
	const random = window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
	window.sessionStorage.setItem(key, random);
	return random;
}
async function trackEvent(name, payload = {}) {
	if (typeof window === "undefined") return;
	fireBrowserPixels(name, payload);
	const pagePath = payload.pagePath ?? `${window.location.pathname}${window.location.search}`;
	const { error } = await supabase.from("analytics_events").insert({
		event_name: name,
		session_id: getSessionId(),
		page_path: pagePath,
		referrer: payload.referrer ?? document.referrer ?? null,
		product_id: payload.productId ?? null,
		product_slug: payload.productSlug ?? null,
		product_name: payload.productName ?? null,
		order_number: payload.orderNumber ?? null,
		value: payload.value ?? null,
		currency: payload.currency ?? "PKR",
		metadata: payload.metadata ?? {},
		user_agent: navigator.userAgent
	});
	if (error) console.warn("Tracking event was not saved", error.message);
}
//#endregion
export { initPinterestPixel as a, pinterestPage as c, tiktokIdentify as d, tiktokPage as f, initMetaPixel as i, setVerificationMeta as l, tracking_DD_P3Lxb_exports as m, initGooglePixel as n, initSnapchatPixel as o, trackEvent as p, initLinkedInPixel as r, initTiktokPixel as s, initBingPixel as t, snapTrack as u };
