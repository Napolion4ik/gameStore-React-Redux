import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postGames } from "../../redux/games/gamesReducer";
import FormGenres from "../form-genres/FormGenres";

const CustomGrid = styled(Grid)`
  width: 80%;
  margin: 0 auto;
  background: #ded3a6;
  border: 1px solid #c5e384;
  border-radius: 10px;
  margin-top: 30px;
`;

function FormGame() {
  const [gameAllAbout, setGameAllAbout] = useState({
    title: "",
    price: 0,
    video: "",
    image: "",
    description: "",
    genres: [],
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeGame = (e) => {
    if (e.target.name === "price") {
      setGameAllAbout({
        ...gameAllAbout,
        [e.target.name]: Number(e.target.value),
      });
    } else {
      setGameAllAbout({
        ...gameAllAbout,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handlerSubmit = () => {
    dispatch(postGames(gameAllAbout));
    navigate("/");
  };
  const handlerReset = () => {
    setGameAllAbout({
      title: "",
      price: "",
      video: "",
      image: "",
      description: "",
      genres: [],
    });
  };

  return (
    <CustomGrid component="form" container>
      <Grid item>
        <Typography color="gray" align="center" variant="h5">
          Додати гру
        </Typography>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "43ch" },
          }}
        >
          <TextField
            label="Назва"
            variant="filled"
            value={gameAllAbout.title}
            name="title"
            onChange={changeGame}
          />
          <TextField
            label="Фото"
            variant="filled"
            value={gameAllAbout.image}
            name="image"
            onChange={changeGame}
          />
          <TextField
            label="Ціна"
            value={gameAllAbout.price}
            variant="filled"
            name="price"
            onChange={changeGame}
          />
        </Box>
      </Grid>
      <Grid width="100%" item>
        <Divider color="white" />
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "43ch" },
          }}
        >
          <TextField
            label="Відео"
            variant="filled"
            name="video"
            value={gameAllAbout.video}
            onChange={changeGame}
          />
          <FormGenres
            genresItem={gameAllAbout.genres}
            onChange={setGameAllAbout}
          />
        </Box>
      </Grid>
      <Grid sx={{ padding: "8px" }} width="97%" item>
        <Divider color="white" />
        <TextareaAutosize
          aria-label="textarea"
          placeholder="Опис"
          name="description"
          value={gameAllAbout.description}
          onChange={changeGame}
          style={{
            width: "100%",
            background: "#b7c656",
            minHeight: "100px",
            fontSize: "19px",
          }}
        />
      </Grid>
      <Grid sx={{ padding: "8px" }} item>
        <Button
          onClick={handlerSubmit}
          color="success"
          sx={{ mr: "10px" }}
          variant="contained"
        >
          Відправити
        </Button>
        <Button onClick={handlerReset} color="error" variant="contained">
          Скинути
        </Button>
      </Grid>
    </CustomGrid>
  );
}

export default FormGame;
