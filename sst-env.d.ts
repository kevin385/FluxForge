/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
  }
}
// cloudflare 
declare module "sst" {
  export interface Resource {
    "Database": import("@cloudflare/workers-types").D1Database
    "MusicBucket": import("@cloudflare/workers-types").R2Bucket
  }
}
export {}
