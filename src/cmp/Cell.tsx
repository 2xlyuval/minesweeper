import { cell } from "../types/cell.type"

export function Cell({ cell }: { cell: cell }) {
  const { id, value, isRevealed, state } = cell
  return (
    <div className={`cell ${isRevealed ? "uncover-border" : "outer-border"}`}>
      {isRevealed ? (
        <span className="uncover">{cell.value}</span>
      ) : (
        <span className="cover"></span>
      )}
    </div>
  )
}
