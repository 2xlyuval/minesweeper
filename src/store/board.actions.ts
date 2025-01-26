import store from "./store"
import {
  SET_LEVEL,
  SET_ROWS_AND_COLS,
  SET_BOMBS,
  SET_MATRIX,
} from "./boardReducer"

export function setLevel(level: string) {
  store.dispatch({ type: SET_LEVEL, payload: level })
}

export function setRowsAndCols(rows: number, cols: number) {
  store.dispatch({ type: SET_ROWS_AND_COLS, payload: { rows, cols } })
}

export function setBombs(bombs: number) {
  store.dispatch({ type: SET_BOMBS, payload: bombs })
}

export function setMatrix(matrix: any) {
  store.dispatch({ type: SET_MATRIX, payload: matrix })
}
