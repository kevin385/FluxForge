import { initializeDb } from "../../providers";
import { ArtistsTable } from "../../providers/db/types";

export class ArtistsRepository {
  constructor(private artists: ArtistsTable) {}

  getArtists = async () => {
    const db = initializeDb();
    return db.select().from(this.artists);
  };
}
