import { PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { User, UserSchema } from '../types/user';
import { buildSlice } from '@/shared/lib/store';
import { setFeatureFlags } from '@/shared/lib/features';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = buildSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        const json = JSON.parse(user) as User;
        state.authData = json;
        setFeatureFlags(json.features);
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
