import { Link } from 'react-router-dom';
import React from 'react';
import '../../App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HomePageLayout = () => {
  return (
    <div className="Homepage">
      <div className="Homepage-box">
        <h2>Home</h2>
        <h3>Relative Power Analysis</h3>
        <Stack spacing={2}>
          <Link className="Homepage-link" to="/lightdark">
            <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
              Binned - Light/Dark
            </Button>
          </Link>
          <Link className="Homepage-link" to="/time">
            <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
              Unbinned
            </Button>
          </Link>
        </Stack>
        <h3>Absolute Power Analysis</h3>
        <Link className="Homepage-link" to="/absolutepower">
          <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
            Run
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePageLayout;
