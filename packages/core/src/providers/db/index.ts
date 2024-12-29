import { drizzle } from "drizzle-orm/d1";
import { Resource } from "sst";

export function initializeDb() {
  return drizzle(Resource.Database);
}

export * as schema from "./schema/sql";
