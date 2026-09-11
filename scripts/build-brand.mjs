import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import opentype from "opentype.js";
import wawoff from "wawoff2";
import sharp from "sharp";

/**
 * Generates the brand kit: the master artwork plus one folder per social
 * network holding exactly the sizes that network asks for.
 *
 * Two things drive the output:
 *
 * - Profile pictures ship on a black background. A transparent PNG whose
 *   artwork is white disappears entirely on any network that renders a light
 *   backdrop, which is the common case for avatars.
 * - Most networks crop avatars to a circle, so the square artwork keeps enough
 *   padding for the brackets to survive the crop.
 */

const OUT = process.argv[2] ?? "./brand";
const WORK = fs.mkdtempSync(path.join(os.tmpdir(), "brand-"));

const CYAN = "#67E8F9";
const WHITE = "#FFFFFF";
const BLACK = "#000000";

const FONT_URLS = {
  // El logotipo conserva Sora: se convierte a curvas al exportar, así que la
  // fuente no hace falta en tiempo de ejecución.
  "sora-800.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/sora@latest/latin-800-normal.woff2",
  "sora-400.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/sora@latest/latin-400-normal.woff2",
};

for (const [file, url] of Object.entries(FONT_URLS)) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`No se pudo descargar ${file}: ${res.status}`);
  fs.writeFileSync(path.join(WORK, file), Buffer.from(await res.arrayBuffer()));
}

async function loadFont(file) {
  const ttf = await wawoff.decompress(fs.readFileSync(path.join(WORK, file)));
  return opentype.parse(Uint8Array.from(ttf).buffer);
}
const bold = await loadFont("sora-800.woff2");
const regular = await loadFont("sora-400.woff2");

/** Outlines a string, optionally letter-spaced. */
function trace(font, text, size, { tracking = 0, fill = WHITE } = {}) {
  let x = 0;
  const paths = [];
  for (const ch of text) {
    paths.push({ d: font.getPath(ch, x, 0, size).toPathData(2), fill });
    x += font.getAdvanceWidth(ch, size) + tracking;
  }
  return { paths, width: x - tracking };
}

function place(traced, dx, dy) {
  return `<g transform="translate(${dx.toFixed(1)} ${dy.toFixed(1)})">${traced.paths
    .map((p) => `<path d="${p.d}" fill="${p.fill}"/>`)
    .join("")}</g>`;
}

// ---- the wordmark --------------------------------------------------------

const LETTER = 100;
const BRACKET = LETTER * 1.5;
const GAP = LETTER * 0.14;

function markParts(ink = "colour") {
  const fill = (role) => {
    if (ink === "black") return BLACK;
    if (ink === "white") return WHITE;
    return role === "dot" ? CYAN : WHITE;
  };
  const open = trace(regular, "[", BRACKET, { fill: fill("frame") });
  const lr = trace(bold, "LR", LETTER, { fill: fill("letters") });
  const dot = trace(bold, ".", LETTER, { fill: fill("dot") });
  const close = trace(regular, "]", BRACKET, { fill: fill("frame") });

  let x = 0;
  const groups = [];
  groups.push(place(open, x, 0));
  x += open.width + GAP;
  groups.push(place(lr, x, 0));
  x += lr.width;
  groups.push(place(dot, x, 0));
  x += dot.width + GAP;
  groups.push(place(close, x, 0));
  x += close.width;

  return { svg: groups.join(""), width: x };
}

// The brackets are the tallest element, so they set the vertical extent.
const CAP_TOP = -BRACKET * 0.76;
const CAP_BOTTOM = BRACKET * 0.22;
const MARK_H = CAP_BOTTOM - CAP_TOP;

/** Standalone logo file. `square` also keeps the crop circle-safe. */
function logoSvg({ square = false, pad = 0.28, ink = "colour", bg = null }) {
  const { svg, width } = markParts(ink);
  const padPx = MARK_H * pad;
  const vbW = square ? Math.max(width, MARK_H) + padPx * 2 : width + padPx * 2;
  const vbH = square ? vbW : MARK_H + padPx * 2;
  const dx = (vbW - width) / 2;
  const dy = (vbH - MARK_H) / 2 - CAP_TOP;

  const backdrop = bg ? `<rect width="${vbW}" height="${vbH}" fill="${bg}"/>` : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW.toFixed(1)} ${vbH.toFixed(1)}" width="${vbW.toFixed(0)}" height="${vbH.toFixed(0)}" role="img" aria-label="Lucas Riera">
  <title>Lucas Riera</title>
  ${backdrop}
  <g transform="translate(${dx.toFixed(1)} ${dy.toFixed(1)})">${svg}</g>
</svg>`;
}

/** Deterministic starfield so repeated runs produce identical files. */
function stars(w, h, count, seed) {
  let s = seed;
  const rand = () => ((s = (s * 1103515245 + 12345) % 2147483648) / 2147483648);
  return Array.from({ length: count }, () => {
    const x = rand() * w;
    const y = rand() * h;
    const r = rand() > 0.94 ? 2.4 : rand() > 0.7 ? 1.5 : 0.9;
    const cyan = rand() < 0.14;
    return `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r}" fill="${cyan ? CYAN : WHITE}" opacity="${(0.25 + rand() * 0.6).toFixed(2)}"/>`;
  }).join("");
}

/**
 * Header / cover artwork. `safeH` is the height the network guarantees will be
 * visible — YouTube in particular crops covers hard on small screens — so the
 * content is sized against that rather than the full canvas.
 */
function bannerSvg(w, h, { safeH = h, markScale = 1 } = {}) {
  const { svg, width } = markParts();
  const target = Math.min(w * 0.26, safeH * 0.42) * markScale;
  const scale = target / MARK_H;
  const mw = width * scale;
  const mh = MARK_H * scale;

  const name = trace(bold, "LUCAS RIERA", target * 0.3, { tracking: target * 0.02 });
  const role = trace(regular, "AI PRODUCT ENGINEER", target * 0.16, { tracking: target * 0.055 });

  // Every band the block occupies: mark, gap, name, gap, role. Leaving the role
  // out of this sum pushed the whole block down and left its baseline a few
  // pixels from the bottom edge.
  const GAP_AFTER_MARK = target * 0.42;
  const NAME_H = target * 0.3;
  const GAP_AFTER_NAME = target * 0.28;
  const ROLE_H = target * 0.16;
  const blockH = mh + GAP_AFTER_MARK + NAME_H + GAP_AFTER_NAME + ROLE_H;
  // Centre the block on the guaranteed-visible band, not on the full canvas:
  // on YouTube those differ by hundreds of pixels and the role line ends up
  // straddling the crop.
  const top = (h - safeH) / 2 + (safeH - blockH) / 2;

  const markY = top + mh;
  const nameY = markY + GAP_AFTER_MARK + NAME_H;
  const roleY = nameY + GAP_AFTER_NAME + ROLE_H;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <radialGradient id="g" cx="50%" cy="42%" r="62%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${BLACK}"/>
  ${stars(w, h, Math.round((w * h) / 9000), 20260910)}
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <g transform="translate(${((w - mw) / 2).toFixed(1)} ${(markY - CAP_BOTTOM * scale).toFixed(1)}) scale(${scale.toFixed(4)})">${svg}</g>
  ${place(name, (w - name.width) / 2, nameY)}
  ${place(role, (w - role.width) / 2, roleY)}
</svg>`;
}

async function png(svg, file, { width, height } = {}) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  let img = sharp(Buffer.from(svg), { density: 400 });
  if (width) {
    img = img.resize(width, height, {
      fit: height ? "cover" : "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    });
  }
  await img.png({ compressionLevel: 9 }).toFile(file);
}

// ---- master artwork ------------------------------------------------------

const MASTERS = {
  "logo": logoSvg({}),
  "logo-square": logoSvg({ square: true, pad: 0.34 }),
  "logo-white": logoSvg({ ink: "white" }),
  "logo-black": logoSvg({ ink: "black" }),
  "logo-black-square": logoSvg({ square: true, pad: 0.34, ink: "black" }),
};

// Wipe the generated artwork but keep any hand-written docs: the README lives
// in this folder and a blind rmSync would delete it on every run.
if (fs.existsSync(OUT)) {
  for (const entry of fs.readdirSync(OUT)) {
    if (entry === "README.md") continue;
    fs.rmSync(path.join(OUT, entry), { recursive: true, force: true });
  }
}
for (const [name, svg] of Object.entries(MASTERS)) {
  fs.mkdirSync(path.join(OUT, "logo"), { recursive: true });
  fs.writeFileSync(path.join(OUT, "logo", `${name}.svg`), svg);
}
await png(MASTERS["logo"], path.join(OUT, "logo", "logo-2000w.png"), { width: 2000 });
await png(MASTERS["logo-black"], path.join(OUT, "logo", "logo-black-2000w.png"), { width: 2000 });

// Avatars sit on black so they stay visible wherever the network puts them.
const avatarSvg = logoSvg({ square: true, pad: 0.42, bg: BLACK });
const avatarTransparent = logoSvg({ square: true, pad: 0.42 });

// ---- per-network output --------------------------------------------------

const NETWORKS = [
  {
    dir: "linkedin",
    avatars: [["foto-perfil-400.png", 400], ["foto-perfil-800.png", 800]],
    banners: [["portada-1584x396.png", 1584, 396]],
  },
  {
    dir: "x-twitter",
    avatars: [["foto-perfil-400.png", 400]],
    banners: [["cabecera-1500x500.png", 1500, 500]],
  },
  {
    dir: "instagram",
    avatars: [["foto-perfil-320.png", 320], ["foto-perfil-1080.png", 1080]],
    banners: [["publicacion-1080x1080.png", 1080, 1080]],
  },
  {
    dir: "github",
    avatars: [["avatar-500.png", 500]],
  },
  {
    dir: "youtube",
    avatars: [["icono-canal-800.png", 800]],
    // YouTube crops this hard; only the middle 1235x338 is safe on every device.
    banners: [["banner-2048x1152.png", 2048, 1152, { safeH: 338, markScale: 0.82 }]],
  },
  {
    dir: "facebook",
    avatars: [["foto-perfil-320.png", 320]],
    banners: [["portada-820x312.png", 820, 312]],
  },
  {
    dir: "whatsapp",
    avatars: [["foto-perfil-640.png", 640]],
  },
];

for (const net of NETWORKS) {
  for (const [file, size] of net.avatars ?? []) {
    await png(avatarSvg, path.join(OUT, net.dir, file), { width: size, height: size });
    await png(avatarTransparent, path.join(OUT, net.dir, file.replace(".png", "-transparente.png")), {
      width: size,
      height: size,
    });
  }
  for (const [file, w, h, opts] of net.banners ?? []) {
    await png(bannerSvg(w, h, opts), path.join(OUT, net.dir, file), { width: w, height: h });
  }
}

// Email signatures need a small horizontal file on transparent.
await png(MASTERS["logo"], path.join(OUT, "email", "firma-400w.png"), { width: 400 });
await png(MASTERS["logo-black"], path.join(OUT, "email", "firma-400w-fondo-claro.png"), { width: 400 });

// ---- favicons ------------------------------------------------------------
// `[LR.]` does not survive 16px, so the icon keeps just the initials and the
// dot. Outlined here so the build machine's fonts never matter.
function faviconSvg(size) {
  const s = 100;
  const lr = bold.getPath("LR", 0, 0, s);
  const dot = bold.getPath(".", bold.getAdvanceWidth("LR", s), 0, s);
  const w = bold.getAdvanceWidth("LR", s) + bold.getAdvanceWidth(".", s);
  const h = s * 0.72;
  const pad = h * 0.42;
  const vb = Math.max(w, h) + pad * 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vb.toFixed(1)} ${vb.toFixed(1)}" width="${size}" height="${size}">
  <rect width="${vb.toFixed(1)}" height="${vb.toFixed(1)}" fill="${BLACK}"/>
  <g transform="translate(${((vb - w) / 2).toFixed(1)} ${((vb + h) / 2).toFixed(1)})">
    <path d="${lr.toPathData(2)}" fill="${WHITE}"/>
    <path d="${dot.toPathData(2)}" fill="${CYAN}"/>
  </g>
</svg>`;
}

for (const [file, size] of [["app/icon.png", 64], ["app/apple-icon.png", 180]]) {
  await sharp(Buffer.from(faviconSvg(size)), { density: 500 }).resize(size, size).png().toFile(file);
}

// The site serves the wordmark from public/brand.
fs.mkdirSync("public/brand", { recursive: true });
for (const name of ["logo", "logo-square", "logo-black"]) {
  fs.copyFileSync(path.join(OUT, "logo", `${name}.svg`), path.join("public/brand", `${name}.svg`));
}

const count = fs
  .readdirSync(OUT, { recursive: true })
  .filter((f) => /\.(png|svg)$/.test(f)).length;
console.log(`listo: ${count} archivos en ${OUT}`);
