import { buildSelector } from '@/shared/lib/store';

export const [
  useArticleDetailsData,
  getArticleDetailsData,
] = buildSelector((state) => state.articleDetails?.data);
export const [
  useArtcileDetailsIsLoading,
  getArticleDetailsIsLoading] = buildSelector((state) => state.articleDetails?.isLoading || false);
export const [
  useArticleDetailsError,
  getArticleDetailsError] = buildSelector((state) => state.articleDetails?.error);
