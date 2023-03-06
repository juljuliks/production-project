import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/loginSlice';
import { getLoginState } from './getLoginsState';

describe('getLoginState', () => {
  test('should return login form values', () => {
    const loginForm = {
      username: 'test',
      password: 'test',
    };
    const state: DeepPartial<StateSchema> = {
      loginForm,
    };
    expect(getLoginState(state as StateSchema)).toEqual(loginForm);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual(initialState);
  });
});
