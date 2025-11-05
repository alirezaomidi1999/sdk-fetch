// src/config.ts
export interface SdkConfig {
  baseURL?: string;
  getToken?: () => string | Promise<string> | null;
  defaultHeaders?: Record<string, string>;
  fetch?: typeof fetch;
}

let runtime: SdkConfig = {};
export const configureSdk = (c: SdkConfig) => {
  runtime = { ...runtime, ...c };
};
export const getSdkConfig = () => runtime;
