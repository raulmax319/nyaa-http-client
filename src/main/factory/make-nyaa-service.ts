import { HttpConfigParams } from 'data/protocols/http';
import { AxiosClient } from 'infra/http';
import { NyaaHttpClient } from 'main/http/nyaa-http-client';
import { NyaaService } from 'main/service';

export function makeNyaaService({
  baseURL,
  timeout = 25,
  maxRedirects = 5,
  proxy = undefined,
}: HttpConfigParams): NyaaService {
  return new NyaaService(
    new NyaaHttpClient(new AxiosClient({ baseURL, timeout, maxRedirects, proxy })),
  );
}
