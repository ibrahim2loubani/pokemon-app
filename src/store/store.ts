import { pokemonApi } from '@/queries/pokemon'
import {
  PreloadedStateShapeFromReducersMapObject,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
})

export const setupStore = (
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>,
) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(pokemonApi.middleware),
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
