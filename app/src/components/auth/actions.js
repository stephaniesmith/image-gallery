import { USER_AUTH } from './reducers';

import {
  signup as signupApi
} from '../../services/api';


export const signup = credentials => ({
  type: USER_AUTH,
  payload: signupApi(credentials)
});