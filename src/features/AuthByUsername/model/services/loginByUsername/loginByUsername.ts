import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
  username: string,
  password: string
}

// первый вызов dispatch status -> pending
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'users/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

      // второй вызов dispatch
      thunkAPI.dispatch(userActions.setAuthData(response.data));
      // третий вызов dispatch status -> fulfilled
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
