export interface IMenuParams {
  mussesParams: IMenuCategoryParams;
  biscuitParams: IMenuCategoryParams;
  classicParams: IMenuCategoryParams;
  cheesecakesParams: IMenuCategoryParams;
}

export interface IMenuCategoryParams {
  sizes: string[];
  persons: number[];
  weight: number[];
  radius: number[];
  prices: number[];
}
export interface IPriceList {
  musses: number[];
  biscuits: number[];
  classic: number[];
  cheesecakes: number[];
}
