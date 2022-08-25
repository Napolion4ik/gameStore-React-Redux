import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const CustomTypography = styled(Typography)`
  background-color: rgb(80, 82, 84);
  padding: 2px 5px;
  font-size: 13px;
  border-radius: 10px;
  color: white;
  margin-top: 5px;
  :not(:last-child) {
    margin-right: 7px;

`;

export default function GameGenre({ genre }) {
    return <CustomTypography>{genre}</CustomTypography>;
}
