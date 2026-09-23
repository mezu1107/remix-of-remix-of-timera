import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._slug-IYLxNePe.js
var $$splitComponentImporter = () => import("./collections._slug-DB0_ooIL.mjs");
var Route = createFileRoute("/collections/$slug")({
	head: ({ params }) => {
		const name = params.slug.replace(/-/g, " ");
		const title = `${name} collection — Timera watches`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: `Every timepiece in the Timera ${name} collection, with live pricing and nationwide delivery across Pakistan.`
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: `Timepieces in the ${name} collection.`
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
