import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import CardMedia from "@mui/material/CardMedia";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GameGenre from "../../components/game-genre/GameGenre";
import GameBuy from "../../components/game-buy/GameBuy";
import { getGame } from "../../services/services";

function GamePage() {
    const { id } = useParams();
    const [game, setGame] = useState({});
    const [statusLoading, setStatus] = useState(false);

    useEffect(() => {
        getGame(id).then((response) => {
            setStatus(true);
            setGame(response.data);
        });
    }, [id]);

    return (
        <>
            {!statusLoading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: window.innerHeight / 2.5 + "px",
                    }}
                >
                    <CircularProgress size={70} />
                </Box>
            ) : (
                <Box>
                    <Box mt="20px">
                        <Breadcrumbs color="white" aria-label="breadcrumb">
                            <Link to="/">Главная</Link>
                            <Typography color="white">
                                Игра {game.title}
                            </Typography>
                        </Breadcrumbs>
                    </Box>
                    <Typography
                        sx={{ mt: "10px", mb: "10px" }}
                        variant="h3"
                        component="h3"
                        color="white"
                    >
                        {game.title}
                    </Typography>
                    <Grid container>
                        <Grid item width="70%">
                            <iframe
                                width="90%"
                                src={game.video}
                                title="YouTube Video Player"
                                height="400px"
                                frameBorder="none"
                            ></iframe>
                        </Grid>
                        <Grid item width="30%">
                            <CardMedia
                                component="img"
                                height="170"
                                image={game.image}
                                alt={game.title}
                            />
                            <Typography color="white" mt="8px">
                                {game.description}
                            </Typography>
                            <Typography color="gray" mt="10px">
                                Популярные метки этого продукта:
                            </Typography>
                            <Box display="flex" ml="15px" mt="5px">
                                {game.genres?.map((genre) => (
                                    <GameGenre genre={genre} key={genre} />
                                ))}
                            </Box>
                            <Box
                                mt="20px"
                                display="flex"
                                justifyContent="flex-end"
                            >
                                <GameBuy game={game} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    );
}

export default GamePage;
