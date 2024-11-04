import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const TestPage: React.FC = () => {
  const [testNames, setTestNames] = useState(['carlo', 'giulio', 'rossella']);

  function handleClick() {
    fetch('http://localhost:5000/users')
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        console.log(val);
        setTestNames(val);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Typography>Siamo nella sezione di test</Typography>
      <h1 className={'text-green-300 !important'}>ciaone</h1>
      <ul>
        {testNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Update names</button>
    </Box>
  );
};

export default TestPage;
