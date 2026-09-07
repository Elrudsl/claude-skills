export interface Strength {
  title: string;
  description: string;
}

// No years-in-business, project counts or customer counts are used here —
// those are real facts nobody has supplied yet. Add a stat only once it is
// confirmed by the company.
export const strengths: Strength[] = [
  {
    title: "Kvalitet",
    description: "Vi kompromissar aldrig med kvaliteten.",
  },
  {
    title: "Noggrannhet",
    description: "Vi lägger stor vikt vid detaljerna.",
  },
  {
    title: "Pålitlighet",
    description: "Tydlig kommunikation genom hela projektet.",
  },
  {
    title: "Erfarenhet",
    description: "Professionellt hantverk och gedigen kunskap.",
  },
];
