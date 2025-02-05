import { CustomIcon } from "../CustomIcon"

export function RestartBtn({ resetGame }: { resetGame: () => void }) {
  return (
    <div className="restart-btn" onClick={resetGame}>
      <div className="outer-border">
        <CustomIcon name="faceSmile" />
      </div>
    </div>
  )
}
