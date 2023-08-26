// content/text/text.content.ts static data

import { IMenuCategoryParams } from "interfaces/IMenu";

export const decoHeaderPropsData = {
  width: 620,
  height: 60,
};

export const decoBlockPropsData = {
  width: 60,
  height: 30,
};

// data/menu.data.ts static data

interface IVariant {
  xs: string | number;
  s: string | number;
  m: string | number;
  l: string | number;
}

export interface ISizeVariant {
  size: string;
  radius: number;
  persons: number;
  weight: number;
  price: number;
}

export function createCategoryVariantsArrayData(
  // This array allow us to add or subtract from the categoryParams.price array for each menu unit size
  [xs, s, m, l]: (number | null)[] = [0, 0, 0, 0],
  categoryParams: IMenuCategoryParams
): ISizeVariant[] {
  function createVariant(arr: string[] | number[]): IVariant {
    return { xs: arr[0], s: arr[1], m: arr[2], l: arr[3] };
  }

  const sizes = createVariant(categoryParams.sizes);
  const persons = createVariant(categoryParams.persons);
  const weights = createVariant(categoryParams.weight);
  const radius = createVariant(categoryParams.radius);
  const prices = createVariant(categoryParams.prices);

  function createSizeVariant(
    size: "xs" | "s" | "m" | "l",
    price: number
  ): ISizeVariant {
    return {
      size: sizes[size].toString().toUpperCase(),
      radius: +radius[size],
      persons: +persons[size],
      weight: +weights[size],
      price: +prices[size] + price,
    };
  }

  let categoryVariants = [];
  if (xs !== null) {
    categoryVariants.push(createSizeVariant("xs", +xs));
  }
  if (s !== null) {
    categoryVariants.push(createSizeVariant("s", +s));
  }
  if (m !== null) {
    categoryVariants.push(createSizeVariant("m", +m));
  }
  if (l !== null) {
    categoryVariants.push(createSizeVariant("l", +l));
  }
  return categoryVariants;
}
