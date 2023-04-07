import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecomendationsIsLoading = (state: StateSchema) => state
  .articleDetailsPage?.recomendations?.isLoading;
export const getArticleRecomendationsError = (state: StateSchema) => state
  .articleDetailsPage?.recomendations?.error;
