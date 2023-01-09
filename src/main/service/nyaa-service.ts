import { NyaaAnimeCategories, NyaaFilters, NyaaLiteratureCategories } from 'domain/enums';
import { NyaaModel } from 'domain/models';
import { NyaaSearch, SearchParams } from 'domain/usecases';

export class NyaaService {
  constructor(private readonly client: NyaaSearch) {}

  private async find(params: SearchParams): Promise<Array<NyaaModel>> {
    try {
      return await this.client.search(params);
    } catch (err) {
      return [];
    }
  }

  public async findAnime(
    name: string,
    category: NyaaAnimeCategories,
    filter: NyaaFilters,
  ): Promise<Array<NyaaModel>> {
    return await this.find({
      query: name,
      category,
      filter,
    });
  }

  public async findLiterature(
    name: string,
    category: NyaaLiteratureCategories,
    filter: NyaaFilters,
  ): Promise<Array<NyaaModel>> {
    return await this.find({
      query: name,
      category,
      filter,
    });
  }
}
