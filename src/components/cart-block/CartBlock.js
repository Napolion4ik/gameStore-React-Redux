import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import CartMenu from "../cart-menu/CartMenu";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartBlock() {
    const [isCartMenuVisible, setCartMenuVisible] = useState(false);
    const items = useSelector((state) => state.cart.itemsInCart);

    const navigate = useNavigate();

    const hadlerClick = useCallback(() => {
        setCartMenuVisible(false);
        navigate("/cart");
    }, [navigate]);

    const handlerShowCart = () => {
        setCartMenuVisible(!isCartMenuVisible);
    };

    return (
        <Box sx={{ position: "relative", cursor: "pointer" }}>
            <Badge badgeContent={items.length} color="secondary">
                <BiCartAlt onClick={handlerShowCart} size={25} />
            </Badge>
            {isCartMenuVisible && (
                <CartMenu items={items} onClick={hadlerClick}></CartMenu>
            )}
        </Box>
    );
}
