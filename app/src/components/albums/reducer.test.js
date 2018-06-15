import {
  getAlbums,
  ALBUMS_LOAD,
  ALBUMS_ADD,
  albums
} from './reducers';

describe('Albums Reducer', () =>{

  it('empty array for initial state', () => {
    const state = albums(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads all albums', () => {
    const data = { title: 'title', description: 'description', posterImage: 'url' };

    const state = albums([], {
      type: ALBUMS_LOAD,
      payload: data
    });

    expect(state).toEqual(data)
  });
});