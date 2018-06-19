import { USER_AUTH } from './reducers';

import {
  signup as signupApi,
  signin as signinApi
} from '../../services/api';

const makeAuth = api => credentials => ({
  type: USER_AUTH,
  payload: api(credentials)
});

export const signup = makeAuth(signupApi);
export const signin = makeAuth(signinApi);