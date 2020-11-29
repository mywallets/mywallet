import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AddIcon from "@material-ui/icons/Add";
import WalletIcon from "@material-ui/icons/AccountBalanceWallet";
import Tooltip from "@material-ui/core/Tooltip";
import SwapIcon from "@material-ui/icons/SwapVerticalCircleOutlined";

 import FormatTextdirectionLToRIcon from "@material-ui/icons/FormatTextdirectionLToR";
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

export default function Desktop(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.sectionDesktop}>
      <Tooltip title="Wallets">
          <IconButton aria-label="show wallets" color="inherit">
            <Badge color="primary" badgeContent={0}  variant="dot">
              <WalletIcon />
            </Badge>
          </IconButton>

        </Tooltip>
        <Tooltip title="Create Wallet">
          <IconButton aria-label="create wallet" color="inherit">
              <AddIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Swap">
          <IconButton aria-label="create wallet" color="inherit">
              <SwapIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications">
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={3} color="secondary" overlap="rectangle">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Right To Left">
          <IconButton
            edge="end"
            aria-label="Right to left"
            aria-controls={props.aria_controls}
            aria-haspopup="false"
            onClick={props.onClick}
            color="inherit"
          >
            <FormatTextdirectionLToRIcon />
          </IconButton>

        </Tooltip>

      </div>
    </>
  );
}
