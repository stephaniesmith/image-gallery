export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ALBUM_LOAD = 'ALBUM_LOAD';
export const ALBUM_ADD = 'ALBUM_ADD';
export const IMAGES_LOAD = 'IMAGES_LOAD';
export const IMAGE_ADD = 'IMAGE_ADD';

export const getAlbums = state => state.albums;
export const getAlbum = state => state.album;
export const getImages = state => state.images;

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

export function images(state = [], { type, payload }) {
  switch (type) {
    case IMAGES_LOAD: {
      return payload;
    }
    case IMAGE_ADD: {
      return [...state, payload];
    }
    default:
      return state;
  }
}