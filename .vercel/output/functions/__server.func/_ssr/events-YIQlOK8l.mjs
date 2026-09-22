import { p as trackEvent } from "./tracking-DD-P3Lxb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-YIQlOK8l.js
/**
* Per-event tracking helpers.
* Each event is a dedicated function that wraps trackEvent with
* the correct payload shape — one "pixel module" per user action.
*/
var trackPageView = (path) => trackEvent("page_view", { pagePath: path });
var trackContact = (method) => trackEvent("contact", { metadata: { method } });
var trackWhatsappClick = (context) => trackEvent("whatsapp_click", { metadata: { context: context ?? "generic" } });
var trackScrollDepth = (percent) => trackEvent("scroll_depth", { metadata: { percent } });
var trackTimeOnPage = (seconds) => trackEvent("time_on_page", { metadata: { seconds } });
var trackOutboundClick = (url) => trackEvent("outbound_click", { metadata: { url } });
//#endregion
export { trackTimeOnPage as a, trackScrollDepth as i, trackOutboundClick as n, trackWhatsappClick as o, trackPageView as r, trackContact as t };
