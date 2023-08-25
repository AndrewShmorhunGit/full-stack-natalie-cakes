export interface IMenuContent {
  category: string;
  group: string;
  items: IMenuItemData[];
}

export interface IMenuItemData {
  itemName: string;
  description: string;
  tasteAccent: string;
  image: string;
  sourness: number;
  sweetness: number;
  variants: number[];
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
  footerOther: {
    contacts: string;
    question: string;
    callBack: string;
    follow: string;
    menu: string;
    cart: string[];
  };
  callBackBtn: string;
  // Menu
  menuTitle: string;
  menuContent: IMenuContent[];
  sweetness: string;
  sourness: string;
  taste: string;
}

export interface IContent {
  contentEn: IInnerContent;
  contentRu: IInnerContent;
  contentHb: IInnerContent;
}
