import { setLevel } from "../../store/board.actions"
import { board } from "../../types/board.type"

export function GamePopover() {
  function handleClickLevel(level: board["level"]) {
    setLevel(level)
  }

  return (
    <div className="popover-content">
      <div className="field">
        <div></div>
        <div>New</div>
        <div>F2</div>
      </div>
      <hr />
      <div className="field" onClick={() => handleClickLevel("beginner")}>
        <div></div>
        <div>Beginner</div>
        <div></div>
      </div>
      <div className="field" onClick={() => handleClickLevel("intermediate")}>
        <div></div>
        <div>Intermediate</div>
        <div> &nbsp;&nbsp;</div>
      </div>
      <div className="field" onClick={() => handleClickLevel("expert")}>
        <div></div>
        <div>Expert</div>
        <div></div>
      </div>
      <hr />
      <div className="field">
        <div></div>
        <div>Exit</div>
        <div></div>
      </div>
    </div>
  )
}
