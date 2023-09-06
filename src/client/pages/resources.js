import React, {useState, useEffect, useRef} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Logo from '../../assets/logo_512.png';

const Resources = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  let imgs = ['https://storage.cloud.google.com/mothership-375920-media/test/SitStandIcon.png']

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
            <Grid sm={12}>
                <Typography>Hoping for an image below</Typography>
            </Grid>
            <Grid sm={12}>
                <Box 
                component="img"
                src={imgs[0]}
                ></Box>
            </Grid>
            <Grid sm={12}>
                <Box
                component="img"
                src={Logo}
                ></Box>
            </Grid>
        </Grid>
    </Box>

  );
}
export default Resources; 