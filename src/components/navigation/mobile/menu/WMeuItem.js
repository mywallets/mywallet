import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";

export default function WMenuItem(props) {
  return (
    <>
      <MenuItem>

        <IconButton aria-label="show for icons" color="inherit">
         
          <Badge badgeContent={0} color="secondary">
          
            {props.icon}
          
          </Badge>
        
        </IconButton>

 <p>{props.name}</p> 

      </MenuItem>
    </>
  );
}
