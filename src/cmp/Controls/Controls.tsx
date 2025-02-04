import { useSelector } from "react-redux"
import { NumberDisplay } from "./NumberDisplay"
import { RestartBtn } from "./RestartBtn"
import { RootState } from "../../store/store"

export function Controls({ bombsCount }: { bombsCount: number }) {
  return (
    <div className="controls inner-border">
      <NumberDisplay number={bombsCount} />
      <RestartBtn />
      <NumberDisplay number={0} />
    </div>
  )
}
