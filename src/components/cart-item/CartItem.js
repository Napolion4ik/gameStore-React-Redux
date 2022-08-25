import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function CartItem({ price, title, game }) {
    const dispatch = useDispatch();

    const handlerRemoveItem = () => {
        dispatch(deleteItemFromCart(game));
    };
    return (
        <Grid
            item
            sx={{ display: "flex" }}
            alignItems="center"
            justifyContent="space-between"
        >
            <Typography>{title}</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography align="end" width="100px">
                    {price} грн.
                </Typography>
                <IconButton onClick={handlerRemoveItem}>
                    <AiOutlineCloseCircle color="red" />
                </IconButton>
            </Box>
        </Grid>
    );
}
