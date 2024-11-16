import { z } from "zod";
import { insertArtistsSchema, updateArtistsSchema } from "./validations";

//
// Types
//
export type ArtistsCreationType = z.infer<typeof insertArtistsSchema>;
export type ArtistsUpdationType = z.infer<typeof updateArtistsSchema>;
