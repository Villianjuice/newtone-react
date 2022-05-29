import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy } from '../../redux/filter/filterSlice';

export default function SelectNative() {
  const dispatch = useDispatch();

  const sorts = [
    { name: 'По названию', type: 'title' },
    { name: 'По цене', type: 'price' },
    { name: 'Сначало новые', type: 'new' },
  ];
  const onClickSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );
  const onSelectItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index);
    }
  };
  const handleChange = (event) => {
    let newValue = 'title';
    if (event.target.value === 'По названию') {
      newValue = 'title';
    }
    if (event.target.value === 'По цене') {
      newValue = 'price';
    }
    if (event.target.value === 'Сначало новые') {
      newValue = 'new';
    }
    onSelectItem(newValue);
  };
  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Сортировка
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          onChange={handleChange}>
          {sorts.map((sort) => (
            <option key={sort.type}>{sort.name}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
