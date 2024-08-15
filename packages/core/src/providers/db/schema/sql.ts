import { pgTable, serial, varchar, text, integer, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enums
export const genreEnum = ["rock", "pop", "hip_hop", "electronic", "classical", "jazz", "country", "other"] as const;

// Artists table
export const artists = pgTable("artists", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  bio: text("bio"),
  formedYear: integer("formed_year"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// Albums table
export const albums = pgTable("albums", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  releaseYear: integer("release_year").notNull(),
  genre: text("genre", { enum: genreEnum }),
  coverArtUrl: varchar("cover_art_url", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// Songs table
export const songs = pgTable("songs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  albumId: integer("album_id").references(() => albums.id),
  trackNumber: integer("track_number"),
  duration: integer("duration"), // Duration in seconds
  filePath: varchar("file_path", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// Artist-Album relation (for various artist albums)
export const artistAlbums = pgTable("artist_albums", {
  id: serial("id").primaryKey(),
  artistId: integer("artist_id")
    .references(() => artists.id)
    .notNull(),
  albumId: integer("album_id")
    .references(() => albums.id)
    .notNull()
});

// Artist-Song relation (for collaborations)
export const artistSongs = pgTable("artist_songs", {
  id: serial("id").primaryKey(),
  artistId: integer("artist_id")
    .references(() => artists.id)
    .notNull(),
  songId: integer("song_id")
    .references(() => songs.id)
    .notNull()
});

// Playlists table
export const playlists = pgTable("playlists", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// Playlist-Song relation
export const playlistSongs = pgTable("playlist_songs", {
  id: serial("id").primaryKey(),
  playlistId: integer("playlist_id")
    .references(() => playlists.id)
    .notNull(),
  songId: integer("song_id")
    .references(() => songs.id)
    .notNull(),
  order: integer("order").notNull()
});

// Relations
export const artistsRelations = relations(artists, ({ many }) => ({
  albums: many(artistAlbums),
  songs: many(artistSongs)
}));

export const albumsRelations = relations(albums, ({ many }) => ({
  songs: many(songs),
  artists: many(artistAlbums)
}));

export const songsRelations = relations(songs, ({ one, many }) => ({
  album: one(albums, {
    fields: [songs.albumId],
    references: [albums.id]
  }),
  artists: many(artistSongs),
  playlists: many(playlistSongs)
}));

export const playlistsRelations = relations(playlists, ({ many }) => ({
  songs: many(playlistSongs)
}));
