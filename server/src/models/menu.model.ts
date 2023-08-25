import menuParams from "./menu.mongo";

async function getMenuParams() {
  return await menuParams.findOne(
    {},
    {
      _id: 0,
    }
  );
}

export { getMenuParams };
