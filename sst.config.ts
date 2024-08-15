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

    const databaseId = db.id.apply(id => new sst.Secret("DatabaseId", id));
    const cloudflareAccountId = new sst.Secret("CloudflareAccountId", sst.cloudflare.DEFAULT_ACCOUNT_ID);
    const cloudflareApiToken = new sst.Secret("CloudflareApiToken", process.env.CLOUDFLARE_API_TOKEN);
    const secrets = [databaseId, cloudflareAccountId, cloudflareApiToken] as sst.Secret[];

    const api = infra.api(db, bucket, secrets);

    return {
      api: api.url
    };
  }
});
