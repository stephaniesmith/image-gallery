import { get, post } from './request';

const URL = '/api';
const ALBUMS_URL = `${URL}/albums`;
const IMAGES_URL = `${URL}/images`;

export const getAllAlbums = () => get(ALBUMS_URL);
export const postAlbum = album => post(ALBUMS_URL, album);
export const getAllImages = () => get(IMAGES_URL);
export const getImagesByAlbum = id => get(`${IMAGES_URL}?albumId=${id}`);