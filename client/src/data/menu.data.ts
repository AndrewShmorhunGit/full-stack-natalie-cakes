import { IMenuContent } from "interfaces/IContent";

// Images import
import MoussesChocolatePassionFruit from "content/images/menu/mousses/chocolate-passion-fruit.svg";
import { createCategoryVariantsArrayData } from "./static.settings.data";

const createCategoryVariantsArray = createCategoryVariantsArrayData;

const biscuitParams = {
  sizes: ["xs", "s", "m", "l"],
  persons: [12, 17, 23, 27],
  weight: [1.7, 2.5, 3.4, 3.9],
  radius: [180, 200, 220, 240],
  prices: [110, 140, 175, 280],
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
            variants: createCategoryVariantsArray([null, 10, 20, 30]),

            // mousseParams
          },
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName + "1",
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: createCategoryVariantsArray([null, 0, null, 0]),
          },
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName + "2",
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: createCategoryVariantsArray(),
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
            variants: createCategoryVariantsArray([0, 0, 0, 0], biscuitParams),
          },
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName + "1",
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: createCategoryVariantsArray(),

            // mousseParams
          },
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName + "2",
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
        ],
      },
    ],
  };
}
