import { menuPopover } from "../../types/menuPopover.type"
import { CustomPopover } from "../CustomPopover"
import { GamePopover } from "./GamePopover"

export const Menu = ({ handleReset }: { handleReset: () => void }) => {
  const menuItems: menuPopover[] = [
    { buttonTitle: "Game", content: <GamePopover handleReset={handleReset} /> },
    { buttonTitle: "Options", content: <div>Options</div> },
    { buttonTitle: "Help", content: <div>Help</div> },
  ]
  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <CustomPopover key={index} item={item} />
      ))}
    </div>
  )
}
