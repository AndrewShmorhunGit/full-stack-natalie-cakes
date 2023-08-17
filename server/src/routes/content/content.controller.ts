import { IInnerContent } from "../../interfaces/IContent";
import { getContent } from "../../models/content.model";

// Fix that [any]
async function httpGetContentEn(
  req: Request,
  res: any
): Promise<IInnerContent> {
  return res.status(200).json(await getContent("en"));
}

async function httpGetContentRu(
  req: Request,
  res: any
): Promise<IInnerContent> {
  return res.status(200).json(await getContent("ru"));
}

async function httpGetContentHb(
  req: Request,
  res: any
): Promise<IInnerContent> {
  return res.status(200).json(await getContent("hb"));
}

export { httpGetContentEn, httpGetContentRu, httpGetContentHb };
