import { useEffect, useState } from "react"
import { CustomIcon } from "../CustomIcon"
import { eventBus, GAME_OVER } from "../../services/service.eventBus"

export function RestartBtn({ resetGame }: { resetGame: () => void }) {
  type smileyType = "faceSmile" | "faceWin" | "faceLose"

  const [smileyState, setSmileyState] = useState<smileyType>("faceSmile")

  useEffect(() => {
    eventBus.on(GAME_OVER, () => {
      setSmileyState("faceLose")
    })

    return eventBus.off(GAME_OVER, () => {})
  }, [])

  function handleResetBtnClick() {
    resetGame()
    setSmileyState("faceSmile")
  }

  return (
    <div className="restart-btn" onClick={handleResetBtnClick}>
      <div className="outer-border">
        <CustomIcon name={smileyState} />
      </div>
    </div>
  )
}
