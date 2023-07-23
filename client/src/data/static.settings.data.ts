// content/text/text.content.ts static data

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

interface ISizeVariant {
  size: string;
  radius: number;
  persons: number;
  weight: number;
  price: number;
}

export function createCategoryVariantsArrayData(
  [xs = 0, s = 0, m = 0, l = 0],
  categoryParams: {
    sizes: string[];
    persons: number[];
    weight: number[];
    radius: number[];
    // prices: number[];
  }
): ISizeVariant[] {
  function createVariant(arr: string[] | number[]): IVariant {
    return { xs: arr[0], s: arr[1], m: arr[2], l: arr[3] };
  }

  const sizes = createVariant(categoryParams.sizes);
  const persons = createVariant(categoryParams.persons);
  const weights = createVariant(categoryParams.weight);
  const radius = createVariant(categoryParams.radius);
  // const prices = createVariant(categoryParams.prices);

  function createSizeVariant(
    size: "xs" | "s" | "m" | "l",
    price: number
  ): ISizeVariant {
    return {
      size: sizes[size].toString().toUpperCase(),
      radius: +radius[size],
      persons: +persons[size],
      weight: +weights[size],
      price,
    };
  }

  let categoryVariants = [];
  if (l) {
    categoryVariants.push(createSizeVariant("l", +l));
  }
  if (m) {
    categoryVariants.push(createSizeVariant("m", +m));
  }
  if (s) {
    categoryVariants.push(createSizeVariant("s", +s));
  }
  if (xs) {
    categoryVariants.push(createSizeVariant("xs", +xs));
  }
  return categoryVariants;
}
