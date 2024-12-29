import { OpenAPIHono } from "@hono/zod-openapi";
import { initArtistsModule } from "../../modules/artists";

const artists = new OpenAPIHono();

const { controller } = initArtistsModule();

artists.get("/", controller.getArtists);

export default artists;
