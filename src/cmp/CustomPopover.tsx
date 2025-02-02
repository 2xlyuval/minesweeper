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
            backgroundColor: "black",
            color: "white",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
          },
        }}
      >
        <Typography>Custom Styled Popover</Typography>
      </Popover>
    </div>
  )
}
