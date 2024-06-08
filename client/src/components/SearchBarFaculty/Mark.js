import React, { useState } from 'react';
import { Slider, Box, Typography } from '@mui/material';

function Mark() {
  const [marks, setMarks] = useState({
    category1: 5,
    category2: 5,
    category3: 5,
  });

  const handleSliderChange = (category) => (event, newValue) => {
    setMarks({
      ...marks,
      [category]: newValue,
    });
  };

  return (
    <Box display="flex" justifyContent="space-around" p={2}>
      {['category1', 'category2', 'category3'].map((category, index) => (
        <Box key={index} textAlign="center">
          <Typography variant="h6">{`Category ${index + 1}`}</Typography>
          <Slider
            value={marks[category]}
            min={1}
            max={10}
            step={1}
            marks
            valueLabelDisplay="auto"
            onChange={handleSliderChange(category)}
          />
          <Typography variant="body1">{`Marks: ${marks[category]}`}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Mark;
