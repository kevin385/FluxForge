export const web = () =>
  new sst.x.DevCommand("Web", {
    dev: {
      autostart: true,
      command: "pnpm dev:web"
    }
  });
