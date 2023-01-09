import { NyaaMagneticParams } from 'domain/usecases';

export function makeMagneticUri(params: NyaaMagneticParams): string {
  return `magnet:?xt=urn:btih:${params.hash}&dn=${params.nameEncoded}&${process.env.TRACKERS}`;
}
