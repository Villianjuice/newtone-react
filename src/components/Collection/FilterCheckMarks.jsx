import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItem,
  ListItemText,
} from '@mui/material';
import * as React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FilterCheckMarks({ name, types, onFilter }) {
  // console.log(name, types);
  const [filterName, setfilterName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setfilterName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    onFilter(filterName)
  };
  

  return (
    <div>
      <ListItem disablePadding>
        <FormControl sx={{ m: '10px 0', width: '100%' }}>
          <InputLabel id="demo-multiple-checkbox-label">{name}</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={filterName}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}>
            {types.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={filterName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ListItem>
    </div>
  );
}
