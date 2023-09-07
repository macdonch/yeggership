import React, {useState, useEffect, useRef} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  return (
    <Box>
      <Box sx={{ display: { xs: 'block', sm: 'none'} }}>
        <Typography>This page requires a horizontal resolution of at least 600 pixels to render properly.</Typography>
      </Box>

      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Grid container rowSpacing={1} alignItems="top">
          <Grid sm={8} md={10} sx={{ display: { xs: 'none', sm: 'flex', gap: '1rem' } }}>
            <Typography>Discord: </Typography>
            <Link underline="hover" target="_blank" rel="noopener" href="https://discordapp.com/users/458484150828269578" sx={{ display: { xs: 'none', sm: 'block'} }}>
              leibniz_2013
            </Link>
          </Grid>
          <Grid sm={8} md={10} sx={{ display: { xs: 'none', sm: 'flex', gap: '1rem' } }}>
            <Typography>GitHub: </Typography>
            <Link underline="hover" target="_blank" rel="noopener" href="https://github.com/macdonch" sx={{ display: { xs: 'none', sm: 'block'} }}>
              macdonch
            </Link>
          </Grid>
          <Grid sm={8} md={10} sx={{ display: { xs: 'none', sm: 'flex', gap: '1rem' } }}>
            <Typography>RedBubble: </Typography>
            <Link underline="hover" target="_blank" rel="noopener" href="https://www.redbubble.com/people/leibniz/shop" sx={{ display: { xs: 'none', sm: 'block'} }}>
              leibniz
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>

  );
}
export default Home; 