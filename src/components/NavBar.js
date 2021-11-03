// components
import { Avatar, IconButton, SwipeableDrawer, Container } from "@mui/material";

//icons
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

//material styling
import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
import Menu from "./Menu";

import { AppContext } from "../App";
import { grey, orange } from "@mui/material/colors";
import { Box } from "@mui/system";
import Cart from "./Cart";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.primary,
  },
  iconBtn: {
    paddingLeft: "0 !important",
    [theme.breakpoints.up("md")]: {
      display: "none !important",
    },
  },
  containerAll: {
    position: "relative",
  },
  container: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1.5),
    paddingInline: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingBlock: theme.spacing(3),
      paddingInline: theme.spacing(0),
      borderBottom: "1px solid #e0e0e0",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(8),
    },
  },
  logo: {
    marginRight: "auto",
    marginBottom: "5px",
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(1),
    },
  },
  avatar: {
    marginLeft: theme.spacing(1),
    width: "30px !important",
    height: "30px !important",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(4),
      width: "50px !important",
      height: "50px !important",
    },
    "&:hover": {
      outline: `2px solid ${orange[600]}`,
    },
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
  links: {
    display: "flex",
    listStyle: "none",
    marginRight: "auto",
    "& > * > *": {
      textDecoration: "none",
      color: grey[600],
      marginRight: theme.spacing(4),
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  linkItem: {
    paddingBlock: theme.spacing(4.8),
    "&:hover": {
      color: grey[800],
      fontWeight: "700 !important",
      borderBottom: `3px solid ${orange[600]}`,
    },
  },
}));

const NavBar = () => {
  // use context
  const { toggleCart, productDetails, emptyCart, setCart, cart, cartRef } =
    useContext(AppContext);

  const classes = useStyles();

  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  const toggleDrawer = (open) => (event) => {
    setDrawer(open);
  };

  return (
    <Container className={classes.containerAll} maxWidth="lg">
      {cart && (
        <div ref={cartRef}>
          <Cart />
        </div>
      )}
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

        <Box component="ul" className={classes.links}>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/bibmode"
              target="_blank"
              rel="noreferrer"
              className={classes.linkItem}
            >
              Collections
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/bibmode"
              target="_blank"
              rel="noreferrer"
              className={classes.linkItem}
            >
              Men
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/bibmode"
              target="_blank"
              rel="noreferrer"
              className={classes.linkItem}
            >
              Women
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/bibmode"
              target="_blank"
              rel="noreferrer"
              className={classes.linkItem}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/bibmode"
              target="_blank"
              rel="noreferrer"
              className={classes.linkItem}
            >
              Contact
            </a>
          </li>
        </Box>

        <IconButton
          className={classes.cart}
          aria-label="open shopping cart"
          onClick={() => {
            toggleCart();
            setCart(!cart);
          }}
        >
          <ShoppingCartOutlinedIcon className={classes.icon} />
          {productDetails.quantity > 0 && !emptyCart && (
            <Box className={classes.cartQuantity}>
              {productDetails.quantity}
            </Box>
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
    </Container>
  );
};

export default NavBar;
