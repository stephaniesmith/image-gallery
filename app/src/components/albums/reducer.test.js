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
});