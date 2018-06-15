jest.mock('../../services/api', () => ({
  getAllAlbums: jest.fn(),
  postAlbum: jest.fn()
}));

import { loadAlbums, createAlbum } from './actions';
import { ALBUMS_LOAD, ALBUM_ADD } from './reducers';
import { getAllAlbums, postAlbum } from '../../services';

describe('albums actions', () => {
  it('loads albums', () => {
    const promise = Promise.resolve();
    getAllAlbums.mockReturnValueOnce(promise);

    const { type, payload } = loadAlbums();
    expect(type).toBe(ALBUMS_LOAD);
    expect(getAllAlbums.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });
});
