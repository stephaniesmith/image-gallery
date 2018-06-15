import {
  ALBUMS_LOAD,
  ALBUM_ADD
} from './reducers';

import {
  getAllAlbums,
  postAlbum
} from '../../services/api';

export function loadAlbums() {
  return (dispatch) => {
    return getAllAlbums()
      .then(albums => {
        console.log('albums', albums);
        dispatch({
          type: ALBUMS_LOAD,
          payload: albums
        });
      });
  };
}

export function createAlbum(album) {
  return {
    type: ALBUM_ADD,
    payload: postAlbum(album)
  };
}