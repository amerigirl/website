import React from 'react';
import { Box } from '@mui/material';
import NavArrowUp from './NavArrowUp';
import NavArrowDown from './NavArrowDown';

const NavArrowComponent = () => {
  return (
<Box sx={{
    display: 'flex',
    textDecoration: 'bold'
}}>
<NavArrowUp/>
<NavArrowDown/>
</Box>
  )
}

export default NavArrowComponent
