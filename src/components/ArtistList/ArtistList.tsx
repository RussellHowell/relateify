import * as React from "react";
import { Artist } from "../../interfaces";

export interface Props {
    children?: React.ReactNode
    data: Array<Artist>
    onArtistSelected: ( artist: Artist ) => void
}


export default function ArtistList(props: Props)  {

        return (
            <ul>
                {
                    props.data.map(artist => (
                        <li key={artist.id}>
                            <a onClick={(e) => props.onArtistSelected( artist )}>{artist.name}</a>
                        </li>
                    )
                )}
            </ul>
        )
}
