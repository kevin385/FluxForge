export const db = () => new sst.cloudflare.D1("Database");

export const studio = (db: sst.cloudflare.D1) =>
  new sst.x.DevCommand("Studio", {
    link: [db],
    dev: {
      autostart: false,
      command: "pnpm db:studio"
    }
  });
