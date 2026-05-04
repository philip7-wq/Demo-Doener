// CSS-Variable sofort setzen — vor dem ersten Paint
if (CLIENT.primaryColor) {
  document.documentElement.style.setProperty("--color-primary", CLIENT.primaryColor);
}

document.addEventListener("DOMContentLoaded", () => {

  // --- Logo (zwei Zeilen oder Bild) ---
  document.querySelectorAll("[data-client='name-logo']").forEach(el => {
    if (CLIENT.logo) {
      el.innerHTML = '<img src="' + CLIENT.logo + '" alt="' + CLIENT.name + ' Logo" class="logo-img">';
    } else {
      const spans = el.querySelectorAll("span");
      if (spans[0]) spans[0].textContent = CLIENT.nameLine1;
      if (spans[1]) spans[1].textContent = CLIENT.nameLine2;
    }
  });

  // --- Hero-Slogan (zwei Zeilen) ---
  document.querySelectorAll("[data-client='slogan-hero']").forEach(el => {
    const parts = CLIENT.sloganHero.split(". ");
    const line1 = el.querySelector(".line-1");
    const line2 = el.querySelector(".line-2");
    if (line1) line1.textContent = (parts[0] || "") + ".";
    if (line2) line2.textContent = parts.slice(1).join(". ");
  });

  // --- Footer-Slogan ---
  document.querySelectorAll("[data-client='slogan-footer']").forEach(el => {
    el.textContent = CLIENT.sloganFooter;
  });

  // --- Adresse (vollständig mit Telefon + E-Mail) ---
  document.querySelectorAll("[data-client='address-full']").forEach(el => {
    el.innerHTML =
      CLIENT.street + "<br>" +
      CLIENT.zip + " " + CLIENT.city + "<br><br>" +
      '<a href="tel:' + CLIENT.phoneTel + '">' + CLIENT.phoneDisplay + "</a><br>" +
      '<a href="mailto:' + CLIENT.email + '">' + CLIENT.email + "</a>";
  });

  // --- Adresse (nur Straße + PLZ/Stadt — kein Telefon, kein E-Mail) ---
  document.querySelectorAll("[data-client='address-postal']").forEach(el => {
    el.innerHTML = CLIENT.street + "<br>" + CLIENT.zip + " " + CLIENT.city;
  });

  // --- Adresse (nur Telefon, kein E-Mail — z.B. danke.html) ---
  document.querySelectorAll("[data-client='address-phone-only']").forEach(el => {
    el.innerHTML =
      CLIENT.street + "<br>" +
      CLIENT.zip + " " + CLIENT.city + "<br><br>" +
      '<a href="tel:' + CLIENT.phoneTel + '">' + CLIENT.phoneDisplay + "</a>";
  });

  // --- Telefon-Link (href + Text) ---
  document.querySelectorAll("[data-client='phone-link']").forEach(el => {
    el.href = "tel:" + CLIENT.phoneTel;
    el.textContent = CLIENT.phoneDisplay;
  });

  // --- E-Mail-Link (href + Text) ---
  document.querySelectorAll("[data-client='email-link']").forEach(el => {
    el.href = "mailto:" + CLIENT.email;
    el.textContent = CLIENT.email;
  });

  // --- Telefon-href (nur href, Text bleibt — z.B. Action-Button mit SVG) ---
  document.querySelectorAll("[data-client='phone-href']").forEach(el => {
    el.href = "tel:" + CLIENT.phoneTel;
  });

  // --- E-Mail-href (nur href, Text bleibt) ---
  document.querySelectorAll("[data-client='email-href']").forEach(el => {
    el.href = "mailto:" + CLIENT.email;
  });

  // --- WhatsApp-href (nur href, Text bleibt) ---
  document.querySelectorAll("[data-client='whatsapp-href']").forEach(el => {
    el.href = CLIENT.whatsapp;
  });

  // --- Instagram-href ---
  document.querySelectorAll("[data-client='instagram-href']").forEach(el => {
    el.href = CLIENT.instagram;
    el.setAttribute("aria-label", CLIENT.name + " auf Instagram");
  });

  // --- Öffnungszeiten <dl> (Footer) ---
  document.querySelectorAll("[data-client='hours-dl']").forEach(dl => {
    dl.innerHTML = "";
    CLIENT.hours.forEach(row => {
      const dt = document.createElement("dt");
      dt.textContent = row.days;
      const dd = document.createElement("dd");
      dd.textContent = row.open + " – " + row.close + " Uhr";
      dl.appendChild(dt);
      dl.appendChild(dd);
    });
  });

  // --- Öffnungszeiten <table> (Kontaktseite) ---
  document.querySelectorAll("[data-client='hours-table']").forEach(tbody => {
    tbody.innerHTML = "";
    CLIENT.hours.forEach(row => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      td1.textContent = row.days;
      const td2 = document.createElement("td");
      td2.textContent = row.open + " – " + row.close + " Uhr";
      tr.appendChild(td1);
      tr.appendChild(td2);
      tbody.appendChild(tr);
    });
  });

  // --- Öffnungszeiten einzeilig (CTA-Banner) ---
  document.querySelectorAll("[data-client='hours-inline']").forEach(el => {
    el.textContent = CLIENT.hoursInline;
  });

  // --- Copyright ---
  document.querySelectorAll("[data-client='copyright']").forEach(el => {
    el.textContent = "© " + CLIENT.copyrightYear + " " + CLIENT.name + ". Alle Rechte vorbehalten.";
  });

  // --- Seitentitel ---
  document.title = document.title.replace("Bosporus Grillhaus", CLIENT.name);

});
