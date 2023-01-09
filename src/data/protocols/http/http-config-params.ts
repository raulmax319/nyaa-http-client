export type ProxyAuthConfig = {
  username: string;
  password: string;
};

export type ProxyConfig = {
  protocol: string;
  host: string;
  port: number;
  auth: ProxyAuthConfig;
};

export type HttpConfigParams = {
  baseURL: string;
  timeout: number;
  maxRedirects: number;
  proxy?: ProxyConfig;
};
