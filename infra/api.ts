export const api = () =>
  new sst.cloudflare.Worker("Hono", {
    url: true,
    handler: "packages/api/index.ts",
  });
