import { createInsertSchema } from "drizzle-zod";
import { artists } from "../../providers/db/schema/sql";

export const insertArtistsSchema = createInsertSchema(artists);
export const updateArtistsSchema = insertArtistsSchema.partial();
