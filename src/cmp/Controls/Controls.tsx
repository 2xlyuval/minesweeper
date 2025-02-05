import { useSelector } from "react-redux"
import { NumberDisplay } from "./NumberDisplay"
import { RestartBtn } from "./RestartBtn"
import { RootState } from "../../store/store"

export function Controls({
  bombsCount,
  time,
  resetGame,
}: {
  bombsCount: number
  time: number
  resetGame: () => void
}) {
  return (
    <div className="controls inner-border">
      <NumberDisplay number={bombsCount} />
      <RestartBtn resetGame={resetGame} />
      <NumberDisplay number={time} />
    </div>
  )
}
