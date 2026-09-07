export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Kostnadsfri kontakt",
    description:
      "Berätta om ditt projekt så tar vi en första kontakt utan förpliktelser.",
  },
  {
    number: "02",
    title: "Planering & offert",
    description:
      "Vi går igenom förutsättningarna tillsammans och tar fram en tydlig offert.",
  },
  {
    number: "03",
    title: "Byggnation",
    description:
      "Arbetet genomförs med noggrannhet och löpande avstämning med dig som kund.",
  },
  {
    number: "04",
    title: "Färdigt resultat",
    description:
      "Du får ett färdigställt projekt av hög kvalitet, redo att användas.",
  },
];
