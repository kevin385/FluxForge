import { defineConfig } from "drizzle-kit";
import { Resource } from "sst";

export default defineConfig({
  driver: "d1-http",
  dialect: "sqlite",
  dbCredentials: {
    accountId: Resource.CLOUDFLARE_ACCOUNT_ID.value,
    databaseId: Resource.DATABASE_ID.value,
    token: Resource.CLOUDFLARE_API_TOKEN.value
  },
  schema: ["./packages/core/src/providers/db/schema/sql.ts"],
  out: "./packages/core/src/providers/db/migrations"
});
