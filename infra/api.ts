export const api = (db: sst.cloudflare.D1, bucket: sst.cloudflare.Bucket) =>
  new sst.cloudflare.Worker("API", {
    url: true,
    handler: "packages/api/src/index.ts",
    link: [db, bucket]
  });
