import { Link } from 'react-router-dom';
import React from 'react';
import '../../App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const HomePageLayout = () => {
  return (
    <div className="Homepage">
      <div className="Homepage-box">
        <h2>Home</h2>
        <h3>Relative Power Analysis</h3>
        <Stack spacing={2}>
          <Link className="Homepage-link" to="/lightdark">
            <Button variant="contained">Light/Dark Binned</Button>
          </Link>
          <Link className="Homepage-link" to="/time">
            <Button variant="contained">Unbinned (will be time binned)</Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
};

export default HomePageLayout;
