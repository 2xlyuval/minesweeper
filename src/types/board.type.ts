import { cell } from "./cell.type"

export type board = {
  level: "beginner" | "intermediate" | "expert" | "custom"
  rows: number
  cols: number
  bombs: number
  matrix: cell[][]
}
