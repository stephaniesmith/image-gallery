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
  return (dispatch) => {
    getAllAlbums()
      .then(albums => {
        dispatch({
          type: ALBUMS_LOAD,
          payload: albums
        });
      });
  };
}

export function createAlbum(album) {
  return (dispatch) => {
    postAlbum(album)
      .then(NewAlbum => {
        dispatch({
          type: ALBUM_ADD,
          payload: NewAlbum
        });
      });
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