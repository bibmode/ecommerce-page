import { Divider, Typography } from "@mui/material";

// styled components
import styled from "styled-components";

//material styling
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  emptyCartText: {
    fontWeight: 700,
    letterSpacing: "0.8px",
  },
  titleText: {
    fontWeight: 700,
    color: grey[900],
  },
}));

const Card = styled.div`
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
  width: min(95vw, 40rem);
  z-index: 1000;
  top: 4.5rem;
  background-color: #fff;
  border-radius: 0.6rem;
  text-align: left;
  box-shadow: 0 1rem 2rem -1rem rgba(38, 38, 38, 0.4);
`;

const Items = styled.div`
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cart = () => {
  const classes = useStyles();

  return (
    <Card>
      <Typography className={classes.titleText} py={2} px={3}>
        Cart
      </Typography>
      <Divider />
      <Items>
        <Typography className={classes.emptyCartText} color="GrayText">
          Your cart is empty.
        </Typography>
      </Items>
    </Card>
  );
};

export default Cart;
