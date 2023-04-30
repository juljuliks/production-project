import { createReduxStore, AppDispatch } from './config/store';
import { StateSchema, ThunkConfig } from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';

export {
  StoreProvider,
  createReduxStore,
};

export type {
  StateSchema,
  AppDispatch,
  ThunkConfig,
};
