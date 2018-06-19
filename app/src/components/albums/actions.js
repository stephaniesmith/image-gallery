import {
  ALBUMS_LOAD,
  ALBUM_ADD,
  ALBUM_LOAD,
  IMAGES_LOAD,
  getAlbums,
  IMAGE_ADD
} from './reducers';

import {
  getAllAlbums,
  postAlbum,
  getImagesByAlbum,
  getAllImages,
  postImage
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

export function loadAlbum(albumId) {
  return (dispatch, getState) => {
    const state = getState();
    const albums = getAlbums(state);
    dispatch({
      type: ALBUM_LOAD,
      payload: { 
        albums,
        albumId
      }
    });

    getImagesByAlbum(albumId)
      .then(images => {
        dispatch({
          type: IMAGES_LOAD,
          payload: images
        });
      });
  };
}

export function loadImages() {
  return (dispatch) => {
    getAllImages()
      .then(images => {
        dispatch({
          type: IMAGES_LOAD,
          payload: images
        });
      });
  };
}

export function createImage(image) {
  return (dispatch) => {
    postImage(image)
      .then(NewImage => {
        dispatch({
          type: IMAGE_ADD,
          payload: NewImage
        });
      });
  };
}