import { IContent, IMenuParams } from "interfaces";
import { client } from "./http.client";

async function httpGetContent(lang: string): Promise<IContent> {
  return (await client(`content/language=${lang}`)).json();
}

async function httpGetMenuParams(): Promise<IMenuParams> {
  return (await client(`menu/params`)).json();
}

export { httpGetContent, httpGetMenuParams };
