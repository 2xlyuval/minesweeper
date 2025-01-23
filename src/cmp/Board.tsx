import { boardService } from "../services/service.board"
import { utileService } from "../services/service.utils"
import { cell } from "../types/cell.type"
import { Cell } from "./Cell"
import { Controls } from "./Controls"

export function Board() {
  const boardGrid = { rows: 10, cols: 10 }
  const style = {
    gridTemplateRows: `repeat(${boardGrid.rows}, 16px)`,
    gridTemplateColumns: `repeat(${boardGrid.cols}, 16px)`,
  }

  const bombs: number = calculateBombs(boardGrid.rows, boardGrid.cols)

  const matrixWithRandomBombs: cell[][] = createMatrixWithRandomBombs(
    boardGrid.rows,
    boardGrid.cols,
    bombs
  )
  const matrixBombsWithNumbers: cell[][] = createMatrixBombsWithNumbers(
    matrixWithRandomBombs
  )

  function createMatrixWithRandomBombs(
    rows: number,
    cols: number,
    bombs: number
  ): cell[][] {
    const matrix: cell[][] = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => boardService.createDefaultCell())
    )
    for (let i = 0; i < bombs; i++) {
      let row = utileService.getRandomBetweenInclusive(0, rows - 1)
      let col = utileService.getRandomBetweenInclusive(0, cols - 1)
      if (matrix[row][col].value === 0) matrix[row][col].value = "B"
      else i--
    }
    return matrix
  }

  function calculateBombs(rows: number, cols: number): number {
    const totalCells = rows * cols
    const randomPercentage =
      utileService.getRandomBetweenInclusive(10, 20) * 0.01
    const totalBombs = Math.round(totalCells * randomPercentage)
    return totalBombs
  }

  function countBombsAround(matrix: cell[][], i: number, j: number): number {
    let bombsAround = 0
    for (let row = i - 1; row <= i + 1; row++) {
      for (let col = j - 1; col <= j + 1; col++) {
        if (row < 0 || row >= matrix.length) continue
        if (col < 0 || col >= matrix[0].length) continue
        if (row === i && col === j) continue
        if (matrix[row][col].value === "B") bombsAround++
      }
    }
    return bombsAround
  }

  function createMatrixBombsWithNumbers(
    matrixWithRandomBombs: cell[][]
  ): cell[][] {
    const matrix: cell[][] = matrixWithRandomBombs.map((row, i) =>
      row.map((cell, j) => {
        if (cell.value === "B") return { ...cell, value: "B" }
        const bombsAround = countBombsAround(matrixWithRandomBombs, i, j)
        return { ...cell, value: bombsAround }
      })
    )
    return matrix
  }

  return (
    <div className="board outer-border">
      <Controls />
      <div className="cells-wrapper inner-border" style={style}>
        {matrixBombsWithNumbers.map((row, i) =>
          row.map((cell, j) => <Cell key={`${i}-${j}`} cell={cell} />)
        )}
      </div>
    </div>
  )
}
