// components
import { Avatar, IconButton, SwipeableDrawer } from "@mui/material";

//icons
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

//material styling
import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
import Menu from "./Menu";

import { AppContext } from "../App";
import { orange } from "@mui/material/colors";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.primary,
  },
  iconBtn: {
    paddingLeft: "0 !important",
  },
  container: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1.5),
    paddingInline: theme.spacing(3),
  },
  logo: {
    marginRight: "auto",
    marginBottom: "5px",
  },
  avatar: {
    marginLeft: theme.spacing(1),
    width: "30px !important",
    height: "30px !important",
  },
  cart: {
    position: "relative",
  },
  cartQuantity: {
    fontSize: 10,
    position: "absolute",
    top: 3,
    right: 3,
    width: "fit-content",
    height: "fit-content",
    paddingInline: 7,
    paddingBlock: 1,
    borderRadius: 20,
    background: orange[600],
    color: "#fff",
  },
}));

const NavBar = () => {
  // use context
  const { toggleCart, productDetails, emptyCart } = useContext(AppContext);

  const classes = useStyles();

  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  const toggleDrawer = (open) => (event) => {
    setDrawer(open);
  };

  return (
    <nav className={classes.container}>
      {/* nav bar components */}
      <IconButton
        className={classes.iconBtn}
        onClick={handleDrawer}
        aria-label="open drawer"
      >
        <MenuIcon className={classes.icon} />
      </IconButton>

      <img className={classes.logo} src="images/logo.svg" alt="page logo" />

      <IconButton
        className={classes.cart}
        aria-label="open shopping cart"
        onClick={toggleCart}
      >
        <ShoppingCartOutlinedIcon className={classes.icon} />
        {productDetails.quantity > 0 && !emptyCart && (
          <Box className={classes.cartQuantity}>{productDetails.quantity}</Box>
        )}
      </IconButton>
      <Avatar
        className={classes.avatar}
        alt="user image"
        src="images/image-avatar.png"
      />

      {/* drawer */}
      <SwipeableDrawer
        anchor={"left"}
        open={drawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Menu handleDrawer={handleDrawer} />
      </SwipeableDrawer>
    </nav>
  );
};

export default NavBar;
