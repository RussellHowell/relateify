import React from 'react';
import './App.css';
import * as _ from 'lodash';
import ArtistSearch from './components/ArtistSearch';
import SpotAuthContext from './contexts/SpotAuthContext';
import RelateifyCore from './components/RelateifyCore/RelateifyCore';
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
          <SpotAuthContext.Provider value={{ accessToken }}>
            <RelateifyCore />
        </SpotAuthContext.Provider>
        ) : <button onClick={() => { window.location.assign('http://localhost:8888/login') }}>Login</button>
      }
    </div>
  );
}

export default App;
