import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import OrderItem from "../../components/order-item/OrderItem";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calcTotalPrice } from "../../components/utils";

function OrderPage() {
  const itemInCart = useSelector((state) => state.cart.itemsInCart);

  if (itemInCart < 1) {
    return (
      <Typography
        variant="h3"
        sx={{
          top: "50%",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 50%)",
        }}
        align="center"
        color="white"
      >
        Ваша корзина пуста 🛒
      </Typography>
    );
  }

  return (
    <Box>
      <Box mt="20px">
        <Breadcrumbs color="white" aria-label="breadcrumb">
          <Link to="/">Головна</Link>
          <Typography color="white">Корзина</Typography>
        </Breadcrumbs>
      </Box>
      <Grid width="100%" container mt="20px">
        {itemInCart.map((game) => (
          <OrderItem game={game} />
        ))}
      </Grid>
      <Divider sx={{ marginTop: "25px" }} color="white" />
      <Box mt="10px">
        <Box display="flex" justifyContent="flex-end">
          <Typography color="white">
            Разом : {calcTotalPrice(itemInCart)} грн.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderPage;
