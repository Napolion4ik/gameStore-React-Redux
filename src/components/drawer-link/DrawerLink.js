import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function DrawerLink({ children, icon, to }) {
    return (
        <Link
            to={to}
            style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
            }}
        >
            <IconButton>{icon}</IconButton>
            <Typography color="black" variant="h6" component="h6">
                {children}
            </Typography>
        </Link>
    );
}

export default DrawerLink;
