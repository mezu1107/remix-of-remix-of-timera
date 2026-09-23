import { o as __toESM } from "../_runtime.mjs";
import { t as atelier_default } from "./atelier-Cht9IOP3.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { B as Package, F as Play, O as ShieldCheck, Ot as ChevronRight, R as Pause, Rt as ArrowRight, c as Volume2, kt as ChevronLeft, m as Truck, s as VolumeX, st as Headphones, x as Star, yt as CreditCard } from "../_libs/lucide-react.mjs";
import { n as formatPrice } from "./utils-CyfkpwkR.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { c as faqsQuery, g as productsQuery, l as heroSlidesQuery, m as paymentSettingsQuery, n as blogPostsQuery, r as collectionsQuery, u as isPerfume, v as testimonialsQuery } from "./catalog-CjOF-ztI.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ProductCard } from "./ProductCard-CNfzhEzy.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { t as siteSettingsQuery } from "./site-settings-CXAVkk7j.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-MqQzSS40.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CeWVG-kP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* HomepageVideoSection
*
* A single full-bleed video section for the homepage.
* - Only renders when a real video URL is provided (no placeholders)
* - Lazy loading via IntersectionObserver — video doesn't load until near viewport
* - Does NOT autoplay with sound (respects browser policies + user experience)
* - Muted autoplay on loop for showcase style; tap/click to unmute
* - Never plays simultaneously with another instance (each manages its own state)
*/
function HomepageVideoSection({ videoUrl, title, eyebrow, description, autoplay = false, loop = true, aspectRatio = "16/9", overlay = true }) {
	const videoRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(autoplay);
	const [muted, setMuted] = (0, import_react.useState)(true);
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	const toggle = () => {
		const v = videoRef.current;
		if (!v) return;
		if (v.paused) {
			v.play();
			setPlaying(true);
		} else {
			v.pause();
			setPlaying(false);
		}
	};
	const toggleMute = (e) => {
		e.stopPropagation();
		const v = videoRef.current;
		if (!v) return;
		v.muted = !v.muted;
		setMuted(v.muted);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative w-full overflow-hidden rounded-2xl bg-secondary cursor-pointer group ${{
			"16/9": "aspect-video",
			"9/16": "aspect-[9/16]",
			"4/3": "aspect-[4/3]",
			"1/1": "aspect-square"
		}[aspectRatio] ?? "aspect-video"}`,
		onClick: toggle,
		role: "button",
		tabIndex: 0,
		"aria-label": playing ? "Pause video" : "Play video",
		onKeyDown: (e) => e.key === "Enter" && toggle(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				src: videoUrl,
				loop,
				muted,
				playsInline: true,
				preload: "metadata",
				autoPlay: autoplay,
				onLoadedData: () => setLoaded(true),
				onPlay: () => setPlaying(true),
				onPause: () => setPlaying(false),
				className: "absolute inset-0 h-full w-full object-cover",
				"aria-label": title ?? "Product video"
			}),
			overlay && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" }),
			!loaded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 animate-pulse bg-secondary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-14 w-14 items-center justify-center rounded-full bg-background/80 backdrop-blur shadow-lg",
					children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-6 w-6 fill-current" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-6 w-6 fill-current ml-0.5" })
				})
			}),
			(eyebrow || title || description) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 p-5 pointer-events-none",
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.28em] text-white/60",
						children: eyebrow
					}),
					title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-serif text-xl leading-tight text-white sm:text-2xl",
						children: title
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-white/70",
						children: description
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: toggleMute,
				className: "absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur transition hover:bg-black/60",
				"aria-label": muted ? "Unmute" : "Mute",
				children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-4 w-4" })
			})
		]
	});
}
/**
* HomepageVideoGrid
*
* Shows 1–3 video sections in a responsive grid.
* Only renders videos that have a real URL — never shows placeholders.
*/
function HomepageVideoGrid({ videos }) {
	const live = videos.filter((v) => !!v.url?.trim());
	if (!live.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `grid gap-4 ${live.length === 1 ? "grid-cols-1 max-w-2xl mx-auto" : live.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`,
		children: live.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomepageVideoSection, {
			videoUrl: v.url,
			title: v.title,
			eyebrow: v.eyebrow,
			description: v.description,
			autoplay: i === 0,
			aspectRatio: live.length === 1 ? "16/9" : "4/3"
		}, v.url + i))
	});
}
function TopMarquee() {
	const items = [
		"FREE DELIVERY ON ORDERS ABOVE PKR 5,000",
		"CASH ON DELIVERY ACROSS PAKISTAN",
		"1 YEAR WARRANTY ON EVERY WATCH",
		"PREMIUM GIFT-READY PACKAGING",
		"FAST DELIVERY IN 2–4 BUSINESS DAYS"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-[60] w-full overflow-hidden bg-[#B08D57] text-white",
		"aria-label": "Timera benefits",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-[30px] items-center overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max animate-[marquee_28s_linear_infinite] whitespace-nowrap",
				children: [...items, ...items].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-5 text-[9px] font-semibold uppercase tracking-[0.18em] sm:px-7 sm:text-[10px]",
						children: item
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white/60",
						"aria-hidden": "true",
						children: "•"
					})]
				}, `${item}-${index}`))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_28s_linear_infinite\\] {
            animation: none;
          }
        }
      ` })]
	});
}
function HeroSlider() {
	const { data: slides = [] } = useQuery(heroSlidesQuery);
	const { data: paySettings } = useQuery(paymentSettingsQuery);
	const [index, setIndex] = (0, import_react.useState)(0);
	const count = slides.length;
	const next = (0, import_react.useCallback)(() => setIndex((i) => count ? (i + 1) % count : 0), [count]);
	const prev = (0, import_react.useCallback)(() => setIndex((i) => count ? (i - 1 + count) % count : 0), [count]);
	(0, import_react.useEffect)(() => {
		if (count < 2) return;
		const t = setInterval(next, 6500);
		return () => clearInterval(t);
	}, [count, next]);
	if (!slides.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative flex h-[70vh] min-h-[500px] max-h-[900px] items-center overflow-hidden bg-secondary",
		"aria-label": "Hero banner",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-luxe",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.3em] text-white/60",
						children: "Timera Watches"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-serif text-4xl leading-[1.04] text-white sm:text-5xl lg:text-6xl",
						children: [
							"Time,",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								style: { color: "#B08D57" },
								children: "beautifully made."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-sm leading-relaxed text-white/70 sm:text-base",
						children: "Premium watches with Cash on Delivery across Pakistan."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/shop",
							className: "inline-flex h-12 items-center justify-center gap-2 rounded-md px-7 text-[11px] font-semibold uppercase tracking-[0.2em]",
							style: {
								background: "#B08D57",
								color: "#FFFFFF"
							},
							children: ["Shop Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})
		})
	});
	const slide = slides[Math.min(index, count - 1)];
	const warrantyMonths = paySettings?.warrantyMonths ?? 12;
	const warrantyLabel = warrantyMonths >= 12 ? `${Math.round(warrantyMonths / 12)}-Year Warranty` : `${warrantyMonths}-Month Warranty`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[80vh] min-h-[540px] max-h-[900px] overflow-hidden bg-secondary",
		"aria-label": "Hero banner",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "sync",
				children: slide.videoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: slide.videoUrl,
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					poster: slide.image ?? void 0,
					className: "absolute inset-0 h-full w-full object-cover",
					"aria-hidden": true
				}, `vid-${slide.id}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: slide.image,
					alt: slide.title,
					initial: {
						opacity: 0,
						scale: 1.04
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: { opacity: 0 },
					transition: {
						duration: 1.2,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "absolute inset-0 h-full w-full object-cover",
					fetchPriority: "high",
					decoding: "async"
				}, slide.id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-luxe relative h-full flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 28
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "max-w-lg",
					children: [
						slide.eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-[10px] uppercase tracking-[0.3em] text-white/70",
							children: slide.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-serif text-4xl leading-[1.04] text-white sm:text-5xl lg:text-6xl",
							children: [
								slide.title,
								" ",
								slide.titleAccent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic",
									style: { color: "#B08D57" },
									children: slide.titleAccent
								})
							]
						}),
						slide.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:text-base",
							children: slide.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: slide.ctaHref || "/shop",
								className: "inline-flex h-12 items-center justify-center gap-2 rounded-md px-7 text-[11px] font-semibold uppercase tracking-[0.2em] transition",
								style: {
									background: "#B08D57",
									color: "#FFFFFF"
								},
								children: [slide.ctaLabel || "Shop Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/40 px-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10",
								children: "View All Watches"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/65",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-[#B08D57]" }), warrantyLabel]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-3.5 w-3.5 text-[#B08D57]" }), "Cash on Delivery"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3.5 w-3.5 text-[#B08D57]" }), "Delivery Across Pakistan"]
								})
							]
						})
					]
				}, `copy-${slide.id}`)
			}),
			count > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-6 left-0 right-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-luxe flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2",
						children: slides.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIndex(i),
							"aria-label": `Go to slide ${i + 1}`,
							className: `h-1 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-[#B08D57]" : "w-3 bg-white/30"}`
						}, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: prev,
							"aria-label": "Previous slide",
							className: "flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur transition hover:bg-black/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: next,
							"aria-label": "Next slide",
							className: "flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur transition hover:bg-black/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
						})]
					})]
				})
			})
		]
	});
}
function WhyTimera() {
	const { data: paySettings } = useQuery(paymentSettingsQuery);
	const warrantyMonths = paySettings?.warrantyMonths ?? 12;
	const warrantyLabel = warrantyMonths >= 12 ? `${Math.round(warrantyMonths / 12)}-Year Warranty` : `${warrantyMonths}-Month Warranty`;
	const freeAbove = paySettings?.freeDeliveryAbove ?? 5e3;
	const features = [
		{
			icon: CreditCard,
			title: "Cash on Delivery",
			desc: "Pay when your order arrives at your door. No advance payment required."
		},
		{
			icon: ShieldCheck,
			title: warrantyLabel,
			desc: "Every Timera timepiece comes with a full manufacturer's warranty."
		},
		{
			icon: Truck,
			title: "All Pakistan Delivery",
			desc: `Fast delivery to every city. Free shipping on orders above ${formatPrice(freeAbove)}.`
		},
		{
			icon: Package,
			title: "Premium Packaging",
			desc: "Gift-ready box with warranty card included with every order."
		},
		{
			icon: Headphones,
			title: "Real Customer Support",
			desc: "Call or WhatsApp us directly. We respond the same day."
		},
		{
			icon: ShieldCheck,
			title: "Quality Checked",
			desc: "Each watch is inspected before dispatch. Zero compromise on quality."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary py-16 sm:py-20",
		"aria-labelledby": "why-timera-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.3em] text-[#B08D57]",
						children: "Why Choose Timera"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "why-timera-heading",
						className: "mt-3 font-serif text-3xl text-white sm:text-4xl",
						children: "Built for Pakistan's customers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-xl text-sm text-white/55",
						children: "We understand what matters when you shop online. Here's why thousands of customers trust Timera."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#B08D57]/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5 text-[#B08D57]" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-white",
						children: f.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-relaxed text-white/55",
						children: f.desc
					})] })]
				}, f.title))
			})]
		})
	});
}
function TestimonialsSection() {
	const { data: testimonials = [] } = useQuery(testimonialsQuery);
	if (!testimonials.length) return null;
	const half = Math.ceil(testimonials.length / 2);
	const rowA = testimonials.slice(0, half);
	const rowB = testimonials.slice(half).length ? testimonials.slice(half) : testimonials.slice(0, half);
	const Card = ({ t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-3 w-[280px] shrink-0 rounded-xl border border-border bg-card p-5 sm:w-[340px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-0.5 text-[#B08D57]",
				children: Array.from({ length: Math.max(1, Math.min(5, t.rating)) }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 line-clamp-4 font-serif text-base leading-snug",
				children: [
					"\"",
					t.quote,
					"\""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 border-t border-border pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: t.name
				}), t.role && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: t.role
				})]
			})
		]
	});
	const Row = ({ items, reverse }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "group relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `flex w-max ${reverse ? "marquee-reverse" : "marquee-slow"} group-hover:[animation-play-state:paused]`,
			children: [...items, ...items].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { t }, `${t.id}-${i}`))
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden bg-onyx py-16 sm:py-20",
		"aria-labelledby": "reviews-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe mb-4 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[0.3em] text-primary",
					children: "Customer Reviews"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "reviews-heading",
					className: "mt-3 font-serif text-3xl sm:text-4xl",
					children: "What our customers say"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { items: rowA }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				items: rowB,
				reverse: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-luxe mt-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition hover:text-primary",
					children: ["Read more reviews", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})
			})
		]
	});
}
function FaqSection() {
	const { data: faqs = [] } = useQuery(faqsQuery);
	if (!faqs.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-luxe py-16 sm:py-20",
		"aria-labelledby": "faq-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[0.3em] text-primary",
					children: "Questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "faq-heading",
					className: "mt-3 font-serif text-3xl sm:text-4xl",
					children: "Frequently Asked"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "space-y-2",
				children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: f.id,
					className: "rounded-xl border border-border px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "py-4 text-sm font-medium hover:no-underline",
						children: f.question
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "pb-4 text-sm text-muted-foreground",
						children: f.answer
					})]
				}, f.id))
			})]
		})
	});
}
function SectionHeading({ eyebrow, title, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-end justify-between gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] uppercase tracking-[0.3em] text-primary",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 font-serif text-3xl sm:text-4xl",
			children: title
		})] }), href && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: href,
			className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition hover:text-primary",
			children: ["View all", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
		})]
	});
}
function PerfumeSection({ products }) {
	const perfumes = products.filter(isPerfume);
	if (!perfumes.length) return null;
	const giftSet = perfumes.find((p) => /set|bundle|trio/i.test(p.name));
	const bestsellers = perfumes.filter((p) => p.id !== giftSet?.id).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-luxe py-16 sm:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Fragrances",
				title: "Bestselling Perfumes",
				href: "/perfumes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-sm text-muted-foreground",
				children: "Long-lasting eau de parfum — crafted for Pakistan's climate."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4",
				children: bestsellers.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					index: i
				}, p.id))
			}),
			giftSet && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-[1.1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-7 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.3em] text-primary",
							children: "Gift Sets"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-serif text-2xl md:text-3xl",
							children: giftSet.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-sm text-muted-foreground",
							children: giftSet.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "h-11 px-7 text-xs uppercase tracking-[0.2em]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$slug",
									params: { slug: giftSet.slug },
									children: "Shop Gift Set"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "h-11 px-7 text-xs uppercase tracking-[0.2em]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/perfumes",
									children: "All Fragrances"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative order-first min-h-[240px] md:order-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: giftSet.image,
						alt: giftSet.name,
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				})]
			})
		]
	});
}
function FinalCta() {
	const { data: settings } = useQuery(siteSettingsQuery);
	const { data: paySettings } = useQuery(paymentSettingsQuery);
	const waNum = (settings?.whatsappNumber ?? settings?.contactPhone ?? "").replace(/[^0-9]/g, "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-luxe pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative overflow-hidden rounded-2xl bg-secondary p-10 text-center md:p-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.3em] text-[#B08D57]",
						children: "Order Today"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-serif text-3xl text-white sm:text-4xl",
						children: "Ready to wear a Timera?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-white/60",
						children: [
							"Cash on Delivery across Pakistan.",
							" ",
							paySettings?.warrantyMonths ? `${Math.round(paySettings.warrantyMonths / 12)}-year warranty` : "1-year warranty",
							" ",
							"on every watch. Order now and receive it in 2–4 business days."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "h-12 px-8 text-xs uppercase tracking-[0.2em]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop",
								children: ["Shop Watches", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						}), waNum && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://wa.me/${waNum}?text=${encodeURIComponent("Hi Timera! I want to order a watch.")}`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex h-12 items-center gap-2 rounded-md border border-white/30 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10",
							children: "WhatsApp Order"
						})]
					})
				]
			})
		})
	});
}
function HomePage() {
	const { data: products = [] } = useQuery(productsQuery);
	const { data: collectionsList = [] } = useQuery(collectionsQuery);
	const { data: blogPosts = [] } = useQuery(blogPostsQuery);
	const { data: settings } = useQuery(siteSettingsQuery);
	const watches = products.filter((p) => p.productType !== "perfume");
	const featured = watches.filter((p) => p.featured).slice(0, 8);
	const displayFeatured = featured.length ? featured : watches.slice(0, 8);
	const bestsellers = watches.filter((p) => p.badge === "Bestseller").slice(0, 8);
	const newArrivals = watches.filter((p) => p.badge === "New").slice(0, 8);
	const waLink = `https://wa.me/${(settings?.whatsappNumber ?? settings?.contactPhone ?? "").replace(/[^0-9]/g, "").replace(/^0/, "92") || "923000000000"}?text=${encodeURIComponent("Hi Timera! I need help choosing a watch.")}`;
	const homepageVideos = [
		{
			url: settings?.videoWristUrl ?? "",
			eyebrow: "Watch On Wrist",
			title: settings?.videoWristTitle ?? "See how it looks on the wrist"
		},
		{
			url: settings?.videoShowcaseUrl ?? "",
			eyebrow: "Product Showcase",
			title: settings?.videoShowcaseTitle ?? "Every detail, up close"
		},
		{
			url: settings?.videoUgcUrl ?? "",
			eyebrow: "Real Customers",
			title: settings?.videoUgcTitle ?? "What our customers say"
		}
	].filter((video) => video.url.trim());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopMarquee, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: waLink,
			target: "_blank",
			rel: "noopener noreferrer",
			className: "fixed bottom-6 right-4 z-[55] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 lg:bottom-6",
			"aria-label": "Chat with Timera on WhatsApp",
			title: "Need help? Chat with us on WhatsApp",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 32 32",
				className: "h-7 w-7 fill-current",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.02 3C9.4 3 4.04 8.36 4.04 14.98c0 2.36.69 4.56 1.88 6.41L4 29l7.79-2.04a11.9 11.9 0 0 0 4.23.78h.01c6.61 0 11.98-5.36 11.98-11.98C28.01 8.36 22.64 3 16.02 3Zm0 21.72h-.01c-1.3 0-2.57-.35-3.68-1l-.26-.16-4.62 1.21 1.23-4.5-.17-.28a9.72 9.72 0 0 1-1.49-5.19c0-5.37 4.37-9.73 9.74-9.73 2.6 0 5.05 1.01 6.89 2.85a9.66 9.66 0 0 1 2.85 6.89c0 5.37-4.37 9.91-9.74 9.91Zm5.34-7.28c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.35-1.46-.87-.77-1.46-1.73-1.63-2.02-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.51h-.56c-.19 0-.51.07-.77.36-.27.29-1.01.99-1.01 2.42s1.04 2.8 1.19 3c.15.19 2.05 3.13 4.97 4.39.69.3 1.24.48 1.66.61.7.22 1.33.19 1.83.12.56-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.34Z" })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlider, {}),
		bestsellers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-14 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Most Popular",
				title: "Best Sellers",
				href: "/shop?badge=bestseller"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4",
				children: bestsellers.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					index: i,
					priority: i < 4
				}, p.id))
			})]
		}),
		displayFeatured.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-14 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Featured",
				title: "Our Finest Watches",
				href: "/shop"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4",
				children: displayFeatured.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					index: i,
					priority: i < 4
				}, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyTimera, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
		newArrivals.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-14 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Just Landed",
				title: "New Arrivals",
				href: "/shop?badge=new"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4",
				children: newArrivals.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					index: i
				}, p.id))
			})]
		}),
		homepageVideos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-14 sm:py-20",
			"aria-labelledby": "homepage-videos-heading",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Real Timera",
					title: "See Timera In Motion"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm text-muted-foreground",
					children: "See our watches on the wrist, explore the packaging, and hear from real customers before you order."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomepageVideoGrid, { videos: homepageVideos })
				})
			]
		}),
		collectionsList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-14 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Browse by Style",
				title: "Watch Collections",
				href: "/collections"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: collectionsList.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/collections/$slug",
					params: { slug: c.slug },
					className: "group relative block aspect-[4/5] overflow-hidden rounded-xl bg-card",
					children: [
						c.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.image,
							alt: c.name,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-5",
							children: [
								c.tagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-[0.25em] text-white/60",
									children: c.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-serif text-xl text-white",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-1.5 text-xs text-white/70 opacity-0 -translate-x-1 transition-all duration-400 group-hover:translate-x-0 group-hover:opacity-100",
									children: ["Explore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})
							]
						})
					]
				}, c.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PerfumeSection, { products }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxe py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative aspect-[5/6] overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: atelier_default,
						alt: "Timera watches",
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.3em] text-primary",
						children: "Our Story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-serif text-3xl leading-[1.06] sm:text-4xl md:text-5xl",
						children: [
							"A young brand,",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								style: { color: "#B08D57" },
								children: "one standard."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground",
						children: "Timera was founded with a simple idea: a watch should look and feel genuinely premium without an inflated price tag. Every piece is inspected before dispatch, ships with a warranty card, and is backed by a team you can reach directly on WhatsApp."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-3 gap-5",
						children: [
							{
								n: "2025",
								l: "Founded"
							},
							{
								n: `${Math.round(settings?.warrantyYears ?? 1)} yr`,
								l: "Warranty"
							},
							{
								n: "All PK",
								l: "COD Available"
							}
						].map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-3xl",
							style: { color: "#B08D57" },
							children: st.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: st.l
						})] }, st.l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						className: "mt-8 h-11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							children: ["Read Our Story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					})
				] })]
			})
		}),
		blogPosts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-14 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "The Journal",
				title: "Watch Stories",
				href: "/blog"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
				children: blogPosts.slice(0, 4).map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "group block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] overflow-hidden rounded-xl bg-card",
						children: post.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: post.image,
							alt: post.title,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[10px] uppercase tracking-widest text-primary",
								children: [
									post.category,
									" · ",
									post.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-serif text-lg leading-tight transition group-hover:text-primary",
								children: post.title
							}),
							post.excerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 line-clamp-2 text-xs text-muted-foreground",
								children: post.excerpt
							})
						]
					})]
				}, post.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { HomePage as component };
