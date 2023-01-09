import axios, { AxiosInstance } from 'axios';
import { HttpConfigParams, HttpGet, HttpGetParams, HttpResponse } from 'data/protocols/http';

export class AxiosClient implements HttpGet {
  private api: AxiosInstance;

  constructor(private readonly config: HttpConfigParams) {
    this.api = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout,
      maxRedirects: config.maxRedirects,
      proxy: config.proxy || false,
      validateStatus(status) {
        return status === 200;
      },
    });
  }

  async get<R>(params: HttpGetParams): Promise<HttpResponse<R>> {
    try {
      const response = await this.api.get<R>(params.url);

      return {
        statusCode: response.status,
        body: response.data,
      };
    } catch (err) {
      return {
        statusCode: 1520,
        body: err,
      };
    }
  }
}
