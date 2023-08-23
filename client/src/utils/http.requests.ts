import { IContent, IMenuParamsNew } from "interfaces";
import { client } from "./http.client";

async function httpGetContent(lang: string): Promise<IContent> {
  return (await client(`content/language=${lang}`)).json();
}

async function httpGetMenuParams(): Promise<IMenuParamsNew[]> {
  return (await client(`menu/params1`)).json();
}

export { httpGetContent, httpGetMenuParams };
