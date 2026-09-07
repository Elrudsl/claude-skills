/**
 * Portfolio data.
 *
 * IMPORTANT: No real Hjälmshults Bygg projects were available at build time,
 * so every entry below is a clearly-labelled placeholder (`isSample: true`)
 * with generic, non-specific copy — never present these as real completed
 * work. The UI renders an "Exempel" badge on any entry with `isSample`.
 *
 * To add a real project: copy the shape of one entry, set `isSample: false`,
 * and replace image/gallery, description, servicesPerformed, duration and
 * result with the real details.
 */

export interface Project {
  slug: string;
  title: string;
  type: string;
  location?: string;
  coverImage: string;
  gallery: string[];
  summary: string;
  description: string;
  servicesPerformed: string[];
  duration?: string;
  result?: string;
  isSample: boolean;
  /** Controls the asymmetric grid — "tall" spans two rows on desktop. */
  size?: "tall" | "wide" | "default";
}

export const projects: Project[] = [
  {
    slug: "exempel-totalrenovering",
    title: "Exempelprojekt — Totalrenovering",
    type: "Totalrenovering",
    coverImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80",
    ],
    summary: "Exempelpost — ersätt med bilder och fakta från ett verkligt projekt.",
    description:
      "Detta är en exempelpost som visar hur en totalrenovering presenteras. Ersätt texten med en beskrivning av det verkliga projektet: förutsättningar, önskemål från kunden och hur arbetet genomfördes.",
    servicesPerformed: ["Renovering", "Snickeri"],
    duration: "[Projekttid läggs till]",
    result: "[Resultatbeskrivning läggs till här]",
    isSample: true,
    size: "tall",
  },
  {
    slug: "exempel-tillbyggnad",
    title: "Exempelprojekt — Tillbyggnad",
    type: "Tillbyggnad",
    coverImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80",
    ],
    summary: "Exempelpost — ersätt med bilder och fakta från ett verkligt projekt.",
    description:
      "Detta är en exempelpost som visar hur en tillbyggnad presenteras. Ersätt texten med en beskrivning av det verkliga projektet, till exempel varför tillbyggnaden behövdes och hur den utformades.",
    servicesPerformed: ["Tillbyggnad", "Tak & fasad"],
    duration: "[Projekttid läggs till]",
    result: "[Resultatbeskrivning läggs till här]",
    isSample: true,
    size: "default",
  },
  {
    slug: "exempel-takrenovering",
    title: "Exempelprojekt — Takrenovering",
    type: "Takrenovering",
    coverImage:
      "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80",
    ],
    summary: "Exempelpost — ersätt med bilder och fakta från ett verkligt projekt.",
    description:
      "Detta är en exempelpost som visar hur en takrenovering presenteras. Ersätt texten med en beskrivning av det verkliga projektet, materialval och omfattning.",
    servicesPerformed: ["Tak & fasad"],
    duration: "[Projekttid läggs till]",
    result: "[Resultatbeskrivning läggs till här]",
    isSample: true,
    size: "default",
  },
  {
    slug: "exempel-nybyggnation",
    title: "Exempelprojekt — Nybyggnation",
    type: "Nybyggnation",
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
    ],
    summary: "Exempelpost — ersätt med bilder och fakta från ett verkligt projekt.",
    description:
      "Detta är en exempelpost som visar hur en nybyggnation presenteras. Ersätt texten med en beskrivning av det verkliga projektet från planering till inflyttning.",
    servicesPerformed: ["Nybyggnation", "Entreprenad"],
    duration: "[Projekttid läggs till]",
    result: "[Resultatbeskrivning läggs till här]",
    isSample: true,
    size: "tall",
  },
  {
    slug: "exempel-koksrenovering",
    title: "Exempelprojekt — Köksrenovering",
    type: "Köksrenovering",
    coverImage:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80",
    ],
    summary: "Exempelpost — ersätt med bilder och fakta från ett verkligt projekt.",
    description:
      "Detta är en exempelpost som visar hur en köksrenovering presenteras. Ersätt texten med en beskrivning av det verkliga projektet och kundens önskemål.",
    servicesPerformed: ["Renovering", "Snickeri"],
    duration: "[Projekttid läggs till]",
    result: "[Resultatbeskrivning läggs till här]",
    isSample: true,
    size: "default",
  },
];
