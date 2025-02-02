import { menuPopover } from "../../types/menuPopover.type"
import { CustomPopover } from "../CustomPopover"

export function Menu() {
  const menuItems: menuPopover[] = [
    { buttonTitle: "Game" },
    { buttonTitle: "Options" },
    { buttonTitle: "Help" },
  ]
  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <CustomPopover key={index} item={item} />
      ))}
    </div>
  )
}
