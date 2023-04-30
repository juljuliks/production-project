import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'features/EditableProfileCard';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { NavigateOptions, To } from 'react-router-dom';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ArticleDetailsSchema } from 'entities/Article';
import { StoreRestorationSchema } from 'widgets/Page';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
  scrollRestoration: StoreRestorationSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Ассинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
  articleDetailsPage?: ArticleDetailsPageSchema

}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
  add: (key: StateSchemaKey, reducer: Reducer) => void,
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg,
  state: StateSchema
}
