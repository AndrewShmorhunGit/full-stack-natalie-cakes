import { IMenuContentNew } from "interfaces/IContent";

const emptyContentBlockNew = {
  itemName: "",
  description: "",
  tasteAccent: "",
  image: "",
  sourness: 0,
  sweetness: 0,
  variants: [],
};

const emptyCategory = {
  category: "Loading",
  group: "",
  items: [emptyContentBlockNew, emptyContentBlockNew],
};

export const menuContentEmpty: IMenuContentNew[] = [
  emptyCategory,
  emptyCategory,
  emptyCategory,
  emptyCategory,
];

// Old menu content style (deprecated)

// const emptyContentBlock = {
//   itemName: "Loading",
//   description: "",
//   tasteAccent: "",
// };

// export const menuContentEmpty: IMenuContent = {
//   moussesCakes: {
//     name: "Loading",
//     chocolatePassionFruit: emptyContentBlock,
//     strawberriesWithTops: emptyContentBlock,
//     chocolateCherry: emptyContentBlock,
//     berryYogurt: emptyContentBlock,
//   },
//   biscuitCakes: {
//     name: "Loading",
//     berryVanilla: emptyContentBlock,
//     chocolateCaramel: emptyContentBlock,
//     chocolateRaspberry: emptyContentBlock,
//     lemonBlueberry: emptyContentBlock,
//   },
//   classicCakes: {
//     name: "Loading",
//     napoleon: emptyContentBlock,
//     honeyCake: emptyContentBlock,
//   },
//   cheesecakes: {
//     name: "Loading",
//     cheesecake: emptyContentBlock,
//     cheesecakeCaramel: emptyContentBlock,
//   },
// };
