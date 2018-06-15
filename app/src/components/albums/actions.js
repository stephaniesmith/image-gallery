import {
  ALBUMS_LOAD,
  ALBUM_ADD
} from './reducers';

import {
  getAllAlbums,
  postAlbum
} from '../../services/api';

export function loadAlbums() {
  return {
    type: ALBUMS_LOAD,
    payload: getAllAlbums()
  };
}

export function createAlbum(album) {
  return {
    type: ALBUM_ADD,
    payload: postAlbum(album)
  };
}