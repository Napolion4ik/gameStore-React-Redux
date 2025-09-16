import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import DrawerLink from "../drawer-link/DrawerLink";

import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";

const CustomDrawer = styled(Drawer)`
  color: red;
`;

function DrawerCustom({ setAnchor, anchor }) {
  const handlerClose = (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setAnchor(false);
  };

  return (
    <CustomDrawer anchor="left" open={anchor} onClose={handlerClose}>
      <DrawerLink to="/" icon={<AiOutlineHome color="black" />}>
        Головна
      </DrawerLink>
      <Divider />
      <DrawerLink to="/cart" icon={<AiOutlineShoppingCart color="black" />}>
        Корзина
      </DrawerLink>
      <Divider />
      <DrawerLink to="/create" icon={<RiAdminLine color="black" />}>
        Адмін Панель
      </DrawerLink>
    </CustomDrawer>
  );
}

export default DrawerCustom;
