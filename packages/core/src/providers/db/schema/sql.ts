import { sqliteTable, text, integer, primaryKey } from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";

// Artists table
export const artists = sqliteTable("artists", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  bio: text("bio"),
  formedYear: integer("formed_year"),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
});

// Albums table
export const albums = sqliteTable("albums", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  releaseYear: integer("release_year").notNull(),
  genre: text("genre"),
  coverArtUrl: text("cover_art_url"),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
});

// Songs table
export const songs = sqliteTable("songs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  albumId: integer("album_id").references(() => albums.id),
  trackNumber: integer("track_number"),
  duration: integer("duration"), // Duration in seconds
  filePath: text("file_path").notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
});

// Artist-Album relation (for various artist albums)
export const artistAlbums = sqliteTable(
  "artist_albums",
  {
    artistId: integer("artist_id")
      .references(() => artists.id)
      .notNull(),
    albumId: integer("album_id")
      .references(() => albums.id)
      .notNull()
  },
  table => [primaryKey({ columns: [table.artistId, table.albumId] })]
);

// Artist-Song relation (for collaborations)
export const artistSongs = sqliteTable(
  "artist_songs",
  {
    artistId: integer("artist_id")
      .references(() => artists.id)
      .notNull(),
    songId: integer("song_id")
      .references(() => songs.id)
      .notNull()
  },
  table => [primaryKey({ columns: [table.artistId, table.songId] })]
);

// Playlists table
export const playlists = sqliteTable("playlists", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
});

// Playlist-Song relation
export const playlistSongs = sqliteTable(
  "playlist_songs",
  {
    playlistId: integer("playlist_id")
      .references(() => playlists.id)
      .notNull(),
    songId: integer("song_id")
      .references(() => songs.id)
      .notNull(),
    order: integer("order").notNull()
  },
  table => [primaryKey({ columns: [table.playlistId, table.songId] })]
);

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
