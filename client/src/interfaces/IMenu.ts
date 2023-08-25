import { ISizeVariant } from "data/static.settings.data";

export interface IMenu {
  menuParamsData: IMenuParams[];
}

export interface IMenuParams {
  category: string;
  params: IMenuCategoryParams;
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
