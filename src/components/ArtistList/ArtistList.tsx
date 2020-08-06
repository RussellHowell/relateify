import * as React from "react";
import { Artist } from "../../interfaces";

export interface Props {
    children?: React.ReactNode
    data: Array<Artist>
}


export default function ArtistList(props: Props)  {

        return (
            <ul>
                { props.data.map( artist => <li key={ artist.id }>{ artist.name }</li> ) }
            </ul>
        )
}
