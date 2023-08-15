export interface IMenuParams {
  moussesParams: IMenuCategoryParams;
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
  mousses: number[];
  biscuits: number[];
  classic: number[];
  cheesecakes: number[];
}
