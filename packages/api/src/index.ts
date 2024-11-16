import { OpenAPIHono } from "@hono/zod-openapi";
import { setupRoutes } from "./routes";
import { errorHandler, notFound } from "./handlers";
import { setupDocumentation } from "./routes/documentation";

const app = new OpenAPIHono();
const apiVersion = "1";
const defaultMessage = "Welcome from FluxForge API.";
const versionPath = `/v${apiVersion}`;
const documentation = setupDocumentation(apiVersion, versionPath);
const routes = setupRoutes();

// Default versioned route
app.get(versionPath, c => c.json({ message: defaultMessage, version: apiVersion }));
app.route(versionPath, documentation);
app.route(versionPath, routes);

// Error and not-found handlers
app.onError(errorHandler);
app.notFound(notFound);

// Base route for health check or initial response
app.get("/", c => c.json({ message: defaultMessage }));

export default app;
