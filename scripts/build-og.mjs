import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import opentype from "opentype.js";
import wawoff from "wawoff2";
import sharp from "sharp";

/**
 * Builds public/og-image.png — the card shown when the site is shared. Text is
 * outlined rather than set live so the render never depends on a font being
 * available, and the copy stays language-neutral because one image serves all
 * three locales.
 */

const OUT = process.argv[2] ?? "./public/og-image.png";
const W = 1200;
const H = 630;

const WHITE = "#FFFFFF";
const CYAN = "#67E8F9";

const WORK = fs.mkdtempSync(path.join(os.tmpdir(), "og-"));
const FONTS = {
  // La marca conserva Sora; el nombre y el rol usan Arimo, métricamente
  // compatible con la Helvetica/Arial que resuelve la pila de sistema en la web.
  "sora-800.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/sora@latest/latin-800-normal.woff2",
  "sora-400.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/sora@latest/latin-400-normal.woff2",
  "sans-bold.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/arimo@latest/latin-700-normal.woff2",
  "sans-regular.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/arimo@latest/latin-400-normal.woff2",
};
for (const [file, url] of Object.entries(FONTS)) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`No se pudo descargar ${file}: ${res.status}`);
  fs.writeFileSync(path.join(WORK, file), Buffer.from(await res.arrayBuffer()));
}

async function loadFont(file) {
  const ttf = await wawoff.decompress(fs.readFileSync(path.join(WORK, file)));
  return opentype.parse(Uint8Array.from(ttf).buffer);
}
const soraBold = await loadFont("sora-800.woff2");
const soraRegular = await loadFont("sora-400.woff2");
const bold = await loadFont("sans-bold.woff2");
const regular = await loadFont("sans-regular.woff2");

/** Outlines a string, optionally letter-spaced, and returns paths plus width. */
function trace(font, text, size, { tracking = 0, fill = WHITE } = {}) {
  let x = 0;
  const paths = [];
  for (const ch of text) {
    const p = font.getPath(ch, x, 0, size);
    paths.push({ d: p.toPathData(2), fill });
    x += font.getAdvanceWidth(ch, size) + tracking;
  }
  return { paths, width: x - tracking };
}

function group(traced, dx, dy) {
  return `<g transform="translate(${dx.toFixed(1)} ${dy.toFixed(1)})">${traced.paths
    .map((p) => `<path d="${p.d}" fill="${p.fill}"/>`)
    .join("")}</g>`;
}

// ---- wordmark [LR.] ------------------------------------------------------
const LETTER = 96;
const BRACKET = LETTER * 1.5;
const GAP = LETTER * 0.14;

const openB = trace(soraRegular, "[", BRACKET);
const lr = trace(soraBold, "LR", LETTER);
const dot = trace(soraBold, ".", LETTER, { fill: CYAN });
const closeB = trace(soraRegular, "]", BRACKET);

const markW = openB.width + GAP + lr.width + dot.width + GAP + closeB.width;
const markX = (W - markW) / 2;
const markY = 285;

let mx = markX;
const markSvg = [
  group(openB, mx, markY),
  ((mx += openB.width + GAP), group(lr, mx, markY)),
  ((mx += lr.width), group(dot, mx, markY)),
  ((mx += dot.width + GAP), group(closeB, mx, markY)),
].join("");

// ---- name and role -------------------------------------------------------
const name = trace(bold, "LUCAS RIERA", 42, { tracking: 2 });
const role = trace(regular, "AI PRODUCT ENGINEER", 21, { tracking: 7.5, fill: "#FFFFFF" });

const nameSvg = group(name, (W - name.width) / 2, 400);
const roleSvg = group(role, (W - role.width) / 2, 462);

// Caret after the role line, echoing the hero.
const caretX = (W + role.width) / 2 + 12;
const caret = `<rect x="${caretX.toFixed(1)}" y="446" width="3" height="21" fill="${CYAN}"/>`;

// ---- starfield -----------------------------------------------------------
// Deterministic so the image is byte-stable between runs.
let seed = 20260910;
const rand = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);

const stars = Array.from({ length: 170 }, () => {
  const x = rand() * W;
  const y = rand() * H;
  const r = rand() > 0.94 ? 2.4 : rand() > 0.7 ? 1.5 : 0.9;
  const cyan = rand() < 0.14;
  const o = (0.25 + rand() * 0.6).toFixed(2);
  return `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r}" fill="${cyan ? CYAN : WHITE}" opacity="${o}"/>`;
}).join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="38%" r="62%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#000000"/>
  ${stars}
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${markSvg}
  ${nameSvg}
  ${roleSvg}
  ${caret}
</svg>`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
await sharp(Buffer.from(svg), { density: 200 }).resize(W, H).png().toFile(OUT);
console.log("og-image escrita en", OUT);
