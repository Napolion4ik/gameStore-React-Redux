import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

import GameItem from "../../components/game-item/GameItem";
import { useEffect, useState } from "react";
import {
  getGames,
  searcGame,
  setByCategory,
} from "../../redux/games/gamesReducer";
import { useDispatch, useSelector } from "react-redux";
import { genres } from "../../constans/constanst";

export default function HomePage() {
  const dispatch = useDispatch();
  const [activeGenres, setActiveGenres] = useState("Всі");

  const games = useSelector((state) => state.games.filterGame);
  const status = useSelector((state) => state.games.status);

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  const handlerChangeFilter = (e) => {
    dispatch(setByCategory(e.target.value));
    setActiveGenres(e.target.value);
  };

  const handlerSearch = (e) => {
    setActiveGenres("Всі");
    dispatch(searcGame(e.target.value));
  };

  return (
    <>
      {status ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: window.innerHeight / 2.5 + "px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box mt="20px" mb="20px">
            <FormControl sx={{ width: "200px", marginRight: "20px" }}>
              <InputLabel id="simple-label" sx={{ color: "white" }}>
                Жанр
              </InputLabel>
              <Select
                color="info"
                labelId="simple-label"
                label="Жанр"
                onChange={handlerChangeFilter}
                name="select"
                value={activeGenres}
                sx={{ width: "200px", color: "white" }}
                info
              >
                {genres?.map((item) => (
                  <MenuItem key={item} value={item}>
                    <Typography color="black">{item}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              placeholder="Пошук"
              color="info"
              type="text"
              onChange={handlerSearch}
            />
          </Box>
          <Grid container width="100%" justifyContent="space-around">
            {games?.map((game) => (
              <GameItem game={game} key={game.id} />
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
