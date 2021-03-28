import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

// Slices
import searchSlice from './searchSlice'

// Store
export const store = configureStore({
    reducer: {
      search: searchSlice
    }
})

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>