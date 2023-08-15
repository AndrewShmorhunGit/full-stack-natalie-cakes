import { IInnerContent, IMenuCategoryParams } from "interfaces";
import { client } from "./http.client";

async function httpGetContent(lang: string): Promise<IInnerContent> {
  return (await client(`content/language=${lang}`)).json();
}

async function httpGetMenuParams(): Promise<IMenuCategoryParams> {
  return (await client(`menu/params`)).json();
}

export { httpGetContent, httpGetMenuParams };
