/* tslint:disable */
/* eslint-disable */
/// <reference path="../../sst-env.d.ts" />
// cloudflare 
declare module "sst" {
  export interface Resource {
    "Database": import("@cloudflare/workers-types").D1Database
    "MusicBucket": import("@cloudflare/workers-types").R2Bucket
  }
}
export {}
