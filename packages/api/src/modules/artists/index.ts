import { ArtistsController, ArtistsRepository, ArtistsService, schema } from "@fluxforge/core";

export const initArtistsModule = () => {
  const repository = new ArtistsRepository(schema.artists);
  const service = new ArtistsService(repository);
  const controller = new ArtistsController(service);

  return { controller };
};
