import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DrawerCustom from "../custom-drawer/Drawer";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import { AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-router-dom";
import CartBlock from "../cart-block/CartBlock";
import { useState } from "react";

const CustomAppBAr = styled(AppBar)`
    background-color: rgb(36, 37, 41);
    border-radius: 0 0 10px 10px;
`;

export default function Header() {
    const [anchor, setAnchor] = useState(false);

    const handlerAnchor = () => {
        setAnchor(!anchor);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <CustomAppBAr position="static">
                <Toolbar>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid item>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <IconButton onClick={handlerAnchor}>
                                    <AiOutlineMenu color="white" />
                                </IconButton>
                                <Link to="/">
                                    <Typography variant="h5" component="span">
                                        Game Store
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item>
                            <CartBlock />
                        </Grid>
                    </Grid>
                </Toolbar>
            </CustomAppBAr>
            <DrawerCustom setAnchor={setAnchor} anchor={anchor} />
        </Box>
    );
}
