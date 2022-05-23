import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';

export default function SelectNative() {
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
          }}>
          <option value={10}>По названию</option>
          <option value={20}>По цене</option>
          <option value={30}>Сначало новые</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
