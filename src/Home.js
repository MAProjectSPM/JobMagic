import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import HeaderComponent from './Components/Header/HeaderComponent';

const drawerWidth = 240;
export default function PersistentDrawerRight() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderComponent></HeaderComponent>

     </Box>
  );
}
