import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  client: "better-sqlite3",
  connection: {
    filename: join(__dirname, "./db.sqlite"),
  },
  useNullAsDefault: true,
};
