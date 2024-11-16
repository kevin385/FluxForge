/// <reference path="./.sst/platform/config.d.ts" />
import * as infra from "./infra";

export default $config({
  app(input) {
    return {
      name: "fluxforge",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare"
    };
  },
  async run() {
    const db = infra.db();
    const bucket = infra.bucket();

    const DATABASE_ID = db.id.apply(id => new sst.Secret("DATABASE_ID", id));
    const secrets = [DATABASE_ID, ...infra.secrets(process.env)] as sst.Secret[];

    const api = infra.api(db, bucket, secrets);

    infra.web();

    return {
      api: api.url,
      web: "https://localhost:3000"
    };
  }
});
