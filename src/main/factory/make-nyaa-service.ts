import { NyaaHttpClient } from 'main/http/nyaa-http-client';
import { NyaaService } from 'main/service';

export function makeNyaaService(): NyaaService {
  return new NyaaService(new NyaaHttpClient());
}
