import { IMenuContent } from "interfaces/IContent";
const emptyContentBlock = {
  itemName: " ",
  description: "",
  tasteAccent: "",
};

export const menuContentEmpty: IMenuContent = {
  moussesCakes: {
    name: "Loading",
    chocolatePassionFruit: emptyContentBlock,
    strawberriesWithTops: emptyContentBlock,
    chocolateCherry: emptyContentBlock,
    berryYogurt: emptyContentBlock,
  },
  biscuitCakes: {
    name: "Loading",
    berryVanilla: emptyContentBlock,
    chocolateCaramel: emptyContentBlock,
    chocolateRaspberry: emptyContentBlock,
    lemonBlueberry: emptyContentBlock,
  },
  classicCakes: {
    name: "Loading",
    napoleon: emptyContentBlock,
    honeyCake: emptyContentBlock,
  },
  cheesecakes: {
    name: "Loading",
    cheesecake: emptyContentBlock,
    cheesecakeCaramel: emptyContentBlock,
  },
};
