import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "../../redux/cart/reducer";

export default function GameBuy({ game }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <Box display="flex" alignItems="center" gap="20px" mb="5px">
      <Typography color="#EA592A">{game.price} грн.</Typography>
      <Button
        variant="contained"
        color={isItemInCart ? "error" : "success"}
        onClick={handleClick}
      >
        <Typography fontSize="small">
          {isItemInCart ? "Видалити з корзини" : "В корзину"}
        </Typography>
      </Button>
    </Box>
  );
}
