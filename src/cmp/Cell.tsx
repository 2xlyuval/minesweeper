import { useEffect, useState } from "react"
import { cell } from "../types/cell.type"
import { CustomIcon } from "./CustomIcon"
import { updateCell } from "../store/board.actions"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { eventBus, GAME_OVER, RESTART_GAME } from "../services/service.eventBus"

export function Cell({
  cell,
  bombsCount,
  setBombsCount,
  startTimer,
  stopTimer,
  setBlockBoard,
}: {
  cell: cell
  bombsCount: number
  setBombsCount: Function
  startTimer: Function
  stopTimer: Function
  setBlockBoard: Function
}) {
  const matrix = useSelector((state: RootState) => state.board.matrix)
  const [isClickedBomb, setIsClickedBomb] = useState(false)
  const [startGame, setStartGame] = useState(false)
  const name = cell.value === "B" ? "bomb" : cell.value

  const clickedBombCellStyle = {
    backgroundColor: "red",
  }

  useEffect(() => {
    eventBus.on(RESTART_GAME, () => {
      setIsClickedBomb(false)
    })
    return () => {
      eventBus.off(RESTART_GAME, () => {})
    }
  }, [])

  function handleClick() {
    if (cell.state === "flag") return
    if (!startGame) {
      startTimer()
      setStartGame(true)
    }
    updateCell({ ...cell, isRevealed: true })

    switch (cell.value) {
      case 0:
        clickOnZero(cell.rowIdx, cell.colIdx)
        break
      case "B":
        clickOnBomb()
        break
      default:
        break
    }
  }

  function handleRightClick(e: React.MouseEvent) {
    e.preventDefault()
    switch (cell.state) {
      case "empty":
        updateCell({ ...cell, state: "flag" })
        setBombsCount(bombsCount - 1)
        break
      case "flag":
        updateCell({ ...cell, state: "question" })
        setBombsCount(bombsCount + 1)
        break
      case "question":
        updateCell({ ...cell, state: "empty" })
        break
      default:
        break
    }
  }

  function clickOnBomb() {
    stopTimer()
    setIsClickedBomb(true)
    revealAllBombs()
    setBlockBoard(true)
    eventBus.emit(GAME_OVER)
  }

  function clickOnZero(rowIndex: number, colIndex: number) {
    revealZeroCells(rowIndex, colIndex)
  }

  function revealZeroCells(rowIndex: number, colIndex: number) {
    // Set to track visited cells
    const visited = new Set<string>()

    function helper(row: number, col: number) {
      // Check bounds
      if (
        row < 0 ||
        col < 0 ||
        row >= matrix.length ||
        col >= matrix[0].length
      ) {
        return
      }

      const cellKey = `${row},${col}` // Unique key for each cell

      // console.log("Revealing cell:", row, col)
      updateCell({ ...matrix[row][col], isRevealed: true })

      // Skip if already visited or if the cell is not zero
      if (visited.has(cellKey) || matrix[row][col].value !== 0) {
        return
      }

      // Mark the cell as visited
      visited.add(cellKey)

      // Recursively check neighbors
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (i !== row || j !== col) {
            helper(i, j)
          }
        }
      }
    }

    // Start recursion
    helper(rowIndex, colIndex)
  }

  function revealAllBombs() {
    matrix.forEach((row: cell[]) => {
      row.forEach((cell) => {
        if (cell.value === "B") {
          updateCell({ ...cell, isRevealed: true })
        }
      })
    })
  }

  function isWinning() {
    let isWinning = false
    matrix.forEach((row: cell[]) => {
      row.forEach((cell) => {
        if (cell.value !== "B" && cell.isRevealed) {
          isWinning = true
        }
      })
    })
    return isWinning
  }

  function gameWon() {
    if (isWinning()) {
      stopTimer()
      setBlockBoard(true)
      eventBus.emit(GAME_OVER)
    }
  }

  return (
    <div
      className={`cell ${cell.isRevealed ? "uncover-border" : "outer-border"}`}
      {...(isClickedBomb ? { style: clickedBombCellStyle } : {})}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      {cell.isRevealed ? (
        <span className={"uncover"}>
          {cell.value === 0 ? "" : <CustomIcon name={name} />}
        </span>
      ) : (
        <span className="cover">
          {cell.state === "flag" ? <CustomIcon name="flag" /> : ""}
          {cell.state === "question" ? <CustomIcon name="questionMark" /> : ""}
        </span>
      )}
    </div>
  )
}
