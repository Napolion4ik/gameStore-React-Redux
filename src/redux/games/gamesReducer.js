import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllGames } from "../../services/services";
import { postGame } from "../../services/services";

export const getGames = createAsyncThunk(
  "games/getAllGames",
  async (_, { dispatch }) => {
    const response = await getAllGames();
    dispatch(setGames(response.data));
  }
);
export const postGames = createAsyncThunk(
  "games/postGames",
  async (body, { dispatch }) => {
    await postGame(body);
    dispatch(setGame(body));
  }
);

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    filterGame: [],
    status: false,
  },
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload;
      state.filterGame = action.payload;
    },
    setGame: (state, action) => {
      state.games.push(action.payload);
      state.filterGame.push(action.payload);
    },
    setByCategory: (state, action) => {
      const data = [];
      if (action.payload === "Всі") {
        state.filterGame = state.games;
      } else {
        state.games.filter((game) => {
          game.genres.find((item) =>
            item === action.payload ? data.push(game) : null
          );
          return null;
        });
        state.filterGame = data;
      }
    },
    searcGame: (state, action) => {
      state.filterGame = state.games.filter((game) =>
        game.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: {
    [getGames.fulfilled]: (state) => {
      state.status = false;
    },
    [getGames.pending]: (state) => {
      state.status = true;
    },
  },
});
export const { setGames, setByCategory, searcGame, setGame } =
  gamesSlice.actions;

export default gamesSlice.reducer;
