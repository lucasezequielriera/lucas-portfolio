import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import opentype from "opentype.js";
import wawoff from "wawoff2";
import sharp from "sharp";

const OUT = process.argv[2] ?? "./brand";
const WORK = fs.mkdtempSync(path.join(os.tmpdir(), "brand-"));

// Sora se descarga en cada ejecución en lugar de vivir en el repo: sólo hace
// falta para convertir los glifos a curvas, no en tiempo de ejecución.
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

const CYAN = "#67E8F9";
const WHITE = "#FFFFFF";
const BLACK = "#000000";

async function loadFont(file) {
  const woff2 = fs.readFileSync(path.join(WORK, file));
  const ttf = await wawoff.decompress(woff2);
  return opentype.parse(Uint8Array.from(ttf).buffer);
}

const bold = await loadFont("sora-800.woff2");
const regular = await loadFont("sora-400.woff2");

/**
 * Lays out `[LR.]` with the brackets set larger than the letters, matching how
 * the site renders it, and outlines every glyph so the artwork carries no font
 * dependency.
 */
function layout(letterSize = 100) {
  const bracketSize = letterSize * 1.5;
  const gap = letterSize * 0.14;

  const glyphs = [
    { path: regular.getPath("[", 0, 0, bracketSize), w: regular.getAdvanceWidth("[", bracketSize), role: "frame" },
    { gap },
    { path: bold.getPath("LR", 0, 0, letterSize), w: bold.getAdvanceWidth("LR", letterSize), role: "letters" },
    { path: bold.getPath(".", 0, 0, letterSize), w: bold.getAdvanceWidth(".", letterSize), role: "dot" },
    { gap },
    { path: regular.getPath("]", 0, 0, bracketSize), w: regular.getAdvanceWidth("]", bracketSize), role: "frame" },
  ];

  let x = 0;
  const parts = [];
  for (const g of glyphs) {
    if (g.gap !== undefined) {
      x += g.gap;
      continue;
    }
    g.path.commands.forEach((cmd) => {
      for (const k of ["x", "x1", "x2"]) if (cmd[k] !== undefined) cmd[k] += x;
    });
    parts.push({ d: g.path.toPathData(3), role: g.role });
    x += g.w;
  }

  return { parts, width: x, bracketSize };
}

const { parts, width, bracketSize } = layout(100);

// The brackets are the tallest element, so they define the vertical extent.
const capTop = -bracketSize * 0.76;
const capBottom = bracketSize * 0.22;
const glyphHeight = capBottom - capTop;

function svg({ square = false, pad = 0.28, ink = "colour" }) {
  const padX = glyphHeight * pad;
  const vbW = square ? Math.max(width, glyphHeight) + padX * 2 : width + padX * 2;
  const vbH = square ? Math.max(width, glyphHeight) + padX * 2 : glyphHeight + padX * 2;
  const offsetX = (vbW - width) / 2;
  const offsetY = (vbH - glyphHeight) / 2 - capTop;

  const fillFor = (role) => {
    if (ink === "black") return BLACK;
    if (ink === "white") return WHITE;
    return role === "dot" ? CYAN : WHITE;
  };

  const body = parts
    .map((p) => `<path d="${p.d}" fill="${fillFor(p.role)}"/>`)
    .join("\n    ");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW.toFixed(1)} ${vbH.toFixed(1)}" width="${vbW.toFixed(0)}" height="${vbH.toFixed(0)}" role="img" aria-label="Lucas Riera">
  <title>Lucas Riera</title>
  <g transform="translate(${offsetX.toFixed(1)} ${offsetY.toFixed(1)})">
    ${body}
  </g>
</svg>
`;
}

fs.mkdirSync(OUT, { recursive: true });

const VARIANTS = {
  "logo": svg({}),
  "logo-square": svg({ square: true, pad: 0.34 }),
  "logo-white": svg({ ink: "white" }),
  "logo-white-square": svg({ square: true, pad: 0.34, ink: "white" }),
  "logo-black": svg({ ink: "black" }),
  "logo-black-square": svg({ square: true, pad: 0.34, ink: "black" }),
};

for (const [name, markup] of Object.entries(VARIANTS)) {
  fs.writeFileSync(path.join(OUT, `${name}.svg`), markup);
}

// Sizes chosen to cover what the networks actually ask for: 400 is LinkedIn's
// minimum profile image, 512 GitHub/favicon, 800 X, 1000 Instagram, and the
// 2000px wide horizontal is for banners and press use.
const PNGS = [
  ["logo-square", 1000], ["logo-square", 800], ["logo-square", 512], ["logo-square", 400],
  ["logo-black-square", 1000], ["logo-black-square", 400],
  ["logo-white-square", 1000],
];

for (const [name, size] of PNGS) {
  await sharp(Buffer.from(VARIANTS[name]), { density: 400 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(OUT, `${name}-${size}.png`));
}

for (const [name, w] of [["logo", 2000], ["logo", 1000], ["logo-black", 2000], ["logo-white", 2000]]) {
  await sharp(Buffer.from(VARIANTS[name]), { density: 400 })
    .resize({ width: w, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(OUT, `${name}-${w}w.png`));
}

// ---- favicons -------------------------------------------------------------
// `[LR.]` no sobrevive a 16px, así que el icono se queda con las iniciales y el
// punto. Se generan aquí, ya trazados, para que no dependan de la fuente que
// tenga instalada la máquina que hace el build.
function faviconSvg(size) {
  const s = 100;
  const lr = bold.getPath("LR", 0, 0, s);
  const dot = bold.getPath(".", bold.getAdvanceWidth("LR", s), 0, s);
  const w = bold.getAdvanceWidth("LR", s) + bold.getAdvanceWidth(".", s);
  const h = s * 0.72;
  const pad = h * 0.42;
  const vb = Math.max(w, h) + pad * 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vb.toFixed(1)} ${vb.toFixed(1)}" width="${size}" height="${size}">
  <rect width="${vb.toFixed(1)}" height="${vb.toFixed(1)}" fill="#000000"/>
  <g transform="translate(${((vb - w) / 2).toFixed(1)} ${((vb + h) / 2).toFixed(1)})">
    <path d="${lr.toPathData(2)}" fill="#FFFFFF"/>
    <path d="${dot.toPathData(2)}" fill="${CYAN}"/>
  </g>
</svg>`;
}

for (const [file, size] of [["app/icon.png", 64], ["app/apple-icon.png", 180]]) {
  await sharp(Buffer.from(faviconSvg(size)), { density: 500 })
    .resize(size, size)
    .png()
    .toFile(file);
  console.log("icono:", file);
}

console.log("listo:", fs.readdirSync(OUT).length, "archivos en", OUT);
