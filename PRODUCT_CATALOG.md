# Aurtix Product Catalog

Reference doc for the site's product taxonomy, page files, and image mapping. Update this whenever products are added, renamed, or removed.

## Taxonomy

**1. Liquid Handling**
- Mechanical Pipettes — `mechanical-pipettes.html` (category hub, links to the 4 pages below)
  - Single-channel
    - **Aurtix Lite** (lower/entry model) — catalogue name *TopPette Mechanical Pipette* — `aurtix-lite-single.html`
    - **Aurtix Neo** (premium model) — catalogue name *Hi-pette Mechanical Pipette* — `aurtix-neo-single.html`
  - Multi-channel
    - **Aurtix Lite** — catalogue name *TopPette Mechanical Pipette* — `aurtix-lite-multi.html`
    - **Aurtix Neo** — catalogue name *Hi-pette Mechanical Pipette* — `aurtix-neo-multi.html`
- Electronic Pipettes
  - **Aurtix Exa** — catalogue name *Electronic Pipette* — `aurtix-exa.html` (treated as single-channel volume range)

**2. Consumables**
- **Aurtix Tips** — `aurtix-tips.html` (rebrand of the old `tips.html`; content/images carried over)

**3. Accessories**
- **Aurtix Carousels** (pipette stands) — `aurtix-carousels.html` — single page covering both Linear and Round configurations, not split

## Standard volume ranges (client-confirmed, apply across the relevant products)

- Single-channel: **0.2 µL – 10 mL**
- Multichannel: **0.5 µL – 1200 µL**
- Aurtix Exa (electronic): treated as single-channel → **0.2 µL – 10 mL**

## Discontinued

Laboratory Tubes and Cryostorage Vials were removed entirely at the client's request. Deleted: `tubes.html`, `cryo-vials.html`, `images/tubes.jpeg`, `images/cryo_vial.avif`, `images/cryo_vials_2.jpg`. All nav/footer/homepage/related-product references were removed.

## Retired but kept on disk

`pipette.html` — the original flat "Pipettes" page. Kept on disk because it has specs that may be reused later, but **has zero inbound links** anywhere on the site. Do not link to it; if it's ever needed again, treat it as reference material only.

## Image mapping (`images/products/`)

| Product | Page | Images |
|---|---|---|
| Aurtix Lite (Single) | `aurtix-lite-single.html` | `aurtix_lite_1.jpeg` |
| Aurtix Neo (Single) | `aurtix-neo-single.html` | `aurtix_neo_single_1.jpeg`, `aurtix_neo_single_2.jpeg` |
| Aurtix Lite (Multi) | `aurtix-lite-multi.html` | `aurtix_lite_multi_1.jpeg`, `aurtix_lite_multi_2.jpeg` |
| Aurtix Neo (Multi) | `aurtix-neo-multi.html` | `aurtix_neo_multi_1.jpeg`, `_2.jpeg`, `_3.jpeg` |
| Aurtix Exa | `aurtix-exa.html` | `aurtix_exa_1.jpeg` |
| Aurtix Tips | `aurtix-tips.html` | (existing, not in `products/`) `images/tips.jpeg`, `images/tips_1.avif`, `images/tips_2.avif` |
| Aurtix Carousels | `aurtix-carousels.html` | `pipette_stand_linear_1.jpeg`, `_2.jpeg`, `pipette_stand_round_1.jpeg` |
| Mechanical Pipettes hub | `mechanical-pipettes.html` | reuses each product's first image as its card thumbnail |

## Page template

Every leaf-product page follows: nav (mega-menu) → `.page-hero` (breadcrumb, H1, `.page-tag`, `.catalogue-name` where applicable) → overview (gallery + lead paragraph + `.volume-stat` + `.feature-list` + CTA buttons) → `#description` (tabbed **Overview** / **Specifications** — see `.product-tabs`/`.tab-btn`/`.tab-panel` in `css/style.css`, `switchTab()` in `js/main.js`) → related products → CTA banner → footer → WhatsApp float.

This replaced the older separate "Overview section + standalone Highlights icon-grid + standalone Specifications table" layout still visible in the retired `pipette.html`.

## Content status

- **Final / client-confirmed**: product names, catalogue names, category structure, standard volume ranges.
- **Placeholder, pending real specs**: narrative copy in the Overview tabs, and specification-table rows beyond volume range and catalogue name (materials, tolerances, exact channel counts, etc.) — written in the site's existing voice as reasonable placeholders. Update these once the client provides finalized specs per product.

## Nav mega-menu structure

3 columns under the "Products" nav item: **Liquid Handling** (wide column — a "View All Mechanical Pipettes" link, then Mechanical Single-Channel / Mechanical Multi-Channel / Electronic sub-groups), **Consumables** (Aurtix Tips), **Accessories** (Aurtix Carousels). Same structure is repeated identically across all 9 HTML pages (`index.html` + 8 product/hub pages) — if the catalog changes, update the dropdown block in every file.
