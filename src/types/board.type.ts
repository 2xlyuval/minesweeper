import { cell } from "./cell.type"

export type board = {
  matrix: cell[][]
  rows: number
  cols: number
  bombs: number
}
