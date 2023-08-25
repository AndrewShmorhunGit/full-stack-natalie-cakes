export interface IMenuParams {
  category: string;
  params: IMenuCategoryParams;
}

export interface IMenu {
  menuParamsData: IMenuParams[];
}

export interface IMenuCategoryParams {
  sizes: string[];
  persons: number[];
  weight: number[];
  radius: number[];
  prices: number[];
}
