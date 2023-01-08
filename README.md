## Usage

`searchAnime(name: String, category?: NyaaAnimeCategories, filter?: NyaaFilters)`

```js
const nyaaService = makeNyaaService();
nyaaService
  .searchAnime('Golden Time 1080p', NyaaAnimeCategories.English, NyaaFilters.NoFilter)
  .then((results) => {
    console.log(results);
  });
```
