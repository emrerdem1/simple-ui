import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch, store } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`.
export const useAppDispatch = (): typeof store.dispatch =>
  useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
