import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreRestorationSchema, ScrollSchema } from '../types/storeRestorationSchema';

export const initialState: StoreRestorationSchema = {
  scroll: {},
};

export const scrollRestorationSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
      const { path, position } = action.payload;
      state.scroll[path] = position;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: scrollRestorationActions } = scrollRestorationSlice;
export const { reducer: scrollRestorationReducer } = scrollRestorationSlice;
