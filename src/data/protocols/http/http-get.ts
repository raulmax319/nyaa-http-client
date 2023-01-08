import { HttpResponse } from './http-response';

export type HttpGetParams = {
  url: string;
};

export interface HttpGet {
  get: <R>(params: HttpGetParams) => Promise<HttpResponse<R>>;
}
