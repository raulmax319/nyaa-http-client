import { NyaaAnimeCategories, NyaaFilters } from 'domain/enums';
import { NyaaModel } from 'domain/models';
import { NyaaSearch } from 'domain/usecases';

export class NyaaService {
  constructor(private readonly client: NyaaSearch) {}

  public async searchAnime(
    name: string,
    category: NyaaAnimeCategories = NyaaAnimeCategories.All,
    filter: NyaaFilters = NyaaFilters.NoFilter,
  ): Promise<Array<NyaaModel>> {
    return await this.client.search({
      query: name,
      category,
      filter,
    });
  }
}
