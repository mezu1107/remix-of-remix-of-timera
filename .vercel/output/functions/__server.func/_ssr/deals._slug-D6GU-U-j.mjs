import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/deals._slug-D6GU-U-j.js
var $$splitComponentImporter = () => import("./deals._slug-BxDy1n5S.mjs");
var Route = createFileRoute("/deals/$slug")({
	head: ({ params }) => {
		const name = params.slug.replace(/-/g, " ");
		const title = `${name} deal — Timera watches`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: `Shop every watch included in the ${name} offer at Timera. Limited-time pricing, nationwide delivery.`
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: `Watches included in the ${name} offer.`
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
