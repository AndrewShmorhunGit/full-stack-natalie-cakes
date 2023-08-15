import { IMenuParams } from "../../interfaces/IMenu";
import { menuParams } from "../../models/menu.model";
import { Request } from "express";

const menuController = {
  // Fix that [any]
  getMenuParams(req: Request, res: any): Promise<IMenuParams> {
    return res.status(200).json(menuParams);
  },
};
export { menuController };
