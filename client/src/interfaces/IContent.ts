import { ReactNode } from "react";

interface IMenuItemData {
  itemName: string;
  description: string;
  tasteAccent: string;
}

export interface IMenuContent {
  moussesCakes: {
    name: string;
    chocolatePassionFruit: IMenuItemData;
    strawberriesWithTops: IMenuItemData;
    chocolateCherry: IMenuItemData;
    berryYogurt: IMenuItemData;
  };
  biscuitCakes: {
    name: string;
    berryVanilla: IMenuItemData;
    chocolateCaramel: IMenuItemData;
    chocolateRaspberry: IMenuItemData;
    lemonBlueberry: IMenuItemData;
  };
  classicCakes: {
    name: string;
    napoleon: IMenuItemData;
    honeyCake: IMenuItemData;
  };
  cheesecakes: {
    name: string;
    cheesecake: IMenuItemData;
    cheesecakeCaramel: IMenuItemData;
  };
}

export interface IInnerContent {
  // Nav
  about: string | ReactNode;
  contacts: string | ReactNode;
  makeSweet: string | ReactNode;
  // Hero
  mainHeader: string | ReactNode;
  heroTagline: string;
  slogan: string | ReactNode;
  heroSelectors: {
    birthdayCake: string | ReactNode;
    cakesAndPies: string | ReactNode;
    cupCakes: string | ReactNode;
    gingerBread: string | ReactNode;
  };
  // Info
  infoHeader: string | ReactNode;
  ingredients: string | ReactNode;
  ingredientsText: {
    h1: string | ReactNode;
    p1: string | ReactNode;
    h2: string | ReactNode;
    p2: string | ReactNode;
  };
  design: string;
  designText: {
    h1: string | ReactNode;
    p1: string | ReactNode;
    h2: string | ReactNode;
    p2: string | ReactNode;
  };
  order: string;
  orderText: {
    h1: string | ReactNode;
    p1: string | ReactNode;
    h2: string | ReactNode;
    p2: string | ReactNode;
  };
  important: string;
  importantText: {
    h1: string | ReactNode;
    p1: string | ReactNode;
    p2: string | ReactNode;
  };
  // Footer
  footerOther: {
    contacts: string | ReactNode;
    question: string | ReactNode;
    callBack: string | ReactNode;
    follow: string | ReactNode;
    menu: string | ReactNode;
    cart: string[] | ReactNode[];
  };
  callBackBtn: string | ReactNode;
  // Menu
  menuTitle: string | ReactNode;
  menuContent: IMenuContent;
  sweetness: string;
  sourness: string;
  taste: string;
}

export interface IContent {
  contentEn: IInnerContent;
  contentRu: IInnerContent;
  contentHb: IInnerContent;
}
