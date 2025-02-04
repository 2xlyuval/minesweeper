import { useSelector } from "react-redux"
import { boardService } from "../services/service.board"
import { utileService } from "../services/service.utils"
import { cell } from "../types/cell.type"
import { Cell } from "./Cell"
import { Controls } from "./Controls/Controls"
import { RootState } from "../store/store"
import { useEffect, useState } from "react"
import { setBombs, setMatrix, setRowsAndCols } from "../store/board.actions"
import { board } from "../types/board.type"

export function Board() {
  const { level, rows, cols, bombs, matrix }: board = useSelector(
    (state: RootState) => state.board
  )
  const [bombsCount, setBombsCount] = useState(bombs)
  const style = {
    gridTemplateRows: `repeat(${rows}, 16px)`,
    gridTemplateColumns: `repeat(${cols}, 16px)`,
  }

  useEffect(() => {
    if (!matrix.length) {
      boardSetup(level)
    }
  }, [matrix])

  useEffect(() => {
    setBombsCount(bombs)
    console.log("bombs mounted")
  }, [bombs])

  function boardSetup(level: board["level"]) {
    let rows = 0
    let cols = 0
    switch (level) {
      case "beginner":
        rows = 8
        cols = 8
        break
      case "intermediate":
        rows = 16
        cols = 16
        break
      case "expert":
        rows = 16
        cols = 30
        break
    }
    setRowsAndCols(rows, cols)
    createBoard(rows, cols)
  }

  function createBoard(rows: number, cols: number) {
    const bombs: number = calculateBombs(rows, cols)
    const matrixWithRandomBombs: cell[][] = createMatrixWithRandomBombs(
      rows,
      cols,
      bombs
    )
    const matrixBombsWithNumbers: cell[][] = createMatrixBombsWithNumbers(
      matrixWithRandomBombs
    )

    setBombs(bombs)
    setMatrix(matrixBombsWithNumbers)
  }

  function calculateBombs(rows: number, cols: number): number {
    const totalCells = rows * cols
    const randomPercentage =
      utileService.getRandomBetweenInclusive(10, 20) * 0.01
    const totalBombs = Math.round(totalCells * randomPercentage)
    return totalBombs
  }

  function createMatrixWithRandomBombs(
    rows: number,
    cols: number,
    bombs: number
  ): cell[][] {
    const matrix: cell[][] = Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: cols }, (_, colIndex) =>
        boardService.createDefaultCell(rowIndex, colIndex)
      )
    )
    for (let i = 0; i < bombs; i++) {
      let row = utileService.getRandomBetweenInclusive(0, rows - 1)
      let col = utileService.getRandomBetweenInclusive(0, cols - 1)
      if (matrix[row][col].value === 0) matrix[row][col].value = "B"
      else i--
    }
    return matrix
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

  if (!matrix.length) return <div>Loading...</div>

  return (
    <div className="board outer-border">
      <Controls bombsCount={bombsCount} />
      <div className="cells-wrapper inner-border" style={style}>
        {matrix.map((row, i) =>
          row.map((cell, j) => (
            <Cell
              key={`${i}-${j}`}
              cell={cell}
              bombsCount={bombsCount}
              setBombsCount={setBombsCount}
            />
          ))
        )}
      </div>
    </div>
  )
}
