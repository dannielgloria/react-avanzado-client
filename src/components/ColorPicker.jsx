import { Box } from '@mui/material';

const colors = ['#f44336', '#3f51b5', '#4caf50', '#ff9800', '#9c27b0', '#457b9d','#ffc8dd'];

export default function ColorPicker({ selected, onSelect }) {
  return (
    <Box display="flex" gap={1} mb={2}>
      {colors.map((c) => (
        <Box
          key={c}
          onClick={() => onSelect(c)}
          sx={{
            width: 30,
            height: 30,
            bgcolor: c,
            border: selected === c ? '3px solid black' : '1px solid #ccc',
            cursor: 'pointer',
            borderRadius: '50%'
          }}
        />
      ))}
    </Box>
  );
}
