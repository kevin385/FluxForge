import { z } from "zod";
import { insertSongsSchema, updateSongsSchema } from "./validations";

//
// Types
//
export type SongsCreationType = z.infer<typeof insertSongsSchema>;
export type SongsUpdationType = z.infer<typeof updateSongsSchema>;
