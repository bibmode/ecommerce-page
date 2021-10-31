// components
import { Avatar, IconButton, SwipeableDrawer } from "@mui/material";

//icons
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

//material styling
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.primary,
  },
  container: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    paddingRight: theme.spacing(3),
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
}));

const NavBar = () => {
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
      <IconButton onClick={handleDrawer} aria-label="open drawer">
        <MenuIcon className={classes.icon} />
      </IconButton>
      <img className={classes.logo} src="images/logo.svg" alt="page logo" />
      <IconButton aria-label="open shopping cart">
        <ShoppingCartOutlinedIcon className={classes.icon} />
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
