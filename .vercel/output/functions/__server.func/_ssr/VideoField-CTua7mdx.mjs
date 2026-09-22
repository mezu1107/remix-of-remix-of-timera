import { o as __toESM } from "../_runtime.mjs";
import { o as require_react, s as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { Q as LoaderCircle, l as Video, p as Upload, r as X } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-CqS_jkNP.mjs";
import { t as Button } from "./button-Cyoh4z-g.mjs";
import { t as Input } from "./input-mVzY-Vxx.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/VideoField-CTua7mdx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* upload.ts — Supabase Storage upload helpers
*
* Uploads any file (image OR video) directly to Supabase Storage and returns
* the public URL. The admin can then drag-and-drop from their phone or PC.
*
* Storage buckets used:
*   media   — images, videos, hero backgrounds, product gallery
*
* The bucket must exist in Supabase Storage with public read access.
* Create it once in Dashboard → Storage → New bucket → name: "media" → Public.
*/
var BUCKETS = [
	"homepage-videos",
	"media",
	"products",
	"public",
	"assets"
];
function fileToDataUrl(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result));
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Failed to read image file"));
		reader.readAsDataURL(file);
	});
}
/**
* Uploads a File to Supabase Storage and returns the public URL.
* Falls back to base64 Data URL if storage bucket is restricted or unconfigured.
*/
async function uploadToStorage(file, folder = "uploads") {
	const ext = file.name.split(".").pop()?.toLowerCase() ?? "bin";
	const random = Math.random().toString(36).slice(2, 8);
	const path = `${folder}/${Date.now()}-${random}.${ext}`;
	for (const bucket of BUCKETS) try {
		const { error } = await supabase.storage.from(bucket).upload(path, file, {
			cacheControl: "31536000",
			upsert: true,
			contentType: file.type || void 0
		});
		if (!error) {
			const { data } = supabase.storage.from(bucket).getPublicUrl(path);
			if (data?.publicUrl) return data.publicUrl;
		}
	} catch {}
	if (file.type.startsWith("image/")) return await fileToDataUrl(file);
	throw new Error("Could not upload file to storage bucket. Please check Supabase Storage permissions.");
}
/**
* Compress an image in-browser before uploading.
* Falls back gracefully if canvas is unavailable.
*/
async function compressImage(file, maxEdge = 1400, quality = .85) {
	if (!file.type.startsWith("image/")) throw new Error("Not an image file");
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Could not read that file"));
		reader.onload = () => {
			const img = new Image();
			img.onerror = () => resolve(file);
			img.onload = () => {
				const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
				const w = Math.max(1, Math.round(img.width * scale));
				const h = Math.max(1, Math.round(img.height * scale));
				const canvas = document.createElement("canvas");
				canvas.width = w;
				canvas.height = h;
				const ctx = canvas.getContext("2d");
				if (!ctx) return resolve(file);
				ctx.fillStyle = "#ffffff";
				ctx.fillRect(0, 0, w, h);
				ctx.drawImage(img, 0, 0, w, h);
				canvas.toBlob((blob) => {
					if (!blob) return resolve(file);
					resolve(new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg" }));
				}, "image/jpeg", quality);
			};
			img.src = String(reader.result);
		};
		reader.readAsDataURL(file);
	});
}
function ImageField({ value, onChange, folder = "images" }) {
	const inputRef = (0, import_react.useRef)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const handle = async (files) => {
		const file = files?.[0];
		if (!file) return;
		setBusy(true);
		try {
			let toUpload = file;
			if (file.type.startsWith("image/")) toUpload = await compressImage(file);
			onChange(await uploadToStorage(toUpload, folder));
			toast.success("Image uploaded ✓");
		} catch (e) {
			toast.error(e?.message ?? "Upload failed");
		} finally {
			setBusy(false);
			if (inputRef.current) inputRef.current.value = "";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1.5 space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onDragOver: (e) => {
					e.preventDefault();
					setDragging(true);
				},
				onDragLeave: () => setDragging(false),
				onDrop: (e) => {
					e.preventDefault();
					setDragging(false);
					handle(e.dataTransfer.files);
				},
				onClick: () => !busy && inputRef.current?.click(),
				className: `flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center transition
          ${dragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/30"}`,
				children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Uploading…"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-6 w-6 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Drop image here or tap to browse"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "JPG, PNG, WebP — from your phone or PC"
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept: "image/*",
				capture: "environment",
				hidden: true,
				onChange: (e) => handle(e.target.files)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: value ?? "",
					placeholder: "Or paste an image URL",
					onChange: (e) => onChange(e.target.value),
					className: "h-9 flex-1 text-sm"
				}), value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon",
					className: "h-9 w-9 shrink-0",
					onClick: () => onChange(""),
					"aria-label": "Remove",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}),
			value && !value.startsWith("PASTE") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative inline-block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: value,
					alt: "Preview",
					className: "h-28 w-auto max-w-full rounded-lg border border-border object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange(""),
					"aria-label": "Remove image",
					className: "absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full border border-border bg-card shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
				})]
			})
		]
	});
}
function ImagesField({ value, onChange, folder = "images" }) {
	const inputRef = (0, import_react.useRef)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const [urlInput, setUrlInput] = (0, import_react.useState)("");
	const handle = async (files) => {
		if (!files?.length) return;
		setBusy(true);
		try {
			const urls = [];
			for (const f of Array.from(files)) {
				const compressed = f.type.startsWith("image/") ? await compressImage(f) : f;
				urls.push(await uploadToStorage(compressed, folder));
			}
			onChange([...value, ...urls]);
			toast.success(`${urls.length} image${urls.length > 1 ? "s" : ""} uploaded ✓`);
		} catch (e) {
			toast.error(e?.message ?? "Upload failed");
		} finally {
			setBusy(false);
			if (inputRef.current) inputRef.current.value = "";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1.5 space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onDragOver: (e) => {
					e.preventDefault();
					setDragging(true);
				},
				onDragLeave: () => setDragging(false),
				onDrop: (e) => {
					e.preventDefault();
					setDragging(false);
					handle(e.dataTransfer.files);
				},
				onClick: () => !busy && inputRef.current?.click(),
				className: `flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-5 text-center transition
          ${dragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/30"}`,
				children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Uploading…"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Drop images or tap to browse"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Select multiple — works from phone camera too"
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept: "image/*",
				multiple: true,
				capture: "environment",
				hidden: true,
				onChange: (e) => handle(e.target.files)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: urlInput,
					placeholder: "Or paste image URL",
					onChange: (e) => setUrlInput(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							if (urlInput.trim()) {
								onChange([...value, urlInput.trim()]);
								setUrlInput("");
							}
						}
					},
					className: "h-9 flex-1 text-sm"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					className: "h-9 shrink-0 text-xs",
					onClick: () => {
						if (urlInput.trim()) {
							onChange([...value, urlInput.trim()]);
							setUrlInput("");
						}
					},
					children: "Add"
				})]
			}),
			value.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: value.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "",
						className: "h-20 w-20 rounded-lg border border-border object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Remove",
						onClick: () => onChange(value.filter((_, j) => j !== i)),
						className: "absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full border border-border bg-card shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-2.5 w-2.5" })
					})]
				}, `${src.slice(-20)}-${i}`))
			})
		]
	});
}
function VideoField({ value, onChange, label = "Video", help, folder = "videos" }) {
	const inputRef = (0, import_react.useRef)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const hasVideo = !!value?.trim();
	const handle = async (files) => {
		const file = files?.[0];
		if (!file) return;
		if (!file.type.startsWith("video/")) {
			toast.error("Please select a video file (MP4, MOV, WebM)");
			return;
		}
		setBusy(true);
		try {
			onChange(await uploadToStorage(file, folder));
			toast.success("Video uploaded ✓ — save to publish");
		} catch (e) {
			toast.error(e?.message ?? "Upload failed");
		} finally {
			setBusy(false);
			if (inputRef.current) inputRef.current.value = "";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1.5 space-y-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onDragOver: (e) => {
					e.preventDefault();
					setDragging(true);
				},
				onDragLeave: () => setDragging(false),
				onDrop: (e) => {
					e.preventDefault();
					setDragging(false);
					handle(e.dataTransfer.files);
				},
				onClick: () => !busy && inputRef.current?.click(),
				className: `flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center transition
          ${dragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/30"}`,
				children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Uploading video… please wait"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-6 w-6 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Drop video here or tap to browse"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "MP4, MOV, WebM — from your phone or PC"
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept: "video/mp4,video/webm,video/quicktime,video/*",
				capture: "environment",
				hidden: true,
				onChange: (e) => handle(e.target.files)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: value ?? "",
					placeholder: "Or paste a video URL (MP4/WebM)",
					onChange: (e) => onChange(e.target.value),
					className: "h-9 flex-1 text-sm"
				}), value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon",
					className: "h-9 w-9 shrink-0",
					onClick: () => onChange(""),
					"aria-label": "Remove",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}),
			help && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: help
			}),
			hasVideo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative inline-block w-full max-w-xs overflow-hidden rounded-xl border border-border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: value,
					controls: true,
					muted: true,
					playsInline: true,
					preload: "metadata",
					className: "w-full max-h-48 object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange(""),
					"aria-label": "Remove video",
					className: "absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full border border-border bg-card/90 shadow-sm hover:text-destructive transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
				})]
			})
		]
	});
}
function VideosField({ value, onChange, folder = "videos" }) {
	const inputRef = (0, import_react.useRef)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const [urlInput, setUrlInput] = (0, import_react.useState)("");
	const handle = async (files) => {
		if (!files?.length) return;
		const videoFiles = Array.from(files).filter((f) => f.type.startsWith("video/") || /\.(mp4|webm|mov|m4v)$/i.test(f.name));
		if (!videoFiles.length) {
			toast.error("Please select video files (MP4, MOV, WebM)");
			return;
		}
		setBusy(true);
		try {
			const urls = [];
			for (const f of videoFiles) urls.push(await uploadToStorage(f, folder));
			onChange([...value, ...urls]);
			toast.success(`${urls.length} video${urls.length > 1 ? "s" : ""} uploaded ✓`);
		} catch (e) {
			toast.error(e?.message ?? "Upload failed");
		} finally {
			setBusy(false);
			if (inputRef.current) inputRef.current.value = "";
		}
	};
	function remove(idx) {
		onChange(value.filter((_, i) => i !== idx));
	}
	function moveUp(idx) {
		if (idx === 0) return;
		const a = [...value];
		[a[idx - 1], a[idx]] = [a[idx], a[idx - 1]];
		onChange(a);
	}
	function moveDown(idx) {
		if (idx === value.length - 1) return;
		const a = [...value];
		[a[idx], a[idx + 1]] = [a[idx + 1], a[idx]];
		onChange(a);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1.5 space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onDragOver: (e) => {
					e.preventDefault();
					setDragging(true);
				},
				onDragLeave: () => setDragging(false),
				onDrop: (e) => {
					e.preventDefault();
					setDragging(false);
					handle(e.dataTransfer.files);
				},
				onClick: () => !busy && inputRef.current?.click(),
				className: `flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center transition
          ${dragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/30"}`,
				children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Uploading… please wait"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-6 w-6 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Drop videos here or tap to browse"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "MP4, MOV, WebM · phone or PC · multiple at once"
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept: "video/mp4,video/webm,video/quicktime,video/*",
				multiple: true,
				capture: "environment",
				hidden: true,
				onChange: (e) => handle(e.target.files)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: urlInput,
					placeholder: "Or paste video URL (MP4)",
					onChange: (e) => setUrlInput(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							if (urlInput.trim()) {
								onChange([...value, urlInput.trim()]);
								setUrlInput("");
							}
						}
					},
					className: "h-9 flex-1 text-sm"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					className: "h-9 shrink-0 text-xs",
					onClick: () => {
						if (urlInput.trim()) {
							onChange([...value, urlInput.trim()]);
							setUrlInput("");
						}
					},
					children: "Add URL"
				})]
			}),
			value.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "No videos yet — upload from your phone or PC above."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: value.map((url, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 rounded-xl border border-border bg-card p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-center gap-1 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => moveUp(idx),
								disabled: idx === 0,
								className: "h-6 w-6 rounded flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-25 transition text-xs",
								"aria-label": "Move up",
								children: "▲"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => moveDown(idx),
								disabled: idx === value.length - 1,
								className: "h-6 w-6 rounded flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-25 transition text-xs",
								"aria-label": "Move down",
								children: "▼"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5",
									children: ["Video ", idx + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									src: url,
									controls: true,
									muted: true,
									playsInline: true,
									preload: "metadata",
									className: "w-full max-h-36 rounded-lg object-contain bg-black/5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[10px] text-muted-foreground truncate",
									title: url,
									children: url
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => remove(idx),
							"aria-label": "Remove video",
							className: "shrink-0 self-start text-muted-foreground hover:text-destructive transition mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})
					]
				}, url + idx))
			})
		]
	});
}
//#endregion
export { compressImage as a, VideosField as i, ImagesField as n, uploadToStorage as o, VideoField as r, ImageField as t };
