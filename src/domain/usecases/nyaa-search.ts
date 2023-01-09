import {
  NyaaAnimeCategories,
  NyaaCategories,
  NyaaFilters,
  NyaaLiteratureCategories,
} from 'domain/enums';
import { NyaaModel } from 'domain/models';

export type SearchParams = {
  query: string;
  filter?: NyaaFilters;
  category?: NyaaCategories | NyaaAnimeCategories | NyaaLiteratureCategories;
};

export interface NyaaSearch {
  search(params: SearchParams): Promise<Array<NyaaModel>>;
}
