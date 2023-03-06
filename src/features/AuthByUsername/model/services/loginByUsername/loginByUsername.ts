import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
  username: string,
  password: string
}

// первый вызов dispatch status -> pending
export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  'users/loginByUsername',
  async (authData, thunkApi) => {
    const { dispatch, extra: { api }, rejectWithValue } = thunkApi;
    try {
      const response = await api.post('/login', authData);
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      // второй вызов dispatch
      dispatch(userActions.setAuthData(response.data));
      // третий вызов dispatch status -> fulfilled
      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
