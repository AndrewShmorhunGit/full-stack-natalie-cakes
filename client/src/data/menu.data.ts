import { createCategoryVariantsArrayData } from "./static.settings.data";
import { IMenuData, IMenuParamsNew } from "interfaces/IMenu";
import { IMenuContentNew } from "interfaces/IContent";
import { env } from "config/env.config";

const createCategoryVariantsArray = createCategoryVariantsArrayData;

export const createMenuData = (
  content: IMenuContentNew[],
  menuParams: IMenuParamsNew[]
) => {
  return content.reduce((total: IMenuData[], categoryContent, index) => {
    const categoryParams = menuParams[index];

    const menuCategory = {
      group: categoryContent.group,
      name: categoryContent.category,
      positions: categoryContent.items.map((position, _index) => {
        return {
          itemName: position.itemName,
          imgSrc: env.api.images.menu + position.image,
          description: position.description,
          sourness: position.sourness,
          sweetness: position.sweetness,
          tasteAccent: position.tasteAccent,
          variants: createCategoryVariantsArray(
            position.variants,
            categoryParams.params
          ),
        };
      }),
    };

    total.push(menuCategory);
    console.log(total);
    return total;
  }, []);
};
