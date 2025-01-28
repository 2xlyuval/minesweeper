import store from "./store"
import {
  SET_LEVEL,
  SET_ROWS_AND_COLS,
  SET_BOMBS,
  SET_MATRIX,
  UPDATE_CELL,
} from "./board.reducer"
import { cell } from "../types/cell.type"

export function setLevel(level: string) {
  store.dispatch({ type: SET_LEVEL, payload: level })
}

export function setRowsAndCols(rows: number, cols: number) {
  store.dispatch({ type: SET_ROWS_AND_COLS, payload: { rows, cols } })
}

export function setBombs(bombs: number) {
  store.dispatch({ type: SET_BOMBS, payload: bombs })
}

export function setMatrix(matrix: cell[][]) {
  store.dispatch({ type: SET_MATRIX, payload: matrix })
}

export function updateCell(cell: cell) {
  store.dispatch({ type: UPDATE_CELL, payload: cell })
}
