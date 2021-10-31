import { Button, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

//material styling
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  closeBtn: {
    fontWeight: "700",
  },
  button: {
    paddingLeft: "1.5rem !important",
    justifyContent: "flex-start !important",
    width: "15rem !important",
    marginLeft: "-0.6rem !important",
    textTransform: "capitalize !important",
    fontSize: "18px !important",
    fontWeight: "700 !important",
    color: "#333333 !important",
  },
}));

const Menu = ({ handleDrawer }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <IconButton onClick={() => handleDrawer()}>
        <CloseIcon className={classes.closeBtn} />
      </IconButton>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Button variant="text" className={classes.button}>
            Collections
          </Button>
        </li>
        <li className={classes.item}>
          <Button className={classes.button} variant="text">
            Men
          </Button>
        </li>
        <li className={classes.item}>
          <Button className={classes.button} variant="text">
            Women
          </Button>
        </li>
        <li className={classes.item}>
          <Button className={classes.button} variant="text">
            About
          </Button>
        </li>
        <li className={classes.item}>
          <Button className={classes.button} variant="text">
            Contact
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
