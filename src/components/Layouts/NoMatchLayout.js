import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from 'react';

export default function NoMatchLayout() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>No Matching Page Found</h2>
      <Link className="Homepage-link" to="/">
        <Button variant="contained">Take me home</Button>
      </Link>
    </main>
  );
}
