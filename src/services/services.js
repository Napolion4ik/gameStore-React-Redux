import axios from "axios";
const URL = "https://62dfdd2198dd9c9df6087ec8.mockapi.io/games/";
export const getGame = (id) => {
    return axios.get(URL + "/" + id);
};

export const getAllGames = () => {
    return axios.get(URL);
};
export const postGame = (body) => {
    return axios.post(URL, body);
};
