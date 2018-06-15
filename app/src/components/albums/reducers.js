export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ALBUM_ADD = 'ALBUMS_ADD';

export const getAlbums = state => state.albums;

export function albums(state = [], { type, payload }) {
  switch (type) {
    case ALBUMS_LOAD: {
      return payload;
    }
    case ALBUM_ADD: {
      return [...state, payload];
    }
    default:
      return state;
  }
}