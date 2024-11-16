import { Context } from "hono";
import { SongsService } from "./service";

export class SongsController {
  constructor(private songsService: SongsService) {}

  getSongs = async (c: Context) => {
    const response = await this.songsService.getSongs();
    return c.json({ response });
  };
}
