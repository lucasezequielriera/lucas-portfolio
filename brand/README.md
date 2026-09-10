# Marca — Lucas Riera

El logotipo es `[LR.]`: los corchetes, más grandes que las letras, enmarcan las
iniciales; el punto final es el único elemento en color.

Todos los archivos tienen **fondo transparente** y el texto está **convertido a
curvas**, así que se ven igual en cualquier ordenador aunque no tenga instalada
la tipografía Sora.

## Qué archivo usar

| Dónde | Archivo |
|---|---|
| Foto de perfil (LinkedIn, X, Instagram, GitHub) | `logo-square-400.png` o `-800`, `-1000` |
| Perfil sobre fondo claro | `logo-black-square-1000.png` |
| Cabecera / banner / firma de email | `logo-2000w.png` |
| Web, presentaciones, cualquier tamaño | `logo.svg` |
| Impresión o proveedor que pida vectorial | `logo.svg` / `logo-black.svg` |

## Tamaños incluidos

**Cuadrados (perfiles).** 400, 512, 800 y 1000 px. 400 es el mínimo que pide
LinkedIn, 512 el que usan GitHub y los favicons, 800 X, y 1000 Instagram.

**Horizontales.** 1000 y 2000 px de ancho, para cabeceras y uso en prensa.

## Versiones

- **`logo`** — blanco con el punto en cian. La principal, para fondos oscuros.
- **`logo-black`** — todo negro, para fondos claros.
- **`logo-white`** — todo blanco sin el punto en color, para cuando solo se
  admite una tinta o el color entra en conflicto con el fondo.

Cada una existe en versión horizontal y cuadrada (`-square`).

## Colores

| | Hex |
|---|---|
| Blanco | `#FFFFFF` |
| Cian (el punto) | `#67E8F9` |
| Fondo | `#000000` |

## Reglas de uso

- Dejar alrededor un margen libre de al menos la altura de un corchete.
- No cambiar el color del punto: es lo único que identifica a la marca.
- No reordenar ni separar los corchetes de las letras.
- Sobre fondos claros usar la versión negra, nunca la blanca con sombra.

## Regenerar

Los archivos se generan desde `scripts/build-brand.mjs`, que descarga Sora,
convierte los glifos a curvas y exporta SVG y PNG:

```bash
node scripts/build-brand.mjs ./brand
```
