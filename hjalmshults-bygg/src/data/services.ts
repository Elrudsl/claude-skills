export type ServiceIcon =
  | "hammer"
  | "expand"
  | "building"
  | "layers"
  | "ruler"
  | "handshake";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  // Stock placeholder imagery — swap for real project photography.
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    slug: "renovering",
    title: "Renovering",
    description:
      "Renoveringar utförda med fokus på kvalitet, funktion och detaljer.",
    icon: "hammer",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern renoverad interiör med ljusa ytor",
  },
  {
    slug: "tillbyggnad",
    title: "Tillbyggnad",
    description:
      "Vi hjälper dig skapa mer utrymme och utveckla din befintliga fastighet.",
    icon: "expand",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern tillbyggnad på svenskt hus",
  },
  {
    slug: "nybyggnation",
    title: "Nybyggnation",
    description: "Från planering till färdig byggnad.",
    icon: "building",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Nybyggt modernt hus i skandinavisk stil",
  },
  {
    slug: "tak-fasad",
    title: "Tak & fasad",
    description:
      "Professionellt arbete med tak, fasader och byggnadens yttre.",
    icon: "layers",
    image:
      "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hantverkare som arbetar med tak",
  },
  {
    slug: "snickeri",
    title: "Snickeri",
    description:
      "Noggrant snickeriarbete för både stora och små projekt.",
    icon: "ruler",
    image:
      "https://images.unsplash.com/photo-1585128993280-9456c19f5822?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Snickare som arbetar med precision i trä",
  },
  {
    slug: "entreprenad",
    title: "Entreprenad",
    description: "Helhetslösningar för större byggprojekt.",
    icon: "handshake",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Byggarbetsplats med pågående entreprenad",
  },
];
