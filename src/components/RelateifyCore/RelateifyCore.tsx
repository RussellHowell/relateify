import * as React from 'react';
import * as _ from 'lodash';
import { Artist } from '../../interfaces';
import ArtistSearch from '../ArtistSearch';
import SpotifyAuthContext from '../../contexts/SpotAuthContext';


export interface Props {

}

export default function RelateifyCore(props: Props) {
  const [artistList, setArtistList] = React.useState([] as Array<Artist>);
  function onArtistSelected(artist: Artist) {
    setArtistList([...artistList, artist]);
  }

  if (artistList.length < 1) {
    return (
      <SpotifyAuthContext.Consumer>
        {({ accessToken }) => (<ArtistSearch apiToken={ accessToken! } onArtistSelected={ onArtistSelected } />)}
      </SpotifyAuthContext.Consumer>
    )
  } else {
    return <h2> Relateify Graph </h2>
  }
}