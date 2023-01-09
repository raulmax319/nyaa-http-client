import { HttpConfigParams } from 'data/protocols/http';
import { NyaaAnimeCategories, NyaaFilters, NyaaLiteratureCategories } from 'domain/enums';
import { NyaaModel } from 'domain/models';
import { makeNyaaService } from 'main/factory';
import { NyaaService } from 'main/service';

export class NyaaSharedFramework {
  private readonly service: NyaaService;

  constructor({ baseURL, timeout = 25000, maxRedirects = 5, proxy = undefined }: HttpConfigParams) {
    this.service = makeNyaaService({ baseURL, timeout, maxRedirects, proxy });
  }

  public async findAnime(
    name: string,
    category: NyaaAnimeCategories = NyaaAnimeCategories.All,
    filter: NyaaFilters = NyaaFilters.NoFilter,
  ): Promise<Array<NyaaModel>> {
    return await this.service.findAnime(name, category, filter);
  }

  public async findLiterature(
    name: string,
    category: NyaaLiteratureCategories = NyaaLiteratureCategories.All,
    filter: NyaaFilters = NyaaFilters.NoFilter,
  ): Promise<Array<NyaaModel>> {
    return await this.service.findLiterature(name, category, filter);
  }
}
