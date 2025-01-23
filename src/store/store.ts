import { configureStore } from "@reduxjs/toolkit"
import boardReducer from "./boardReducer"

const store = configureStore({
  reducer: {
    board: boardReducer,
  },
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
