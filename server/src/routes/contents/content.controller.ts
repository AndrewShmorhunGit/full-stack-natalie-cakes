import { IContent } from "../../interfaces/IContent";
import { contents } from "../../models/content.model";
import { Request } from "express";

const contentsController = {
  // Fix that [any]
  getAllContents(req: Request, res: any): Promise<IContent> {
    return res.status(200).json(contents);
  },

  getEnContent(req: Request, res: any): Promise<IContent> {
    return res.status(200).json(contents.contentEn);
  },
  getRuContent(req: Request, res: any): Promise<IContent> {
    return res.status(200).json(contents.contentRu);
  },
  getHbContent(req: Request, res: any): Promise<IContent> {
    return res.status(200).json(contents.contentHb);
  },
};
export { contentsController };
