# Hjälmshults Bygg AB — webbplats

En modern, produktionsredo one-page-webbplats byggd med React, TypeScript,
Tailwind CSS och Radix UI-primitiver (i shadcn/ui-stil).

## Kom igång

```bash
npm install
npm run dev      # startar utvecklingsservern
npm run build    # typkontroll + produktionsbygge
npm run preview  # förhandsgranska produktionsbygget lokalt
```

## Struktur

```
src/
  components/
    layout/     Header, MobileMenu, Footer
    sections/   Hero, Intro, Services, WhyUs, Projects (+modal), Process, About, CTA, Contact
    shared/     Reveal / ImageReveal (scroll-animationer), SectionHeading
    ui/         Knapp, input, textarea, select, label, dialog, sheet — shadcn/ui-liknande primitiver
  data/         All textinnehåll och strukturerad data (services, projects, process, strengths, site)
  hooks/        useInView, useScrolled, useParallax
```

Allt textinnehåll och all strukturerad data ligger samlat i `src/data/` —
uppdatera texterna där utan att röra komponenterna.

## ⚠️ Platshållare som måste ersättas före lansering

Inget verkligt företagsfaktum har hittats på under byggnationen av sidan.
Följande är medvetet ifyllt med platshållare och måste uppdateras:

### `src/data/site.ts`
- Telefonnummer, e-postadress, adress, org.nr
- Sociala medier (fylls bara i om kontot faktiskt finns)
- Öppettider (satt till ett rimligt standardvärde — bekräfta det riktiga)

### `src/data/projects.ts`
- **Alla projekt är exempelposter** (`isSample: true`) med genuint
  placeholder-innehåll och stockbilder. Ingen riktig kundinformation eller
  riktiga projektbilder finns med. Lägg till riktiga projekt genom att
  kopiera formen på en post, sätta `isSample: false` och ersätta bilder,
  beskrivning, tjänster, projekttid och resultat.

### Bilder
Alla bilder på sidan (hero, tjänster, om oss, exempelprojekt) är
högupplösta placeholder-fotografier från Unsplash — inte riktiga bilder på
Hjälmshults Byggs egna projekt eller medarbetare. Ersätt med riktig
projektfotografering innan lansering.

### `src/data/strengths.ts`
Inga påhittade siffror (antal år, projekt eller kunder) används. Lägg bara
till en siffra här när den är bekräftad av företaget.

### Formulär (`src/components/sections/Contact.tsx`)
Offertformuläret är fullt fungerande i gränssnittet men skickar i nuläget
inte till någon backend — det simulerar bara en lyckad inskickning. Sök
efter `TODO` i filen för den exakta punkten där ett riktigt anrop (t.ex.
till en e-posttjänst eller ett API) ska läggas till. Formuläret bygger
redan upp ett komplett `FormData`-objekt (inklusive uppladdade filer), så
ingen ändring av markup ska behövas.

### `index.html`
- `<link rel="canonical">`, Open Graph-URL och JSON-LD antar domänen
  `hjalmshultsbygg.se` — uppdatera om en annan domän används.
- `public/robots.txt` pekar på en sitemap som ännu inte finns.

## Design

- Färgpalett: mörk grafit (`graphite`), varm off-white (`offwhite`) och en
  diskret sandfärgad accent (`sand`) — definierade i `tailwind.config.ts`.
- Typografi: Inter (brödtext) + Fraunces (rubriker), laddade från Google Fonts.
- Animationer: CSS-baserade (transitions/keyframes), medvetet återhållsamma —
  se `src/index.css` för `.reveal`, `.reveal-image` och dialog/drawer-animationerna.
  Respekterar `prefers-reduced-motion`.
