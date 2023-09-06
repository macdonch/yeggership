import React, {useState, useEffect, useRef} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { GetResources, GetResourceContent } from '../services/getResources'

const Resources = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const sideBar = GetResources();

  let images = {
    sitStand: 'https://storage.googleapis.com/mothership-375920-media/test/SitStandIcon.png'
  }

  const [currentContent, setCurrentContent] = React.useState('');
  const [fontWeight, setFontWeight] = React.useState({});

  const content = {
    terminaldelays: <Typography>term</Typography>,
    piecebypiece: <Typography>screwdriver</Typography>
  }

  const selectContent = (event) => {
    //setCurrentContent(content[event.currentTarget.id]);
    setCurrentContent(GetResourceContent(event.currentTarget.id));
    for (const key of Object.keys(fontWeight)) {
        fontWeight[key] = 'normal';
    }
    fontWeight[event.currentTarget.id] = 'bold'
    setFontWeight(fontWeight)
  }

  const getFontWeight = (key) => {
    return fontWeight[key];
  }
  
  const statsDisabled = false;


  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
            <Grid sm={12} md={3}>
                {sideBar.map(({displayText, key}) => (
                    <Grid key={key} sm={12}>
                        <Button
                            key={key}
                            id={key}
                            edge="end"
                            color="inherit"
                            aria-label="mode"
                            onClick={selectContent}
                            disabled={statsDisabled}
                        >
                            <Typography key={key} name={key} sx={{mx: 1, fontWeight: getFontWeight(key)}}>{displayText}</Typography>
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <Grid sm={12} md={9}>
                {currentContent}
            </Grid>
        </Grid>

        <Grid container rowSpacing={1} alignItems="top">
            <Grid sm={12} md={3}>
                <Typography>Image from bucket</Typography>
            </Grid>
            <Grid sm={12} md={9}>
                <Box 
                component="img"
                src={images.sitStand}
                ></Box>
            </Grid>
        </Grid>

    </Box>

  );
}
export default Resources; 