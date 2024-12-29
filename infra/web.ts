export const web = (api: sst.cloudflare.Worker) =>
  new sst.x.DevCommand("Web", {
    link: [api],
    dev: {
      autostart: true,
      command: "pnpm dev:web"
    }
  });
