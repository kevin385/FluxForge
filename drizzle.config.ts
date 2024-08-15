import { defineConfig } from "drizzle-kit";
import { Resource } from "sst";

export default defineConfig({
  driver: "d1-http",
  dialect: "sqlite",
  dbCredentials: {
    accountId: Resource.CloudflareAccountId.value,
    databaseId: Resource.DatabaseId.value,
    token: Resource.CloudflareApiToken.value
  },
  schema: ["./packages/core/src/providers/db/schema/sql.ts"],
  out: "./packages/core/src/providers/db/migrations"
});
