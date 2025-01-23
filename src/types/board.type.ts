import { cell } from "./cell.type"

export type board = {
  difficulty: "easy" | "medium" | "hard" | "custom"
  rows: number
  cols: number
  bombs: number
  matrix: cell[][]
}
