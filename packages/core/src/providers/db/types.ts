import { db } from "./config";
import { artists, songs } from "./schema/sql";

export type DB = typeof db;

// Tables
export type SongsTable = typeof songs;

export type ArtistsTable = typeof artists;
