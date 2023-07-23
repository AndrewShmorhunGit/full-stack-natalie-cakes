import { IMenuContent } from "interfaces/IContent";

// Images import
import MoussesChocolatePassionFruit from "content/images/menu/mousses/chocolate-passion-fruit.png";
import { createCategoryVariantsArrayData } from "./static.settings.data";

const createCategoryVariantsArray = createCategoryVariantsArrayData;

// function setAllPrices(price: number): string {
//   const addAll = 0;
//   const multiplyAll = 1;
//   return `${price * multiplyAll + addAll}`;
// }

// function mussePrice(price: number[]): string[] {
//   const add = 0;
//   const multiply = 1;
//   return `${+setAllPrices(+price) * multiply + add}`;
// }

const mousseParams = {
  sizes: ["xs", "s", "m", "l"],
  persons: [8, 10, 12, 22],
  weight: [1.2, 1.6, 2.0, 3.3],
  radius: [180, 200, 220, 260],
  // prices: [110, 140, 175, 280],
};

const biscuitParams = {
  sizes: ["xs", "s", "m", "l"],
  persons: [12, 17, 23, 27],
  weight: [1.7, 2.5, 3.4, 3.9],
  radius: [180, 200, 220, 240],
};

export function createMenuData(content: IMenuContent) {
  return {
    categories: [
      {
        group: "birthday cakes",
        name: content.moussesCakes.name,
        positions: [
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName,
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: createCategoryVariantsArray(
              [110, 140, 175, 280],
              mousseParams
            ),
          },
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName + "1",
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: createCategoryVariantsArray(
              [110, 140, 175, 280],
              mousseParams
            ),
          },
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName + "2",
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: createCategoryVariantsArray(
              [110, 140, 175, 280],
              mousseParams
            ),
          },
        ],
      },
      {
        name: content.moussesCakes.name + "_test",
        positions: [
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName,
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: createCategoryVariantsArray(
              [110, 140, 175, 280],
              biscuitParams
            ),
          },
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName + "1",
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: createCategoryVariantsArray(
              [110, 140, 175, 280],
              mousseParams
            ),
          },
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName + "2",
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: createCategoryVariantsArray(
              [110, 140, 175, 280],
              mousseParams
            ),
          },
        ],
      },
    ],
  };
}
