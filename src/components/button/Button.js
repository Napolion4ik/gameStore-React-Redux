import Button from "@mui/material/Button";

export default function ButtonCustom({ onClick, children }) {
    return (
        <Button variant="contained" color="success" onClick={onClick}>
            {children}
        </Button>
    );
}
