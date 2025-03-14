// src/i18n.js
import { ref } from 'vue';

export const language = ref(localStorage.getItem('language') || 'en');



const messages = {
  en: {
    section_about: "About",
    section_journey: "My journey",
    section_projects: "My projects",
    section_skills: "My skills",
    section_contact: "Contact me",
    event1_date:"2021-2022",
    event1_title:"Baccalauréat Général (French High School Diploma)",
    event1_place:"Lycée Léonce Vieljeux, 17026 La Rochelle",
    event1_text:"Mention assez bien. Spécialités Physique-chimie, Mathématiques & NSI "
  },
  fr: {
    section_about: "A propos",
    section_journey: "Mon parcours",
    section_projects: "Mes projets",
    section_skills: "Mes compétences",
    section_contact: "Contactez moi",
    event1_date:"2021-2022",
    event1_title:"Baccalauréat Général",
    event1_place:"Lycée Léonce Vieljeux, 17026 La Rochelle",
    event1_text:"Mention assez bien. Spécialités Physique-chimie, Mathématiques & NSI "
  }
};

/**
 * Returns the translated text for the given key.
 * Because it reads language.value (a reactive ref), every time language changes,
 * any component using this function in its render will update automatically.
 */
export function t(key) {
  return messages[language.value][key] || key;
}

export function setLanguage(newLang) {
  language.value = newLang;
  localStorage.setItem('language', newLang);
}
