import { Board } from "./cmp/Board"
import { Menu } from "./cmp/menu/Menu"

export function GameWrapper() {
  return (
    <div className="game-wrapper">
      <Menu />
      <Board />
    </div>
  )
}
