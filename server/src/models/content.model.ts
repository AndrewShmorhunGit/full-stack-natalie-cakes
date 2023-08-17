import content from "./content.mongo";

async function getContent(lang: string) {
  const exclude =
    lang === "en"
      ? { contentRu: 0, contentHb: 0 }
      : lang === "ru"
      ? { contentEn: 0, contentHb: 0 }
      : { contentEn: 0, contentRu: 0 };
  const excludeOption = {
    _id: 0,
    ...exclude,
  };

  return await content.findOne({}, excludeOption);
}

export { getContent };
