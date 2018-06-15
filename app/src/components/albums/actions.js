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