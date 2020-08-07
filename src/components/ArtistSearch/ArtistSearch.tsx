import * as React from "react";
import { Artist } from "../../interfaces";
import useArtistSearch from "../../effects/UseArtistSearch";
import ArtistList from "../ArtistList";
const queryString = require('query-string');

export interface Props {
    children?: React.ReactNode
    apiToken: string
    onArtistSelected: ( artist: Artist ) => void
}

export default function ArtistSearch( props: Props ){
    const [searchText, setSearchText] = React.useState('');
    const [searchQuery, setSearchQuery] = React.useState('');
    const searchResult = useArtistSearch(searchQuery, props.apiToken);
    return (
            <div> 
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setSearchQuery(searchText);
                    } }>
                    <input
                        placeholder="Search for an artist..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </form>
            <ArtistList data={searchResult} onArtistSelected={props.onArtistSelected}/>
            </div>
        )

}
