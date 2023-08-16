import mongoose from "mongoose";
import { IMenuParams } from "../interfaces/IMenu";

const menuCategoryParamsSchema = {
  sizes: { type: [String], required: true },
  persons: { type: [Number], required: true },
  weight: { type: [Number], required: true },
  radius: { type: [Number], required: true },
  prices: { type: [Number], required: true },
};

const menuParamsSchema = new mongoose.Schema<IMenuParams>({
  moussesParams: menuCategoryParamsSchema,
  biscuitParams: menuCategoryParamsSchema,
  classicParams: menuCategoryParamsSchema,
  cheesecakesParams: menuCategoryParamsSchema,
});

export = mongoose.model("Menu", menuParamsSchema);
