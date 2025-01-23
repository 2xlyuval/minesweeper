import { board } from "../types/board.type"

const initialState: board = {
  difficulty: "easy",
  rows: 0,
  cols: 0,
  bombs: 0,
  matrix: [],
}

function boardReducer(state = initialState, action: any) {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        cards: state.cards.concat(action.payload),
      }
    default:
      return state
  }
}

export default boardReducer
