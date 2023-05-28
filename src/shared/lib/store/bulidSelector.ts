/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T
type Hook<T, Args extends any[]> = (...args: Args) => T
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>]

export function buildSelector<T, Args extends any[]>(...selectors: Selector<T, Args>[]): Result<T, Args> {
  // if (selectors.length > 1) {
  //   const selector = createSelector(...selectors);
  //   const useSelectorHook: Hook<T, Args> = (...args: Args) => useSelector((state: StateSchema) => selector(state, ...args));
  //   return [useSelectorHook, selector];
  // }
  const [selector] = selectors;
  const useSelectorHook: Hook<T, Args> = (...args: Args) => useSelector((state: StateSchema) => selector(state, ...args));

  return [useSelectorHook, selector];
}
