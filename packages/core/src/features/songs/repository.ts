import { initializeDb } from "../../providers";
import { SongsTable } from "../../providers/db/types";

export class SongsRepository {
  constructor(private songs: SongsTable) {}

  getSongs = async () => {
    const db = initializeDb();
    return db.select().from(this.songs);
  };
}
