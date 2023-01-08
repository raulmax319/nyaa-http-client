import { HttpGet, HttpStatusCode } from 'data/protocols/http';
import { Unexpected } from 'domain/errors';
import { NyaaModel } from 'domain/models';
import { NyaaSearch, SearchParams } from 'domain/usecases';
import { AxiosClient } from 'infra/http';
import { convertToNyaaModel } from 'main/utils';

export class NyaaHttpClient implements NyaaSearch {
  private readonly httpClient: HttpGet;

  constructor() {
    this.httpClient = new AxiosClient();
  }

  async search(params: SearchParams): Promise<Array<NyaaModel>> {
    const queryString = `&q=${params.query}`;

    const result = await this.httpClient.get<string>({
      url: `/?page=rss${queryString}`,
    });

    switch (result.statusCode) {
      case HttpStatusCode.OK:
        return convertToNyaaModel(result.body);
      default:
        throw new Unexpected();
    }
  }
}
