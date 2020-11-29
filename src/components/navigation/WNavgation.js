import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import FormatTextdirectionLToRIcon from "@material-ui/icons/FormatTextdirectionLToR";
// import FormatTextdirectionRToLIcon from "@material-ui/icons/FormatTextdirectionRToL";
import Mobile from "./mobile/Mobile";
import Desktop from "./desktop/Desktop";
import MenuMobile from "./mobile/MenuMobile";
import MenuDesktop from "./desktop/MenuDesktop";
import WToolbar from "./WToolbar";

const useStyles = makeStyles((theme) => ({
  appbar: {
    /* Chrome 10-25, Safari 5.1-6 */
    // background: 'linear-gradient(to right, #021B79, #0575E6);',  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    // background: '#00c6ff;',  /* fallback for old browsers */
    // background: '-webkit-linear-gradient(to right, #0072ff, #00c6ff);',  /* Chrome 10-25, Safari 5.1-6 */
    // background: 'linear-gradient(to right, #0072ff, #0575E6);',  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    // color:'white' ,
    background: "white",
    border: "none",
  },
  grow: {
    flexGrow: 1,
    marginTop: "0px",
  },
}));

export default function WNavigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.grow}>
      <AppBar
        className={classes.appbar}
        color="transparent"
        position="static"
        elevation={15}
        variant="outlined"
        square={false}
      >
        <WToolbar>
          <Desktop onClick={handleProfileMenuOpen} aria_controls={menuId} />
          <Mobile onClick={handleMobileMenuOpen} aria_controls={mobileMenuId} />
        </WToolbar>
      </AppBar>

      <MenuMobile
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        anchorEl={mobileMoreAnchorEl}
        onClick={handleProfileMenuOpen}
      />
      <MenuDesktop
        open={isMenuOpen}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        anchorEl={anchorEl}
      />
    </div>
  );
}
