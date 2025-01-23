export type cell = {
  id: string
  value: "B" | number
  isRevealed: boolean
  state: "empty" | "flag" | "question"
}
