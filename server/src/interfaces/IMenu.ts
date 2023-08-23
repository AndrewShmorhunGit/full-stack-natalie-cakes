export interface IMenuParamsNew {
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
