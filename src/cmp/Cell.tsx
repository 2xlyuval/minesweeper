import { useState } from "react"
import { cell } from "../types/cell.type"
import { CustomIcon } from "./CustomIcon"

export function Cell({ cell }: { cell: cell }) {
  const [isRevealed, setIsRevealed] = useState(cell.isRevealed)
  const [isClickedBomb, setIsClickedBomb] = useState(false)
  const name = cell.value === "B" ? "bomb" : cell.value

  const cellStyle = {
    backgroundColor: isClickedBomb ? "red" : "unset",
  }

  function handleClick() {
    setIsRevealed(true)
    if (cell.value === "B") {
      clickOnBomb()
    }
  }

  function clickOnBomb() {
    console.log("Game Over")
    setIsClickedBomb(true)
  }

  return (
    <div
      className={`cell ${isRevealed ? "uncover-border" : "outer-border"}`}
      style={cellStyle}
      onClick={handleClick}
    >
      {isRevealed ? (
        <span className={"uncover"}>
          {cell.value === 0 ? "" : <CustomIcon name={name} />}
        </span>
      ) : (
        <span className="cover"></span>
      )}
    </div>
  )
}
