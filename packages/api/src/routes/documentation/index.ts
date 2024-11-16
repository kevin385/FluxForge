import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";

export const setupDocumentation = (apiVersion: string, versionPath: string) => {
  const documentation = new OpenAPIHono();

  const openAPIDocumentationPath = "/open-api-docs";
  const APIDocumentationPath = "/docs";

  // Set up OpenAPI documentation
  documentation.doc(openAPIDocumentationPath, c => ({
    openapi: "3.0.0",
    info: {
      version: apiVersion,
      title: "FluxForge API"
    },
    servers: [
      {
        url: new URL(c.req.url).origin,
        description: "Current Environment"
      }
    ]
  }));

  documentation.openAPIRegistry.registerComponent("securitySchemes", "Bearer", {
    type: "http",
    scheme: "bearer"
  });

  // Serve Swagger UI
  documentation.get(APIDocumentationPath, swaggerUI({ url: versionPath + openAPIDocumentationPath }));

  return documentation;
};
