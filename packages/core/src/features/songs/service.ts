import { SongsRepository } from "./repository";

export class SongsService {
  constructor(private songsRepository: SongsRepository) {}

  getSongs = async () => {
    const response = await this.songsRepository.getSongs();
    return response;
  };
}
