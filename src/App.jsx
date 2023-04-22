import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import { i18n } from "./translate/i18n";
import { useState } from "react";
import ModalLanguage from "./components/modals/ModalLanguage";

const App = () => {
  const [language, setLanguage] = useState(localStorage.i18nextLng);
  const [modalLanguage, setModalLanguage] = useState(true);

  function handleLanguageChange() {
    const newLanguage = language === "pt-BR" ? "en-US" : "pt-BR";
    localStorage.setItem("i18nStorageKey", newLanguage);
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  }

  function initialLanguageUS() {
    const initialLanguage = "en-US";
    localStorage.setItem("i18nStorageKey", initialLanguage);
    setLanguage(initialLanguage);
    i18n.changeLanguage(initialLanguage);
  }

  function initialLanguageBR() {
    const initialLanguage = "pt-BR";
    localStorage.setItem("i18nStorageKey", initialLanguage);
    setLanguage(initialLanguage);
    i18n.changeLanguage(initialLanguage);
  }

  const selectedUS = () => {
    initialLanguageUS();
    setModalLanguage(false);
  };

  const selectedBR = () => {
    initialLanguageBR();
    setModalLanguage(false);
  };

  return (
    <>
      {modalLanguage && (
        <ModalLanguage selectedUS={selectedUS} selectedBR={selectedBR} />
      )}
      <Header handleLanguageChange={handleLanguageChange} language={language} />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
