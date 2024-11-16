import { Context } from "hono";
import { ArtistsService } from "./service";

export class ArtistsController {
  constructor(private artistsService: ArtistsService) {}

  getArtists = async (c: Context) => {
    const response = await this.artistsService.getArtists();
    return c.json({ response });
  };
}
