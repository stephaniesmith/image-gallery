export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ALBUMS_ADD = 'ALBUMS_LOAD';

export const getAlbums = state => state.albums;

export function albums(state = getAlbums(), { type, payload }) {
  switch (type) {
    case ALBUMS_LOAD: {
      return payload;
    }
    case ALBUMS_ADD: {
      return [...state, payload];
    }
    default:
      return state;
  }
}