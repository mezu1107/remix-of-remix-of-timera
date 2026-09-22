import { t as supabase } from "./client-CqS_jkNP.mjs";
import { p as trackEvent } from "./tracking-DD-P3Lxb.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-BkxySNBa.js
var STORAGE_KEY = "timera-lead-session";
function leadSessionId() {
	if (typeof window === "undefined") return "";
	try {
		const existing = window.localStorage.getItem(STORAGE_KEY);
		if (existing) return existing;
		const id = window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
		window.localStorage.setItem(STORAGE_KEY, id);
		return id;
	} catch {
		return `anon-${Date.now()}`;
	}
}
/** Stage ranking so a later stage never gets overwritten by an earlier one. */
var RANK = {
	add_to_cart: 1,
	checkout_started: 2,
	checkout_details: 3,
	purchased: 4
};
var lastStage = null;
async function captureLead(input) {
	if (typeof window === "undefined") return;
	const session_id = leadSessionId();
	if (!session_id) return;
	const stage = lastStage && RANK[lastStage] > RANK[input.stage] ? lastStage : input.stage;
	lastStage = stage;
	const items = input.items ?? [];
	const row = {
		session_id,
		stage,
		items,
		item_count: items.reduce((a, i) => a + (i.quantity || 0), 0),
		cart_value: Math.round((input.cartValue ?? items.reduce((a, i) => a + i.price * i.quantity, 0)) * 100) / 100,
		currency: "PKR",
		page_path: `${window.location.pathname}${window.location.search}`,
		referrer: document.referrer || null,
		user_agent: navigator.userAgent
	};
	if (input.name) row.name = input.name;
	if (input.email) row.email = input.email;
	if (input.phone) row.phone = input.phone;
	if (input.address) row.address = input.address;
	if (input.city) row.city = input.city;
	if (input.orderNumber) row.order_number = input.orderNumber;
	try {
		const { data: sessionData } = await supabase.auth.getSession();
		if (sessionData.session?.user?.id) row.user_id = sessionData.session.user.id;
	} catch {}
	const { error } = await supabase.from("cart_leads").upsert(row, { onConflict: "session_id" });
	if (error) console.warn("Lead was not captured", error.message);
}
var useCart = create()(persist((set) => ({
	items: [],
	isOpen: false,
	add: (product, opts) => {
		const quantity = opts?.quantity ?? 1;
		trackEvent("add_to_cart", {
			productId: product.id,
			productSlug: product.slug,
			productName: product.name,
			value: (product.salePrice ?? product.price) * quantity,
			metadata: {
				quantity,
				color: opts?.color ?? null,
				size: opts?.size ?? null
			}
		});
		set((state) => {
			const key = `${product.id}-${opts?.color ?? ""}-${opts?.size ?? ""}`;
			if (state.items.find((i) => i.id === key)) {
				const next = {
					items: state.items.map((i) => i.id === key ? {
						...i,
						quantity: i.quantity + quantity
					} : i),
					isOpen: true
				};
				captureLead({
					stage: "add_to_cart",
					items: next.items.map((i) => ({
						name: i.product.name,
						slug: i.product.slug,
						quantity: i.quantity,
						price: i.product.salePrice ?? i.product.price
					}))
				});
				return next;
			}
			const next = {
				items: [...state.items, {
					id: key,
					product,
					quantity,
					color: opts?.color,
					size: opts?.size
				}],
				isOpen: true
			};
			captureLead({
				stage: "add_to_cart",
				items: next.items.map((i) => ({
					name: i.product.name,
					slug: i.product.slug,
					quantity: i.quantity,
					price: i.product.salePrice ?? i.product.price
				}))
			});
			return next;
		});
	},
	remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
	updateQty: (id, qty) => set((s) => ({ items: s.items.map((i) => i.id === id ? {
		...i,
		quantity: Math.max(1, qty)
	} : i) })),
	clear: () => set({ items: [] }),
	setOpen: (open) => set({ isOpen: open }),
	toggle: () => set((s) => ({ isOpen: !s.isOpen }))
}), { name: "timera-cart" }));
var useWishlist = create()(persist((set, get) => ({
	ids: [],
	toggle: (id) => set((s) => ({ ids: s.ids.includes(id) ? s.ids.filter((x) => x !== id) : [...s.ids, id] })),
	has: (id) => get().ids.includes(id),
	clear: () => set({ ids: [] })
}), { name: "timera-wishlist" }));
//#endregion
export { useCart as n, useWishlist as r, captureLead as t };
