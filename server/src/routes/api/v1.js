import { db } from "../../db.js";

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
const routes = async (fastify) => {
  fastify.get("/language", {
    schema: {
      query: {
        type: "object",
        properties: {
          paradigm: { type: "string" },
        },
      },
    },
    handler: async (request) => {
      /*
       * Result is in format:
       * [
       *   { name: "langOne", paradigm: "paraOne" },
       *   { name: "langOne", paradigm: "paraTwo" },
       *   { name: "langTwo", paradigm: "paraOne" },
       *   { name: "langTwo", paradigm: "paraTwo" },
       * ]
       */
      const dbResult = await db
        .select(["l.name", "p.name as paradigm"])
        .from("languages as l")
        .leftJoin("languageParadigms as lp", "lp.languageName", "=", "l.name")
        .join("paradigms as p", "p.name", "=", "lp.paradigmName")
        .modify(function (qb) {
          if (request.query.paradigm) {
            qb.whereIn(
              "l.name",
              db
                .select(["l2.name"])
                .from("languages as l2")
                .join(
                  "languageParadigms as lp2",
                  "lp2.languageName",
                  "=",
                  "l2.name"
                )
                .join("paradigms as p2", "p2.name", "=", "lp2.paradigmName")
                .where({ "p2.name": request.query.paradigm })
            );
          }
        })
        .orderBy(["l.name", "p.name"]);

      /*
       * Convert and return in format:
       * [
       *  { name: "langOne", paradigms: ["paraOne", "paraTwo"] }
       *  { name: "langTwo", paradigms: ["paraOne", "paraTwo"] }
       * ]
       */
      return dbResult.reduce((prev, curr) => {
        const langIndex = prev.findIndex((d) => d.name === curr.name);

        if (langIndex === -1) {
          prev.push({ name: curr.name, paradigms: [curr.paradigm] });
        } else {
          prev[langIndex].paradigms.push(curr.paradigm);
        }

        return prev;
      }, []);
    },
  });

  fastify.get("/language/:name", {
    handler: async (request) => {
      const language = await db
        .first(["l.name", "l.description", "l.appeared"])
        .from("languages as l")
        .where({ name: request.params.name });

      const originalPurposes = await db
        .select(["p.name"])
        .from("purposes as p")
        .join(
          "languageOriginalPurposes as lop",
          "lop.purposeName",
          "=",
          "p.name"
        )
        .join("languages as l", "l.name", "=", "lop.languageName")
        .where({ "l.name": request.params.name });

      const paradigms = await db
        .select(["p.name"])
        .from("paradigms as p")
        .join("languageParadigms as lp", "lp.paradigmName", "=", "p.name")
        .join("languages as l", "l.name", "=", "lp.languageName")
        .where({ "l.name": request.params.name });

      return {
        ...language,
        originalPurposes: originalPurposes.map((p) => p.name),
        paradigms: paradigms.map((p) => p.name),
      };
    },
  });

  fastify.get("/paradigm/:name", {
    handler: async (request) => {
      const paradigm = await db
        .first(["p.name", "p.description"])
        .from("paradigms as p")
        .where({ name: request.params.name });

      const languages = await db
        .select(["l.name"])
        .from("languages as l")
        .join("languageParadigms as lp", "lp.languageName", "=", "l.name")
        .join("paradigms as p", "p.name", "=", "lp.paradigmName")
        .where({ "p.name": request.params.name });

      return {
        ...paradigm,
        languages: languages.map((l) => l.name),
      };
    },
  });

  fastify.get("/purpose/:name", {
    handler: async (request) => {
      const purpose = await db
        .first(["p.name", "p.description"])
        .from("purposes as p")
        .where({ name: request.params.name });

      const languages = await db
        .select(["l.name"])
        .from("languages as l")
        .join(
          "languageOriginalPurposes as lop",
          "lop.languageName",
          "=",
          "l.name"
        )
        .join("purposes as p", "p.name", "=", "lop.purposeName")
        .where({ "p.name": request.params.name });

      return {
        ...purpose,
        languages: languages.map((l) => l.name),
      };
    },
  });
};

export default routes;
