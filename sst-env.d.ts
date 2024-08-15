/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "CloudflareAccountId": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "CloudflareApiToken": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "DatabaseId": {
      "type": "sst.sst.Secret"
      "value": string
    }
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
