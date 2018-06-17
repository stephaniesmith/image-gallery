export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ALBUM_LOAD = 'ALBUM_LOAD';
export const ALBUM_ADD = 'ALBUMS_ADD';

export const getAlbums = state => state.albums;
export const getAlbum = state => state.album;

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

export function album(state = {}, { type, payload }) {
  switch (type) {
    case ALBUM_LOAD: {
      const { albums, albumId } = payload;
      const selectedAlbum = albums.filter(eachAlbum => eachAlbum._id === albumId);
      return selectedAlbum[0];
    }
    default:
      return state;
  }
}