import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import WalletIcon from "@material-ui/icons/AccountBalanceWallet";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AddIcon from "@material-ui/icons/Add";
import WMenuItem from "./menu/WMeuItem";

export default function MenuMobile(props) {
  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <>
      <Menu
        anchorEl={props.anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={props.open}
        onClose={props.onClose}
      >
        <MenuItem onClick={props.onClick}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <WalletIcon color="#D1D5DB"/>
          </IconButton>
          <p>Wallets</p>
        </MenuItem>
        
        <WMenuItem icon={<AddIcon />} name="Create" />

        <WMenuItem icon={<NotificationsIcon />} name="Notifications" />
      </Menu>
    </>
  );
}
