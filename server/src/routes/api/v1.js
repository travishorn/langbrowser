import { db } from "../../db.js";

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
const routes = async (fastify) => {
  fastify.get("/messages", {
    schema: {
      query: {
        type: "object",
        required: ["name"],
        properties: {
          name: { type: "string" },
        },
      },
    },
    handler: async (request) => {
      return await db
        .first(["id", "name", "message"])
        .from("messages")
        .where({ name: request.query.name });
    },
  });
};

export default routes;
