import { IMenuContent } from "interfaces/IContent";

// Images import
import moussesChocolatePassionFruit from "content/images/menu/mousses/chocolate-passion-fruit.svg";
import moussesStrawberriesWithTops from "content/images/menu/mousses/strawberries-with-tops.svg";
import moussesChocolateCherry from "content/images/menu/mousses/chocolate-cherry.svg";
import moussesBerryYogurt from "content/images/menu/mousses/berry-yogurt.svg";
import biscuitsBerryVanilla from "content/images/menu/biscuits/berry-vanilla.svg";
import biscuitsChocolateCaramel from "content/images/menu/biscuits/chocolate-caramel.svg";
import biscuitsChocolateRaspberry from "content/images/menu/biscuits/chocolate-raspberry.svg";
import biscuitsLemonBlueberry from "content/images/menu/biscuits/lemon-blueberry.svg";
import napoleon from "content/images/menu/classics/napoleon.svg";
import honeyCake from "content/images/menu/classics/honey-cake.svg";
import cheesecake from "content/images/menu/cheesecakes/cheesecake.svg";
import cheesecakeCaramel from "content/images/menu/cheesecakes/cheesecake-caramel.svg";

import { createCategoryVariantsArrayData } from "./static.settings.data";

const createCategoryVariantsArray = createCategoryVariantsArrayData;

export function createMenuData(content: IMenuContent) {
  return {
    categories: [
      {
        group: "birthday cakes",
        name: content.moussesCakes.name,
        positions: [
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName,
            imgSrc: moussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
          {
            itemName: content.moussesCakes.strawberriesWithTops,
            imgSrc: moussesStrawberriesWithTops,
            description: content.moussesCakes.strawberriesWithTops.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.strawberriesWithTops.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
          {
            itemName: content.moussesCakes.chocolateCherry.itemName,
            imgSrc: moussesChocolateCherry,
            description: content.moussesCakes.chocolateCherry.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolateCherry.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
          {
            itemName: content.moussesCakes.berryYogurt.itemName,
            imgSrc: moussesBerryYogurt,
            description: content.moussesCakes.berryYogurt.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.berryYogurt.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
        ],
      },
      {
        group: "birthday cakes",
        name: content.biscuitCakes.name,
        positions: [
          {
            itemName: content.biscuitCakes.berryVanilla.itemName,
            imgSrc: biscuitsBerryVanilla,
            description: content.biscuitCakes.berryVanilla.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.biscuitCakes.berryVanilla.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
          {
            itemName: content.biscuitCakes.chocolateCaramel.itemName,
            imgSrc: biscuitsChocolateCaramel,
            description: content.biscuitCakes.chocolateCaramel.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.biscuitCakes.chocolateCaramel.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
          {
            itemName: content.biscuitCakes.chocolateRaspberry.itemName,
            imgSrc: biscuitsChocolateRaspberry,
            description: content.biscuitCakes.chocolateRaspberry.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.biscuitCakes.chocolateRaspberry.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
          {
            itemName: content.biscuitCakes.lemonBlueberry.itemName,
            imgSrc: biscuitsLemonBlueberry,
            description: content.biscuitCakes.lemonBlueberry.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.biscuitCakes.lemonBlueberry.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
        ],
      },
      {
        group: "cakes and pies",
        name: content.classicCakes.name,
        positions: [
          {
            itemName: content.classicCakes.napoleon.itemName,
            imgSrc: napoleon,
            description: content.classicCakes.napoleon.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.classicCakes.napoleon.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
          {
            itemName: content.classicCakes.honeyCake.itemName,
            imgSrc: honeyCake,
            description: content.classicCakes.honeyCake.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.classicCakes.honeyCake.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
        ],
      },
      {
        group: "cakes and pies",
        name: content.cheesecakes.name,
        positions: [
          {
            itemName: content.cheesecakes.cheesecake.itemName,
            imgSrc: cheesecake,
            description: content.cheesecakes.cheesecake.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.cheesecakes.cheesecake.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
          {
            itemName: content.cheesecakes.cheesecakeCaramel.itemName,
            imgSrc: cheesecakeCaramel,
            description: content.cheesecakes.cheesecakeCaramel.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.cheesecakes.cheesecakeCaramel.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
        ],
      },
    ],
  };
}
