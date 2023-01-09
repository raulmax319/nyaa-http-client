import { HttpConfigParams } from 'data/protocols/http';
import { AxiosClient } from 'infra/http';
import { NyaaHttpClient } from 'main/http/nyaa-http-client';
import { NyaaService } from 'main/service';

export function makeNyaaService(config: HttpConfigParams): NyaaService {
  return new NyaaService(new NyaaHttpClient(new AxiosClient(config)));
}
