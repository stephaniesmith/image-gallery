jest.mock('../../services/api', () => ({
  signin: jest.fn(),
  signup: jest.fn(),
  verify: jest.fn()
}));

import { signup } from './actions';
import { USE_AUTH } from './reducers';
import {
  signup as signupSvc
} from '../../services/api';

describe.skip('auth action creators', () => {

  it('creates a signup action', () => {
    const promise = Promise.resolve();
    signupSvc.mockReturnValueOnce(promise);

    const credentials = {};
    const { type, payload } = signup(credentials);
    expect(type).toBe(USE_AUTH);
    expect(payload).toBe(promise);
    expect(signupSvc.mock.calls.length).toBe(1);
    expect(signupSvc.mock.calls[0][0]).toBe(credentials);
  });
});