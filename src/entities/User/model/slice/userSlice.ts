import { PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { User, UserSchema } from '../types/user';
import { buildSlice } from '@/shared/lib/store';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = buildSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const userData = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (userData) {
        state.authData = JSON.parse(userData);
      }
      state._inited = true;
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      state.authData = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  actions: userActions,
  reducer: userReducer,
  useActions: useUserActions,
} = userSlice;
