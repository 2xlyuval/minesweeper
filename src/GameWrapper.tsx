import { useRef } from "react"
import { Board, BoardRef } from "./cmp/Board"
import { Menu } from "./cmp/menu/Menu"

export function GameWrapper() {
  const boardRef = useRef<BoardRef>(null)

  const handleReset = () => {
    if (boardRef.current) {
      boardRef.current.resetGame() // Call the reset function in Board
    }
  }

  return (
    <div className="game-wrapper">
      <Menu handleReset={handleReset} />
      <Board ref={boardRef} />
    </div>
  )
}
