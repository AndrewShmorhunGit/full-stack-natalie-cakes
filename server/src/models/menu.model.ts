// import { menuParamsData } from "../data/menu/menu.data";

import menuParams from "./menu.mongo";
// const menuParams = menuParamsData;

async function getMenuParams() {
  return await menuParams.findOne({});
}

export { getMenuParams };
