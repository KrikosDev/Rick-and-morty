import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { debounce } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { filterList } from './defaultValues';
import styles from './styles';

export const Filters = ({ filter, сhangeFilter, сlearFilter }) => {
  const [currentType, setCurrentType] = useState(filter.type);

  const debouncedOnChange = debounce((e) => {
    сhangeFilter('type', e.target.value);
  }, 500);

  const ref = useRef();

  useEffect(() => {
    if (filter.type) {
      setCurrentType(filter.type);
    } else {
      сlearFilter('type');
      ref.current.children[0].children[0].value = '';
    }
  }, [filter]);

  return (
    <Box sx={styles.mainBox}>
      <Box>
        <InputLabel>Status</InputLabel>

        <Select
          onChange={(e) => сhangeFilter('status', e.target.value)}
          sx={styles.select}
          value={filter.status ?? ''}
          color='primary'
        >
          <MenuItem value=''>-</MenuItem>

          {filterList.status.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box>
        <InputLabel>Species</InputLabel>

        <Select
          onChange={(e) => сhangeFilter('species', e.target.value)}
          sx={styles.select}
          value={filter.species ?? ''}
          color='primary'
        >
          <MenuItem value=''>-</MenuItem>

          {filterList.species.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box>
        <InputLabel>Gender</InputLabel>

        <Select
          onChange={(e) => сhangeFilter('gender', e.target.value)}
          sx={styles.select}
          value={filter.gender ?? ''}
          color='primary'
        >
          <MenuItem value=''>-</MenuItem>

          {filterList.gender.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box>
        <InputLabel>Type</InputLabel>

        <TextField
          ref={ref}
          defaultValue={currentType ?? ''}
          onChange={debouncedOnChange}
          sx={styles.select}
          color='primary'
        />
      </Box>

      <Box>
        <Button sx={styles.filtersButton} onClick={сlearFilter}>
          Clear
        </Button>
      </Box>
    </Box>
  );
};
