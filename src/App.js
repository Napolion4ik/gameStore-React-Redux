import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home-page/Home-page";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import { store } from "./redux";
import GamePage from "./pages/GamePage/GamePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import Container from "@mui/material/Container";
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Container maxWidth="xl">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/game/:id" element={<GamePage />} />
                        <Route path="/cart" element={<OrderPage />} />
                        <Route path="/create" element={<CreatePage />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
