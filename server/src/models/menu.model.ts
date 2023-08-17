import menuParams from "./menu.mongo";

async function getMenuParams() {
  return await menuParams.findOne({});
}

export { getMenuParams };
