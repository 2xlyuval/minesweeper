import { cell } from "./cell.type"

export type board = {
  level: "easy" | "medium" | "hard" | "custom"
  rows: number
  cols: number
  bombs: number
  matrix: cell[][]
}
