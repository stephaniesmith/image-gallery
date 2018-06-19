import {
  user
} from './reducers';

describe('user reducer', () => {
  const state = user(undefined, {});
  expect(state).toBe(null);
});