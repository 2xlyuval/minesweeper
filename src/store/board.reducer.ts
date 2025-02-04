import { board } from "../types/board.type"

export const SET_LEVEL = "SET_LEVEL"
export const SET_ROWS_AND_COLS = "SET_ROWS_AND_COLS"
export const SET_BOMBS = "SET_BOMBS"
export const SET_MATRIX = "SET_MATRIX"
export const UPDATE_CELL = "UPDATE_CELL"

const initialState: board = {
  level: "beginner",
  rows: 0,
  cols: 0,
  bombs: 0,
  matrix: [],
}

function boardReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_LEVEL:
      return { ...state, level: action.payload }
    case SET_ROWS_AND_COLS:
      return { ...state, rows: action.payload.rows, cols: action.payload.cols }
    case SET_BOMBS:
      return { ...state, bombs: action.payload }
    case SET_MATRIX:
      return { ...state, matrix: action.payload }
    case UPDATE_CELL:
      const newMatrix = state.matrix.map((row) =>
        row.map((cell) =>
          cell.id === action.payload.id ? action.payload : cell
        )
      )
      return { ...state, matrix: newMatrix }
    default:
      return state
  }
}

export default boardReducer
