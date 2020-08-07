import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TestRenderer from 'react-test-renderer';

import ArtistList from './ArtistList';

 //snapshot test
 it('renders when the list is empty', () => {
  const tree = TestRenderer.create(
    <ArtistList
      data={[]}
      onArtistSelected={() => { } }
    />
 ).toJSON();
   expect(tree).toMatchSnapshot('artist-list-empty');
 });

it('renders when the list is populated', () => {
  const tree = TestRenderer.create(
    <ArtistList
      data={getTestData()}
      onArtistSelected={() => { } }
    />
  ).toJSON();
  expect(tree).toMatchSnapshot('artist-list-populated');
});


const populatedArtistList: ShallowWrapper = shallow(
  <ArtistList
    data={getTestData()}
    onArtistSelected={() => { } }
  />
)

const liArr: ShallowWrapper = populatedArtistList.find('li');
expect(liArr.length).toBe(getTestData().length);
liArr.map((listEl, index) => {
  expect(listEl.text()).toBe(getTestData()[index].name);
} )

/* --- test data below --- */
function getTestData() {
  return [
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/6O4EGCCb6DoIiR6B1QCQgp"
      },
      "followers": {
        "href": null,
        "total": 526566
      },
      "genres": [
        "alternative dance",
        "chillwave",
        "indie pop",
        "indie soul",
        "indietronica",
        "new rave",
        "nu gaze"
      ],
      "href": "https://api.spotify.com/v1/artists/6O4EGCCb6DoIiR6B1QCQgp",
      "id": "6O4EGCCb6DoIiR6B1QCQgp",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/068b15a189f56edf7845a79003f5982286d30e4a",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/69babf451e6aef7e3e0674546e088b3b71338770",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/2f8ab227ca4d853b2253b414ca04ca53962bbea7",
          "width": 160
        }
      ],
      "name": "Toro y Moi",
      "popularity": 68,
      "type": "artist",
      "uri": "spotify:artist:6O4EGCCb6DoIiR6B1QCQgp"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/4gTJ4MkZcCantFX5zlRRI8"
      },
      "followers": {
        "href": null,
        "total": 2244
      },
      "genres": [
        "orchestra"
      ],
      "href": "https://api.spotify.com/v1/artists/4gTJ4MkZcCantFX5zlRRI8",
      "id": "4gTJ4MkZcCantFX5zlRRI8",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/b616246fd897d2c1e4c6ce47b42114c2f158de13",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/da481d957742f996c6447c4c1f13550406a7f003",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/f483e595c98ada461c7e4a939506bc56b5db461f",
          "width": 160
        }
      ],
      "name": "Toronto Symphony Orchestra",
      "popularity": 41,
      "type": "artist",
      "uri": "spotify:artist:4gTJ4MkZcCantFX5zlRRI8"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/76mnXDnPlFWta9lUzGQnNC"
      },
      "followers": {
        "href": null,
        "total": 119
      },
      "genres": [
        "chamber orchestra"
      ],
      "href": "https://api.spotify.com/v1/artists/76mnXDnPlFWta9lUzGQnNC",
      "id": "76mnXDnPlFWta9lUzGQnNC",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2733f7f13894d50db6b7a541790",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e023f7f13894d50db6b7a541790",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048513f7f13894d50db6b7a541790",
          "width": 64
        }
      ],
      "name": "Toronto Chamber Orchestra",
      "popularity": 34,
      "type": "artist",
      "uri": "spotify:artist:76mnXDnPlFWta9lUzGQnNC"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/6uunQvg4RiF0lBnTst3ylB"
      },
      "followers": {
        "href": null,
        "total": 229
      },
      "genres": [],
      "href": "https://api.spotify.com/v1/artists/6uunQvg4RiF0lBnTst3ylB",
      "id": "6uunQvg4RiF0lBnTst3ylB",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27391b68763a6f3ebbefac9f724",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0291b68763a6f3ebbefac9f724",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485191b68763a6f3ebbefac9f724",
          "width": 64
        }
      ],
      "name": "Toronto 7s",
      "popularity": 29,
      "type": "artist",
      "uri": "spotify:artist:6uunQvg4RiF0lBnTst3ylB"
    }
  ]  
}
