export const web = (api: sst.cloudflare.Worker) =>
  new sst.cloudflare.StaticSite("Web", {
    path: "packages/web",
    build: { command: "pnpm build", output: "out" },
    environment: {
      API_URL: api.url
    }
  });
