import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/reducer";
import gamesReducer from "./games/gamesReducer";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        games: gamesReducer,
    },
});
