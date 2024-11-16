import { SongsTable, DB } from "../../providers/db/types";

export class SongsRepository {
  constructor(
    private db: DB,
    private songs: SongsTable
  ) {}

  getSongs = async () => {
    return this.db.select().from(this.songs);
  };
}
