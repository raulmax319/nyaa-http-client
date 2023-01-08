import axios, { AxiosInstance } from 'axios';
import { HttpGet, HttpGetParams, HttpResponse } from 'data/protocols/http';

export class AxiosClient implements HttpGet {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.BASE_URL ?? 'https://nyaa.si',
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
