import {
  user,
  USER_AUTH,
  LOGOUT,
  getUser
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

  it('clears user on logout', () => {
    const state = user({}, { type: LOGOUT });
    expect(state).toBe(null);
  });

  it('gets a user form the state', () => {
    const user = {};
    expect(getUser({ user })).toBe(user);
  });
});