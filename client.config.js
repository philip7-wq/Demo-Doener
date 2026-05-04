/**
 * client.config.js — Kundendaten zentral pflegen
 *
 * Diese Datei ist die einzige, die pro Kunde angepasst werden muss.
 * Alle HTML-Seiten beziehen ihre Inhalte automatisch aus diesem Objekt.
 */
const CLIENT = {

  // --- Identität ---
  name:         "Bosporus Grillhaus",
  nameLine1:    "BOSPORUS",
  nameLine2:    "GRILLHAUS",

  // --- Slogans ---
  sloganHero:   "Frisch vom Spieß. Ehrlich lecker.",
  sloganFooter: "Frisch vom Spieß. Schnell serviert. Ehrlich lecker.",

  // --- Adresse ---
  street:       "Allersberger Straße 48",
  zip:          "90461",
  city:         "Nürnberg",

  // --- Kontakt ---
  phoneTel:     "+4991148273510",       // tel: href (keine Leerzeichen)
  phoneDisplay: "+49 911 4827 3510",    // Anzeigetext
  email:        "info@bosporus-grillhaus.de",

  // --- Social / Messaging ---
  whatsapp:     "https://wa.me/4915738126495",
  instagram:    "https://www.instagram.com/bosporus.grillhaus",

  // --- Öffnungszeiten ---
  // Strukturiert für <dl> im Footer und Tabelle auf der Kontaktseite
  hours: [
    { days: "Mo–Mi", open: "11:00", close: "22:00" },
    { days: "Do–Fr", open: "11:00", close: "23:00" },
    { days: "Sa",    open: "12:00", close: "23:00" },
    { days: "So",    open: "12:00", close: "21:00" },
  ],
  // Einzeiliger Anzeigetext für CTA-Abschnitte
  hoursInline: "Mo–Mi 11–22 Uhr · Do–Fr 11–23 Uhr · Sa 12–23 Uhr · So 12–21 Uhr",

  // --- Branding ---
  primaryColor: "#d32f2f",  // überschreibt --color-primary zur Laufzeit
  logo:         "",         // Pfad zur Logo-Datei, z.B. "assets/img/logo.svg" — leer = Textlogo

  // --- Meta ---
  copyrightYear: "2026",

};
