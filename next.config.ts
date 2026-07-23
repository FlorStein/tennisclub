import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/tennisclub" : "",
  assetPrefix: isGitHubPages ? "/tennisclub/" : undefined,
  trailingSlash: true,
};

export default nextConfig;
