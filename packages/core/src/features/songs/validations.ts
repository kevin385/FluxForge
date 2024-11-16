import { createInsertSchema } from "drizzle-zod";
import { songs } from "../../providers/db/schema/sql";

export const insertSongsSchema = createInsertSchema(songs);
export const updateSongsSchema = insertSongsSchema.partial();
