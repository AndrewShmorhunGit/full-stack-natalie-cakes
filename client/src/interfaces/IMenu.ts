import { ISizeVariant } from "data/static.settings.data";

export interface IMenuParamsNew {
  category: string;
  params: IMenuCategoryParams[];
}

export interface IMenuCategoryParams {
  sizes: string[];
  persons: number[];
  weight: number[];
  radius: number[];
  prices: number[];
}

export interface IMenuData {
  group: string;
  name: string;
  positions: {
    itemName: string;
    imgSrc: string;
    description: string;
    sourness: number;
    sweetness: number;
    tasteAccent: string;
    variants: ISizeVariant[];
  }[];
}

// Old menu content style (deprecated)

export interface IMenuParams {
  moussesParams: IMenuCategoryParams;
  biscuitParams: IMenuCategoryParams;
  classicParams: IMenuCategoryParams;
  cheesecakesParams: IMenuCategoryParams;
}
