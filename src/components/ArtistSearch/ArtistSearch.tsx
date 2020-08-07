import * as React from "react";
import { Artist } from "../../interfaces";
import useArtistSearch from "../../effects/UseArtistSearch";
const queryString = require('query-string');

export interface Props {
    children?: React.ReactNode
    apiToken: string
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
                </div>
        )

}
