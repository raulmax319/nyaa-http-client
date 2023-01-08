import { parseStringPromise } from 'xml2js';

export async function xmlToJson<T>(xml: string): Promise<T> {
  return (await parseStringPromise(xml)).rss.channel[0].item;
}
