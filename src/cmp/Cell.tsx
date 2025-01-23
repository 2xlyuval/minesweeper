export function Cell({ cell }: { cell: string | number }) {
  // cell options:
  // isCovered: true, false
  // coverData: empty, question, flag
  // data: bomb, number, empty
  const cellData = { isCovered: false, coverData: null, data: "empty" }
  return (
    <div
      className={`cell ${
        cellData.isCovered ? "outer-border" : "uncover-border"
      }`}
    >
      {cellData.isCovered ? (
        <span className="cover">?</span>
      ) : (
        <span className="uncover">{cell}</span>
      )}
    </div>
  )
}
