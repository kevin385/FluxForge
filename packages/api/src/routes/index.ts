import { OpenAPIHono } from "@hono/zod-openapi";
import { MiddlewareHandler } from "hono";

interface RoutesListTypes {
  endpoint: string;
  router: OpenAPIHono;
  middleware?: MiddlewareHandler[];
}

export const setupRoutes = () => {
  const routes = new OpenAPIHono();

  routesList.forEach(route => {
    if (route.middleware) {
      routes.use(`${route.endpoint}/*`, ...route.middleware);
    }
    routes.route(route.endpoint, route.router);
  });

  return routes;
};

const routesList: RoutesListTypes[] = [];
