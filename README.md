# Luca Schwarz – Astro Website

Astro-Projekt auf Basis des Consulting-Layouts mit der warmen Farbwelt des ersten Designentwurfs.

## Start

```bash
npm install
npm run dev
```

Astro startet standardmäßig unter:

```text
http://localhost:4321
```

## Production Build

```bash
npm run build
npm run preview
```

## Wichtige Stellen zum Anpassen

### Domain
In `astro.config.mjs`:

```js
site: 'https://example.de'
```

durch deine echte Domain ersetzen.

### Kontaktadresse
Aktuell ist `hello@example.de` als Platzhalter hinterlegt.

### Rechtliches
`src/pages/impressum.astro` und `src/pages/datenschutz.astro` enthalten bewusst nur Platzhalter.
Vor Veröffentlichung müssen die Angaben zu deiner tatsächlichen Unternehmensform, deinem Hosting und allen eingesetzten Diensten passen.

### Technologien
Die Tech-Liste liegt in:

```text
src/components/TechGrid.astro
```

### Leistungen
Die Leistungen liegen als Datenstruktur direkt in:

```text
src/pages/index.astro
```

## Struktur

```text
src/
├── components/
│   ├── Footer.astro
│   ├── Header.astro
│   ├── ServiceRow.astro
│   └── TechGrid.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── datenschutz.astro
│   ├── impressum.astro
│   └── index.astro
└── styles/
    └── global.css
```

Das Projekt kommt absichtlich ohne Tailwind, React oder andere UI-Dependencies aus. Für diese Seite reicht Astro + CSS vollständig aus.


## Markdown Content Collections

Die Leistungen werden jetzt aus Markdown-Dateien geladen:

```text
src/content/services/
├── commerce.md
├── consulting.md
├── migration.md
└── software.md
```

Zum Ändern einer Leistung reicht es, das Frontmatter der jeweiligen `.md`-Datei anzupassen. Astro validiert die Felder über `src/content.config.ts`.

Beispiel:

```md
---
index: "01"
category: "Commerce"
title: "Shopify & E-Commerce"
description: "Stores, Erweiterungen, Integrationen und technische Beratung."
order: 1
---
```
