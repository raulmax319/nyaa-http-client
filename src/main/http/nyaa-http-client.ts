import { HttpGet, HttpStatusCode } from 'data/protocols/http';
import { Unexpected } from 'domain/errors';
import { NyaaModel } from 'domain/models';
import { NyaaSearch, SearchParams } from 'domain/usecases';
import { convertToNyaaModel } from 'main/utils';

export class NyaaHttpClient implements NyaaSearch {
  constructor(private readonly httpClient: HttpGet) {}

  async search(params: SearchParams): Promise<Array<NyaaModel>> {
    const queryString = `&q=${params.query}`;
    const filterString = `&f=${params.filter}`;
    const categoryString = `&c=${params.category}`;

    const result = await this.httpClient.get<string>({
      url: `/?page=rss${queryString}${filterString}${categoryString}`,
    });

    switch (result.statusCode) {
      case HttpStatusCode.OK:
        return convertToNyaaModel(result.body);
      default:
        throw new Unexpected();
    }
  }
}
