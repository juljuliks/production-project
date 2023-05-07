import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

type Selector<T> = (state: StateSchema) => T
type Result<T> = [() => T, Selector<T>]

export function buildSelector<T>(...selectors: Selector<T>[]): Result<T> {
  // if (selectors.length > 1) {
  //   const selector = createSelector(...selectors);
  //   const useSelectorHook = () => useSelector(selector);
  //   return [useSelectorHook, selector];
  // }
  const [selector] = selectors;
  const useSelectorHook = () => useSelector(selector);

  return [useSelectorHook, selector];
}
