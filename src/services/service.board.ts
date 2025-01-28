import { cell } from "../types/cell.type"
import { utileService } from "./service.utils"

export const boardService = {
  createDefaultCell,
}

function createDefaultCell(rowIdx: number, colIdx: number): cell {
  return {
    id: `cell-${utileService.makeId()}`,
    value: 0,
    isRevealed: false,
    state: "empty",
    rowIdx,
    colIdx,
  }
}
