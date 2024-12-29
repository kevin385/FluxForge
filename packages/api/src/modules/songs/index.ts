import { SongsController, SongsRepository, SongsService, schema } from "@fluxforge/core";

export const initSongsModule = () => {
  const repository = new SongsRepository(schema.songs);
  const service = new SongsService(repository);
  const controller = new SongsController(service);

  return { controller };
};
