import { calcTotalPrice } from "../utils";
import CartItem from "../cart-item/CartItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const CustomBox = styled(Box)`
  position: absolute;
  top: 30px;
  left: -277px;
  background-color: rgb(36, 37, 41);
  z-index: 2;
  width: 300px;
  border-radius: 15px;
  padding: 8px 13px;
`;

export default function CartMenu({ items, onClick }) {
  return (
    <CustomBox>
      <Grid container direction="column">
        {items.length > 0 ? (
          items.map((game) => (
            <CartItem
              key={game.id}
              id={game.id}
              price={game.price}
              title={game.title}
              game={game}
            />
          ))
        ) : (
          <Typography
            sx={{
              pt: "10px",
              pb: "10px",
              display: "flex",
              justifyContent: "center",
            }}
            variant="h6"
            align="center"
            component="h6"
          >
            Корзина пуста 🙄
          </Typography>
        )}
      </Grid>
      {items.length > 0 ? (
        <>
          <Divider color="white" />
          <Box sx={{ pt: "10px" }}>
            <Box sx={{ display: "flex" }} justifyContent="space-between">
              <Typography>Разом:</Typography>
              <Typography>{calcTotalPrice(items)} грн.</Typography>
            </Box>
            <Button
              sx={{ mt: "20px" }}
              size="small"
              variant="contained"
              onClick={onClick}
              color="success"
            >
              Оформити замовлення
            </Button>
          </Box>
        </>
      ) : null}
    </CustomBox>
  );
}
