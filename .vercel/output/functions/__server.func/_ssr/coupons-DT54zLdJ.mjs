//#region node_modules/.nitro/vite/services/ssr/assets/coupons-DT54zLdJ.js
async function validateCoupon(rawCode, subtotal, fallback = []) {
	const code = rawCode.trim();
	if (!code) return {
		valid: false,
		reason: "Enter a code first."
	};
	try {
		const data = await (await fetch("/api/public/v1/coupons/validate", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				code,
				subtotal
			})
		})).json();
		if (data?.valid && data.code) return {
			valid: true,
			code: data.code,
			discount: Number(data.discount ?? 0)
		};
		if (data?.reason) return {
			valid: false,
			reason: data.reason
		};
	} catch {}
	const found = fallback.find((c) => c.code.toLowerCase() === code.toLowerCase());
	if (!found) return {
		valid: false,
		reason: `"${code.toUpperCase()}" is not an active code.`
	};
	if (subtotal < found.minOrder) return {
		valid: false,
		reason: `This code needs a minimum order of Rs ${found.minOrder.toLocaleString("en-PK")}.`
	};
	const discount = found.discountType === "percent" ? Math.round(subtotal * found.discountValue / 100) : Math.min(found.discountValue, subtotal);
	return {
		valid: true,
		code: found.code,
		discount
	};
}
//#endregion
export { validateCoupon as t };
