import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import { styled } from "@mui/material/styles";

const CustomBox = styled(Box)`
    overflow: auto;
    ::-webkit-scrollbar {
        width: 0;
    }
`;

function OrderItem({ game }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteItemFromCart(game));
    };
    return (
        <Grid mt="10px" item display="flex" fullWidth sx={12} md={12}>
            <Box width="250px" mr="30px">
                <CardMedia
                    sx={{ borderRadius: "10px" }}
                    component="img"
                    height="170"
                    image={game.image}
                />
            </Box>
            <CustomBox width="500px" height="155px">
                <Typography variant="h5" component="h5" color="white">
                    {game.title}
                </Typography>
                <Typography variant="h6" component="h6" color="white">
                    {game.description}
                </Typography>
            </CustomBox>
            <Box display="flex" sx={{ marginLeft: "auto" }}>
                <Typography color="white" mr="10px">
                    {game.price} грн
                </Typography>
                <AiOutlineCloseCircle
                    size={25}
                    color="red"
                    onClick={handleClick}
                />
            </Box>
        </Grid>
    );
}

export default OrderItem;
