/// <reference path="./.sst/platform/config.d.ts" />
import * as infra from "./infra";

export default $config({
  app(input) {
    return {
      name: "fluxforge",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare",
    };
  },
  async run() {
    const hono = infra.api();

    return {
      api: hono.url,
    };
  },
});
