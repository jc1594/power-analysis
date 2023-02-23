import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Link to="/">
      <HomeIcon></HomeIcon>
    </Link>
  );
};

export default Sidebar;
