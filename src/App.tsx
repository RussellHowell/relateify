import React, { useEffect } from 'react';
import './App.css';
import { Artist } from './interfaces';
import SpotifySession from './components/SpotifySession';
import * as _ from 'lodash';
import ArtistList from './components/ArtistList';
import ArtistSearch from './components/ArtistSearch';
import  SpotifyAuthContext  from './contexts/SpotAuthContext';
import { fromPairs } from 'lodash';
import SpotAuthContext from './contexts/SpotAuthContext';
const queryString = require('query-string');

function App() {
  const [validAuth, setValidAuth] = React.useState(false);
  const accessToken = _.get(queryString.parseUrl(window.location.href), ['query', 'access_token']);
  if (!_.isUndefined(accessToken) && !validAuth) {
    setValidAuth(true);
  }
  


  return (
    <div className="App">
      <h1>Relateify</h1>
      {
        validAuth ? (
        <SpotAuthContext.Provider value={ accessToken }>
            <ArtistSearch />
        </SpotAuthContext.Provider>
        ) : <button onClick={() => { window.location.assign('http://localhost:8888/login') }}>Login</button>
      }

      {/* <h2> Relateify </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(search);
        }}>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form> */}
    </div>
  );
}

export default App;
