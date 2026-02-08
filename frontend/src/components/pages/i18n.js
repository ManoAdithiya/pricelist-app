import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      login: "Log in",
      emailLabel: "Enter your email address",
      emailPlaceholder: "Email address",
      passwordLabel: "Enter your password",
      passwordPlaceholder: "Password",
      register: "Register",
      forgot: "Forgotten password?",
      Home: "Home",
      Order: "Order",
      OurCustomer: "Our Customers",
      AboutUs: "About us",
      contact: "Contact Us",
    },
  },

  sv: {
    translation: {
      login: "Logga in",
      emailLabel: "Ange din e-postadress",
      emailPlaceholder: "E-postadress",
      passwordLabel: "Ange ditt lösenord",
      passwordPlaceholder: "Lösenord",
      register: "Registrera dig",
      forgot: "Glömt lösenord?",
      Home: "Hem",
      Order: "Beställ",
      OurCustomer: "Våra Kunder",
      AboutUs: "Om oss",
      contact: "Kontakta oss",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
