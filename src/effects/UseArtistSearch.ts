import * as React from 'react'
import { Artist } from '../interfaces';
const queryString = require('query-string');


export default function useArtistSearch(query: string, accessToken: string): Array<Artist> {
  const [result, setResult] = React.useState([] as Array<Artist>);
  React.useEffect(() => {
      async function requestSearch() {
          try {
              const response = await fetch(queryString.stringifyUrl({
                  url: 'https://api.spotify.com/v1/search',
                  query: {
                      q: query,
                      type: 'artist'
                  }
              }), {
                  method: 'get',
                  headers: {
                      Authorization: 'Bearer ' + accessToken,
                  },
              });
            const json = await response.json();
            setResult(json.artists.items);
          } finally { }
      }
      if (query !== '') {
          requestSearch();
      }
  }, [query]);

  return result;
}