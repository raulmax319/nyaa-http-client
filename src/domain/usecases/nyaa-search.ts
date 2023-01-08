import { NyaaAnimeCategories, NyaaCategories, NyaaFilters } from 'domain/enums';
import { NyaaModel } from 'domain/models';

export type SearchParams = {
  query: string;
  filter?: NyaaFilters;
  category?: NyaaCategories | NyaaAnimeCategories;
};

export interface NyaaSearch {
  search(params: SearchParams): Promise<Array<NyaaModel>>;
}
