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
