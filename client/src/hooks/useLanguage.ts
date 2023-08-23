import { ILanguages } from "interfaces/IApp";
import { IInnerContent } from "interfaces/IContent";
import { useEffect, useState } from "react";
import { contentEmpty } from "content/text/text.content";
import { httpGetContent } from "utils/http.requests";
import { useAsync } from "./useAsync";

interface ILanguageSettings {
  userLanguage: string;
  isLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  innerContent: IInnerContent;
  languages: ILanguages;
  isLoading: boolean;
  isError: boolean;
  setContent: React.Dispatch<React.SetStateAction<IInnerContent>>;
  isLangTransition: boolean;
}

export const useLanguage = (): ILanguageSettings => {
  const userLanguage = "en";
  const { run, isLoading, isError } = useAsync();
  const [isLanguage, setLanguage] = useState(userLanguage);
  const [isLangTransition, setLangTransition] = useState(false);
  const [isContent, setContent] = useState(contentEmpty);

  useEffect(() => {
    setContent(contentEmpty);
    run(
      httpGetContent(isLanguage).then((data) =>
        setTimeout(() => {
          const checkContent = () => {
            if (isLanguage === "en") return data.contentEn;
            if (isLanguage === "ru") return data.contentRu;
            if (isLanguage === "hb") return data.contentHb;

            return contentEmpty;
          };
          setContent(() => checkContent());
        }, 1000)
      )
    );

    // blocking language switching wile loading
    setLangTransition(true);
    setTimeout(() => {
      setLangTransition(false);
    }, 1000);
  }, [isLanguage, run]);

  const languages = { en: "en", ru: "ru", hb: "hb" };

  return {
    userLanguage,
    isLanguage,
    setLanguage,
    innerContent: isContent,
    languages,
    isLoading,
    isError,
    setContent,
    isLangTransition,
  };
};
