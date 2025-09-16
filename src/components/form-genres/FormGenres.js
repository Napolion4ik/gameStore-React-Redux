import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";

import React from "react";
import { useTheme } from "@mui/material/styles";
import { genres } from "../../constans/constanst";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function FormGenres({ onChange, genresItem }) {
  const theme = useTheme();

  const handleChange = ({ target: { value } }) => {
    onChange((prevState) => ({
      ...prevState,
      genres: value,
    }));
  };

  return (
    <FormControl sx={{ m: 1, width: "64%" }}>
      <InputLabel id="demo-multiple-name-label">Жанр</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        multiple
        value={genresItem}
        onChange={handleChange}
        input={<OutlinedInput variant="filled" label="Name" />}
        MenuProps={MenuProps}
        variant="filled"
      >
        {genres.map((name) => {
          if (name === "Всі") return;
          return (
            <MenuItem
              style={getStyles(name, genresItem, theme)}
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default FormGenres;
