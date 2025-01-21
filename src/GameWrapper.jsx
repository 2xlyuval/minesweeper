import { Board } from "./cmp/Board"
import { Menu } from "./cmp/menu/menu"

export function GameWrapper() {
  return (
    <div className="game-wrapper">
      <Menu />
      <Board />
    </div>
  )
}
