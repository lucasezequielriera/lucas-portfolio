# Marca — Lucas Riera

Hay **una carpeta por red social**. Entra en la tuya, coge el archivo y súbelo:
ya está en el tamaño exacto que pide esa red.

```
brand/
├── linkedin/     ├── x-twitter/    ├── instagram/
├── github/       ├── youtube/      ├── facebook/
├── whatsapp/     ├── email/        └── logo/   ← los originales
```

## Qué subir en cada red

| Red | Foto de perfil | Portada / cabecera |
|---|---|---|
| **LinkedIn** | `linkedin/foto-perfil-400.png` | `linkedin/portada-1584x396.png` |
| **X / Twitter** | `x-twitter/foto-perfil-400.png` | `x-twitter/cabecera-1500x500.png` |
| **Instagram** | `instagram/foto-perfil-320.png` | — |
| **GitHub** | `github/avatar-500.png` | — |
| **YouTube** | `youtube/icono-canal-800.png` | `youtube/banner-2048x1152.png` |
| **Facebook** | `facebook/foto-perfil-320.png` | `facebook/portada-820x312.png` |
| **WhatsApp** | `whatsapp/foto-perfil-640.png` | — |
| **Firma de email** | — | `email/firma-400w.png` |

Cuando hay dos tamaños de foto (LinkedIn, Instagram) **da igual cuál uses**: el
grande es por si la red lo pide en alta resolución.

`instagram/publicacion-1080x1080.png` es un cuadrado para publicar como post,
no una foto de perfil.

## Las dos cosas que conviene saber

**Las fotos de perfil llevan fondo negro, y es a propósito.** El logo es blanco:
en un PNG transparente desaparecería en cualquier red que use fondo blanco.
Junto a cada foto hay una versión `-transparente.png` por si alguna vez la
necesitas montada sobre otra cosa, pero **para subir a la red usa la normal**.

**Sobre fondos claros usa la versión negra.** Está en `logo/logo-black.svg` y
`email/firma-400w-fondo-claro.png`. La blanca sobre blanco no se ve.

## Los originales (`logo/`)

| Archivo | Para qué |
|---|---|
| `logo.svg` | El principal. Cualquier tamaño, fondo oscuro. |
| `logo-black.svg` | Fondos claros. |
| `logo-white.svg` | Una sola tinta, sin el punto en color. |
| `logo-square.svg` | Versión cuadrada, para avatares. |
| `logo-2000w.png` | Si alguien te pide PNG en vez de SVG. |

Usa el **SVG** siempre que puedas: no pierde calidad a ningún tamaño. El texto
está convertido a curvas, así que se ve igual en cualquier ordenador aunque no
tenga instalada la tipografía.

## Colores

| | Hex |
|---|---|
| Blanco | `#FFFFFF` |
| Cian (el punto) | `#67E8F9` |
| Fondo | `#000000` |

## Reglas de uso

- Deja alrededor un margen libre de al menos la altura de un corchete.
- No cambies el color del punto: es lo único que identifica a la marca.
- No separes los corchetes de las letras ni los reordenes.
- Sobre fondo claro, versión negra. Nunca la blanca con sombra.

## Regenerar todo

```bash
node scripts/build-brand.mjs ./brand
```

Descarga la tipografía, convierte los glifos a curvas y vuelve a exportar todas
las carpetas, los favicons de la web (`app/icon.png`, `app/apple-icon.png`) y el
logotipo que sirve el sitio (`public/brand/`). Este README no se toca.

Los tamaños de cada red están en la constante `NETWORKS` de ese script: si una
red cambia sus medidas, se edita ahí y se vuelve a ejecutar.
