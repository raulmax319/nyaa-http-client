export type RawNyaaModel = {
  title: Array<string>;
  link: Array<string>;
  'nyaa:seeders': Array<string>;
  'nyaa:leechers': Array<string>;
  'nyaa:downloads': Array<string>;
  'nyaa:infoHash': Array<string>;
  'nyaa:category': Array<string>;
  'nyaa:size': Array<string>;
  'nyaa:trusted': Array<string>;
  'nyaa:remake': Array<string>;
};

export type NyaaModel = {
  title: string;
  link: string;
  seeders: string;
  leechers: string;
  downloads: string;
  infoHash: string;
  category: string;
  size: string;
  trusted: string;
  remake: string;
  magneticUri: string;
};
