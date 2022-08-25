import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";

import { Link } from "react-router-dom";
import FormGame from "../../components/formGame/FormGame";

function CreatePage() {
    return (
        <>
            <Box mt="20px" display="flex" alignItems="center">
                <Typography variant="h5" component="h5" color="#C5E384">
                    Добавление игры
                </Typography>
                <Breadcrumbs
                    color="white"
                    mt="3px"
                    ml="20px"
                    aria-label="breadcrumb"
                >
                    <Link to="/">Главная</Link>
                    <Typography color="white">Админ Панель</Typography>
                </Breadcrumbs>
            </Box>
            <FormGame />
        </>
    );
}

export default CreatePage;
