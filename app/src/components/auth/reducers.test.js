import {
  user,
  USER_AUTH
} from './reducers';

describe('user reducer', () => {

  it('initializes to null', () => {
    const state = user(undefined, {});
    expect(state).toBe(null);
  });

  it('loads a user', () => {
    const data = { name: 'user' };
    const state = user(null, { type: USER_AUTH, payload: data });
    expect(state).toBe(data);
  });


});