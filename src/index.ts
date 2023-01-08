import { makeNyaaService } from 'main/factory';

const service = makeNyaaService();

// eslint-disable-next-line no-console
service.searchAnime('orient').then(console.log);
