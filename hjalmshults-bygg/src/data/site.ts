/**
 * Central place for company facts. Everything marked PLACEHOLDER is not a
 * real, verified fact about Hjälmshults Bygg AB — swap it for the real
 * value before launch. Nothing here should be presented to a visitor as
 * fact until it has been confirmed by the company.
 */

export const site = {
  name: "Hjälmshults Bygg AB",
  shortName: "Hjälmshults Bygg",
  tagline: "Byggföretag i Hjälmshult",

  // PLACEHOLDER — replace with the real registered visiting/postal address.
  address: {
    street: "[Adress saknas]",
    postalCode: "[Postnummer]",
    city: "[Ort]",
  },

  // PLACEHOLDER — replace with real contact details.
  phone: "[Telefonnummer]",
  phoneHref: "tel:+46000000000",
  email: "[E-postadress]",
  emailHref: "mailto:info@hjalmshultsbygg.se",

  orgNumber: "[Org.nr saknas]",

  // PLACEHOLDER — fill in only the channels that actually exist, remove the rest.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  openingHours: "Mån–Fre 07:00–16:00", // PLACEHOLDER
} as const;

export type Site = typeof site;
