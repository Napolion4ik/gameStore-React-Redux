import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import GameBuy from "../game-buy/GameBuy";
import GameGenre from "../game-genre/GameGenre";
import { styled } from "@mui/material/styles";

const CustomCard = styled(Card)`
    text-decoration: none;
    color: white;
    height: 300px;
    background-color: rgb(36, 37, 41);
    border-radius: 15px;
    cursor: pointer;
    position: relative;
`;

export default function GameItem({ game }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/game/" + String(game.id));
    };

    return (
        <Grid sx={{ width: "310px" }} mb="20px" item onClick={handleClick}>
            <CustomCard>
                <CardMedia component="img" height="170" image={game.image} />
                <Box>
                    <Typography ml="20px" mt="5px">
                        {game.title}
                    </Typography>
                    <Box display="flex" flexWrap="wrap" ml="15px">
                        {game.genres.map((genre) => (
                            <GameGenre genre={genre} key={genre} />
                        ))}
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            right: 0,
                            bottom: "0px",
                            marginRight: "10px",
                        }}
                    >
                        <GameBuy game={game} />
                    </Box>
                </Box>
            </CustomCard>
        </Grid>
    );
}
