import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import Fastify from "fastify";
import staticPlugin from "@fastify/static";
import corsPlugin from "@fastify/cors";
import apiV1Route from "./routes/api/v1.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify = Fastify({ logger: true });

// Serve the built, static client files
fastify.register(staticPlugin, {
  root: join(__dirname, "../../client/dist"),
});

// Set CORS policy
fastify.register(corsPlugin);

// Serve the JSON api
fastify.register(apiV1Route, { prefix: "api/v1" });

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
