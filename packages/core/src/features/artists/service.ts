import { ArtistsRepository } from "./repository";

export class ArtistsService {
  constructor(private artistsRepository: ArtistsRepository) {}

  getArtists = async () => {
    const response = await this.artistsRepository.getArtists();
    return response;
  };
}
