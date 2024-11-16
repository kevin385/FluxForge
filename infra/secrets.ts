export const secrets = (env: NodeJS.ProcessEnv) => {
  const secretsObj = {
    CLOUDFLARE_ACCOUNT_ID: new sst.Secret("CLOUDFLARE_ACCOUNT_ID", sst.cloudflare.DEFAULT_ACCOUNT_ID),
    CLOUDFLARE_API_TOKEN: new sst.Secret("CLOUDFLARE_API_TOKEN", env.CLOUDFLARE_API_TOKEN),
    API_VERSION: new sst.Secret("API_VERSION", env.API_VERSION)
  };
  return Object.values(secretsObj);
};
