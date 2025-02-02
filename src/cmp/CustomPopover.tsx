import React, { useState } from "react"
import { Popover, Button, Typography } from "@mui/material"
import { menuPopover } from "../types/menuPopover.type"

export function CustomPopover({ item }: { item: menuPopover }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "custom-popover" : undefined

  return (
    <div>
      <div aria-describedby={id} onClick={handleClick}>
        {item.buttonTitle}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "rgb(192, 192, 192)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderTopColor: "#808080",
            borderLeftColor: "#808080",
            borderRightColor: "black",
            borderBottomColor: "black",
            borderRadius: "0",
            boxShadow: "none",
            padding: "2px",
          },
        }}
      >
        {item.content}
      </Popover>
    </div>
  )
}
