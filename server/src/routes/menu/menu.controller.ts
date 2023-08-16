import { IMenuParams } from "../../interfaces/IMenu";
import { getMenuParams } from "../../models/menu.model";
import { Request } from "express";

// Fix that [any]
async function httpGetMenuParams(req: Request, res: any): Promise<IMenuParams> {
  return res.status(200).json(await getMenuParams());
}

export { httpGetMenuParams };
