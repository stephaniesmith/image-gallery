import {
  getAlbums,
  ALBUMS_LOAD,
  ALBUM_ADD,
  albums,
  album,
  ALBUM_LOAD,
  getAlbum
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
      payload: [data]
    });

    expect(state).toEqual([data]);
  });

  it('adds an album to albums', () => {
    const data = { title: 'title', description: 'description', posterImage: 'url' };
    const newData = { title: 'newTitle', description: 'newDescription', posterImage: 'newUrl' };
    
    const state = albums([data], {
      type: ALBUM_ADD,
      payload: newData
    });
    
    expect(state).toEqual([data, newData]);
  });
});

describe('Album Reducer', () =>{

  it('empty object for initial state', () => {
    const state = album(undefined, {});
    expect(state).toEqual({});
  });

  it('loads an album', () => {
    const data = { _id: 1, title: 'title', description: 'description', posterImage: 'url' };
    const moreData = { _id: 2, title: 'newTitle', description: 'newDescription', posterImage: 'newUrl' };

    const state = album({}, {
      type: ALBUM_LOAD,
      payload: {
        albums: [data, moreData],
        albumId: 1
      }
    });

    expect(state).toEqual(data);
  });
});

describe('selectors', () => {
  
  it('selects albums', () => {
    const data = { title: 'title', description: 'description', posterImage: 'url' };
    const newData = { title: 'newTitle', description: 'newDescription', posterImage: 'newUrl' };
    
    const albums = [data, newData];
    const got = getAlbums({ albums });
    expect(got).toBe(albums);
  });

  it('selects albums', () => {  
    const album = { title: 'title', description: 'description', posterImage: 'url' };  
    const got = getAlbum({ album });
    expect(got).toBe(album);
  });
});