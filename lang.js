const translations = {
  it: {
    nav_home: "Home",
    nav_about: "Chi sono",
    nav_projects: "Progetti",
    nav_contact: "Contatti",

    hero_title: "Salve! Sono Alessandro",
    hero_subtitle: "Studente di informatica e appassionato di progetti interattivi",
    hero_btn: "Scopri i miei progetti",

    about_title: "Chi sono",
    about_text: "Mi piace creare siti web moderni, funzionali e ben progettati. Amo la programmazione e le sfide creative.",

    projects_title: "Progetti",
    p1_title: "Fisica e simulazioni",
    p1_desc: "Esperimenti e modelli interattivi.",
    p2_title: "Maths Challenge",
    p2_desc: "Problemi matematici e logici.",
    p3_title: "Portfolio",
    p3_desc: "Sito personale interattivo.",

    cv_title: "Curriculum Vitae",

    contact_title: "Contatti",
    contact_btn: "Mostra email"
  },

  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_title: "Hi! I'm Alessandro",
    hero_subtitle: "Computer science student passionate about interactive projects",
    hero_btn: "View my projects",

    about_title: "About me",
    about_text: "I enjoy building modern, functional and well-designed websites. I love programming and creative challenges.",

    projects_title: "Projects",
    p1_title: "Physics simulations",
    p1_desc: "Interactive experiments and models.",
    p2_title: "Maths Challenge",
    p2_desc: "Mathematical and logical problems.",
    p3_title: "Portfolio",
    p3_desc: "Interactive personal website.",

    cv_title: "Curriculum Vitae",

    contact_title: "Contact",
    contact_btn: "Show email"
  }
};

let currentLang = localStorage.getItem("lang") || "it";

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n];
  });
  document.getElementById("langToggle").textContent = lang === "it" ? "EN" : "IT";
  localStorage.setItem("lang", lang);
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "it" ? "en" : "it";
  setLanguage(currentLang);
});

setLanguage(currentLang);
