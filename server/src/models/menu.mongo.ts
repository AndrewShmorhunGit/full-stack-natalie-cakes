import mongoose from "mongoose";
import { IMenuParamsNew } from "../interfaces/IMenu";

const menuParamsSchema = new mongoose.Schema<IMenuParamsNew[]>([
  {
    category: { type: String, required: true },
    params: {
      sizes: { type: [String], required: true },
      persons: { type: [Number], required: true },
      weight: { type: [Number], required: true },
      radius: { type: [Number], required: true },
      prices: { type: [Number], required: true },
    },
  },
]);
export = mongoose.model("Menu", menuParamsSchema);
