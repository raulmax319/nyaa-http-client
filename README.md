## Usage

`findAnime(name: String, category?: NyaaAnimeCategories, filter?: NyaaFilters)`
`findLiterature(name: String, category?: NyaaLiteratureCategories, filter?: NyaaFilters)`

```js
const proxyConfig: ProxyConfig = {}; // Optional

const config: HttpConfigParams = {
  baseURL: 'https://nyaa.si',
  timeout: 10000, // Optional
  maxRedirects: 2, // Optional
  proxy: proxyConfig, // Optional
};

const nyaa = new NyaaSharedFramework(config);
nyaa
  .findAnime('Golden Time 1080p', NyaaAnimeCategories.English, NyaaFilters.NoFilter)
  .then((results) => {
    console.log(results);
  });
```
