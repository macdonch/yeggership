import React, {useState, useEffect, useRef} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

const Resources = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
            <Grid sm={12}>
                <Typography>Hoping for an image below</Typography>
            </Grid>
            <Grid sm={12}>
                <Box 
                component="img"
                src={require("https://storage.cloud.google.com/mothership-375920-media/test/SitStandIcon.png")}
                ></Box>
            </Grid>
            <Grid sm={12}>
                <Box
                component="img"
                src={require("../../assets/logo_512.png")}
                ></Box>
            </Grid>
        </Grid>
    </Box>

  );
}
export default Resources; 