import { NumberDisplay } from "./NumberDisplay"
import { RestartBtn } from "./RestartBtn"

export function Controls() {
  return (
    <div className="controls inner-border">
      <NumberDisplay />
      <RestartBtn />
      <NumberDisplay />
    </div>
  )
}
