// export const web = (api: sst.cloudflare.Worker) =>
//   new sst.x.DevCommand("Web", {
//     link: [api],
//     dev: {
//       autostart: true,
//       command: "pnpm dev:web"
//     }
//   });

export const web = () =>
  new cloudflare.PagesProject("Web", {
    accountId: sst.cloudflare.DEFAULT_ACCOUNT_ID,
    name: "fluxforge-web-app",
    productionBranch: "main",
    // Build configuration
    buildConfig: {
      rootDir: "./packages/web",
      buildCommand: "pnpm run build",
      destinationDir: "out"
    },
    deploymentConfigs: {
      production: {
        secrets: {},
        failOpen: false
      },
      preview: {
        secrets: {},
        failOpen: false
      }
    }
  });
