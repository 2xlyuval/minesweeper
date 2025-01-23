export function Menu() {
  const menuItems: string[] = ["Game", "Options", "Help"]
  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          {item}
        </div>
      ))}
    </div>
  )
}
