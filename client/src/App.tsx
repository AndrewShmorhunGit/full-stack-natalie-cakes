// Components
import {
  CallToAction,
  Footer,
  Gallery,
  Hero,
  Information,
  Menu,
  Modal,
  Navigation,
  AppContainer,
} from "components";
// Styles
import "./styles/App.css";
// Interfaces
import { IAppBox } from "interfaces/IApp";
// Hooks
import { useMedia, useLanguage, useHover } from "hooks";
import { useEffect, useRef, useState } from "react";
// import { contentEmpty } from "content/text/text.content";

export function App() {
  // Set JS Media Queries //
  const mediaSettings = useMedia();
  // Set Language Content & Functionality//
  const contentSettings = useLanguage();
  // Modal state
  const [isModal, setModal] = useState("none");

  // Effects
  // Language change transition

  // Main Application params and functions Box
  const appBox: IAppBox = {
    // useLanguage
    isLanguage: contentSettings.isLanguage,
    setLanguage: contentSettings.setLanguage,
    innerContent: contentSettings.innerContent,
    languages: contentSettings.languages,
    isLanguageLoading: contentSettings.isLoading,
    isLanguageError: contentSettings.isError,
    setContent: contentSettings.setContent,
    isLangTransition: contentSettings.isLangTransition,
    // useMedia
    windowSize: mediaSettings.windowSize,
    isMedia: mediaSettings.isMedia,
    setMedia: mediaSettings.setMedia,
    setMediaByStep: mediaSettings.setMediaByStep,
    useHover,
    hoverRef: useRef(null),
    isModal,
    setModal,
  };

  // Error validation
  useEffect(() => {
    appBox.isLanguageError === true && setModal("error");
  }, [appBox.isLanguageError]);

  // Remove
  useEffect(() => {
    console.log(isModal);
  }, [isModal]);
  ////////////////////////////////////////////////

  return (
    <AppContainer dir={contentSettings.isLanguage === "hb" ? "rtl" : "ltr"}>
      <Navigation appBox={appBox} />
      <Hero appBox={appBox} />
      <Information appBox={appBox} />
      <Menu appBox={appBox} />
      <Modal appBox={appBox} />
      <Gallery appBox={appBox} />
      <CallToAction></CallToAction>
      <Footer appBox={appBox} />
    </AppContainer>
  );
}

export default App;
