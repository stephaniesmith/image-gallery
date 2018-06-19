jest.mock('../../services/api', () => ({
  signin: jest.fn(),
  signup: jest.fn(),
  verify: jest.fn()
}));

import {
  sigunup as signupSvc
} from '../../services/api';

describe('auth action creators', () => {

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