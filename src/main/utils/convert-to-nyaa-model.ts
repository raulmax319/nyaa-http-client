import { NyaaModel, RawNyaaModel } from 'domain/models';
import { makeMagneticUri } from './make-magnetic-uri';
import { xmlToJson } from './xml-to-json';

export async function convertToNyaaModel(xmlResult: string): Promise<Array<NyaaModel>> {
  const model = await xmlToJson<Array<RawNyaaModel>>(xmlResult);

  return model.map((item) => ({
    title: item.title[0],
    link: item.link[0],
    seeders: item['nyaa:seeders'][0],
    leechers: item['nyaa:leechers'][0],
    downloads: item['nyaa:downloads'][0],
    infoHash: item['nyaa:infoHash'][0],
    category: item['nyaa:category'][0],
    size: item['nyaa:size'][0],
    trusted: item['nyaa:trusted'][0],
    remake: item['nyaa:remake'][0],
    magneticUri: makeMagneticUri({
      hash: item['nyaa:infoHash'][0],
      nameEncoded: encodeURIComponent(item.title[0]),
    }),
  }));
}
