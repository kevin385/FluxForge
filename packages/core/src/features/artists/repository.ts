import { ArtistsTable, DB } from "../../providers/db/types";

export class ArtistsRepository {
  constructor(
    private db: DB,
    private artists: ArtistsTable
  ) {}

  getArtists = async () => {
    return this.db.select().from(this.artists);
  };
}
