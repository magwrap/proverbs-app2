import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/state/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()


export {fetchUser} from "@/state/slices/CurrentUser";
export {toggleTheme} from "@/state/slices/DarkTheme";