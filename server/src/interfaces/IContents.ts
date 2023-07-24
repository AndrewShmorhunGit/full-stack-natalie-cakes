interface IMenuItemTextContent {
  itemName: string;
  description: string;
  tasteAccent: string;
}

export interface IMenuContent {
  moussesCakes: {
    name: string;
    chocolatePassionFruit: IMenuItemTextContent;
    strawberriesWithTops: IMenuItemTextContent;
    chocolateCherry: IMenuItemTextContent;
    berryYogurt: IMenuItemTextContent;
  };
  biscuitCakes: {
    name: string;
    berryVanilla: IMenuItemTextContent;
    chocolateCaramel: IMenuItemTextContent;
    chocolateRaspberry: IMenuItemTextContent;
    lemonBlueberry: IMenuItemTextContent;
  };
  classicCakes: {
    name: string;
    napoleon: IMenuItemTextContent;
    honeyCake: IMenuItemTextContent;
  };
  cheesecakes: {
    name: string;
    cheesecake: IMenuItemTextContent;
    cheesecakeCaramel: IMenuItemTextContent;
  };
}

export interface IInnerContent {
  // Nav
  about: string;
  contacts: string;
  makeSweet: string;
  // Hero
  mainHeader: string;
  heroTagline: string;
  slogan: string;
  heroSelectors: {
    birthdayCake: string;
    cakesAndPies: string;
    cupCakes: string;
    gingerBread: string;
  };
  // Info
  infoHeader: string;
  ingredients: string;
  ingredientsText: {
    h1: string;
    p1: string;
    h2: string;
    p2: string;
  };
  design: string;
  designText: {
    h1: string;
    p1: string;
    h2: string;
    p2: string;
  };
  order: string;
  orderText: {
    h1: string;
    p1: string;
    h2: string;
    p2: string;
  };
  important: string;
  importantText: {
    h1: string;
    p1: string;
    p2: string;
  };
  // Footer
  footerContacts: {
    address: string;
    phone: string;
    email: string;
  };
  footerOther: {
    contacts: string;
    question: string;
    callBack: string;
    follow: string;
    menu: string;
    cart: string[];
    rights: string;
  };
  callBackBtn: string;
  // Menu
  menuTitle: string;
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
