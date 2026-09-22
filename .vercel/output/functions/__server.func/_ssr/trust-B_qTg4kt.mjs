import { t as supabase } from "./client-CqS_jkNP.mjs";
import { n as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trust-B_qTg4kt.js
var $$splitComponentImporter = () => import("./trust-CVgoid4Y.mjs");
var trustSectionsQuery = queryOptions({
	queryKey: ["trust_sections"],
	queryFn: async () => {
		const { data, error } = await supabase.from("trust_sections").select("*").eq("active", true).order("sort_order");
		if (error) throw error;
		return (data ?? []).map((r) => ({
			...r,
			bullets: Array.isArray(r.bullets) ? r.bullets : []
		}));
	}
});
var Route = createFileRoute("/trust")({
	head: () => ({
		meta: [
			{ title: "Trust & Security — How Timera Protects You" },
			{
				name: "description",
				content: "How Timera handles your data, secures the store, uses AI responsibly, and how to report a security issue. Maintained by the Timera team."
			},
			{
				property: "og:title",
				content: "Trust & Security — Timera"
			},
			{
				property: "og:description",
				content: "Our data handling, security practices and responsible AI use, in plain English."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://timera.store/trust"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { trustSectionsQuery as n, Route as t };
